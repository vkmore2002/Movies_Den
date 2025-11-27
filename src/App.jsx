import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import DashBoard from "./Pages/DashBoard";
import Profile from "./Pages/Profile";
import User from "./Pages/User";
import PageNotFound from "./Pages/PageNotFound";
import Settings from "./Pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/movies" element={<Movies />} />

        {/* Nested Routes */}
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
