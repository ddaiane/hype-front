import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CadastraPredio from '../pages/CadastraPredio';
//import Detail from '../pages/Detail';
//import Create from '../pages/Create';



export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/cadastra-predio" component={CadastraPredio}/>
        {/* <Route path="/detail/:id" component={Detail}/>
        <Route path="/create" component={Create}/> */}
      <Route path="*" exact component={Home}/>
    </Switch>
    </BrowserRouter>
  )
}