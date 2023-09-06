import React, { useState, useContext, useEffect } from "react";
import classes from "./Search.module.css";
import { Context } from "../context";

function Search(props) {
  const [search, setSearch] = useState("");
  const { isloading, setIsLoading } = useContext(Context);
  // const {count , setCount} = useContext(Context);

  useEffect(()=>{
    console.log("Effect chal raha hai")
    if (search.length > 3) {
      searchItem(search);
    }
  },[search,props.countState])
  
  const searchHandler = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const searchItem = async (search) => {
    setIsLoading(true);
    const response = await fetch(
      `https://openlibrary.org/search.json?title=${search}&limit=${props.countState}`
    );

    const searchData = await response.json();

    const searchedBooks = searchData.docs.map((searchedBook) => {
      return {
        // key: searchedBook.title,
        title: searchedBook.title,
        author: searchedBook.author_name,
        image: `https://covers.openlibrary.org/b/id/${searchedBook.cover_i}-M.jpg`,
        description: searchedBook.description,
        id: searchedBook.key,
      };
    });
    console.log(props.countState)
    setIsLoading(false);
    props.onSearchedData(searchedBooks);
    // console.log(searchedBooks);
  };
  return (
    <React.Fragment>
      <div className={classes.main}>
        <h1>Open Search Library</h1>
        <input type="text" onChange={searchHandler} placeholder="Search your desired Book"/>
      </div>
    </React.Fragment>
  );
}

export default Search;
