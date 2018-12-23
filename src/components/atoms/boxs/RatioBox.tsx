import bind from 'autobind-decorator';
import * as React from 'react';
import styledComponents from 'styled-components';

interface IProps {
  width: number;
  height: number;
  maxHeight?: number;
  children: JSX.Element | JSX.Element[] | string;
}

interface IState {
  clientWidth?: number;
}

export default class RatioBox extends React.Component<IProps, IState> {
  private element: HTMLDivElement;

  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  /**
   * component did mount
   */
  public componentDidMount() {
    this.setState({ clientWidth: this.element.clientWidth });
    window.addEventListener('resize', this.handleResize);
  }

  /**
   * Component will unmount
   */
  public componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }


  public render(): JSX.Element {
    const ratioHeight = (this.state.clientWidth || 0) / this.props.width * this.props.height;
    const maxHeight = this.props.maxHeight;
    const height = maxHeight !== undefined && maxHeight < ratioHeight ? maxHeight : ratioHeight;

    const style: React.CSSProperties = { height };

    return (
      <Container
        style={ style }
        ref={ (el: HTMLDivElement) => { this.element = el; } }>
        <Content>
          { this.props.children }
        </Content>
      </Container>
    );
  }


  /**
   * handle resize
   */
  @bind private handleResize() {
    if (this.element) {
      this.setState({ clientWidth: this.element.clientWidth });
    }
  }
}

const Container = styledComponents.div`
  position: relative;
  width: 100%;
`;

const Content = styledComponents.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
