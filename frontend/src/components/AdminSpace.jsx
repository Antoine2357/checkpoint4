import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import withAuth from "./AuthService/withAuth";
import { serverAddress } from "../conf";
import axios from "axios";
import { Link } from "react-router-dom";
class AdminSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laught: "",
      dream: "",
      marvel: "",
      about: "",
      price1: "",
      price2: "",
      price3: "",
      price4: "",
      price5: "",
      price6: "",
      price7: "",
      price8: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onSubmitPerf = e => {
    e.preventDefault();

    axios
      .put(`${serverAddress}perf`, {
        laught: this.state.laught,
        dream: this.state.dream,
        marvel_at: this.state.marvel
      })
      .then(({ data }) => {
        alert("update");
      });
  };

  onSubmitAbout = e => {
    e.preventDefault();

    axios
      .put(`${serverAddress}perf`, {
        about: this.state.about
      })
      .then(({ data }) => {
        alert("update");
      });
  };

  onSubmitPrice = e => {
    e.preventDefault();

    axios
      .put(`${serverAddress}perf`, {
        price1: this.state.price1,
        price2: this.state.price2,
        price3: this.state.price3,
        price4: this.state.price4,
        price5: this.state.price5,
        price6: this.state.price6,
        price7: this.state.price7,
        price8: this.state.price8
      })
      .then(({ data }) => {
        alert("update");
      });
  };

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div>
        <Link to="/">
          <button>retour au site </button>
        </Link>
        <h1>Interface administrateur</h1>
        <Form
          onSubmit={e => {
            this.onSubmitPerf(e);
          }}
        >
          <h>performances</h>
          <FormGroup>
            <Label for="Pseudo">Laugh :</Label>
            <Input
              type="text"
              name="laught"
              id="Pseudo"
              placeholder="..."
              onChange={e => this.onChange(e)}
              value={this.state.pseudo}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Pseudo">Dream :</Label>
            <Input
              type="text"
              name="dream"
              id="Pseudo"
              placeholder="..."
              onChange={e => this.onChange(e)}
              value={this.state.pseudo}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Pseudo">Marvel at :</Label>
            <Input
              type="text"
              name="marvel"
              id="Pseudo"
              placeholder="..."
              onChange={e => this.onChange(e)}
              value={this.state.pseudo}
            />
          </FormGroup>
          <input type="submit" value="valider" className="submit-button" />
        </Form>
        <Form
          onSubmit={e => {
            this.onSubmitAbout(e);
          }}
        >
          <h>About us</h>
          <FormGroup>
            <Label for="Pseudo">about :</Label>
            <Input
              type="text"
              name="about"
              id="Pseudo"
              placeholder="..."
              onChange={e => this.onChange(e)}
              value={this.state.pseudo}
            />
          </FormGroup>

          <input type="submit" value="valider" className="submit-button" />
        </Form>
        <Form
          onSubmit={e => {
            this.onSubmitPrice(e);
          }}
        >
          <h>price</h>
          <FormGroup>
            <Label for="Pseudo">table :</Label>
            <table className="table">
              <tbody>
                <tr>
                  <td id="table"> </td>
                  <th>Adults</th>
                  <th>Children under 12 years old</th>
                  <th>Groups of more than 10 people</th>
                  <th>Schools</th>
                </tr>

                <tr>
                  <th>Week without Wednesday</th>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      name="price1"
                      id="Pseudo"
                      placeholder="..."
                      onChange={e => this.onChange(e)}
                      value={this.state.pseudo}
                    />
                  </td>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      name="price2"
                      id="Pseudo"
                      placeholder="..."
                      onChange={e => this.onChange(e)}
                      value={this.state.pseudo}
                    />
                  </td>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      name="price3"
                      id="Pseudo"
                      placeholder="..."
                      onChange={e => this.onChange(e)}
                      value={this.state.pseudo}
                    />
                  </td>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      name="price4"
                      id="Pseudo"
                      placeholder="..."
                      onChange={e => this.onChange(e)}
                      value={this.state.pseudo}
                    />
                  </td>
                </tr>

                <tr>
                  <th>Week-end & Wednesday</th>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      name="price5"
                      id="Pseudo"
                      placeholder="..."
                      onChange={e => this.onChange(e)}
                      value={this.state.pseudo}
                    />
                  </td>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      name="price6"
                      id="Pseudo"
                      placeholder="..."
                      onChange={e => this.onChange(e)}
                      value={this.state.pseudo}
                    />
                  </td>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      name="price7"
                      id="Pseudo"
                      placeholder="..."
                      onChange={e => this.onChange(e)}
                      value={this.state.pseudo}
                    />
                  </td>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      name="price8"
                      id="Pseudo"
                      placeholder="..."
                      onChange={e => this.onChange(e)}
                      value={this.state.pseudo}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </FormGroup>

          <input type="submit" value="valider" className="submit-button" />
        </Form>
      </div>
    );
  }
}
export default withAuth(AdminSpace);
