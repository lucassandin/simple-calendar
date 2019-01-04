import React, { Component } from "react";
import { StyledForm } from "./styles";

import ContentList from "../contentList";

class Form extends Component {
  state = {
    data: { name: "", email: "", phone: "" },
    contacts: [
      { id: 1, name: "lucas", email: "c@c.com", phone: "32987052840" },
      { id: 2, name: "sandin", email: "c@c.com", phone: "32987052840" }
    ],
    length: 0
  };

  handleOnChange = event => {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value }
    });
  };

  handleAdd = event => {
    event.preventDefault();

    this.state.data.name &&
      this.setState(
        {
          contacts: [
            ...this.state.contacts,
            { id: Math.random(), ...this.state.data }
          ],
          length: this.state.contacts.length + 1
        },
        () => this.setState({ data: { name: "", email: "", phone: "" } })
      );
  };

  handleOnRemove = id => {
    let aux = this.state.contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: aux });
  };

  render() {
    return (
      <StyledForm>
        <form onSubmit={this.handleAdd}>
          <h3>Dados</h3>
          <input
            type="text"
            placeholder="Nome"
            name="name"
            value={this.state.data.name}
            onChange={this.handleOnChange}
          />

          <input
            type="text"
            placeholder="E-mail"
            name="email"
            value={this.state.data.email}
            onChange={this.handleOnChange}
          />

          <input
            type="text"
            placeholder="Tel"
            name="phone"
            value={this.state.data.phone}
            onChange={this.handleOnChange}
          />

          <button type="submit">Adicionar</button>
        </form>

        <ContentList
          contacts={this.state.contacts}
          handleOnRemove={this.handleOnRemove}
        />
      </StyledForm>
    );
  }
}

export default Form;
