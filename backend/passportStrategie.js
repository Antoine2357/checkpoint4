const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const { db, jwtSecret } = require("./conf");
const bcrypt = require("bcrypt");
passport.use(
  new LocalStrategy(
    {
      usernameField: "user",
      passwordField: "password"
    },
    (user, password, done) => {
      db.query(
        `SELECT user , password  FROM admin WHERE user = ?`,
        [user, password],
        (err, results) => {
          const user = results[0];

          if (err || user === undefined) return done(err);
          bcrypt.compare(password, user.password, (errBcrypt, result) => {
            if (errBcrypt) return done(errBcrypt);
            if (!result)
              return done(null, false, { message: "Incorrect password!" });

            return done(null, results[0]);
          });
        }
      );
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);
