import { Component } from 'react';
import styles from './App.module.scss';

import Search from './components/Search';
import CardList from './components/CardList';
import Loader from './components/Loader';

import { STSpacecraft } from './types/types';

import {
  // fetchAnimalList,
  // fetchCharacterList,
  fetchSpacecraftList,
} from './services/api';

interface AppState {
  searchTerm: string;
  results: STSpacecraft[];
  isLoading: boolean;
}

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    this.state = {
      searchTerm: savedSearchTerm,
      results: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.handleSearch(this.state.searchTerm);
  }

  handleSearch = async (searchTerm: string) => {
    this.setState({ isLoading: true });
    const trimmedSearchTerm = searchTerm.trim();
    const animalList = await fetchSpacecraftList(searchTerm.trim());
    // console.log('here');
    this.setState({ searchTerm: trimmedSearchTerm }, () => {
      localStorage.setItem('searchTerm', trimmedSearchTerm);
    });
    this.setState({ results: animalList, isLoading: false });

    console.log(animalList);
  };

  render() {
    return (
      <div>
        <Search
          initialSearchTerm={this.state.searchTerm}
          onSearch={this.handleSearch}
        />
        <div className={styles.results}>
          <h2>RESULTS</h2>
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <CardList items={this.state.results} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
