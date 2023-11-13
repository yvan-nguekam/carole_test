import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Books from './Books';
import CreateBooks from './CreateBooks';
import UpdateBook from './UpdateBook';


function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Books/>} />
            <Route path="/create" element={<CreateBooks/>} />
            <Route path="/update/:id" element={<UpdateBook/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
