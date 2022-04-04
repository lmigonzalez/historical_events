import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import './App.css';


import Today from './pages/Today';
import Tomorrow from './pages/Tomorrow';
import Yesterday from './pages/Yesterday';
import Search from './pages/Search';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';




function App() {

  const eventsDate = {
    todayDay: moment().format('DD'),
		todayMonth: moment().format('MM'),
    yesterdayDay: moment().subtract(1, 'd').format('DD'),
		yesterdayMonth: moment().format('MM'),
    tomorrowDay: moment().add(1, 'd').format('DD'),
		tomorrowMonth: moment().format('MM'),
  }
  
  const [todayEventData, setTodayEventData] = useState([])
  const [tomorrowEventData, setTomorrowEventData] = useState([])
  const [yesterdayEventData, setYesterdayEventData] = useState([])
  const [newSearchData, setNewSearchData] = useState([])

  const [newDate, setNewDate] = useState('')
  

  const searchNewDate = () =>{
      setNewSearchData([])
      const dateSplitFormat = newDate.split('-')
      const getDay = parseInt(dateSplitFormat[2])
      const getMonth = parseInt(dateSplitFormat[1])
      axios.get(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${getMonth}/${getDay}`)
        .then(res=>{
          setNewSearchData(res.data.events)
            // console.log(res)
        })
        .catch(err=>{
          console.log(err)
        })
        .finally(fn=>{
      
        })

  }

  useEffect(()=>{
    searchNewDate()
  }, [newDate])


  const todayData = () =>{
    setNewDate('')
    if(todayEventData.length <= 0){
      axios.get(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${eventsDate.todayMonth}/${eventsDate.todayDay}`)
      .then(res=>{
         
          setTodayEventData(res.data.events)
      })
      .catch(err=>{
        console.log(err)
      })
      .finally(fn=>{
      
        
      })
    }
    
  }

  const tomorrowData = () =>{
    setNewDate('')
    if(tomorrowEventData.length <= 0){
      axios.get(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${eventsDate.tomorrowMonth}/${eventsDate.tomorrowDay}`)
      .then(res=>{
       
          setTomorrowEventData(res.data.events)
      })
      .catch(err=>{
        console.log(err)
      })
      .finally(fn=>{
    
      })
    }

  }


  const yesterdayData = () =>{
    setNewDate('')
    if(yesterdayEventData.length <= 0){
      axios.get(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${eventsDate.yesterdayMonth}/${eventsDate.yesterdayDay}`)
      .then(res=>{
      
          setYesterdayEventData(res.data.events)
      })
      .catch(err=>{
        console.log(err)
      })
     
    }

  }




  return (
    <div className='main-div'>
    <Header/>
    <SubHeader setNewDate = {setNewDate} newDate = {newDate}/>
    
    <section className='content'>
   <Switch>
     <Route path='/' exact>
        <Redirect to='/today'/>
     </Route>
     <Route path='/today' exact>
        <Today data = {todayEventData} todayData = {todayData} />
     </Route>

     <Route path='/yesterday' exact>
        <Yesterday data= {yesterdayEventData} yesterdayData = {yesterdayData}/>
     </Route>

     <Route path='/tomorrow' exact>
        <Tomorrow data = {tomorrowEventData} tomorrowData = {tomorrowData}/>
     </Route>
     <Route path='/search'>
        <Search data ={newSearchData} searchNewDate = {searchNewDate} newDate = {newDate}/>
     </Route>
   </Switch>
   </section>

   <Footer/>
   </div>
  );
}

export default App;
