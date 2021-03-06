import React from 'react';
import PropTypes from 'prop-types';
// import { AiFillCloseSquare } from 'react-icons/ai';

class MostraCards extends React.Component {
  render() {
    const { savedCards, deleteCard, filterName, filterRare, filterTrunfo } = this.props;
    const savedCardsRare = (filterRare !== 'todas' ? savedCards
      .filter(({ rare }) => rare === filterRare) : savedCards); // filtra por raridade
    const savedCardsNames = savedCardsRare
      .filter(({ name }) => name.includes(filterName)); // filtra pelo nome
    const savedCardsTrunfo = filterTrunfo && savedCards
      .filter(({ trunfo }) => trunfo === true);
    const savedCardsRender = filterTrunfo ? savedCardsTrunfo : savedCardsNames;
    // const savedCardsRender = savedCardsNames;
    return (
      <div className="mostra-cards">
        {savedCardsRender
          // .filter((cardObject) => cardObject.name.includes(filterName)) // filtra pelo nome
          .map((cardObject, index) => {
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
                  {/* <AiFillCloseSquare /> */}
                </button>
              </div>);
          })}
      </div>
    );
  }
}

// Dica de Ramond Falcão, turma 19-tribo A para arrumar o PropTypes do arrayOf
MostraCards.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteCard: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default MostraCards;
