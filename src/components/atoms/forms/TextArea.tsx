import * as React from 'react';
import styled from 'styled-components';

import Label from 'src/components/atoms/forms/Label';

interface IProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const TextArea = (props: IProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(props.onChange) {
      props.onChange(e.target.value);
    }
  };

  return (
    <Label label={ props.label }>
      <Input
        value={ props.value }
        onChange={ handleChange }
        rows={ 5 } />
    </Label>
  )
};

const Input = styled.textarea`
  display: block;
  flex: 1 1 10rem;
  padding: 1rem;
  border: 1px solid #888888;
  border-radius: 5px;
  font-size: 1rem;
`;

export default TextArea;
