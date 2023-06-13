import React, { useEffect, useState } from "react";
import Books from "./Pages/Books";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { books } from "./data";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book])
  }

  useEffect(()=> {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Route path="/" exact component={Home}></Route>
        <Route
          path="/books"
          exact
          render={() => <Books books={books}></Books>}
        ></Route>
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart}></BookInfo>
          )}
        ></Route>
        <Route path="/cart" render={() => <Cart books={books} ></Cart>}></Route>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
