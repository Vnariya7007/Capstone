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
            var options = [];

            //TABLE TRUCK
            var creatTruck = "CREATE TABLE IF NOT EXISTS truck(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "truckNumber  INTEGER NOT NULL," +
                "dateOfPurchase DATE," +
                "makeAndModel VARCHAR(30) NOT NULL," +
                "vinNum VARCHAR(30)NOT NULL," +
                "assignedId INTEGER NOT NULL," +
                "FOREIGN KEY(assignedId) REFERENCES dropDr(id));";

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

            tx.executeSql(dropDropDr, options, successDropTableDropDr, errorHandler);
            tx.executeSql(createDropDr, options, successCreateTableDropDr, errorHandler);
            tx.executeSql(dropDrA, options, successInsertRowDropDr, errorHandler);
            tx.executeSql(dropDrB, options, successInsertRowDropDr, errorHandler);
            tx.executeSql(dropDrC, options, successInsertRowDropDr, errorHandler);
            tx.executeSql(dropDrD, options, successInsertRowDropDr, errorHandler);
            tx.executeSql(dropDrE, options, successInsertRowDropDr, errorHandler);
            tx.executeSql(dropDrF, options, successInsertRowDropDr,errorHandler);
            tx.executeSql(creatTruck, options, successCreatTabletruck, errorHandler);

            //TABLE LOCATION
            var Location = "DROP TABLE IF EXISTS location;";
            console.info("Dropping Table: location if exists...")

            var createLocation = "CREATE TABLE IF NOT EXISTS location( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);";
            console.info("Creating Table: location...");

            console.info("Inserting data to Table: location...");
            var LocationA = "INSERT INTO location (name) VALUES ('Toronto')";
            var LocationB = "INSERT INTO location (name) VALUES ('Vancouver')";
            var LocationC = "INSERT INTO location (name) VALUES ('Calgary')";
            var LocationD = "INSERT INTO location (name) VALUES ('Ottawa')";
            var LocationE = "INSERT INTO location (name) VALUES ('Winnipeg')";
            var LocationF = "INSERT INTO location (name) VALUES ('Brampton')";

            // TABLE TRIP
            var creatTrip = "CREATE TABLE IF NOT EXISTS trip(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "truckNumber INTEGER NOT NULL," +
                "startDate DATE," +
                "endDate DATE," +
                "startId INTEGER NOT NULL," +
                "endId INTEGER NOT NULL," +
                "tripDistance INTEGER NOT NULL," +
                "fuelEfficiency INTEGER NOT NULL," +
                "fuelPrice INTEGER NOT NULL," +
                "fuelCost INTEGER NOT NULL," +
                "FOREIGN KEY(startId) REFERENCES location(id)," +
                "FOREIGN KEY(endId) REFERENCES location(id));";

            function successDropTableLocation() {
                console.info("Success: goods table dropped");
            }

            tx.executeSql(Location, options, successDropTableLocation, errorHandler);

            function successCreateTableLocation() {
                console.info("Success: goods table created successfully");
            }

            tx.executeSql(createLocation, options, successCreateTableLocation, errorHandler);

            function successInsertRowLocation() {
                console.info("Success: row inserted successfully to goods table");
            }

            tx.executeSql(LocationA, options, successInsertRowLocation, errorHandler);
            tx.executeSql(LocationB, options, successInsertRowLocation, errorHandler);
            tx.executeSql(LocationC, options, successInsertRowLocation, errorHandler);
            tx.executeSql(LocationD, options, successInsertRowLocation, errorHandler);
            tx.executeSql(LocationE, options, successInsertRowLocation, errorHandler);
            tx.executeSql(LocationF, options, successInsertRowLocation, errorHandler);

            //TABLE DRIVER
            var creatDriver = "CREATE TABLE IF NOT EXISTS driver(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "Name VARCHAR(30) NOT NULL," +
                "LicenceNo INTEGER NOT NULL," +
                "AssignedTruckNo INTEGER NOT NULL," +
                "Address VARCHAR(30) NOT NULL);";

            //TABLE GOODS
            var Goods = "DROP TABLE IF EXISTS goods;";
            console.info("Dropping Table: goods if exists...")

            var createGoods = "CREATE TABLE IF NOT EXISTS goods( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);";
            console.info("Creating Table: goods...");

            console.info("Inserting data to Table: goods...");
            var goodsA = "INSERT INTO goods (name) VALUES ('Industrial')";
            var goodsB = "INSERT INTO goods (name) VALUES ('Consumer')";
            var goodsC = "INSERT INTO goods (name) VALUES ('Agricultural')";
            var goodsD = "INSERT INTO goods (name) VALUES ('Chemical')";

            //TABLE TRAILER
            var creatTrailer = "CREATE TABLE IF NOT EXISTS trailer(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "TrailerNo INTEGER NOT NULL," +
                "DateOfPurchase DATE," +
                "goodsId INTEGER NOT NULL," +
                "FOREIGN KEY(goodsId) REFERENCES goods(id));";

            function successCreatTableTrailer() {
                console.info("Success: Table created successfully");
            }

            function successDropTableGoods() {
                console.info("Success: goods table dropped");
            }

            tx.executeSql(Goods, options, successDropTableGoods, errorHandler);

            function successCreateTableGoods() {
                console.info("Success: goods table created successfully");
            }

            tx.executeSql(createGoods, options, successCreateTableGoods, errorHandler);
            tx.executeSql(goodsA, options, successInsertRowGoods, errorHandler);
            tx.executeSql(goodsB, options, successInsertRowGoods, errorHandler);
            tx.executeSql(goodsC, options, successInsertRowGoods, errorHandler);
            tx.executeSql(goodsD, options, successInsertRowGoods, errorHandler);

            function successInsertRowGoods() {
                console.info("Success: row inserted successfully to goods table");
            }

            tx.executeSql(creatTrailer, options, successCreatTableTrailer, errorHandler);


            function successCreatTabletrip() {
                console.info("Success: Table created successfully");
            }

            function successCreatTabledriver() {
                console.info("Success: Table created successfully");
            }


            tx.executeSql(creatTrip, options, successCreatTabletrip, errorHandler);
            tx.executeSql(creatDriver, options, successCreatTabledriver, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    }
}
// DROP TABLES
function dropTables() {
    function txFunction(tx) {
        var DropdropDr = "DROP TABLE IF EXISTS dropDr;"
        var Dropgoods = "DROP TABLE IF EXISTS goods;"
        var Droplocation = "DROP TABLE IF EXISTS location;"
        var DropTruck = "DROP TABLE IF EXISTS truck;"
        var DropTrip = "DROP TABLE IF EXISTS trip;"
        var DropDriver = "DROP TABLE IF EXISTS driver;"
        var DropTrailer = "DROP TABLE IF EXISTS trailer;"
        var options = [];

        function successCallback() {
            console.info("Success: Table deleted successfully");
        }

        tx.executeSql(DropdropDr, options, successCallback, errorHandler);
        tx.executeSql(Dropgoods, options, successCallback, errorHandler);
        tx.executeSql(Droplocation, options, successCallback, errorHandler);
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
