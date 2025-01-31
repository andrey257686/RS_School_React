import { Component } from 'react';

import Search from './components/Search';
import CardList from './components/CardList';

import { STSpacecraft } from './types/types';

import {
  // fetchAnimalList,
  // fetchCharacterList,
  fetchSpacecraftList,
} from './services/api';

interface AppState {
  searchTerm: string;
  results: STSpacecraft[];
}

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    this.state = {
      searchTerm: savedSearchTerm,
      results: [],
    };
  }

  componentDidMount() {
    this.handleSearch(this.state.searchTerm);
  }

  handleSearch = async (searchTerm: string) => {
    const trimmedSearchTerm = searchTerm.trim();
    const animalList = await fetchSpacecraftList(searchTerm.trim());
    this.setState({ searchTerm: trimmedSearchTerm }, () => {
      localStorage.setItem('searchTerm', trimmedSearchTerm);
    });
    this.setState({ results: animalList });
    console.log(animalList);
  };

  render() {
    return (
      <div>
        <Search
          initialSearchTerm={this.state.searchTerm}
          onSearch={this.handleSearch}
        />
        <CardList items={this.state.results} />
      </div>
    );
  }
}

export default App;
