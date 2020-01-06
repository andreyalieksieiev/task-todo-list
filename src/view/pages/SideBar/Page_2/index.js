import React from 'react';

import './index.css';

export const Page_2 = ({ todos }) => {
  const qwer = todos.map(el => {
    if (el.completed) return (
      <li key={el.id}>
      <label>
         <span>{el.title}</span>
      </label>
    </li>
    )
  })
  return (
    <div className="page-2">
      <div>
        {qwer}
      </div>
    </div>
  )
}
