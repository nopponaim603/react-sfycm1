import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Content from './components/Content';

import Home from './pages/Home';

import NoPage from './pages/NoPage';

export default function App() {
  return (
    <>
      {' '}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />}>
            <Route index element={<Home />} />
            <Route path="vhv_ep1" element={<vhv_ep1 />} />
            <Route path="vhv_ep2" element={<vhv_ep2 />} />
            <Route path="vhv_ep3" element={<vhv_ep3 />} />
            <Route path="vhv_ep4" element={<vhv_ep4 />} />
            <Route path="vhv_ep5" element={<vhv_ep5 />} />
            <Route path="vhv_ep6" element={<vhv_ep6 />} />
            <Route path="vhv_ep7" element={<vhv_ep7 />} />
            <Route path="mini_blendfood" element={<mini_blendfood />} />
            <Route path="mini_karaoke" element={<mini_karaoke />} />
            <Route path="mini_tongue" element={<mini_tongue />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
