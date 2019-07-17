export default class AuthService {
  constructor(domain) {
    this.domain = domain || "http://localhost:8080";
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
  }

  login(user, password) {
    return this.fetch(`${this.domain}/login`, {
      method: "POST",
      body: JSON.stringify({
        user,
        password
      })
    }).then(res => {
      this.setToken(res.token, res.user);
      return Promise.resolve(res);
    });
  }

  loggedIn() {
    const token = this.getToken();
    return !!token;
  }

  setToken(idToken, user) {
    localStorage.setItem("id_token", idToken);
    localStorage.setItem("user", JSON.stringify(user));
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("user");
  }

  fetch(url, options) {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    if (this.loggedIn()) {
      headers["Authorization"] = "Bearer " + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json());
  }

  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}
