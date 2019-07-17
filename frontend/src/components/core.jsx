import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import header from "./header";
import Header from "./header";
import "./core.css";
import { Link } from "react-router-dom";
import AuthService from "./AuthService/AuthService";
import axios from "axios";
import { serverAddress } from "../conf";
const Auth = new AuthService();
class Core extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthService();
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
  }
  componentDidMount() {
    this.Auth.logout();
    axios.get(`${serverAddress}content`).then(({ data }) => {
      this.setState({
        laught: data.laught,
        dream: data.dream,
        marvel: data.marvel_at,
        about: data.about,
        price1: data.price1,
        price2: data.price2,
        price3: data.price3,
        price4: data.price4,
        price5: data.price5,
        price6: data.price6,
        price7: data.price7,
        price8: data.price8
      });
    });
  }

  render() {
    return (
      <Fragment>
        <div className="body">
          <Header />
          <section>
            <h2 id="perf">Performances</h2>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h3>Laugh</h3>
                  <p className="border">{this.state.laught}</p>
                </div>
                <div className="col">
                  <h3>Dream</h3>
                  <p className="border">{this.state.dream}</p>
                </div>
                <div className="col">
                  <h3>Marvel at</h3>
                  <p className="border">{this.state.marvel}</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 id="about">About Us</h2>
            <p className="border">{this.state.about}</p>
          </section>
          <hr />

          <section>
            <h2 id="$">Prices</h2>

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
                  <td>{this.state.price1}$</td>
                  <td>{this.state.price2}$</td>
                  <td>{this.state.price3}$</td>
                  <td>{this.state.price4}$</td>
                </tr>

                <tr>
                  <th>Week-end & Wednesday</th>
                  <td>{this.state.price5}$</td>
                  <td>{this.state.price6}$</td>
                  <td>{this.state.price7}$</td>
                  <td>{this.state.price8}$</td>
                </tr>
              </tbody>
            </table>
          </section>
          <hr />
          <section>
            <h2 id="contact">Contact Us</h2>

            <form className="form" action="/formulaire" method="post">
              <div>
                <label htmlFor="mail">e-mail :</label>
                <input type="email" id="mail" name="user_mail" />
              </div>

              <div>
                <label htmlFor="msg">Message :</label>
                <textarea id="msg" name="user_message" rows="10" cols="50" />
              </div>

              <div className="button">
                <button type="submit">Send message</button>
              </div>
            </form>
          </section>

          <hr />

          <footer className="container">
            <div className="row">
              <p className="col"> Antoine Jacqmin - 18/09/2018 </p>

              <Link className="col" to="https://wildcodeschool.fr">
                Wild Code School
              </Link>

              <Link
                className="col"
                to="http://www.france-ioi.org/user/perso.php?sLogin=jacqmin"
              >
                France-IOI
              </Link>
            </div>
          </footer>
        </div>
      </Fragment>
    );
  }
}

export default Core;
