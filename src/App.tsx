import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/searchBox/SearchBox.module';
import ProductDetails from './components/productDetails/productDetail.module';
import ProductList from './components/productResults.module/productResults.module';
import ParentComponent from './components/parentComponent/parent.module';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <ParentComponent></ParentComponent>
      </header>
    </div>
  );
}

export default App;
