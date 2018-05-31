import React from 'react';
import { Form, Text } from 'react-form';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { logout } from '../actions';

const mapDispatchToProps = (dispatch) => ({ onLogout: () => dispatch(logout()) })

const Logout = ({ onLogout, history }) => (
  <button onClick={onLogout}>Logout</button>
)

export default connect(null, mapDispatchToProps)(Logout);
