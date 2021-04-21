const { Pool, Client } = require('pg')


const pool = new Pool({
    user: 'terminal_148',
    host: '203.151.232.148',
    database: 'dbu_00002',
    password: 'CqfkMh9K',
    port: 5432,
})

async function selectFrom() {
    try {
        const res = await pool.query("SELECT active FROM blackbox WHERE truck_id ='00002-0324700000342'");
        var T = res.rows[0].active
        var sum = (parseInt(T) + 21)
        return sum;
    } catch (err) {
        return 0;
    }
}

async function print() {

  const result = await selectFrom();
  console.log(result);
}

console.log(print())
