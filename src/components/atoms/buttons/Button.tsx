import bind from 'autobind-decorator';
import * as history from 'history';
import * as React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

interface IProps {
  children: string;
  to?: history.LocationDescriptor;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export default class Button extends React.Component<IProps> {
  public render(): JSX.Element {
    if(this.props.to) {
      return (
        <LinkButton
          onClick={ this.handleButtonClick }
          to={ this.props.to } >
          { this.props.children }
        </LinkButton>
      );
    }
    return (
      <DivButton onClick={ this.handleButtonClick }>
        { this.props.children }
      </DivButton>
    );
  }

  @bind
  private handleButtonClick(e: React.MouseEvent<HTMLElement>) {
    if(this.props.onClick) {
      this.props.onClick(e);
    }
  }
}

const DivButton = styled.div`
  padding: 0.8rem 1.4rem;
  display: inline-block;
  background-color: #333333;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #fbb03b;
    z-index: -1;
    transition: left 0.3s ease 0s;
    position: absolute;
    top: 0;
    left: -100%;
  }

  &:hover::before {
    left: 0;
  }
`;

const LinkButton = DivButton.withComponent(Link);
