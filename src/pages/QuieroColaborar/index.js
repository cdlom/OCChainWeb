import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Message, Button, Input, Container, TextArea, Icon } from 'semantic-ui-react';
import Recaptcha from 'react-recaptcha';
import { sendEmail, setFormVal, setVerified, setErrCaptcha, resetForm } from '../../actions/appActions';
import { MenuBar, Footer } from '../../components';



class QuieroColaborar extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  verifyCallback(response) {
    if (response) {
      this.props.onSetVerified();
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    //Si no se validó el captcha
    if (this.props.isVerified) {
      this.props.onSendEmail();
    } else {
      this.props.onSetErrCaptcha();
    }
  }

  renderError() {
    if (this.props.errorCaptcha) {
      return (
        <Message error header='Captcha' content='Please, check Captcha' />
      )
    }
  }

  render() {

    const text = `Contact Form.`
    const { onSetFormVal } = this.props;
    const { name, email, telephone, subject, message } = this.props.form;

    if (!this.props.sent) {
      return (
 
      <div style={{ marginTop: '0rem', marginBottom: '0rem' }}>
      
   
 
            <div className="Backg">

            {this.renderError()}


                  <Container>
      
                        <MenuBar />



                  </Container>

                  <Container>
      
                  <Form success onSubmit={this.handleSubmit}>
      
                    <p className="ppppp">
                         Contact Us</p>

                            <Form.Field required>
                                  <Input maxLength="45" label="Your Name" placeholder='Name' value={name} type='text' onChange={(data) => { onSetFormVal('name', data.target.value) }} required />
                             </Form.Field>
                            <Form.Group widths="equal">
                                 <Form.Field required>
                                       <Input maxLength="45" label="Your Email" placeholder='user@mail.com' value={email} type='email' onChange={(data) => { onSetFormVal('email', data.target.value) }} required />
                                  </Form.Field>
                                  <Form.Field required>
                                       <Input maxLength="45" label="Phone Number" value={telephone} type="text" onChange={(data) => { onSetFormVal('telephone', data.target.value) }} required />
                                  </Form.Field>
                             </Form.Group>
                             <Form.Field required>
                                   <Input maxLength="45" label="Subject" placeholder='Asunto' value={subject} type='text' onChange={(data) => { onSetFormVal('subject', data.target.value) }} required />
                             </Form.Field>
                             <Form.Field control={TextArea} label='Message' placeholder='Your message here...' value={message} onChange={(data) => { onSetFormVal('message', data.target.value) }} required />
                            <Recaptcha
                                  sitekey={process.env.REACT_APP_SITE_KEY}
                                  render="explicit"
                                  verifyCallback={this.verifyCallback}
                                 hl='es-419'
                              />
                               <p><Button type="reset" onClick={this.props.onCancel}>Cancel</Button> <Button type="submit">Send!</Button></p>
                    </Form>      



                  </Container>


                  
              </div>
        </div>        
      );
    } else {
      return (
        <div>
          <div style={{ marginTop: '2rem' }}></div>
          <Container>
            <Message icon>
              <Icon name='mail' />
              <Message.Content>
                <Message.Header>Gracias por contactarnos!</Message.Header>
                En breve nos pondremos en contacto contigo
              </Message.Content>
            </Message>
            <p><Button type="reset" onClick={this.props.onResetForm}>Volver</Button></p>
          </Container>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    sent: state.appReducer.sent,
    errorCaptcha: state.appReducer.errorCaptcha,
    isVerified: state.appReducer.isVerified,
    form: state.appReducer.form
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSendEmail: () => {
      dispatch(sendEmail());
    },
    onSetFormVal: (field, name) => {
      dispatch(setFormVal(field, name));
    },
    onSetVerified: () => {
      dispatch(setVerified());
    },
    onSetErrCaptcha: () => {
      dispatch(setErrCaptcha());
    },
    onResetForm: () => {
      dispatch(resetForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuieroColaborar);