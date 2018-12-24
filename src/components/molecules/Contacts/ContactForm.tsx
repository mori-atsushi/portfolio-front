import bind from 'autobind-decorator';
import * as React from 'react';
import styled from 'styled-components';

import Button from 'src/components/atoms/buttons/Button';
import TextArea from 'src/components/atoms/forms/TextArea';
import TextInput from 'src/components/atoms/forms/TextInput';

import { IContactRequest } from 'src/api/request';
import { IContactState } from 'src/modules/contact';

interface IProps {
  contactState: IContactState;
  onSend: (value: IContactRequest) => void;
  onChange: (value: IContactRequest) => void;
}

export default class ContactFrom extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const message = (() => {
      switch(this.props.contactState.loadState) {
        case 'success': return '送信しました。';
        case 'error': return '予期せぬエラーが発生しました。しばらくしてからもう一度お試しください。';
        default: return undefined;
      }
    })();

    return (
      <Form>
        <Row>
          <TextInput
            label="名前"
            type="text"
            name="name"
            value={ this.props.contactState.name }
            onChange={ this.handleNameChange }
            required={ true } />
          <TextInput
            label="メールアドレス"
            type="email"
            name="email"
            value={ this.props.contactState.email }
            onChange={ this.handleEmailChange }
            required={ true } />
        </Row>
        <Wide>
          <TextArea
            value={ this.props.contactState.message }
            onChange={ this.handleMessageChange }
            label="内容" />
        </Wide>
        <Submit>
          <Button onClick={ this.handleButtonClick }>送信</Button>
        </Submit>
        <Message>{ message }</Message>
      </Form>
    );
  }

  @bind
  private handleNameChange(value: string) {
    this.props.onChange({
      ...this.props.contactState,
      name: value,
    })
  }

  @bind
  private handleEmailChange(value: string) {
    this.props.onChange({
      ...this.props.contactState,
      email: value,
    })
  }

  @bind
  private handleMessageChange(value: string) {
    this.props.onChange({
      ...this.props.contactState,
      message: value,
    })
  }

  @bind
  private handleButtonClick() {
    this.props.onSend(this.props.contactState);
  }
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

