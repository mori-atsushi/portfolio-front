import * as React from 'react';
import styled from 'styled-components';

import Button from 'src/components/atoms/buttons/Button';
import TextArea from 'src/components/atoms/forms/TextArea';
import TextInput from 'src/components/atoms/forms/TextInput';


export default () => (
  <Form>
    <Row>
      <TextInput
        label="名前"
        type="text"
        name="name"
        required={ true } />
      <TextInput
        label="メールアドレス"
        type="email"
        name="email"
        required={ true } />
    </Row>
    <Wide>
      <TextArea
        label="内容" />
    </Wide>
    <Submit>
      <Button>送信</Button>
    </Submit>
  </Form>
);

const Form = styled.form`
  margin-top: 3rem;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem 1rem;
`;

const Wide = styled.div`
  margin: 2rem 0;
`;

const Submit = styled(Wide)`
  display: flex;
  justify-content: center;
`;


