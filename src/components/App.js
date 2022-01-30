import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";


class App extends React.Component {

  onFormSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos/?client_id=ZeW8AN8dwN1oYkaNrQV73srwNia6K0Tf3kcWcgRjPAE", {
      params: { 
        query: term
      }
    })

  }


  render() {
    return (
      <div className="ui container">
        <SearchBar
          onSubmit={this.onFormSubmit}
        />
      </div>
    );
}
}

export default App;
