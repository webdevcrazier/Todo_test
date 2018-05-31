import React from 'react';
import { Form, Text } from 'react-form';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { login } from '../actions';

const mapDispatchToProps = (dispatch) => ({ onSubmit: (payload) => dispatch(login(payload)) })

const Login = ({ onSubmit, history }) => (
  <Section>
    <Container>
      <Form
        onSubmit={
          submittedValues => {
            onSubmit(submittedValues)
          }
        }
      >
        {formApi => (
          <form onSubmit={formApi.submitForm} className="row">
            <h3>Login, please</h3>
            <Text field="username" type="text" className="u-full-width" placeholder="Username" />
            <Text field="password" type="text" className="u-full-width" placeholder="Password" />
            <button type="submit" className="button-primary u-full-width">Login</button>
          </form>
        )}
      </Form>
    </Container>
  </Section>
)

const Section = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  max-width: 380px;
`


export default connect(null, mapDispatchToProps)(Login);
