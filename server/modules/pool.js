const pg = require('pg')
const pool = new pg.Pool({
    database: 'koala-holla',
    host: 'localhost',
    port: 5432
})