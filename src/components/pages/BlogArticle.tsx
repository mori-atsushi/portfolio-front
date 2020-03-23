import bind from 'autobind-decorator';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators, Dispatch } from "redux"
import styled from 'styled-components';

import Helmet from 'src/components/atoms/helmets/Helmet';
import Header from 'src/components/molecules/headers/Header';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import BlogDetail from 'src/components/organisms/Blogs/BlogDetail';
import PopularBlogList from 'src/components/organisms/Blogs/PopularBlogList';
import HeaderImg from 'src/statics/images/blog_header.jpg';

import { IState } from 'src/modules';
import { BlogArticleActions, IBlogArticleState, IFetchRequest } from 'src/modules/blogArticle';
import { IPopularBlogsState, PopularBlogsActions } from 'src/modules/popularBlogs';

interface IStateProps {
  blogArticle: IBlogArticleState;
  popularBlogs: IPopularBlogsState;
}

interface IActionProps {
  requestLoad: (request: IFetchRequest) => void;
  requestRead: (request: number) => void;
  requestPopularLoad: () => void;
}

interface IProps extends RouteComponentProps<{id: string}>, IStateProps, IActionProps {
}

class BlogArticlePage extends React.Component<IProps> {
  private readTimeoutId?: number;

  public componentDidMount() {
    const id = Number(this.props.match.params.id);
    this.loadArticle(id);
    this.props.requestPopularLoad();
  }

  public componentWillReceiveProps(nextProps: IProps) {
    if(this.props.match.params.id !== nextProps.match.params.id) {
      const id = Number(nextProps.match.params.id);
      this.loadArticle(id);
    }
  }

  public componentWillUnmount() {
    window.clearTimeout(this.readTimeoutId);
  }

  public render(): JSX.Element {
    const article = this.props.blogArticle.article;
    const pageTitle = article ? `${ article.title } - ` : '';
    const id = Number(this.props.match.params.id);

    return (
      <>
        <Helmet
          pageTitle={ `${ pageTitle }Blog` }
          ogpImage={ article && article.ogpImage }
          description={ article && article.description } />
        <MenuHeader />
        <Header
          title="Blog"
          backgroundImage={HeaderImg} />
        <Content>
          <BlogDetail { ...this.props.blogArticle } />
          <PopularBlogList
            currentId={id}
            popularBlogs={this.props.popularBlogs }
          />
        </Content>
      </>
    );
  }

  /**
   * このブログを読んだことをリクエストする
   */
  @bind private readRequest() {
    const loadState = this.props.blogArticle.loadState;
    const article = this.props.blogArticle.article;
    if(loadState === 'success' && article) {
      this.props.requestRead(article.id)
    }
  }

  /**
   * 記事をロードする
   */
  private loadArticle(id: number) {
    const article = this.props.blogArticle.article;
    if(!article || article.id !== id) {
      this.props.requestLoad({ id });
    }

    // 30秒間ページを開いていたら既読を送信
    this.readTimeoutId = window.setTimeout(this.readRequest, 30 * 1000);
  }
}

const mapStateToProps = (state: IState): IStateProps => {
  return {
    blogArticle: state.blogArticle,
    popularBlogs: state.popularBlogs,
  };
}

const mapDispatchToProps = (dispatch: Dispatch): IActionProps => {
  return bindActionCreators({
    requestLoad: BlogArticleActions.requestLoad.started,
    requestPopularLoad: PopularBlogsActions.requestLoad.started,
    requestRead: BlogArticleActions.requestRead.started,
  }, dispatch);
}

const BlogPageContainer = connect<IStateProps, IActionProps>(
  mapStateToProps,
  mapDispatchToProps
)(BlogArticlePage);

export default BlogPageContainer;

const Content = styled.section`
  margin: 0 auto;
  padding: 2rem 5%;
  max-width: 1000px;
`;
