import React from "react";
import Navbar from './components/Navbar';
import AuthProvider from "./components/AuthProvider";
import Routes from "./components/Routes";

function App() {

  return (
    <AuthProvider>
        <Navbar />
        <Routes />
    </AuthProvider>
  );
}

export default App;
