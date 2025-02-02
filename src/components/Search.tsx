import { Component, ChangeEvent, FormEvent } from 'react';
import styles from './Search.module.scss';

interface SearchProps {
  initialSearchTerm: string;
  onSearch: (searchTerm: string) => void;
}

interface SearchState {
  searchTerm: string;
}

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchTerm: props.initialSearchTerm,
    };
  }

  handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = async (event: FormEvent) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  };

  render() {
    return (
      <div className={styles.search_container}>
        <h2>SEARCH</h2>
        <form className={styles.search} onSubmit={this.handleSearch}>
          <input
            className={styles.search_input}
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
          />
          <button className={styles.search_button} type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
