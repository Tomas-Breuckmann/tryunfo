import React from 'react';
import PropTypes from 'prop-types';

class MostraCards extends React.Component {
  render() {
    const { savedCards, deleteCard } = this.props;
    return (
      <div className="mostra-cards">
        {savedCards.map((cardObject, index) => {
          const { name, description, image, attr1, attr2, attr3, rare,
            trunfo } = cardObject;
          return (
            <div key={ index } className="cada-card">
              <h2>{ name }</h2>
              <img src={ image } alt={ name } />
              <p>{ description }</p>
              <p>{ attr1 }</p>
              <p>{ attr2 }</p>
              <p>{ attr3 }</p>
              <p>{ rare }</p>
              <p>{ trunfo ? 'Super trunfo' : '' }</p>
              <button
                data-testid="delete-button"
                type="button"
                name={ index }
                onClick={ deleteCard }
              >
                Excluir
              </button>
            </div>);
        })}
      </div>
    );
  }
}

// Dica de Ramond Falcão, turma 19-tribo A para arrumar o PropTypes
MostraCards.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default MostraCards;
