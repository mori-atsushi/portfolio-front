import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators, Dispatch } from "redux"
import styled from 'styled-components';

import Helmet from 'src/components/atoms/helmets/Helmet';
import Header from 'src/components/molecules/headers/Header';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import BlogDetail from 'src/components/organisms/Blogs/BlogDetail';
import HeaderImg from 'src/statics/images/blog_header.jpg';

import { IState } from 'src/modules';
import { BlogArticleActions, IBlogArticleState, IFetchRequest } from 'src/modules/blogArticle';


interface IStateProps {
  blogArticle: IBlogArticleState;
}

interface IActionProps {
  requestLoad: (request: IFetchRequest) => void;
}

interface IProps extends RouteComponentProps<{id: string}>, IStateProps, IActionProps {
}

class BlogArticlePage extends React.Component<IProps> {
  public componentDidMount() {
    const id = Number(this.props.match.params.id);
    const article = this.props.blogArticle.article;
    if(!article || article.id !== id) {
      this.props.requestLoad({ id });
    }
  }

  public render(): JSX.Element {
    const article = this.props.blogArticle.article;
    const pageTitle = article ? `${ article.title } - ` : '';

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
        </Content>
      </>
    );
  }
}

const mapStateToProps = (state: IState): IStateProps => {
  return {
    blogArticle: state.blogArticle
  };
}

const mapDispatchToProps = (dispatch: Dispatch): IActionProps => {
  return bindActionCreators({
    requestLoad: BlogArticleActions.requestLoad.started,
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
