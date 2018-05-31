import React from 'react';
import { Form, Text } from 'react-form';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { toggleTodo, removeTodo, saveTodo } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  onToggleTodo: (id) => dispatch(toggleTodo(id)),
  onRemoveTodo: (id) => dispatch(removeTodo(id)),
  onSaveTodo: (id) => dispatch(saveTodo(id))
})

const Item = styled.li`
  position: relative;
  overflow-wrap: break-word;
  &:before {
      content: ""
  }
`

const SmallButton = styled.button`
  cursor: pointer;
  display: inline-block;
  border: none;
  padding: 0.5em;
  font-size: 0.7em;
`

const Edit = styled(Text)`
  border: none !important;
`

const Line = styled.hr`
  width: 100%;
  position: absolute;
  top: 0;
  height: 1px;
  margin-top: 1.3em;
  border: none;
  background: #000;
  opacity: 0.9;
`

const Todo = ({ id, text, completed, onToggleTodo, onRemoveTodo, onSaveTodo }) => {
    return (
        <Item
            key={id}
            style={completed ? {background: 'line-through'} : {}}
        >
          <Form
            onSubmit={
              submittedValues => {
                onSaveTodo(submittedValues)
              }
            }
            defaultValues={{
              id: id,
              todotext: text
            }}
          >
            {formApi => (
              <form onSubmit={formApi.submitForm} className="row">
                <Text field="id" hidden />
                <Edit field="todotext" type="text" />
                <div className="u-pull-right">
                  <SmallButton type="submit">save</SmallButton>
                  <SmallButton onClick={e => { e.preventDefault(); onToggleTodo(id) }}>{completed ? 'uncheck' : 'check'}</SmallButton>
                  <SmallButton onClick={e => { e.preventDefault(); onRemoveTodo(id) }}>remove</SmallButton>
                </div>
                {completed && <Line />}
              </form>
            )}
          </Form>

        </Item>
    )
}

export default connect(null, mapDispatchToProps)(Todo);
