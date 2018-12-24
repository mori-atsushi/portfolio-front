import bind from 'autobind-decorator';
import * as React from 'react';
import styled from 'styled-components';

import Button from 'src/components/atoms/buttons/Button';
import TextArea from 'src/components/atoms/forms/TextArea';
import TextInput from 'src/components/atoms/forms/TextInput';

import { IFetchRequest } from 'src/modules/contact';


interface IProps {
  onSend: (value: IFetchRequest) => void;
}

export default class ContactFrom extends React.Component<IProps, IFetchRequest> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      message: '',
      name: '',
    };
  }

  public render(): JSX.Element {
    return (
      <Form>
        <Row>
          <TextInput
            label="名前"
            type="text"
            name="name"
            value={ this.state.name }
            onChange={ this.handleNameChange }
            required={ true } />
          <TextInput
            label="メールアドレス"
            type="email"
            name="email"
            value={ this.state.email }
            onChange={ this.handleEmailChange }
            required={ true } />
        </Row>
        <Wide>
          <TextArea
            value={ this.state.message }
            onChange={ this.handleMessageChange }
            label="内容" />
        </Wide>
        <Submit>
          <Button onClick={ this.handleButtonClick }>送信</Button>
        </Submit>
      </Form>
    );
  }

  @bind
  private handleNameChange(value: string) {
    this.setState({ name: value });
  }

  @bind
  private handleEmailChange(value: string) {
    this.setState({ email: value });
  }

  @bind
  private handleMessageChange(value: string) {
    this.setState({ message: value });
  }

  @bind
  private handleButtonClick() {
    this.props.onSend(this.state);
  }
}

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


