import React from 'react';

import './index.css';

export const Page_1 = ({todos}) => {
  const ddd = todos.map(el => {
    if (!el.completed) return (
      <li >
      <label>
         <span>{el.title}</span>
      </label>
    </li>
    )
  })

  return (
    <ul className="page-1">
      <div>
        {ddd}
      </div>
    </ul>
  )
}
