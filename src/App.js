import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import SignIn from "./SignInSide";
import SignUp from "./SignUpSide";
import User from "./User";
import Watchlist from "./Watchlist";
import Movie from "./Movie";
import SearchResults from "./SearchResults";
import UserUpdateEmail from "./components/UserEmailUpdate";
import UserUpdatePassword from "./components/UserPasswordUpdate";
import UserDeleteAccount from "./components/UserDeleteAccount";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<User />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/update-Email" element={<UserUpdateEmail />} />
        <Route path="/update-Password" element={<UserUpdatePassword />} />
        <Route path="/delete-account" element={<UserDeleteAccount />} />
      </Routes>
    </>
  );
}

export default App;
