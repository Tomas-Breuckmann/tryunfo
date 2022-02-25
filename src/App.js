import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: 'normal',
      trunfo: false,
      saveButton: true,
      // savedCards: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validacaoForm = this.validacaoForm.bind(this);
  }

  onInputChange(event) {
    const { type, checked, value } = event.target;
    const valor = type === 'checkbox' ? checked : value;
    this.setState({
      [event.target.name]: valor,
    }, this.validacaoForm);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    console.log('2');
  }

  validacaoForm= () => {
    let validacao = true;
    const { name, description, image, attr1, attr2, attr3 } = this.state;
    const nameV = name.length > 0; // V de validation, preciso que retorne false
    const descriptionV = description.length > 0;
    const imageV = image.length > 0;
    // if (nameV && descriptionV && imageV) {
    //   const max = 90;
    //   const maxSoma = 120;
    //   const at1 = parseInt(attr1, 10);
    //   const at2 = parseInt(attr2, 10);
    //   const at3 = parseInt(attr3, 10);
    //   const limiteTotal = at1 + at2 + at3 <= maxSoma;
    //   const limiteMin = at1 > 0 && at2 > 0 && at3 > 0;
    //   const limiteMax = at1 <= max && at2 <= max && at3 <= max;
    //   if (limiteTotal && limiteMin && limiteMax) validacao = false;
    // }
      const max = 90;
      const maxSoma = 210;
      const at1 = parseInt(attr1, 10);
      const at2 = parseInt(attr2, 10);
      const at3 = parseInt(attr3, 10);
      const soma = at1 + at2 + at3;
    if (nameV
      && descriptionV
      && imageV
      && at1 >= 0
      && at1 <= max
      && at2 >= 0
      && at2 <= max
      && at3 >= 0
      && at3 <= max
      && soma <= maxSoma
    ) validacao = false;
    this.setState({ saveButton: validacao });
  }

  render() {
    const { name, description, attr1, attr2, attr3, image,
      rare, trunfo, saveButton } = this.state;
    return (
      <div>
        <h1>Super Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ saveButton }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <h2>Vizualizção do Card</h2>
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
