import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import AddOrder from "./Components/AddOrder";
import PageNotFound from "./Components/PageNotFound";
import UpdateOrder from "./Components/UpdateOrder";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/add" element={<AddOrder/>} />
          <Route path="/edit/:id" element={<UpdateOrder/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// {
//   "List": "/task-list/",
//   "Detail View": "/task-detail/<str:pk>/",
//   "Create": "/task-create/",
//   "Update": "/task-update/<str:pk>/",
//   "Delete": "/task-delete/<str:pk>/"
// }