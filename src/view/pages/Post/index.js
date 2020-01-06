import React, { useContext } from 'react';
import { Context } from '../../context';

import './index.css';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

const Post = ({ title, id, completed }) => {
  const { dispatch } = useContext(Context)

  const cls =['todo']

  if (completed) {
    cls.push('completed')
  }

  return (
   <li className={cls.join(' ')}>
     <label>
        <Input 
          type="checkbox" 
          checked={completed}
          changed={() => dispatch({
            type: 'changed',
            payload: id
          })}
        />
        <span>{title}</span>
        <Button name="delet" clicked={() => dispatch({
          type: 'deleted',
          payload: id
        })} />
     </label>
   </li>
  )
} 

export default Post;