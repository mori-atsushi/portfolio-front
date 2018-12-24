import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

import Helmet from 'src/components/atoms/helmets/Helmet';
import ContactForm from 'src/components/molecules/Contacts/ContactForm';
import Header from 'src/components/molecules/headers/Header';
import MenuHeader from 'src/components/molecules/headers/MenuHeader';
import HeaderImg from 'src/statics/images/contact_header.jpg';

import { IState } from 'src/modules';
import { ContactActions, IContactState, IFetchRequest } from 'src/modules/contact';

interface IStateProps {
  contactState: IContactState;
}

interface IActionProps {
  requestSend: (request: IFetchRequest) => void;
}

interface IProps extends IStateProps, IActionProps {
}

const ContactPage = (props: IProps) => (
  <>
    <Helmet
      pageTitle='Contact' />
    <MenuHeader />
    <Header
      title="Contact"
      backgroundImage={HeaderImg} />
    <Content>
      <Message>このサイト内の内容に関するお問い合わせ、お仕事の依頼等、お気軽にお問い合わせください。</Message>
      <ContactForm onSend={ props.requestSend }/>
    </Content>
  </>
);

const mapStateToProps = (state: IState): IStateProps => {
  return {
    contactState: state.contact
  };
}

const mapDispatchToProps = (dispatch: Dispatch): IActionProps => {
  return bindActionCreators({
    requestSend: ContactActions.requestSend.started,
  }, dispatch);
}

const ContactPageContainer = connect<IStateProps, IActionProps>(
  mapStateToProps,
  mapDispatchToProps
)(ContactPage);

export default ContactPageContainer;

const Content = styled.section`
  margin: 0 auto;
  padding: 2rem 5%;
  max-width: 1000px;
`;

const Message = styled.div``;
