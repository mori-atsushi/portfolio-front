import * as React from 'react';
import styled from 'styled-components';

import Label from 'src/components/atoms/forms/Label';

interface IProps {
  label?: string;
  type?: string;
  name?: string;
  required?: boolean;
}

export default (props: IProps) => (
  <Label label={ props.label }>
      <Input
      type={ props.type || 'text' }
      name={ props.name }
      required={ props.required } />
  </Label>
);

const Input = styled.input`
  display: block;
  flex: 1 1 12rem;
  padding: 1rem;
  border: 1px solid #888888;
  border-radius: 5px;
  font-size: 1rem;
`;
