import * as React from 'react';
import styledComponents from 'styled-components';

interface IProps {
  width: number;
  height: number;
  children: JSX.Element | JSX.Element[] | string;
}

export default (props: IProps) => {
  const style: React.CSSProperties = {
    paddingBottom: `${ (props.height / props.width) * 100 }%`,
  };

  return (
    <Container style={ style }>
      <Spacer>
        { props.children }
      </Spacer>
    </Container>
  );
}

const Container = styledComponents.div`
  position: relative;
  width: 100%;
`;

const Spacer = styledComponents.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
