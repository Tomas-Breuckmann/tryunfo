import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, onInputChange, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      onSaveButtonClick, isSaveButtonDisabled } = this.props;
    return (
      <form onSubmit={ onSaveButtonClick }>
        {/* Nome */}
        <label htmlFor="name">
          Nome:
          <input
            name="name"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        {/* DEscrição */}
        <label htmlFor="descricao">
          Descrição:
          <textarea
            name="description"
            type="text"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        {/* Atributos */}
        <label htmlFor="atributo1">
          Atributo 1:
          <input
            name="attr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributo2">
          Atributo 2:
          <input
            name="attr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="atributo3">
          Atributo 3:
          <input
            name="attr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            min="1"
            max="90"
          />
        </label>
        {/* Imagem */}
        <label htmlFor="imageSrc">
          Imagem Src:
          <input
            name="image"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        {/* Raridade */}
        <label htmlFor="rare">
          Raridade:
          <select
            name="rare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {/* Trunfo */}
        <label htmlFor="trunfo">
          É Super Trunfo?
          {
            hasTrunfo === false ? <input
              name="trunfo"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            /> : <p>Você já tem um Super Trunfo em seu baralho</p>
          }
        </label>
        <button
          name="salvar"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
