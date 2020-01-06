import React, { useReducer, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import reducer from '../../store/reducer';

import { Page_1 } from '../SideBar/Page_1';
import { Page_2 } from '../SideBar/Page_2';
import { Header } from '../Header';
import Button from '../components/UI/Button';
import { SideBar } from '../SideBar';
import './index.css';

export const Wrapper = () => {

  const [count, setCount] = useState(false);
 
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')))

  let openWindow = () => {
    setCount(!count)
  }

  return (
    <div className="box">
      <Button clicked={openWindow} name="Open">open</Button>
        {count ? <SideBar setCount={setCount} /> : null}
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/page_1" component={() => <Page_1 todos={state} /> } /> 
        <Route path="/page_2" component={() => <Page_2 todos={state} /> } />
      </Switch>
    </div>
  )
}