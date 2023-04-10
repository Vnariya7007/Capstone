function addTruck_click() {
    addTruckForm();
}

function btnUpdate_click() {
    updateTruck();
}

function btnDelete_click() {
    deleteTruck();
}

function btnShowOne_click() {
    showOneTruck();
}

function btnShowAll_click() {
    showAllTruck();
}

function pageTruckView_show() {
    showAllTruck();
}

function pageTruckDetail_show() {
    updatedropDrDropdown("ModifyTruck");
    showOneTruck();
}

function addDriver_click() {
    addDriverForm();
}

function addTrip_click() {
    addTripForm();

}

function addTrailer_click() {
    addTrailerForm();
}

function btnDeleteDr_click() {
    deleteDriver();
}

function btnDeleteTrip_click() {
    deleteTrip();
}

function btnDeleteTrailer_click() {
    deleteTrailer();
}

function btnUpdateDr_click() {
    updateDriver();
}

function btnUpdateTrip_click() {
    showCalculatedCostMod();
    updateTrip();
}

function btnUpdateTrailer_click() {
    updateTrailer();
}

function btnCalculateCost_click() {
    showCalculatedCost();
    doValidate_addTripForm();
}
function btnCalculateCostMod_click() {
    showCalculatedCostMod();
    doValidate_modTripForm();
}
function clearDatabaseBtn_click() {
    confirm("Do you really want to clear all your Data?");
    localStorage.clear();
    clearDatabase();
}


function pageTripView_show() {
    showAllTrip();
}

function pageTripDetail_show() {
    updatestartlocationDropdown("ModifyTrip1");
    updatendlocationDropdown("ModifyTrip2");
    showOneTrip();
}

function pageDriverView_show() {
    showAllDriver();
}

function pageDriverDetail_show() {
    showOneDriver();
}

function pageTrailerView_show() {
    showAllTrailer();
}

function pageTrailerDetail_show() {
    updategoodsDropdown("ModifyTrailer");
    showOneTrailer();
}

function addTruck_show() {
    updatedropDrDropdown("AddTruck");
    AddTruckpageshow();

}

function addTrailer_show() {
    updategoodsDropdown("AddTrailer");
    AddTrailerpageshow();
}

function addTrips_show() {
    updatestartlocationDropdown("AddTrip1");
    updatendlocationDropdown("AddTrip2");
    AddTrippageshow();
}

function init() {
    $("#btnTruckAdd").on("click", addTruck_click);
    $("#btnDriverAdd").on("click", addDriver_click);
    $("#btnTripAdd").on("click", addTrip_click);
    $("#btnTrailerAdd").on("click", addTrailer_click);
    $("#btnClearDatabase").on("click", clearDatabaseBtn_click);

    //CRUD
    $("#btnDelete").on("click", btnDelete_click);
    $("#btnDeleteDr").on("click", btnDeleteDr_click);
    $("#btnDeleteTrip").on("click", btnDeleteTrip_click);
    $("#btnDeleteTrailer").on("click", btnDeleteTrailer_click);
    $("#btnUpdate").on("click", btnUpdate_click);
    $("#btnUpdateDr").on("click", btnUpdateDr_click);
    $("#btnUpdateTrip").on("click", btnUpdateTrip_click);
    $("#btnUpdateTrailer").on("click", btnUpdateTrailer_click);
    $("#btnShowOne").on("click", btnShowOne_click);
    $("#btnShowAll").on("click", btnShowAll_click);

    $("#btnCalculateCost").on("click", btnCalculateCost_click);
    $("#btnCalculateCostMod").on("click", btnCalculateCostMod_click);



    $("#pageTruckView").on("pageshow", pageTruckView_show);
    $("#pageDriverView").on("pageshow", pageDriverView_show);
    $("#pageTrailerView").on("pageshow", pageTrailerView_show);
    $("#pageTripView").on("pageshow", pageTripView_show);
    $("#pageTruckDetail").on("pageshow", pageTruckDetail_show);
    $("#pageDriverDetail").on("pageshow", pageDriverDetail_show);
    $("#pageTrailerDetail").on("pageshow", pageTrailerDetail_show);
    $("#pageTripDetail").on("pageshow", pageTripDetail_show);
    $("#addTruck").on("pageshow", addTruck_show);
    $("#addTrailer").on("pageshow", addTrailer_show);
    $("#addTrips").on("pageshow", addTrips_show);
}

$(document).ready(function () {
    init();
    initDB();
});
function initDB(){
    try{
        DB.createDatabase();
        if (db) {
            console.info("Creating tables..");
            DB.createTables();
        }
        else{
            console.error("Cannot create tables: database does not exist!");
        }
    } catch(e){
        console.error("Error: (Fatal) Error in initDB(), can not proceed.");
    }
}
