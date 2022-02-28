import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';
import MostraCards from './components/MostraCards';
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super();
    // const cardsArmazenados = JSON.parse(localStorage.getItem('cards'));
    this.state = {
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
      hasTrunfo: false,
      saveButton: true,
      // savedCards: cardsArmazenados !== null ? cardsArmazenados : [],
      savedCards: [],
      filterName: '',
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
      savedCards: [...savedCards, atualCard],
    }, this.findTrunfoPresence);
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
    });
  }

  deleteCard = (e) => {
    const { savedCards } = this.state;
    // console.log(event.target.name);
    // console.log(event.target.name === '0');
    // console.log(savedCards.some((card, index) => index !== parseInt(event.target.name, 10)));
    const filtrado = savedCards.filter((cd, ind) => ind !== parseInt(e.target.name, 10));
    this.setState({
      savedCards: filtrado,
    }, this.findTrunfoPresence);
  }

  findTrunfoPresence= () => {
    const { savedCards } = this.state;
    const verT = savedCards.some((card) => card.trunfo === true);
    this.setState({ hasTrunfo: verT }, this.salvaNoStorage);
  }

  salvaNoStorage = () => {
    const { savedCards } = this.state;
    localStorage.setItem('cards', JSON.stringify(savedCards));
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
      rare, trunfo, hasTrunfo, saveButton, savedCards, filterName } = this.state;
    return (
      <div>
        <Header filterName={ filterName } onInputChange={ this.onInputChange } />
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
            hasTrunfo={ hasTrunfo }
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
        <MostraCards
          savedCards={ savedCards }
          deleteCard={ this.deleteCard }
          filterName={ filterName }
        />
      </div>
    );
  }
}

export default App;
