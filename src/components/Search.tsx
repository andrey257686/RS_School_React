import { Component } from 'react';
import { fetchAnimalList } from '../services/api';

class Search extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = async () => {
    const animalList = await fetchAnimalList(this.state.searchTerm);
    console.log(animalList);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleSearchTermChange}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Search;
