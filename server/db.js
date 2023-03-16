const POOL = require("pg").Pool
const pool = new POOL({
    user: "playabook",
    host: "localhost",
    port: 5432,
    password: "8896",
    database: "poppin"
});

// module.exports = pool;

// const pool = new POOL({
//     user: "poppin_user",
//     host: "107.206.188.225",
//     port: 5432,
//     password: "E1dAqft24TxfQ4GyFHnyAdG1XB0An50S",
//     database: "poppin"
//     // connectionString: "postgres://poppin_user:E1dAqft24TxfQ4GyFHnyAdG1XB0An50S@dpg-cg5snq9mbg5ab7hvessg-a/poppin"
// });

module.exports = pool;