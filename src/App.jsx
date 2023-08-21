import React from 'react';

import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import axios from 'axios';



const App = () => {




  return (
    <div style={{ width: '100%', height: '', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
  Blog
      <div style={{ width: '100%', height: '80vh' }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;