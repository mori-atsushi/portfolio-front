import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from "redux"
import styled from 'styled-components';

import Helmet from 'src/components/atoms/helmets/Helmet';
import Header from 'src/components/molecules/headers/Header';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import BlogList from 'src/components/organisms/Blogs/BlogList';
import HeaderImg from 'src/statics/images/blog_header.jpg';

import { IState } from 'src/modules';
import { BlogActions, IBlogState } from 'src/modules/blogs';

interface IStateProps {
  blogs: IBlogState;
}

interface IActionProps {
  requestLoad: () => void;
}

interface IProps extends IStateProps, IActionProps {
}

class BlogPage extends React.Component<IProps> {
  public componentDidMount() {
    if(this.props.blogs.loadState === 'init') {
      this.props.requestLoad();
    }
  }

  public render(): JSX.Element {
    return (
      <>
        <Helmet
          pageTitle='Blog' />
        <MenuHeader />
        <Header
          title="Blog"
          backgroundImage={HeaderImg} />
        <Content>
          <BlogList
            list={ this.props.blogs.list }
            isLoading={ this.props.blogs.loadState === 'loading' } />
        </Content>
      </>
    );
  }
}

const mapStateToProps = (state: IState): IStateProps => {
  return {
    blogs: state.blogs
  };
}

const mapDispatchToProps = (dispatch: Dispatch): IActionProps => {
  return bindActionCreators({
    requestLoad: BlogActions.requestLoad.started,
  }, dispatch);
}

const BlogPageContainer = connect<IStateProps, IActionProps>(
  mapStateToProps,
  mapDispatchToProps
)(BlogPage);

export default BlogPageContainer;

const Content = styled.section`
  margin: 0 auto;
  padding: 2rem 5%;
  max-width: 1000px;
`;
