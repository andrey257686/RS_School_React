import { Component } from 'react';
import styles from './App.module.scss';

import Search from './components/Search';
import CardList from './components/CardList';
import Loader from './components/Loader';
import ApiError from './components/ApiError';

import { STSpacecraft } from './types/types';

import { fetchSpacecraftList } from './services/api';

interface AppState {
  searchTerm: string;
  results: STSpacecraft[];
  isLoading: boolean;
  emulatingError: boolean;
  apiError: boolean;
}

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    this.state = {
      searchTerm: savedSearchTerm,
      results: [],
      isLoading: false,
      emulatingError: false,
      apiError: false,
    };
  }

  componentDidMount() {
    this.handleSearch(this.state.searchTerm);
  }

  handleSearch = async (searchTerm: string) => {
    this.setState({ isLoading: true, apiError: false, emulatingError: false });
    const trimmedSearchTerm = searchTerm.trim();
    try {
      const animalList = await fetchSpacecraftList(trimmedSearchTerm);
      this.setState({ results: animalList, isLoading: false });
      this.setState({ searchTerm: trimmedSearchTerm }, () => {
        localStorage.setItem('searchTerm', trimmedSearchTerm);
      });
    } catch (error) {
      console.error(error);
      this.setState({ apiError: true, isLoading: false });
    }
  };

  handleThrowApiError = () => {
    this.setState({ apiError: true });
  };

  handleThrowError = () => {
    this.setState({ emulatingError: true });
  };

  render() {
    if (this.state.emulatingError) {
      throw new Error('Emulated error');
    }
    return (
      <div>
        <h1 className={styles.title}>STARTREK Spacecraft Search</h1>
        <Search
          initialSearchTerm={this.state.searchTerm}
          onSearch={this.handleSearch}
        />
        <div className={styles.results}>
          <h2>RESULTS</h2>
          <div className={styles.results_buttons}>
            <button onClick={this.handleThrowError}>Throw error</button>
            <button onClick={this.handleThrowApiError}>Throw API Error</button>
          </div>
          {this.state.isLoading ? (
            <Loader />
          ) : this.state.apiError ? (
            <ApiError />
          ) : (
            <CardList items={this.state.results} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
