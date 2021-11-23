import Link from 'next/link'
import { useCallback } from 'react';
import styled from 'styled-components';

interface IProps {
  children: string;
  to?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<IProps> = ({
  children,
  to,
  onClick
}) => {
  const _onClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    onClick && onClick(e)
  }, [onClick])

  if (to) {
    return (
      <Link
        href={ to }
        passHref>
        <LinkButton>
          { children }
        </LinkButton>
      </Link>
    );
  }
  return (
    <DivButton onClick={ _onClick }>
      { children }
    </DivButton>
  );
}

const DivButton = styled.button`
  border: none;
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

const LinkButton = DivButton.withComponent('a');

export default Button
