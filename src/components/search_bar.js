import React, { Component } from 'react';

//Functional component
// const SearchBar = () => {
//   return <input />;
// };

//Class based component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  // //Events
   onInputChange(term) {
     this.setState({term});
     //this.props.onSearchTermChange(term);
   }
   onSearchBtnClick(){
     this.props.onSearchTermChange(this.state.term);
   }
  //JSX Render
  render() {
    return (
      <div className="input-group search-bar">
        <input
          className="form-control"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <span className="input-group-btn">
          <button onClick={() => this.onSearchBtnClick()} className="btn btn-danger"> Search </button>
        </span>
      </div>
    );
  }
}

export default SearchBar;
