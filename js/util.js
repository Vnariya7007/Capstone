
//Validation of Truck form
function doValidate_addTruckForm() {
    var form = $("#frmAddTruck");
    form.validate({
        rules: {
            txtNumAdd: {
                required: true,
                rangelength: [1, 3]
            },
            txtPurchaseAdd: {
                required: true
            },
            txtMakeAndModel: {
                required: true,
                rangelength: [2,15]
            },
            txtVinAdd: {
                required: true
            },
            cmbType1:{
                required:true
            }
        },
        messages: {
            txtNumAdd: {
                required: "Please enter the Truck Number",
                rangelength: "Length must be between 1-3 digits long"
            },
            txtPurchaseAdd: {
                required: "Date of purchase is required"
            },
            txtMakeAndModel: {
                required: "Make and model of the vehicle is required",
                rangelength: "Length must be between 2-15 characters long"
            },
            txtVinAdd:{
                required:"VIN number of the vehicle is required"
            },
            cmbType1:{
                required:"Driver's name is required"
            }
        }
    });
    return form.valid();
}
//Validation of Modify Truck form
function doValidate_modTruckForm() {
    var form = $("#frmModifyTruck");
    form.validate({
        rules: {
            txtNumAddMod: {
                required: true,
                rangelength: [1, 3]
            },
            txtPurchaseAddMod: {
                required: true
            },
            txtMakeAndModelMod: {
                required: true,
                rangelength: [2,15]
            },
            txtVinAddMod: {
                required: true
            },
            cmbType1Mod:{
                required:true
            }
        },
        messages: {
            txtNumAddMod: {
                required: "Please enter the Truck Number",
                rangelength: "Length must be between 1-3 digits long"
            },
            txtPurchaseAddMod: {
                required: "Date of purchase is required"
            },
            txtMakeAndModelMod: {
                required: "Make and model of the vehicle is required",
                rangelength: "Length must be between 2-15 characters long"
            },
            txtVinAddMod:{
                required:"VIN number of the vehicle is required"
            },
            cmbType1Mod:{
                required:"Driver's name is required"
            }
        }
    });
    return form.valid();
}

//Validation of Driver form
function doValidate_addDriverForm() {
    var form = $("#frmAddDriver");
    form.validate({
        rules: {
            txtDrNameAdd: {
                required: true,
                rangelength: [2, 20]
            },
            txtDrLicenceAdd: {
                required: true,
                rangelength: [2,15]
            },
            txtDrTruckNumAdd: {
                required: true,
                rangelength: [1, 3]
            },
            txtDrAddressAdd:{
                required:true
            }
        },
        messages: {
            txtDrNameAdd: {
                required: "Please enter the Driver Name",
                rangelength: "Name must be between 2-20 characters long"
            },
            txtDrLicenceAdd: {
                required: "Licence Number is required",
                rangelength: "Length must be between 2-15 characters long"
            },
            txtDrTruckNumAdd:{
                required:"truck number  is required",
                rangelength: "Length must be between 1-3 digits long"
            },
            txtDrAddressAdd:{
                required:"Driver's address is required"
            }
        }
    });
    return form.valid();
}

//Validation of Modify Driver form
function doValidate_modDriverForm() {
    var form = $("#frmModifyDriver");
    form.validate({
        rules: {
            txtDrNameAddMod: {
                required: true,
                rangelength: [2, 20]
            },
            txtDrLicenceAddMod: {
                required: true,
                rangelength: [2,15]
            },
            txtDrTruckNumAddMod: {
                required: true,
                rangelength: [1, 3]
            },
            txtDrAddressAddMod:{
                required:true
            }
        },
        messages: {
            txtDrNameAddMod: {
                required: "Please enter the Driver Name",
                rangelength: "Name must be between 2-20 characters long"
            },
            txtDrLicenceAddMod: {
                required: "Licence Number is required",
                rangelength: "Length must be between 2-15 characters long"
            },
            txtDrTruckNumAddMod:{
                required:"truck number  is required",
                rangelength: "Length must be between 1-3 digits long"
            },
            txtDrAddressAddMod:{
                required:"Driver's address is required"
            }
        }
    });
    return form.valid();
}

//Validation of Trips Page
function doValidate_addTripForm() {
    var form = $("#frmAddTrips");
    form.validate({
        rules: {
            txtTripTruckNumberAdd: {
                required: true,
                rangelength: [1, 3]
            },
            txtTripStartDate: {
                required: true
            },
            txtTripEndDate: {
                required: true,
                greaterThan:"#txtTripStartDate"
            },
            txtTripDist:{
                required:true,
                range: [1, 1000000]
            },
            txtTripFuelEff:{
                required:true,
                range: [1, 3000000]
            },
            txtTripFuelPrice:{
                required:true
            }
        },
        messages: {
            txtTripTruckNumberAdd: {
                required: "Truck Number Is Required",
                rangelength: "Truck Number should be between 1 and 3"
            },
            txtTripStartDate: {
                required: "Required Start Date"
            },
            txtTripEndDate: {
                required: "Required end Date"
            },
            txtTripDist:{
                required:"Trip Distance is Required",
                range: "must be greater than 0"
            },
            txtTripFuelEff:{
                required:"Trip Distance is Required",
                range: "must be greater than 0"
            },
            txtTripFuelPrice:{
                required:"Fuel price is required"
            }
        }
    });
    return form.valid();
}

//Validation of Modify Trips page
function doValidate_modTripForm() {
    var form = $("#frmModifyTrip");
    form.validate({
        rules: {
            txtTripTruckNumberAddMod: {
                required: true,
                rangelength: [1, 3]
            },
            txtTripStartDateMod: {
                required: true
            },
            txtTripEndDateMod: {
                required: true,
                greaterThan:"#txtTripStartDateMod"
            },
            txtTripDistMod:{
                required:true,
                range: [1, 1000000]
            },
            txtTripFuelEffMod:{
                required:true,
                range: [1, 3000000]
            },
            txtTripFuelPriceMod:{
                required:true
            }
        },
        messages: {
            txtTripTruckNumberAddMod: {
                required: "Truck Number Is Required",
                rangelength: "Truck Number should be between 1 and 3"
            },
            txtTripStartDateMod: {
                required: "Required Start Date"
            },
            txtTripEndDateMod: {
                required: "Required end Date"
            },
            txtTripDistMod:{
                required:"Trip Distance is Required",
                range: "must be greater than 0"
            },
            txtTripFuelEffMod:{
                required:"Trip Distance is Required",
                range: "must be greater than 0"
            },
            txtTripFuelPriceMod:{
                required:"Fuel price is required"
            }
        }
    });
    return form.valid();
}

//Validation of add trailer page
function doValidate_addTrailerForm() {
    var form = $("#frmAddTrailer");
    form.validate({
        rules: {
            txtTraNumAdd: {
                required: true,
                rangelength: [1, 3]
            },
            txtTraDateAdd: {
                required: true
            }
        },
        messages: {
            txtTraNumAdd: {
                required: "Please enter the trailer Number",
                rangelength: "Length must be between 1-3 digits long"
            },
            txtTraDateAdd: {
                required: "Date of purchase is required"
            }
        }
    });
    return form.valid();
}

//validation of modify trailer form
function doValidate_modTrailerForm() {
    var form = $("#frmModifyTrailer");
    form.validate({
        rules: {
            txtTraNumAddMod: {
                required: true,
                rangelength: [1, 3]
            },
            txtTraDateAddMod: {
                required: true
            }
        },
        messages: {
            txtTraNumAddMod: {
                required: "Please enter the trailer Number",
                rangelength: "Length must be between 1-3 digits long"
            },
            txtTraDateAddMod: {
                required: "Date of purchase is required"
            }
        }
    });
    return form.valid();
}