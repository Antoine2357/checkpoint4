const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const {
  portNumber,
  db,
  saltRounds,
  jwtSecret,
  emailPassword
} = require("./conf");

const cors = require("cors");
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("./passportStrategie.js");

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "betinvestwild@gmail.com",
    pass: emailPassword
  }
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.get("/", (req, res) => {
  res.json("toto");
});

app.get("/content", (req, res) => {
  db.query("SELECT * from performances ", (err, results) => {
    if (err) {
      res.status(500).send("Erreur");
    } else {
      res.json(results[0]);
    }
  });
});

app.post("/login", (req, res) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({
        message: "Echec de la connexion",
        user,
        err,
        info
      });
    }
    req.login(user, { session: false }, loginErr => {
      if (loginErr) {
        return res.status(401).json({
          message: "Adresse Email ou mot de passe incorrect",
          user,
          loginErr
        });
      }
      user.password = undefined;
      const token = jwt.sign(JSON.stringify(user), jwtSecret);
      return res.status(200).json({ token, user });
    });
  })(req, res);
});

app.post("/contact", (req, res) => {
  const email = req.body.email;
  const message = req.body.message;

  let HelperOptions = {
    from: ` <${email}>`,
    to: "betinvestwild@gmail.com",
    subject: `Contact Bet2Invest.com`,
    html: `<h3>Message de : ${email}</h3>
    <p>${message}</p>`
  };

  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200).json({ message: "message envoyé" });
    }
  });
});

app.put("/perf", (req, res) => {
  const perf = req.body;
  db.query(
    "UPDATE performances SET ? where idperformances = 1",
    [perf],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

app.listen(portNumber, () => {
  console.log(`API root available at: http://localhost:${portNumber}/`);
});
