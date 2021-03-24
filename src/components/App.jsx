import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

function App(){
  return(
    <BrowserRouter>{/* Browser router solo debe tener un hijo entonces metemos las rutas dentro de un Switch*/}
      <Layout>
        <Switch>
          
          <Route exact path="/" component={Home}/>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;