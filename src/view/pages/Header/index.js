import React, { useState, useEffect, useReducer } from 'react';
import { Context } from '../../context';
import reducer from '../../store/reducer';

import './index.css';

import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import Post from '../Post';

export const Header = () => {
 
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')))

  const [todoBody, setTodoBody] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  const addTodo = () => {
    dispatch({
      type: 'add',
      payload: todoBody
    })
    setTodoBody('')
   ;
  }

  return (
    <Context.Provider value={{
      dispatch
    }}>
      <div className="wrap" >
        <div className="wrapper">
          <div className="wrapper-box">
            <Input 
              type="text"
              value={todoBody} 
              changed={event => setTodoBody(event.target.value)} />
              <Button name="Add" clicked={addTodo} />
          </div>
            <ul>
              {state.map(item => <Post key={item.id} {...item} />)}
            </ul>
        </div>
      </div>
    </Context.Provider>
  )
}
