import React from 'react';
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyInfo from './MyInfo';

function App() {
  return (

    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Switch>

          <Route path='/myInfo'>
            {/* NavBar */}

            {/* My Info */}
            <MyInfo></MyInfo>
          </Route>
          <Route path=''>
            {/* NavBar */}
            {/* <NavBar></NavBar> */}

            {/* Banner */}
            <Banner />

            {/* Rows */}
            <Row title='NETFLIX ORGINALS' fetchUrl={requests.fetchNetflixOginals} isLargeRow="true" />
            <Row fetchUrl={requests.fetchTrending} title='Trending Now' />
            <Row fetchUrl={requests.fetchTopRated} title='Top Rated' />
            <Row fetchUrl={requests.fetchActionMovies} title='Action Movies' />
            <Row fetchUrl={requests.fetchComedyMovies} title='Comedy Movies' />
            <Row fetchUrl={requests.fetchHorrorMovies} title='Horror Movies' />
            <Row fetchUrl={requests.fetchRomanceMovies} title='Romancic Movies' />
            <Row fetchUrl={requests.fetchDocumentaries} title='Documentaries' />
          </Route>

        </Switch>
      </div>

    </Router>
  );
}

export default App;
