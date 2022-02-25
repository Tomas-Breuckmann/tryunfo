import React from 'react';
import PropTypes from 'prop-types';

class MostraCards extends React.Component {
  render() {
    const { savedCards } = this.props;
    return (
      <div className="mostraCards">
        {savedCards.map((cardObject, index) => {
          const { name, description, image, attr1, attr2, attr3, rare,
            trunfo } = cardObject;
          return (
            <div key={ index }>
              <p>{ name }</p>
              <p>{ description }</p>
              <p>{ image }</p>
              <p>{ attr1 }</p>
              <p>{ attr2 }</p>
              <p>{ attr3 }</p>
              <p>{ rare }</p>
              <p>{ trunfo }</p>
            </div>);
        })}
      </div>
    );
  }
}

// Dica de Ramond Falcão, turma 19-tribo A para arrumar o PropTypes
MostraCards.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MostraCards;
