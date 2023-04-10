//Calculate fuel cost on add page
function showCalculatedCost(){
    var dist = parseFloat($("#txtTripDist").val());
    var fuelEff = parseFloat($("#txtTripFuelEff").val());
    var price = parseFloat($("#txtTripFuelPrice").val());

    var consumed = dist * (fuelEff/100)

    $("#txtFuelCost").val(consumed*price);
}
// calculate fuel cost on modify page
function showCalculatedCostMod() {
    var distMod = parseFloat($("#txtTripDistMod").val());
    var fuelEffMod = parseFloat($("#txtTripFuelEffMod").val());
    var priceMod = parseFloat($("#txtTripFuelPriceMod").val());

    var consumedMod = distMod * (fuelEffMod / 100)

    $("#txtFuelCostMod").val(consumedMod * priceMod);
}
function addTruckForm() {
    if (doValidate_addTruckForm()) {
        console.log("Add Truck form is valid");
        var truckNumber = $("#txtNumAdd").val();
        var dateOfPurchase = $("#txtPurchaseAdd").val();
        var makeAndModel = $("#txtMakeAndModel").val();
        var vinNum = $("#txtVinAdd").val();
        var assignedId = $("#cmbType1").val();
        var options = [truckNumber, dateOfPurchase, makeAndModel, vinNum, assignedId];

        // console.info(`${truckNumber} ${dateOfPurchase} ${makeAndModel}  ${vinNum}`);
        function callback() {
            console.info("Success: Record inserted successfully");
            alert("New Truck Added");
        }

        Truck.insert(options, callback);
    } else {
        console.log("Add Truck form is invalid");
    }
}

function addTrailerForm() {
    if (doValidate_addTrailerForm()) {
        console.log("Add Trailer form is valid");
        var TrailerNo = $("#txtTraNumAdd").val();
        var DateOfPurchase = $("#txtTraDateAdd").val();
        var goodsId = $("#cmbTypeTrailerGoods").val();
        var options = [TrailerNo, DateOfPurchase, goodsId];

        function callback() {
            console.info("Success: Record inserted successfully");
            alert("New Trailer Added");
        }

        Trailer.insert(options, callback);
    } else {
        console.log("Add Trailer form is invalid");
    }
}

function addDriverForm() {
    if (doValidate_addDriverForm()) {
        console.log("Add Driver form is valid");
        var Name = $("#txtDrNameAdd").val();
        var LicenceNo = $("#txtDrLicenceAdd").val();
        var AssignedTruckNo = $("#txtDrTruckNumAdd").val();
        var Address = $("#txtDrAddressAdd").val();
        var options = [Name, LicenceNo, AssignedTruckNo, Address];

        function callback() {
            console.info("Success: Record inserted successfully");
            alert("New Driver Added");
        }

        Driver.insert(options, callback);
    } else {
        console.log("Add Driver form is invalid");
    }
}

//For adding trip
function addTripForm() {
    if (doValidate_addTripForm()) {
        console.log("Add Trip form is valid");
        var truckNumber = $("#txtTripTruckNumberAdd").val();
        var startDate = $("#txtTripStartDate").val();
        var endDate = $("#txtTripEndDate").val();
        var startId = $("#cmbTypeTripStart").val();
        var endId = $("#cmbTypeTripEnd").val();
        var tripDistance = $("#txtTripDist").val();
        var fuelEfficiency = $("#txtTripFuelEff").val();
        var fuelPrice = $("#txtTripFuelPrice").val();
        var fuelCost = $("#txtFuelCost").val();
        var options = [truckNumber, startDate, endDate, startId, endId, tripDistance, fuelEfficiency, fuelPrice, fuelCost];

        function callback() {
            console.info("Success: Record inserted successfully");
            alert("New Trip Added");
        }

        Trip.insert(options, callback);
    } else {
        console.log("Add Trip form is invalid");
    }
}

function clearDatabase() {
    dropTables();
    alert("Database cleared. All tables dropped.");
}

function deleteTruck() {
    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");

    var options = [id];

    function callback() {
        console.info("Record deleted successfully");
        alert("Record deleted successfully");
        $(location).prop("href", "#pageTruckView");

    }

    Truck.delete(options, callback);
}

function deleteTrailer() {
    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");

    var options = [id];

    function callback() {
        console.info("Record deleted successfully");
        alert("Record deleted successfully");
        $(location).prop("href", "#pageTrailerView");

    }

    Trailer.delete(options, callback);
}

function deleteDriver() {
    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");

    var options = [id];

    function callback() {
        console.info("Record deleted successfully");
        alert("Record deleted successfully");
        $(location).prop("href", "#pageDriverView");

    }

    Driver.delete(options, callback);
}


function deleteTrip() {
    var id = localStorage.getItem("id");

    var options = [id];

    function callback() {
        console.info("Record deleted successfully");
        alert("Record deleted successfully");
        $(location).prop("href", "#pageTripView");

    }

    Trip.delete(options, callback);
}

function updateTruck() {
    if (doValidate_modTruckForm()) {
        console.log("Modify Truck Form is valid");
        // var id = $("#txtId").val();
        var id = localStorage.getItem("id");

        var truckNumber = $("#txtNumAddMod").val();
        var dateOfPurchase = $("#txtPurchaseAddMod").val();
        var makeAndModel = $("#txtMakeAndModelMod").val();
        var vinNum = $("#txtVinAddMod").val();
        var assignedId = $("#cmbType1Mod").val();

        var options = [truckNumber, dateOfPurchase, makeAndModel, vinNum, assignedId, id];

        function callback() {
            console.info("Record updated successfully");
            alert("Record updated successfully");
            $(location).prop("href", "#pageTruckView");
        }

        Truck.update(options, callback);
    } else {
        console.log("Modify Truck Form is invalid");
    }
}

function updatedropDrDropdown(form) {

    var options = [];

    function callback(tx, results) {
        if (form === "AddTruck") {
            var htmlCode1 = "";
            for (var y = 0; y < results.rows.length; y++) {
                var row1 = results.rows[y];
                htmlCode1 += `<option value = ${row1['id']}> ${row1['name']}</option>`
            }
            var lv1 = $("#cmbType1");
            lv1 = lv1.html(htmlCode1);
            lv1.selectmenu("refresh");
        } else if (form === "ModifyTruck") {
            var htmlCode = "";
            for (var i = 0; i < results.rows.length; i++) {
                var row = results.rows[i];
                htmlCode += `<option value = ${row['id']}> ${row['name']}</option>`
            }
            var lv = $("#cmbType1Mod");
            lv = lv.html(htmlCode);
            lv.selectmenu("refresh");
        }
    }


    dropDr.selectAll(options, callback);


}

function AddTruckpageshow(){
    $("#txtNumAdd").val("");
    $("#txtPurchaseAdd").val("");
    $("#txtMakeAndModel").val("");
    $("#txtVinAdd").val("");
}

function AddTrailerpageshow(){
    $("#txtTraNumAdd").val("");
    $("#txtTraDateAdd").val("");
}

function AddTrippageshow(){
    $("#txtTripTruckNumberAdd").val("");
    $("#txtTripStartDate").val("");
    $("#txtTripEndDate").val("");
    $("#txtTripDist").val("");
    $("#txtTripFuelEff").val("");
    $("#txtTripFuelPrice").val("");
    $("#txtFuelCost").val("");
}

function updateTrailer() {
    if (doValidate_modTrailerForm()) {
        console.log("Modify Trailer Form is valid");
        // var id = $("#txtId").val();
        var id = localStorage.getItem("id");


        var TrailerNo = $("#txtTraNumAddMod").val();
        var DateOfPurchase = $("#txtTraDateAddMod").val();
        var goodsId = $("#cmbTypeTrailerGoodsMod").val();
        var options = [TrailerNo, DateOfPurchase, goodsId, id];


        function callback() {
            console.info("Record updated successfully");
            alert("Record updated successfully");
            $(location).prop("href", "#pageTrailerView");
        }

        Trailer.update(options, callback);
    } else {
        console.log("Modify Trailer Form is invalid");
    }
}

function updateDriver() {
    if (doValidate_modDriverForm()) {
        console.log("Modify Driver Form is valid");
        // var id = $("#txtId").val();
        var id = localStorage.getItem("id");

        var Name = $("#txtDrNameAddMod").val();
        var LicenceNo = $("#txtDrLicenceAddMod").val();
        var AssignedTruckNo = $("#txtDrTruckNumAddMod").val();
        var Address = $("#txtDrAddressAddMod").val();

        var options = [Name, LicenceNo, AssignedTruckNo, Address, id];

        function callback() {
            console.info("Record updated successfully");
            alert("Record updated successfully");
            $(location).prop("href", "#pageDriverView");
        }

        Driver.update(options, callback);
    } else {
        console.log("Modify Driver Form is invalid");
    }
}

function updateTrip() {
    if (doValidate_modTripForm()) {
        console.log("Modify Trip Form is valid");
        // var id = $("#txtId").val();
        var id = localStorage.getItem("id");

        var truckNumber = $("#txtTripTruckNumberAddMod").val();
        var startDate = $("#txtTripStartDateMod").val();
        var endDate = $("#txtTripEndDateMod").val();
        var startId = $("#cmbTypeTripStartMod").val();
        var endId = $("#cmbTypeTripEndMod").val();
        var tripDistance = $("#txtTripDistMod").val();
        var fuelEfficiency = $("#txtTripFuelEffMod").val();
        var fuelPrice = $("#txtTripFuelPriceMod").val();
        var fuelCost = $("#txtFuelCostMod").val();
        var options = [truckNumber, startDate, endDate, startId, endId, tripDistance, fuelEfficiency, fuelPrice, fuelCost, id];

        function callback() {
            console.info("Record updated successfully");
            alert("Record updated successfully");
            $(location).prop("href", "#pageTripView");
        }

        Trip.update(options, callback);
    } else {
        console.log("Modify Trip Form is invalid");
    }
}

function showOneTruck() {
    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");


    var options = [id];

    function callback(tx, results) {
        console.info("Record selected successfully");
        var row = results.rows[0];
        var truckNumber = row['truckNumber'];
        var dateOfPurchase = row['dateOfPurchase'];
        var makeAndModel = row['makeAndModel'];
        var vinNum = row['vinNum'];
        var assignedId = row['assignedId'];

        console.info(`id: ${id} truckNumber: ${truckNumber} dateOfPurchase: ${dateOfPurchase} makeAndModel: ${makeAndModel} vinNum: ${vinNum} assignedId: ${assignedId}`);

        $("#txtNumAddMod").val(truckNumber);
        $("#txtPurchaseAddMod").val(dateOfPurchase);
        $("#txtMakeAndModelMod").val(makeAndModel);
        $("#txtVinAddMod").val(vinNum);
        $("#cmbType1Mod").val(assignedId);
        $("#cmbType1Mod").selectmenu("refresh");

    }

    Truck.select(options, callback);
}

function showOneTrailer() {
    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");


    var options = [id];


    function callback(tx, results) {
        console.info("Record selected successfully");
        var row = results.rows[0];
        var TrailerNo = row['TrailerNo'];
        var DateOfPurchase = row['DateOfPurchase'];
        var goodsId = row['goodsId'];
        console.info(`id: ${id} TrailerNo: ${TrailerNo} DateOfPurchase: ${DateOfPurchase} goodsId: ${goodsId}`);

        $("#txtTraNumAddMod").val(TrailerNo);
        $("#txtTraDateAddMod").val(DateOfPurchase);
        $("#cmbTypeTrailerGoodsMod").val(goodsId);
        $("#cmbTypeTrailerGoodsMod").selectmenu("refresh");

    }

    Trailer.select(options, callback);
}

function updategoodsDropdown(form) {

    var options = [];

    function callback(tx, results) {
        if (form === "AddTrailer") {
            var htmlCode1 = "";
            for (var y = 0; y < results.rows.length; y++) {
                var row1 = results.rows[y];
                htmlCode1 += `<option value = ${row1['id']}> ${row1['name']}</option>`
            }
            var lv1 = $("#cmbTypeTrailerGoods");
            lv1 = lv1.html(htmlCode1);
            lv1.selectmenu("refresh");
        } else if (form === "ModifyTrailer") {
            var htmlCode = "";
            for (var i = 0; i < results.rows.length; i++) {
                var row = results.rows[i];
                htmlCode += `<option value = ${row['id']}> ${row['name']}</option>`
            }
            var lv = $("#cmbTypeTrailerGoodsMod");
            lv = lv.html(htmlCode);
            lv.selectmenu("refresh");
        }
    }
    Goods.selectAll(options, callback);
}



function showOneDriver() {
    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");


    var options = [id];

    function callback(tx, results) {
        console.info("Record selected successfully");
        var row = results.rows[0];
        var Name = row['Name'];
        var LicenceNo = row['LicenceNo'];
        var AssignedTruckNo = row['AssignedTruckNo'];
        var Address = row['Address'];

        console.info(`id: ${id} Name: ${Name} LicenceNo: ${LicenceNo} AssignedTruckNo: ${AssignedTruckNo} Address: ${Address}`);

        $("#txtDrNameAddMod").val(Name);
        $("#txtDrLicenceAddMod").val(LicenceNo);
        $("#txtDrTruckNumAddMod").val(AssignedTruckNo);
        $("#txtDrAddressAddMod").val(Address);

    }

    Driver.select(options, callback);
}

function showOneTrip() {
    // var id = $("#txtId").val();
    var id = localStorage.getItem("id");


    var options = [id];

    function callback(tx, results) {
        console.info("Record selected successfully");
        var row = results.rows[0];
        var truckNumber = row['truckNumber'];
        var startDate = row['startDate'];
        var endDate = row['endDate'];
        var startId = row['startId'];
        var endId = row['endId'];
        var tripDistance = row['tripDistance'];
        var fuelEfficiency = row['fuelEfficiency'];
        var fuelPrice = row['fuelPrice'];
        var fuelCost = row['fuelCost'];

        console.info(`id: ${id} truckNumber: ${truckNumber} startDate: ${startDate} endDate: ${endDate} startId: ${startId} endId: ${endId} tripDistance: ${tripDistance} fuelEfficiency: ${fuelEfficiency} fuelPrice: ${fuelPrice} fuelCost: ${fuelCost}`);

        $("#txtTripTruckNumberAddMod").val(truckNumber);
        $("#txtTripStartDateMod").val(startDate);
        $("#txtTripEndDateMod").val(endDate);
        $("#cmbTypeTripStartMod").val(startId);
        $("#cmbTypeTripStartMod").selectmenu("refresh");
        $("#cmbTypeTripEndMod").val(endId);
        $("#cmbTypeTripEndMod").selectmenu("refresh");
        $("#txtTripDistMod").val(tripDistance);
        $("#txtTripFuelEffMod").val(fuelEfficiency);
        $("#txtTripFuelPriceMod").val(fuelPrice);
        $("#txtFuelCostMod").val(fuelCost);

    }

    Trip.select(options, callback);
}


function showAllTruck() {
    var options = [];

    function callback(tx, results) {
        console.info("Records selected successfully");
        var htmlCode = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            var id = row['id'];
            var truckNumber = row['truckNumber'];
            var dateOfPurchase = row['dateOfPurchase'];
            var makeAndModel = row['makeAndModel'];
            var vinNum = row['vinNum'];
            var assignedId = row['assignedId'];
            console.info(`id: ${id} truckNumber: ${truckNumber} dateOfPurchase: ${dateOfPurchase} makeAndModel: ${makeAndModel} vinNum: ${vinNum} assignedId: ${assignedId}`);
            htmlCode += `<li>
                            <a data-role="button" data-row-id=${row['id']} href="#">
                                <h1>Truck Number: ${truckNumber}</h1>
                                <h2>Date Of Purchase: ${dateOfPurchase}</h2>
                                <h3>VIN: ${vinNum}</h3>
                            </a>
                        </li>`
        }
        if (results.rows.length === 0) {
            htmlCode = `<h4>No Records found</h4>`
        }
        var lv = $("#lvAll");
        lv = lv.html(htmlCode);
        lv.listview("refresh");

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop("href", "#pageTruckDetail");
        }

        $("#lvAll a").on("click", clickHandler);
    }

    Truck.selectAll(options, callback);
}

function showAllTrailer() {
    var options = [];

    function callback(tx, results) {
        console.info("Records selected successfully");
        var htmlCode = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            var id = row['id'];
            var TrailerNo = row['TrailerNo'];
            var DateOfPurchase = row['DateOfPurchase'];
            var goodsId = row['goodsId'];
            console.info(`id: ${id} TrailerNo: ${TrailerNo} DateOfPurchase: ${DateOfPurchase} goodsId: ${goodsId}`);
            htmlCode += `<li>
                            <a data-role="button" data-row-id=${row['id']} href="#">
                                <h1>Trailer Number: ${TrailerNo}</h1>
                                <h2>Date Of Purchase: ${DateOfPurchase}</h2>
                            </a>
                        </li>`
        }
        if (results.rows.length === 0) {
            htmlCode = `<h4>No Records found</h4>`
        }
        var lv = $("#lvAllTrailer");
        lv = lv.html(htmlCode);
        lv.listview("refresh");

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop("href", "#pageTrailerDetail");
        }

        $("#lvAllTrailer a").on("click", clickHandler);
    }

    Trailer.selectAll(options, callback);
}

function updatestartlocationDropdown(form) {

    var options = [];

    function callback(tx, results) {
        if (form === "AddTrip1") {
            var htmlCode1 = "";
            for (var y = 0; y < results.rows.length; y++) {
                var row1 = results.rows[y];
                htmlCode1 += `<option value = ${row1['id']}> ${row1['name']}</option>`
            }
            var lv1 = $("#cmbTypeTripStart");
            lv1 = lv1.html(htmlCode1);
            lv1.selectmenu("refresh");
        } else if (form === "ModifyTrip1") {
            var htmlCode = "";
            for (var i = 0; i < results.rows.length; i++) {
                var row = results.rows[i];
                htmlCode += `<option value = ${row['id']}> ${row['name']}</option>`
            }
            var lv = $("#cmbTypeTripStartMod");
            lv = lv.html(htmlCode);
            lv.selectmenu("refresh");
        }
    }
    Location.selectAll(options, callback);
}

function updatendlocationDropdown(form) {

    var options = [];

    function callback(tx, results) {
        if (form === "AddTrip2") {
            var htmlCode1 = "";
            for (var y = 0; y < results.rows.length; y++) {
                var row1 = results.rows[y];
                htmlCode1 += `<option value = ${row1['id']}> ${row1['name']}</option>`
            }
            var lv1 = $("#cmbTypeTripEnd");
            lv1 = lv1.html(htmlCode1);
            lv1.selectmenu("refresh");
        } else if (form === "ModifyTrip2") {
            var htmlCode = "";
            for (var i = 0; i < results.rows.length; i++) {
                var row = results.rows[i];
                htmlCode += `<option value = ${row['id']}> ${row['name']}</option>`
            }
            var lv = $("#cmbTypeTripEndMod");
            lv = lv.html(htmlCode);
            lv.selectmenu("refresh");
        }
    }
    Location.selectAll(options, callback);
}

function showAllDriver() {
    var options = [];

    function callback(tx, results) {
        console.info("Records selected successfully");
        var htmlCode = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            var id = row['id'];
            var Name = row['Name'];
            var LicenceNo = row['LicenceNo'];
            var AssignedTruckNo = row['AssignedTruckNo'];
            var Address = row['Address'];
            console.info(`id: ${id} Name: ${Name} LicenceNo: ${LicenceNo} AssignedTruckNo: ${AssignedTruckNo} Address: ${Address}`);
            htmlCode += `<li>
                            <a data-role="button" data-row-id=${row['id']} href="#">
                                <h1>Name: ${Name}</h1>
                                <h2>Licence Number: ${LicenceNo}</h2>
                                <h3>Assigned Truck Number: ${AssignedTruckNo}</h3>
                            </a>
                        </li>`
        }
        if (results.rows.length === 0) {
            htmlCode = `<h4>No Records found</h4>`
        }
        var lv = $("#lvAllDriver");
        lv = lv.html(htmlCode);
        lv.listview("refresh");

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop("href", "#pageDriverDetail");
        }

        $("#lvAllDriver a").on("click", clickHandler);
    }

    Driver.selectAll(options, callback);
}

function showAllTrip() {
    var options = [];

    function callback(tx, results) {
        console.info("Records selected successfully");
        var htmlCode = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            var id = row['id'];
            var truckNumber = row['truckNumber'];
            var startDate = row['startDate'];
            var endDate = row['endDate'];
            var startId = row['startId'];
            var endId = row['endId'];
            var tripDistance = row['tripDistance'];
            var fuelEfficiency = row['fuelEfficiency'];
            var fuelPrice = row['fuelPrice'];
            var fuelCost = row['fuelCost'];

            console.info(`id: ${id} truckNumber: ${truckNumber} startDate: ${startDate} endDate: ${endDate} startId: ${startId} endId: ${endId} tripDistance: ${tripDistance} fuelEfficiency: ${fuelEfficiency} fuelPrice: ${fuelPrice} fuelCost: ${fuelCost}`);
            htmlCode += `<li>
                            <a data-role="button" data-row-id=${row['id']} href="#">
                                <h1>Truck Number: ${truckNumber}</h1>
                                <h2>Start Date: ${startDate}</h2>
                                <h3>Trip Distance: ${tripDistance}</h3>
                            </a>
                        </li>`
        }
        if (results.rows.length === 0) {
            htmlCode = `<h4>No Records found</h4>`
        }
        var lv = $("#lvAllTrip");
        lv = lv.html(htmlCode);
        lv.listview("refresh");

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop("href", "#pageTripDetail");
        }

        $("#lvAllTrip a").on("click", clickHandler);
    }

    Trip.selectAll(options, callback);
}