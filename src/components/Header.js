import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { filterName, onInputChange } = this.props;
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
      </header>
    );
  }
}

Header.propTypes = {
  filterName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Header;
