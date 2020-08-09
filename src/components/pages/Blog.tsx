import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators, Dispatch } from "redux"
import styled from 'styled-components';

import Helmet from 'src/components/atoms/helmets/Helmet';
import Header from 'src/components/molecules/headers/Header';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import Pagination from 'src/components/molecules/pagination/Pagination';
import BlogList from 'src/components/organisms/Blogs/BlogList';
import HeaderImg from 'src/statics/images/blog_header.jpg';

import { IState } from 'src/modules';
import { BlogActions, IBlogFetchRequest, IBlogState } from 'src/modules/blogs';

interface IStateProps {
  blogs: IBlogState;
}

interface IActionProps {
  requestLoad: (request: IBlogFetchRequest) => void;
}

interface IProps extends RouteComponentProps, IStateProps, IActionProps {
}

class BlogPage extends React.Component<IProps> {
  public componentDidMount() {
    const page = getPage(this.props);
    this.props.requestLoad({ page });
  }

  public componentWillReceiveProps(nextProps: IProps) {
    const currentPage = getPage(this.props)
    const nextPage = getPage(nextProps)
    if (currentPage !== nextPage) {
      this.props.requestLoad({ page: nextPage });
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
            list={ this.props.blogs.list && this.props.blogs.list.list || [] }
            isLoading={ this.props.blogs.loadState === 'loading' } />
          {
            this.props.blogs.list && <Pagination
              pageNum={ this.props.blogs.list.pageNum}
              currentPage={ this.props.blogs.list.currentPage} />
          }
        </Content>
      </>
    );
  }
}

const getPage = (props: IProps): number => {
  const param = new URLSearchParams(props.location.search).get("page")
  return Number(param) || 1;
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
