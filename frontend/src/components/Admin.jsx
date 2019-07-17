import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import AuthService from "./AuthService/AuthService";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: ""
    };
    this.Auth = new AuthService();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.Auth.loggedIn()) this.props.history.replace("/admin-space");
  }

  onSubmit(e) {
    e.preventDefault();

    this.Auth.login(this.state.user, this.state.password)
      .then(res => {
        this.props.history.replace("/admin-space");
      })
      .catch(err => {
        alert("utilisateur ou mot de passe incorrect");
      });
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div className="inscription-page">
        <div className="inscription-form">
          <Form
            onSubmit={e => {
              this.onSubmit(e);
            }}
          >
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="text"
                name="user"
                id="exampleEmail"
                onChange={this.onChange}
                placeholder="utilisateur"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Mot de Passe</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                onChange={this.onChange}
                placeholder="Votre mot de passe"
              />
            </FormGroup>
            <input
              type="submit"
              value="Connexion"
              onClick={this.toggle}
              className="submit-button"
            />
          </Form>
          <br />
        </div>
      </div>
    );
  }
}

export default Admin;
