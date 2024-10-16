import React from 'react';
import Tracklist from '../tracklist/Tracklist';
import './SearchResults.css';



function SearchResults({searchResults, onAdd}) {   // check the param passed in is called 'searchResults'
  return (
    // Start Point (React Fragment)
    <>
      <div className = 'SearchResults'>
        <h2>Result</h2>
        <Tracklist 
        searchResults = {searchResults}
        onAdd = {onAdd} 
        onRemoval = {false}
        /> 
      </div>
    </>
    // End Point (React Fragment)
  )
}

export default SearchResults