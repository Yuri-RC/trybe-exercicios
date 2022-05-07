import React from 'react';
import PersonalForm from './PersonalForm';

class Form extends React.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handlecreateInfo = this.handlecreateInfo.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: 'Acre',
      display: 'none',
      formDisplay: 'block'
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handlecreateInfo(event) {
    event.preventDefault();
    this.setState({
      display: 'block',
      formDisplay: 'none',
    })
  }

  render() {
    return (
      <>
        <div style={{ display: this.state.formDisplay }}>
          <PersonalForm handleChange={this.handleChange}
          handlecreateInfo={this.handlecreateInfo}
        />
        </div>
        <div style={{ display: this.state.display }}>
          <fieldset>
            <legend>Dados profissionais:</legend>
            <p>Name: {this.state.name}</p>
            <p>Email: {this.state.email}</p>
            <p>CPF: {this.state.cpf}</p>
            <p>Endereço: {this.state.address}</p>
            <p>Cidade: {this.state.city}</p>
            <p>Estado: {this.state.state}</p>
          </fieldset>
          <fieldset>
            <legend>Cargo:</legend>
          </fieldset>
        </div>

      </>
    )
  }
}

export default Form;
