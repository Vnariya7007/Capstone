// database reference
var db;

function errorHandler(error) {
    console.error("SQL Error: " + error.message);
}

var DB = {
    createDatabase: function () {
        var shortName = "TruckingDB";
        var version = "1.0";
        var displayName = "DB for CityTrucking app";
        var dbSize = 2 * 1024 * 1024;


        function dbCreateSuccess() {
            console.info("Success: Database created successfully");
        }

        //2nd way
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);
    },
    createTables: function () {

        function txFunction(tx) {
            var dropDropDr = "DROP TABLE IF EXISTS dropDr;";
            console.info("Dropping Table: Driver drop if exists...")

            var createDropDr = "CREATE TABLE IF NOT EXISTS dropDr( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);";
            console.info("Creating Table: Driver Drop...");

            console.info("Inserting data to Table: dropDR...");
            var dropDrA = "INSERT INTO dropDr (name) VALUES ('Arthur Morgan')";
            var dropDrB = "INSERT INTO dropDr (name) VALUES ('George Taylor')";
            var dropDrC = "INSERT INTO dropDr (name) VALUES ('Clark Kent')";
            var dropDrD = "INSERT INTO dropDr (name) VALUES ('Barry Allen')";
            var dropDrE = "INSERT INTO dropDr (name) VALUES ('Harvey Specter')";
            var dropDrF = "INSERT INTO dropDr (name) VALUES ('John Marston')";
            
            var creatTruck = "CREATE TABLE IF NOT EXISTS truck(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "truckNumber  INTEGER NOT NULL," +
                "dateOfPurchase DATE," +
                "makeAndModel VARCHAR(30) NOT NULL," +
                "vinNum VARCHAR(30)NOT NULL,"+
                "dropDrId INTEGER NOT NULL,"+
                "FOREIGN KEY(dropDrId) REFERENCES dropDr(id));";

            var options = [];

            var creatTrip = "CREATE TABLE IF NOT EXISTS trip(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "truckNumber INTEGER NOT NULL," +
                "startDate DATE," +
                "endDate DATE," +
                "tripDistance INTEGER NOT NULL," +
                "fuelEfficiency INTEGER NOT NULL," +
                "fuelPrice INTEGER NOT NULL," +
                "fuelCost INTEGER NOT NULL);";

            var creatDriver = "CREATE TABLE IF NOT EXISTS driver(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "Name VARCHAR(30) NOT NULL," +
                "LicenceNo INTEGER NOT NULL," +
                "AssignedTruckNo INTEGER NOT NULL," +
                "Address VARCHAR(30) NOT NULL);";

            var creatTrailer = "CREATE TABLE IF NOT EXISTS trailer(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "TrailerNo INTEGER NOT NULL," +
                "DateOfPurchase DATE);";



                function successDropTableDropDr() {
                    console.info("Success: drop dr table dropped");
                }
    
                function successCreateTableDropDr() {
                    console.info("Success: drop dr table created successfully");
                }
    
                function successInsertRowDropDr() {
                    console.info("Success: row inserted successfully to drop dr table");
                }
            function successCreatTabletruck() {
                console.info("Success: Table created successfully");
            }

            function successCreatTabletrip() {
                console.info("Success: Table created successfully");
            }

            function successCreatTabledriver() {
                console.info("Success: Table created successfully");
            }

            function successCreatTableTrailer() {
                console.info("Success: Table created successfully");
            }
            tx.executeSql(dropDropDr, options, successDropTableDropDr, errorHandler);
            tx.executeSql(createDropDr, options, successCreateTableDropDr, errorHandler);
            tx.executeSql(dropDrA, options, successInsertRowDropDr, errorHandler);
            tx.executeSql(dropDrB, options, successInsertRowDropDr, errorHandler);
            tx.executeSql(dropDrC, options, successInsertRowDropDr, errorHandler);
            tx.executeSql(dropDrD, options, successInsertRowDropDr, errorHandler);
            tx.executeSql(dropDrE, options, successInsertRowDropDr, errorHandler);
            tx.executeSql(dropDrF, options, successInsertRowDropDr, errorHandler);
            tx.executeSql(creatTruck, options, successCreatTabletruck, errorHandler);
            tx.executeSql(creatTrip, options, successCreatTabletrip, errorHandler);
            tx.executeSql(creatDriver, options, successCreatTabledriver, errorHandler);
            tx.executeSql(creatTrailer, options, successCreatTableTrailer, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    }
}

function dropTables() {
    function txFunction(tx) {
        var DropDropDr = "DROP TABLE IF EXISTS dropDr"
        var DropTruck = "DROP TABLE IF EXISTS truck;"
        var DropTrip = "DROP TABLE IF EXISTS trip;"
        var DropDriver = "DROP TABLE IF EXISTS driver;"
        var DropTrailer = "DROP TABLE IF EXISTS trailer;"
        var options = [];

        function successCallback() {
            console.info("Success: Table deleted successfully");
        }
        tx.executeSql(DropDropDr, options, successCallback, errorHandler);
        tx.executeSql(DropTruck, options, successCallback, errorHandler);
        tx.executeSql(DropTrip, options, successCallback, errorHandler);
        tx.executeSql(DropDriver, options, successCallback, errorHandler);
        tx.executeSql(DropTrailer, options, successCallback, errorHandler);
    }

    function successTransaction() {
        console.info("Success: Transaction is successful");
    }

    db.transaction(txFunction, errorHandler, successTransaction);
}
