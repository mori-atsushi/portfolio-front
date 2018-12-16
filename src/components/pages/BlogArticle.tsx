import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators, Dispatch } from "redux"
import styled from 'styled-components';

import BlogHeader from 'src/components/molecules/headers/BlogHeader';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import BlogDetail from 'src/components/organisms/Blogs/BlogDetail';

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
    return (
      <>
        <MenuHeader />
        <BlogHeader />
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
