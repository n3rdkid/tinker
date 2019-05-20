const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mysql = require("mysql");
const databaseOptions = require("./database");
const mysqlConnection = mysql.createConnection(databaseOptions);
const keys = require("./keys");
const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;
mysqlConnection.connect(err => {
  if (err) console.log(err);
});
module.exports = passport => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, next) => {
      mysqlConnection.query(
        "SELECT * FROM users where username=?",
        jwt_payload.username,
        (err, rows) => {
          if (!err) {
            let user={
              username:rows[0].username,
              email:rows[0].email
            }
            return next(null,user);
          }else
          return next(null,false);
        }
      );
    })
  );
};
