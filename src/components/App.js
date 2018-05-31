import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { AuthRoute } from 'react-router-auth';
import { UnauthRoute } from 'react-router-auth';

import Login from './Login';
import Logout from './Logout';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

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

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`

const Home = () => (
  <Section className="section">
    <Container className="container">
      <Controls>
        <h3>TodoApp</h3>
        <Logout />
      </Controls>
      <AddTodo />
      <TodoList />
    </Container>
  </Section>
)

const mapStateToProps = (state) => ({ auth: state.auth })

class App extends Component {
  render() {
    let { auth } = this.props
    let authenticated = auth ? true : false
    return (
      <BrowserRouter>
        <Switch>
          <AuthRoute exact path="/" component={Home} redirectTo="/login" authenticated={authenticated} />
          <UnauthRoute path="/login" component={Login} redirectTo="/" authenticated={authenticated} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, null)(App);
