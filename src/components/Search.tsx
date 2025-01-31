import { Component } from 'react';

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

  handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  };

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleSearchTermChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
