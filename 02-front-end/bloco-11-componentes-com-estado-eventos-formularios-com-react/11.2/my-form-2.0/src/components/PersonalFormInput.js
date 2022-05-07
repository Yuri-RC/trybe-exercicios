import React from 'react';

class PersonalFormInput extends React.Component {
  render() {
    const { name, maxLength, style, onChange } = this.props;
    return (
      <input
        name={name}
        type='text'
        maxLength={maxLength}
        style={style}
        required
        onChange={onChange}
      ></input>
    )
  }
}

export default PersonalFormInput;