import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Content from './components/Content';

import Home from './pages/Home';
import NoPage from './pages/NoPage';

import Vhv_ep1 from './onepiece/vhv_ep1';
import Vhv_ep2 from './onepiece/vhv_ep2';
import Vhv_ep3 from './onepiece/vhv_ep3';
import Vhv_ep4 from './onepiece/vhv_ep4';
import Vhv_ep5 from './onepiece/vhv_ep5';
import Vhv_ep6 from './onepiece/vhv_ep6';
import Vhv_ep7 from './onepiece/vhv_ep7';

import Mini_blendfood from './onepiece/mini_blendfood';
import Mini_karaoke from './onepiece/mini_karaoke';
import Mini_tongue from './onepiece/mini_tongue';

export default function App() {
  return (
    <>
      {' '}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />}>
            <Route index element={<Home />} />
            <Route path="vhv_ep1" element={<Vhv_ep1 />} />
            <Route path="vhv_ep2" element={<Vhv_ep2 />} />
            <Route path="vhv_ep3" element={<Vhv_ep3 />} />
            <Route path="vhv_ep4" element={<Vhv_ep4 />} />
            <Route path="vhv_ep5" element={<Vhv_ep5 />} />
            <Route path="vhv_ep6" element={<Vhv_ep6 />} />
            <Route path="vhv_ep7" element={<Vhv_ep7 />} />
            <Route path="mini_blendfood" element={<Mini_blendfood />} />
            <Route path="mini_karaoke" element={<Mini_karaoke />} />
            <Route path="mini_tongue" element={<Mini_tongue />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
