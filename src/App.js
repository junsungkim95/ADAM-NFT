import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home2"
import Collections from "./components/Collections";
import Collection from "./components/Collection";
import Item from "./components/Item";
import Create from "./components/Create";
import Contact from "./components/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/collections.html/*" element={<Collections />} />
        <Route path="/collection.html/*" element={<Collection />} />
        <Route path="/item.html/*" element={<Item />} />
        <Route path="/create.html/*" element={<Create />} />
        <Route path="/contact.html/*" element={<Contact />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
