// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllTrains from './pages/AllTrains';
import SingleTrain from './pages/SingleTrain';

function App() {
  return (
    <BrowserRouter>
      <AllTrains />
      {/* <SingleTrain /> */}
      <Routes>

        <Route path="/trains/:trainId" element={<SingleTrain />} />

        {/* <Route path="*" element={<pageNotFound />} /> */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
