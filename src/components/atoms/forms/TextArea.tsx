import * as React from 'react';
import styled from 'styled-components';

import Label from 'src/components/atoms/forms/Label';

interface IProps {
  label?: string;
}

export default (props: IProps) => (
  <Label label={ props.label }>
    <Input rows={ 5 } />
  </Label>
);

const Input = styled.textarea`
  display: block;
  flex: 1 1 10rem;
  padding: 1rem;
  border: 1px solid #888888;
  border-radius: 5px;
  font-size: 1rem;
`;
