import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Page1, Page2} from "@/pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Page1/>} />
          <Route path={'/page1'} element={<Page1/>} />
          <Route path={'/page2'} element={<Page2/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
