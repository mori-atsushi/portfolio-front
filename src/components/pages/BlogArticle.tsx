import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import BlogHeader from 'src/components/molecules/headers/BlogHeader';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';

interface IProps extends RouteComponentProps<{id: string}> {
}

export default class BlogArticlePage extends React.Component<IProps> {
  public render(): JSX.Element {
    return (
      <>
        <MenuHeader />
        <BlogHeader />
        <>{ this.props.match.params.id }</>
      </>
    );
  }
}
