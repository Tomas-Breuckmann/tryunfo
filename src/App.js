import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'normal',
      trunfo: false,
      saveButton: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange(event) {
    const { type, checked, value } = event.target;
    const valor = type === 'checkbox' ? checked : value;
    this.setState({
      [event.target.name]: valor,
    });
  }

  // onSaveButtonClick() {
  //   this.setState((estadoAnterios, _props) => ({

  //   }))
  // }

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
