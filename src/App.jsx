import "./App.css";
import React, { useState } from "react";
import { Context } from "./context";
import Search from "./components/Search";
import Card from "./components/UI/Card";
import Loader from "./components/UI/Loader";
import Button from "./components/UI/Button";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [rsbooks, setRsBooks] = useState([]);
  const [count , setCount] = useState(12)
  const receivedSearchedBooks = [];
  const searchedDataHandler = (searchedBooks) => {
    for (const id in searchedBooks) {
      receivedSearchedBooks.push({
        title: searchedBooks[id].title,
        author: searchedBooks[id].author_name,
        image: searchedBooks[id].image,
        description: searchedBooks[id].description,
        id: searchedBooks[id].key,
      });
    }
    setRsBooks(receivedSearchedBooks);
    console.log(receivedSearchedBooks);
  };
  const clickHandler = ()=>{
    setCount(count+12);
    // console.log(count);
  }
  return (
    <Context.Provider value={{ isLoading, setIsLoading}}>
      <Search onSearchedData={searchedDataHandler} countState = {count} />
      <div className="otherDiv">
        {isLoading ? (
          <div className="loaderDiv">
            <Loader />
          </div>
        ) : (
          rsbooks.map((receivedSearchedBook, index) => (
            <Card
              title={receivedSearchedBook.title}
              author={receivedSearchedBook.author}
              image={receivedSearchedBook.image}
              description={receivedSearchedBook.description}
              id={receivedSearchedBook.id}
              key={index}
            />
          ))
        )}
        {/* {!isLoading && rsbooks.length!== 0 && <Button onClick={clickHandler} >Load More</Button>} */}
      </div>
      <div className="ButtonDiv">
      {!isLoading && rsbooks.length!== 0 && <Button onClick={clickHandler} >Load More</Button>}
      </div>
      {/* {!isLoading && rsbooks.length!== 0 && <Button onClick={clickHandler} >Load More</Button>} */}
    </Context.Provider>
  );
}

export default App;
