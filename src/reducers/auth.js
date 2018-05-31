import { LOGIN, LOGOUT } from '../constants/action-types';
import uuidv1 from "uuid";

const storedToken = localStorage.getItem('token') || null;

const auth = (state = storedToken, action) => {
  switch (action.type) {
    case LOGIN:
      // get token from server
      const { payload } = action
      if ( payload.username === 'hedgieadmin' && payload.password === 'pass1234') {
        let token = uuidv1();
        localStorage.setItem('token', token);
        return token;
      } else {
        return null;
      }

    case LOGOUT:
      localStorage.removeItem('token');
      return null;

    default:
      return state;
  }
}

export default auth;
