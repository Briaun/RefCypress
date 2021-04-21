const pgpool = require('pg-pool');

var constring = "postgres://terminal_148:CqfkMh9K@203.151.232.148:5432/dbu_00002"

check_tbl(constring,"table")

const check_tbl = async (conStr,employee) => {
    pool = new pgpool({
        connectionString: conStr,
    });
    var conn = await pool.connect();
    if(conn != undefined) {
        var sql = " SELECT active FROM blackbox WHERE truck_id ='00002-0324700000342'   ";
        try{
            var result = await conn.query(sql);
            await conn.end();
            if(result.rows[0].name != "0") {
                return true;
                console.log("1")
            }else {
                return false;
                console.log("0")
            }
        }
        catch(e){
            return e.code;
        }
    }else {
        return false;
    }
}
exports.check_tbl = check_tbl;