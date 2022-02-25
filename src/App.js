import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';
import MostraCards from './components/MostraCards';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
      saveButton: true,
      savedCards: [],
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
    console.log(this.state);
    const { name, description, image, attr1, attr2, attr3, rare, trunfo,
      savedCards } = this.state;
    const atualCard = {
      name,
      description,
      image,
      attr1,
      attr2,
      attr3,
      rare,
      trunfo,
    };
    this.setState({
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
      saveButton: true,
      savedCards: [...savedCards, atualCard],
    });
    console.log(this.state);
  }

  validacaoForm= () => {
    let validacao = true;
    const { name, description, image, attr1, attr2, attr3 } = this.state;
    const nameV = name.length > 0; // V de validation, preciso que retorne false
    const descriptionV = description.length > 0;
    const imageV = image.length > 0;
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
      rare, trunfo, saveButton, savedCards } = this.state;
    return (
      <div>
        <h1 className="header">Super Tryunfo</h1>
        <main className="main">
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
          <br />
          <hr />
          <br />
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
        </main>
        <h2>Mostra Cards</h2>
        <MostraCards savedCards={ savedCards } />
      </div>
    );
  }
}

export default App;
