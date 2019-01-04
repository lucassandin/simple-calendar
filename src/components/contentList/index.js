import React, { Component } from "react";
import { StyledContentList } from "./styles";

class ContentList extends Component {
  state = {
    search: ""
  };

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnRemove = id => {
    this.props.handleOnRemove(id);
  };

  render() {
    const filteredContacts = this.props.contacts.filter(
      e =>
        !e.name.toLowerCase().search(this.state.search.toLowerCase()) ||
        !e.email.toLowerCase().search(this.state.search.toLowerCase()) ||
        !e.phone.search(this.state.search)
    );
    return (
      <StyledContentList>
        <div>
          <h3>Contatos</h3>
          <input
            type="text"
            placeholder="Search"
            name="search"
            value={this.state.search}
            onChange={this.handleOnChange}
          />
        </div>
        {filteredContacts &&
          filteredContacts.map(contact => {
            return (
              <ul key={contact.id}>
                <li>
                  ID: <span>{contact.id}</span>
                </li>
                <li>
                  Nome: <span>{contact.name}</span>
                </li>
                <li>
                  E-mail: <span>{contact.email}</span>
                </li>
                <li>
                  Tel:{" "}
                  <span>
                    {contact.phone}{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://wa.me/55${contact.phone}?text=Olá`}
                    >
                      Whatsapp
                    </a>
                  </span>
                  <button
                    type="button"
                    onClick={() => this.handleOnRemove(contact.id)}
                  >
                    Remove
                  </button>
                </li>
              </ul>
            );
          })}
      </StyledContentList>
    );
  }
}

export default ContentList;
