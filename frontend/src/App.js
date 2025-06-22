import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";

// Placeholder pages (you can replace them with real components later)
// const Home = () => <div className="p-4">Welcome to Hungry Henry's!</div>;
// const StoreLocator = () => <div className="p-4">Find a store near you.</div>;
/* const SignIn = () => (
  <div className="p-4">Sign in or register your account.</div>
); */

function App() {
  return (
    <div className="App min-h-screen bg-gray-50">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/store-locator" element={<StoreLocator />} /> */}
        {/*  <Route path="/signin" element={<SignIn />} /> */}
      </Routes>
    </div>
  );
}

export default App;
