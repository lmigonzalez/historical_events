import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import moment from 'moment';
import './App.css';


import Today from './pages/Today';
import Tomorrow from './pages/Tomorrow';
import Yesterday from './pages/Yesterday';
import Header from './components/Header';



const today = moment().format('MMM DD YYYY')


function App() {

// console.log(today)

  return (
    <div>
    <Header/>



   <Switch>
     <Route path='/' exact>
        <Today/>
     </Route>

     <Route path='/yesterday'>
        <Yesterday/>
     </Route>

     <Route path='/tomorrow'>
        <Tomorrow/>
     </Route>
   </Switch>
   </div>
  );
}

export default App;
