import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { filterName, filterRare, filterTrunfo, onInputChange } = this.props;
    return (
      <header className="header">
        <h1>Super Tryunfo</h1>
        <label htmlFor="busca">
          Busca:
          <input
            data-testid="name-filter"
            type="text"
            name="filterName"
            value={ filterName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="filteRare">
          Raridade:
          <select
            name="filterRare"
            data-testid="rare-filter"
            value={ filterRare }
            onChange={ onInputChange }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="filterTrunfo">
          Super Trunfo?
          <input
            name="filterTrunfo"
            type="checkbox"
            data-testid="trunfo-filter"
            checked={ filterTrunfo }
            onChange={ onInputChange }
          />
        </label>
      </header>
    );
  }
}

Header.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Header;
