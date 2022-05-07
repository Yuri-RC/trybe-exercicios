import React from 'react';
import PersonalFormInput from './PersonalFormInput';
import states from '../database/states';

class FormDataDisplay extends React.Component {

  createStatesBox() {
    return states.map(state => {
      return <option key={state.id_uf}>{state.nome}</option>
    })
  }
  render() {
    const { handleChange, handlecreateInfo } = this.props;

    return (
      <fieldset>
        <h1>Cadastro de Currículo</h1>
        <form onSubmit={handlecreateInfo}>
          <label>Nome:</label>
          <PersonalFormInput name='name' maxLength='40' style={{ textTransform: 'uppercase' }} onChange={handleChange} />
          <label>Email:</label>
          <PersonalFormInput name='email' maxLength='50' onChange={handleChange} />
          <label>CPF:</label>
          <PersonalFormInput name='cpf' maxLength='11' onChange={handleChange} />
          <label>Endereço:</label>
          <PersonalFormInput name='address' maxLength='200' onChange={handleChange} />
          <label>Cidade:</label>
          <PersonalFormInput name='city' maxLength='28' onChange={handleChange} />
          <label>Estado:</label>
          <select
            name='state'
            onChange={handleChange}
          >
            {this.createStatesBox()}
          </select>
          <input type='submit'></input>
        </form>
      </fieldset>
    )
  }
}

export default FormDataDisplay;

