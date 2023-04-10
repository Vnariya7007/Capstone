var Truck = {
    insert: function (options, callback) {
        function txFunction(tx) {
            var creatTruck = "INSERT INTO truck (truckNumber, dateOfPurchase, makeAndModel, vinNum, dropDrId) VALUES(?, ?, ?, ?, ?)";
            tx.executeSql(creatTruck, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: insert Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },
    update: function (options, callback) {
        function txFunction(tx) {
            var creatTruck = "UPDATE truck SET truckNumber=?, dateOfPurchase=?, makeAndModel=?, vinNum=?, dropDrId=?, WHERE id=?;";
            tx.executeSql(creatTruck, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: update Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function (options, callback) {
        function txFunction(tx) {
            var creatTruck = "DELETE FROM truck WHERE id=?;";
            tx.executeSql(creatTruck, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Delete transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function (options, callback) {
        function txFunction(tx) {
            var creatTruck = "SELECT * FROM truck WHERE id=?;";
            tx.executeSql(creatTruck, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: select Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function (options, callback) {
        function txFunction(tx) {
            var creatTruck = "SELECT * FROM truck ;";
            tx.executeSql(creatTruck, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: selectAll Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};


var Trip = {
    insert: function (options, callback) {
        function txFunction(tx) {
            var creatTrip = "INSERT INTO trip (truckNumber, startDate, endDate, tripDistance, fuelEfficiency, fuelPrice, fuelCost) VALUES(?, ?, ?, ?, ?, ?, ?)";
            tx.executeSql(creatTrip, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: insert Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },
    update: function (options, callback) {
        function txFunction(tx) {
            var creatTrip = "UPDATE trip SET truckNumber=?, startDate=?, endDate=?, tripDistance=?, fuelEfficiency=?, fuelPrice=?, fuelCost=? WHERE id=?;";
            tx.executeSql(creatTrip, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: update Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function (options, callback) {
        function txFunction(tx) {
            var creatTrip = "DELETE FROM trip WHERE id=?;";
            tx.executeSql(creatTrip, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Delete transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function (options, callback) {
        function txFunction(tx) {
            var creatTrip = "SELECT * FROM trip WHERE id=?;";
            tx.executeSql(creatTrip, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: select Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function (options, callback) {
        function txFunction(tx) {
            var creatTrip = "SELECT * FROM trip ;";
            tx.executeSql(creatTrip, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: selectAll Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var Driver = {
    insert: function (options, callback) {
        function txFunction(tx) {
            var creatDriver = "INSERT INTO driver (Name, LicenceNo, AssignedTruckNo, Address) VALUES(?, ?, ?, ?)";
            tx.executeSql(creatDriver, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: insert Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },
    update: function (options, callback) {
        function txFunction(tx) {
            var creatDriver = "UPDATE driver SET Name=?, LicenceNo=?, AssignedTruckNo=?, Address=? WHERE id=?;";
            tx.executeSql(creatDriver, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: update Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function (options, callback) {
        function txFunction(tx) {
            var creatDriver = "DELETE FROM driver WHERE id=?;";
            tx.executeSql(creatDriver, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Delete transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function (options, callback) {
        function txFunction(tx) {
            var creatDriver = "SELECT * FROM driver WHERE id=?;";
            tx.executeSql(creatDriver, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: select Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function (options, callback) {
        function txFunction(tx) {
            var creatDriver = "SELECT * FROM driver ;";
            tx.executeSql(creatDriver, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: selectAll Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var Trailer = {
    insert: function (options, callback) {
        function txFunction(tx) {
            var creatTrailer= "INSERT INTO trailer (TrailerNo, DateOfPurchase) VALUES(?, ?)";
            tx.executeSql(creatTrailer, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: insert Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },
    update: function (options, callback) {
        function txFunction(tx) {
            var creatTrailer = "UPDATE trailer SET TrailerNo=?, DateOfPurchase=? WHERE id=?;";
            tx.executeSql(creatTrailer, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: update Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function (options, callback) {
        function txFunction(tx) {
            var creatTrailer = "DELETE FROM trailer WHERE id=?;";
            tx.executeSql(creatTrailer, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Delete transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function (options, callback) {
        function txFunction(tx) {
            var creatTrailer = "SELECT * FROM trailer WHERE id=?;";
            tx.executeSql(creatTrailer, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: select Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function (options, callback) {
        function txFunction(tx) {
            var creatTrailer = "SELECT * FROM trailer ;";
            tx.executeSql(creatTrailer, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: selectAll Transaction is successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
var DropDr = {
    selectAll: function(options, callback){
        function txFunction(tx) {
            var createDropDr = "SELECT * FROM dropDr;";
            tx.executeSql(createDropDr, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: selectAll Transaction is successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);

    }   

};
