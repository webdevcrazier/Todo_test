import React from 'react';
import { Form, Text } from 'react-form';

import { connect } from 'react-redux';
import uuidv1 from "uuid";

import { addTodo } from '../actions';

const mapDispatchToProps = (dispatch) => ({ onSubmit: (todo) => dispatch(addTodo(todo)) })

const validate = value => ({
  error: !value || value.length > 140 ? "Must be smaller then 140" : null,
})

const AddTodo = ({ onSubmit }) => (
  <Form
    onSubmit={
      submittedValues => {
        onSubmit({
          id: uuidv1(),
          text: submittedValues.todotext,
          completed: false,
        })
      }
    }
  >
    {formApi => (
      <form onSubmit={formApi.submitForm} className="row">
        <div className="seven columns">
          <Text field="todotext" type="text" className="u-full-width" validate={validate} />
          {formApi.errors && <p>{formApi.errors.todotext}</p> }
        </div>
        <div className="five columns">
          <button type="submit" className="button-primary u-full-width">Add todo</button>
        </div>
      </form>
    )}
  </Form>
)


export default connect(null, mapDispatchToProps)(AddTodo);
