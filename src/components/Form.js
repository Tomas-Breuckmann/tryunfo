import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        {/* Nome */}
        <label htmlFor="name">
          Nome:
          <input name="name" type="text" data-testid="name-input" />
        </label>
        {/* DEscrição */}
        <label htmlFor="descricao">
          Descrição:
          <textarea name="descricao" type="textarea" data-testid="description-input" />
        </label>
        {/* Atributos */}
        <label htmlFor="atributo1">
          Atributo 1:
          <input name="atributo1" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="atributo2">
          Atributo 2:
          <input name="atributo2" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="atributo3">
          Atributo 3:
          <input name="atributo3" type="number" data-testid="attr3-input" />
        </label>
        {/* Imagem */}
        <label htmlFor="imageSrc">
          Imagem Src:
          <input name="imageSrc" type="text" data-testid="image-input" />
        </label>
        {/* Raridade */}
        <label htmlFor="rare">
          Raridade:
          <select name="rare" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          É Super Trunfo?
          <input name="trunfo" type="checkbox" data-testid="trunfo-input" />
        </label>
        <button name="salvar" type="button" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
