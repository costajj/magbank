import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import AccountModal from './components/AccountsModal';
import "./App.scss";
import './views/Home';

import posts from "./data/posts";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <Navbar handleCreateAcc={() => setShowModal(true)} />
      <Routes>
        <Route path="/">
          <Home handleClick={() => setShowModal(true)} />
        </Route>
      </Routes>
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </Router>
  );
};

export default App;