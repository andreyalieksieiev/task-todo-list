import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

export const SideBar = () => {
  return (
    <div className="sideBar" >
      <div className="side">
        <ul>
          <li><NavLink to="/">Главная</NavLink></li>
          <li><NavLink to="/page_1">Запись</NavLink></li>
          <li><NavLink to="/page_2">Выполненые</NavLink></li>
        </ul>
      </div>
    </div>
  )
}
