import logo from "./logo.svg";
import "./App.css";

import CompShowBlogs from "./blog/ShowBlogs";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CompCreateBlog from "./blog/CreateBlog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Link to={"/"}>
          <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<CompShowBlogs />} />
          <Route path="/create" element={<CompCreateBlog />}></Route>
          <Route path="/edit/:id" element={<CompCreateBlog/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
