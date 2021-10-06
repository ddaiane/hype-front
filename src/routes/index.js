import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CadastraPredio from '../pages/CadastraPredio';
import CadastraApartamento from '../pages/CadastraApartamento';
import ListaApartamentos from '../pages/ListaApartamentos';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/cadastra-predio" component={CadastraPredio}/>
      <Route path="/cadastra-apartamento/:sigla" component={CadastraApartamento} />
      <Route path="/apartamentos-predio/:sigla" component={ListaApartamentos} />

      <Route path="*" exact component={Home}/>
    </Switch>
    </BrowserRouter>
  )
}