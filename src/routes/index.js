import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
//import Detail from '../pages/Detail';
//import Create from '../pages/Create';



export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
        {/* <Route path="/detail/:id" component={Detail}/>
        <Route path="/create" component={Create}/> */}
    </Switch>
    </BrowserRouter>
  )
}