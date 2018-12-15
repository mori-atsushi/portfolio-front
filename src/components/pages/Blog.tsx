import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from "redux"

import Footer from 'src/components/molecules/footers/Footer';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';

import IBlog from 'src/entities/blog';
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
    this.props.requestLoad();
  }

  public render(): JSX.Element {
    return (
      <>
      <MenuHeader />
        { this.props.blogs.list.map((blog: IBlog) => (
          <div>{ blog.title }</div>
        )) }
      <Footer />
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
