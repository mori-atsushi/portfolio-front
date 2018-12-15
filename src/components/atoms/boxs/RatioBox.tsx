import * as React from 'react';
import styledComponents from 'styled-components';

interface IProps {
  width: number;
  height: number;
  maxHeight?: string | number;
  children: JSX.Element | JSX.Element[] | string;
}

export default (props: IProps) => {
  const containerStyle: React.CSSProperties = {
    maxHeight: props.maxHeight
  };
  const spacerStyle: React.CSSProperties = {
    paddingBottom: `${ (props.height / props.width) * 100 }%`,
  };

  return (
    <Container style={ containerStyle }>
      <Spacer style={ spacerStyle } />
      <Content>
        { props.children }
      </Content>
    </Container>
  );
}

const Container = styledComponents.div`
  position: relative;
  width: 100%;
`;

const Spacer = styledComponents.div``;

const Content = styledComponents.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
