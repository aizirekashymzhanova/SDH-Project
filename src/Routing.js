import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./components/Add/Add";
import Edit from "./components/Edit/Edit";
import MainLayout from "./layouts/MainLayout";
import ContactDetails from "./pages/ContactDetails";
import Home from "./pages/Home";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/add" element={<Add />} />
          <Route path="/contact/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routing;
