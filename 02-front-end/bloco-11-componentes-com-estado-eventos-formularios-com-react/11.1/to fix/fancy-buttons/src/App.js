import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numberOfClicksRed: 0,
      numberOfClicksGreen: 0,
      numberOfClicksBlue: 0,
    }
    this.handleClickRed = this.handleClickRed.bind(this)
    this.handleClickGreen = this.handleClickGreen.bind(this)
    this.handleClickBlue = this.handleClickBlue.bind(this)
  }

  handleClickRed() {
    this.setState(({ numberOfClicksRed }) => ({
      numberOfClicksRed: numberOfClicksRed + 1
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(this.state.numberOfClicksRed, 'red')}`);
    })
  }
  handleClickGreen() {
    this.setState(({ numberOfClicksGreen }) => ({
      numberOfClicksGreen: numberOfClicksGreen + 1
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(this.state.numberOfClicksGreen, 'green')}`);
    })
  }
  handleClickBlue() {
    this.setState(({ numberOfClicksBlue }) => ({
      numberOfClicksBlue: numberOfClicksBlue + 1
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(this.state.numberOfClicksBlue, 'blue')}`);
    })
  }
  getButtonColor(num, color) {
    return num % 2 === 0 ? color : 'white';
  }
  render() {
    const { numberOfClicksRed, numberOfClicksGreen, numberOfClicksBlue } = this.state
    return (
      <>
        <button
        onClick={ this.handleClickRed }
        style={{ backgroundColor: this.getButtonColor(numberOfClicksRed, 'red') }}
        >
          {numberOfClicksRed}
        </button>
        <button
        onClick={this.handleClickGreen}
        style={{ backgroundColor: this.getButtonColor(numberOfClicksGreen, 'green') }}
        >
          {numberOfClicksGreen}
        </button>
        <button
        onClick={this.handleClickBlue}
        style={{ backgroundColor: this.getButtonColor(numberOfClicksBlue, 'blue') }}
        >
          {numberOfClicksBlue}
        </button>
      </>
    );
  }
}

export default App;
