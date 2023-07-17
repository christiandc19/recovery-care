import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MissionPage from './routes/MissionPage'
import AboutPage from './routes/AboutPage'
import InsurancePage from './routes/InsurancePage'
import ContactPage from './routes/ContactPage'

import ALCOHOL from './routes/ALCOHOL';
import OPIOID from './routes/OPIOID';
import OS from './routes/OtherSubstances';

import IndividualPage from './routes/IndividualPage';
import LovedOnes from './routes/LovedOnes';


import Jobs from './routes/JOBS';
import Team from './routes/Team';


ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/alcohol' element={<ALCOHOL />} />
      <Route exact path='/opioid' element={<OPIOID />} />
      <Route exact path='/other-substances' element={<OS />} />

      <Route exact path='/individual' element={<IndividualPage />} />
      <Route exact path='/loved-ones' element={<LovedOnes />} />


      <Route exact path='/jobs' element={<Jobs />} />
      <Route exact path='/mission' element={<MissionPage />} />

      <Route exact path='/about-us' element={<AboutPage />} />
      <Route exact path='/team' element={<Team />} />

      <Route exact path='/insurance' element={<InsurancePage />} />
      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

