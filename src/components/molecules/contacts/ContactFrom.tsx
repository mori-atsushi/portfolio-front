import { useCallback } from 'react';
import Button from 'src/components/atoms/buttons/Button';
import TextArea from 'src/components/atoms/forms/TextArea';
import TextInput from 'src/components/atoms/forms/TextInput';
import { useContact } from 'src/hooks/useContact';
import styled from 'styled-components';

const ContactFrom: React.FC = () => {
  const {
    request,
    state,
    errorMessage,
    onChange,
    onSubmit
  } = useContact()
  const handleNameChange = useCallback((name: string) => {
    onChange({
      ...request,
      name,
    })
  }, [state, onChange])
  const handleEmailChange = useCallback((email: string) => {
    onChange({
      ...request,
      email,
    })
  }, [state, onChange])
  const handleMessageChange = useCallback((message: string) => {
    onChange({
      ...request,
      message,
    })
  }, [state, onChange])
  return (
    <Form>
      <Row>
        <TextInput
          label='名前'
          type='text'
          name='name'
          value={ request.name }
          onChange={ handleNameChange }
          required={ true } />
        <TextInput
          label='メールアドレス'
          type='email'
          name='email'
          value={ request.email }
          onChange={ handleEmailChange }
          required={ true } />
      </Row>
      <Wide>
        <TextArea
          value={ request.message }
          onChange={ handleMessageChange }
          label='内容' />
      </Wide>
      <Submit>
        <Button onClick={ onSubmit }>送信</Button>
      </Submit>
      <Message>{ errorMessage }</Message>
    </Form>
  );
}

const Form = styled.div`
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

const Message = styled.div`
  text-align: center;
`;

export default ContactFrom;
