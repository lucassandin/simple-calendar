import React, { Component } from "react";
import { StyledContentList } from "./styles";

class ContentList extends Component {
  handleOnRemove = id => {
    this.props.handleOnRemove(id);
  };

  render() {
    return (
      <StyledContentList>
        <h3>Contatos</h3>
        {this.props.contacts &&
          this.props.contacts.map(contact => {
            return (
              <ul key={contact.id}>
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
