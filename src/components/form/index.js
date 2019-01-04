import React, { Component } from "react";
import { StyledForm } from "./styles";

import ContentList from "../contentList";

class Form extends Component {
  state = {
    data: { name: "", email: "", phone: "" },
    contacts: [],
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
            { id: Math.floor(Math.random() * 1000 + 1), ...this.state.data }
          ],
          length: this.state.contacts.length + 1
        },
        () => this.setState({ data: { name: "", email: "", phone: "" } })
      );
  };

  handleOnRemove = id => {
    let aux = this.state.contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: aux, length: this.state.contacts.length - 1 });
  };

  componentDidMount() {
    this.setState({ length: this.state.contacts.length });
  }

  render() {
    return (
      <StyledForm>
        <form onSubmit={this.handleAdd}>
          <h3>
            Dados - QTD: <small>{this.state.length}</small>
          </h3>
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
          handleOnRemove={this.handleOnRemove}
          contacts={this.state.contacts}
        />
      </StyledForm>
    );
  }
}

export default Form;
