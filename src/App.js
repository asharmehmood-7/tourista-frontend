import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from './App.module.css';
import { useState } from 'react';
import { Searchbox } from './components/Searchbox';
import { HotelsList } from './components/HotelsList';
import { HotelDetail } from './components/HotelDetail';
import { BookingForm } from './components/BookingForm';

function App() {


  const [hotelsData, setHotelsData] = useState([]);


  return (
    // <div className={styles.appBody} >toruista app</div>
    // <>


    //   <Searchbox hotelsData={hotelsData} setHotelsData={setHotelsData} />
    //   <br></br>
    //   <br></br>
    //   <HotelsList hotelsData={hotelsData} />

    // </>
    <>
    
    
      <Router>
        <Searchbox hotelsData={hotelsData} setHotelsData={setHotelsData} />
      <Routes>

        <Route element={
          <>
            
            <HotelsList hotelsData={hotelsData} />
          </>} path="/" />

          {/* <Route element={} path="/detail/:hotelId" /> */}
          <Route element={<HotelDetail/>} path="/hotel/:id"  />

          <Route element={<BookingForm/>} path="/booking"/>

      </Routes>

    </Router>

    </>
    
  );
}

export default App;
