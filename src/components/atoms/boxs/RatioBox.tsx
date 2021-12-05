import styledComponents from 'styled-components';

interface IProps {
  width: number;
  height: number;
  maxHeight?: number;
  children: React.ReactNode;
}

const RatioBox: React.FC<IProps> = ({
  width,
  height,
  maxHeight,
  children,
}) => (
  <Container maxHeight={maxHeight} ratio={ (height / width) * 100}>
    <Content>
      { children }
    </Content>
  </Container>
)

const Container = styledComponents.div<{
  maxHeight?: number,
  ratio: number,
}>`
  position: relative;
  width: 100%;
  max-height: ${({ maxHeight }) => maxHeight ? `${maxHeight}px` : 'none' };
  overflow: hidden;
  &:before {
    content: "";
    display: block;
    padding-top: ${({ ratio }) => ratio }%;
  };
`;

const Content = styledComponents.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export default RatioBox;
