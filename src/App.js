import './App.css';
import Product from './components/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

function App() {
 const [progress, setProgress] = useState(0)
  return (
    <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
      <Navbar />
      <Routes>
        <Route path='/' element={<Product category="https://fakestoreapi.com/products" id="all" setProgress={setProgress}/>}></Route>
        <Route path='/electronic' element={<Product category="https://fakestoreapi.com/products/category/electronics" key="electronic" id="electronic" setProgress={setProgress}/>}></Route>
        <Route path='/jewelery' element={<Product category="https://fakestoreapi.com/products/category/jewelery" key="jewelery" id="jewelery" setProgress={setProgress}/>}></Route>
        <Route path='/mensclothing' element={<Product category="https://fakestoreapi.com/products/category/men's clothing" key="mensclothing" id="mens clothing" setProgress={setProgress}/>}></Route>
        <Route path='/womensclothing' element={<Product category="https://fakestoreapi.com/products/category/women's clothing" key="womensclothing" id="womens clothing" setProgress={setProgress}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
