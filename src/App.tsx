import { Component } from 'react';

import Search from './components/Search';
import CardList from './components/CardList';

import { fetchAnimalList } from './services/api';

type AppProps = object;

type AppState = {
  searchTerm: string;
};

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    this.state = {
      searchTerm: savedSearchTerm,
    };
  }

  componentDidMount() {
    this.handleSearch(this.state.searchTerm);
  }

  handleSearch = async (searchTerm: string) => {
    const trimmedSearchTerm = searchTerm.trim();
    const animalList = await fetchAnimalList(searchTerm.trim());
    this.setState({ searchTerm: trimmedSearchTerm }, () => {
      localStorage.setItem('searchTerm', trimmedSearchTerm);
    });
    console.log(animalList);
  };

  render() {
    return (
      <div>
        <Search
          initialSearchTerm={this.state.searchTerm}
          onSearch={this.handleSearch}
        />
        <CardList />
      </div>
    );
  }
}

export default App;
