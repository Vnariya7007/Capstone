<?php
//  to use sessions
session_start();
// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['loggedin'])) {
	header('Location: index.html');
	exit;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="witdh=device-witdh, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>City Trucking</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="js/lib/jquery-2.1.4.js"></script>
    <script src="js/lib/jquery.mobile-1.4.5.js"></script>
    <script src="js/lib/jquery.validate.js"></script>
    <link rel="stylesheet" href="css/lib/jquery.mobile-1.4.5.css">
    <!-- My Stuff --->
    <script src="js/database.js"></script>
    <script src="js/DAL.js"></script>
    <script src="js/util.js"></script>
    <script src="js/facade.js"></script>
    <script src="js/global.js"></script>


    <link rel="stylesheet" href="css/main.css">
    <!-- <link rel="stylesheet" href="style.css"> -->

</head>

<body>

<!-------------------------------------------------Home page------------------------------------------------->
<div data-role="page" id="pageHome">
    <header data-role="header" data-position="fixed" data-theme="b">
    <h1>Home</h1>
    <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home" class="ui-btn-active ui-state-persist">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear">Settings</a></li>
                <li><a href="#pageContact" data-icon="star">Contact</a></li>
            </ul>
        </div>
    </header>
    <section data-role="content" align="right">
        <div data-type="horizontal">
        <button data-inline="true"  type="button" onclick="window.location.href='profile.php'" class=" text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" ><i class="fas fa-user-circle"></i>Profile</button>
	    <button data-inline="true"  type="button" onclick="window.location.href='logout.php'" class=" text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Logout</button>
        </div>
    
        <h2 class="flex justify-center">Home</h2>
        <p class=" flex justify-center"><b>Welcome back, <?=$_SESSION['name']?>!</b></p>
        <div class="container flex justify-center">
            <section class="card-container m-10">
                <!-- image 1 -->
                <div class="card">
                    <a href="#addTruck"><img src="images/1.png" alt="truckAdd" class="card-image"></a>

                </div>
                <!-- image 2 -->
                <div class="card">
                    <a href="#addDriver"><img src="images/2.png" alt="driverAdd" class="card-image"></a>

                </div>
                <!-- image 3 -->
                <div class="card">
                    <a href="#addTrips"><img src="images/3.png" alt="tripsAdd" class="card-image"></a>

                </div>
                <!-- image 4 -->
                <div class="card">
                    <a href="#addTrailer"><img src="images/4.png" alt="trailerAdd" class="card-image"></a>

                </div>
                <!-- image 5 -->
                <div class="card">
                    <a href="#pageAllData"><img src="images/5.png" alt="report" class="card-image"></a>

                </div>
                <!-- image 6 -->
                <div class="card">
                    <a href="#pageContact"><img src="images/6.png" alt="more" class="card-image"></a>

                </div>


            </section>
        </div>
    </section>


    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; Group 5</h1>
    </footer>
</div>

<!-------------------------------------------------Add Truck page------------------------------------------------->
<div data-role="page" id="addTruck">
    <header data-role="header" data-position="fixed" data-theme="b">
        <h1>Add</h1>
        <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear">Settings</a></li>
                <li><a href="#pageContact" data-icon="star">Contact</a></li>
            </ul>
        </div>
    </header>
    <section data-role="content">
        <div id="divMain">
            <a href="#" data-rel="back"
               class="ui-btn ui-corner-all ui-btn-inline ui-btn-icon-left ui-icon-carat-l">Back</a>
            <h2 class="heading flex justify-center">Add a Truck</h2>
            <form id="frmAddTruck" name="frmAddTruck">
                <label for="txtNumAdd">Truck Number:</label>
                <input type="number" id="txtNumAdd" name="txtNumAdd" data-clear-btn="true">

                <label for="txtPurchaseAdd">Purchase Date:</label>
                <input type="date" id="txtPurchaseAdd" name="txtPurchaseAdd" data-clear-btn="true">

                <label for="txtMakeAndModel">Vehicle Make and Model:</label>
                <input type="text" id="txtMakeAndModel" name="txtMakeAndModel" data-clear-btn="true">

                <label for="txtVinAdd">VIN Number:</label>
                <input type="text" id="txtVinAdd" name="txtVinAdd" data-clear-btn="true">

                <label for="cmbType1">Assigned Driver:</label>
                <select name="cmbType1" id="cmbType1">
                </select>

                <button type="button" id="btnTruckAdd" name="btnTruckAdd" data-icon="plus" class="ui-btn-active">Add
                    Truck
                </button>
            </form>
        </div>

    </section>
    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; Group 5</h1>
    </footer>
</div>

<!-------------------------------------------------Add Driver page------------------------------------------------->
<div data-role="page" id="addDriver">
    <header data-role="header" data-position="fixed" data-theme="b">
        <h1>Add</h1>
        <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear">Settings</a></li>
                <li><a href="#pageContact" data-icon="star">Contact</a></li>

            </ul>
        </div>
    </header>
    <section data-role="content">
        <div id="divMainDriver">
            <a href="#" data-rel="back"
               class="ui-btn ui-corner-all ui-btn-inline ui-btn-icon-left ui-icon-carat-l">Back</a>
            <h2 class="heading flex justify-center">Add Driver Details</h2>
            <form id="frmAddDriver" name="frmAddDriver">
                <label for="txtDrNameAdd">Name:</label>
                <input type="text" id="txtDrNameAdd" name="txtDrNameAdd" data-clear-btn="true">

                <label for="txtDrLicenceAdd">Licence Number:</label>
                <input type="text" id="txtDrLicenceAdd" name="txtDrLicenceAdd" data-clear-btn="true">

                <label for="txtDrTruckNumAdd">Assigned Truck Number:</label>
                <input type="number" id="txtDrTruckNumAdd" name="txtDrTruckNumAdd" data-clear-btn="true">

                <label for="txtDrAddressAdd">Address:</label>
                <input type="text" id="txtDrAddressAdd" name="txtDrAddressAdd" data-clear-btn="true">


                <button type="button" id="btnDriverAdd" name="btnDriverAdd" data-icon="plus" class="ui-btn-active">Add
                    Driver
                </button>
            </form>
        </div>

    </section>
    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; Group 5</h1>
    </footer>
</div>

<!-------------------------------------------------Add Trip page------------------------------------------------->
<div data-role="page" id="addTrips">
    <header data-role="header" data-position="fixed" data-theme="b">
        <h1>Add</h1>
        <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear">Settings</a></li>
                <li><a href="#" data-icon="star">Contact</a></li>
            </ul>
        </div>
    </header>
    <section data-role="content">
        <div id="divMainTrips">
            <a href="#" data-rel="back"
               class="ui-btn ui-corner-all ui-btn-inline ui-btn-icon-left ui-icon-carat-l">Back</a>
            <h2 class="heading flex justify-center">Add Trip Details</h2>
            <form id="frmAddTrips" name="frmAddTrips">
                <label for="txtTripTruckNumberAdd">Truck Number:</label>
                <input type="number" id="txtTripTruckNumberAdd" name="txtTripTruckNumberAdd" data-clear-btn="true">

                <label for="txtTripStartDate">Start Date:</label>
                <input type="date" id="txtTripStartDate" name="txtTripStartDate" data-clear-btn="true">

                <label for="txtTripEndDate">End Date:</label>
                <input type="date" id="txtTripEndDate" name="txtTripEndDate" data-clear-btn="true">

                <label for="cmbTypeTripStart">Starting Location:</label>
                <select name="cmbTypeTripStart" id="cmbTypeTripStart">
                </select>

                <label for="cmbTypeTripEnd">Ending Location:</label>
                <select name="cmbTypeTripEnd" id="cmbTypeTripEnd">
                </select>


                <label for="txtTripDist">Trip Distance (in km):</label>
                <input type="number" id="txtTripDist" name="txtTripDist" data-clear-btn="true">

                <label for="txtTripFuelEff">Fuel Efficiency (liters/100 kms):</label>
                <input type="number" id="txtTripFuelEff" name="txtTripFuelEff" data-clear-btn="true">

                <label for="txtTripFuelPrice">Fuel Price ($/liter):</label>
                <input type="number" id="txtTripFuelPrice" name="txtTripFuelPrice" data-clear-btn="true">


                <input type="hidden" id="txtFuelConsumed" name="txtFuelConsumed" readonly><!--Hidden Input filed-->

                <label for="txtFuelCost">Fuel Cost:</label>
                <input type="text" id="txtFuelCost" name="txtFuelCost" readonly>


                <button type="button" id="btnCalculateCost" name="btnCalculateCost" data-icon="arrow-r" data-theme="b">
                    Calculate Fuel Cost
                </button>

                <button type="button" id="btnTripAdd" name="btnTripAdd" data-icon="plus" class="ui-btn-active">Add
                    Trip To Database
                </button>
            </form>
        </div>

    </section>
    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; Group 5</h1>
    </footer>
</div>

<!-------------------------------------------------Add Trailer page------------------------------------------------->
<div data-role="page" id="addTrailer">
    <header data-role="header" data-position="fixed" data-theme="b">
        <h1>Add</h1>
        <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear">Settings</a></li>
                <li><a href="#" data-icon="star">Contact</a></li>
            </ul>
        </div>
    </header>
    <section data-role="content">
        <div id="divMainTrailer">
            <a href="#" data-rel="back"
               class="ui-btn ui-corner-all ui-btn-inline ui-btn-icon-left ui-icon-carat-l">Back</a>
            <h2 class="heading flex justify-center">Add Trailer Details</h2>
            <form id="frmAddTrailer" name="frmAddTrailer">
                <label for="txtTraNumAdd">Trailer Number:</label>
                <input type="text" id="txtTraNumAdd" name="txtTraNumAdd" data-clear-btn="true">

                <label for="txtTraDateAdd">Date Of Purchase:</label>
                <input type="date" id="txtTraDateAdd" name="txtTraDateAdd" data-clear-btn="true">

                <label for="cmbTypeTrailerGoods">Goods Type:</label>
                <select name="cmbTypeTrailerGoods" id="cmbTypeTrailerGoods">
                </select>


                <button type="button" id="btnTrailerAdd" name="btnDriverAdd" data-icon="plus" class="ui-btn-active">Add
                    Trailer
                </button>
            </form>
        </div>

    </section>
    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; Group 5</h1>
    </footer>
</div>

<!-------------------------------------------------Modify/Detail Truck page------------------------------------------------->
<div data-role="page" id="pageTruckDetail">
    <header data-role="header" data-position="fixed" data-theme="b">
        <h1>Modify a Truck</h1>
        <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear">Settings</a></li>
                <li><a href="#pageContact" data-icon="star">Contact</a></li>
            </ul>
        </div>
    </header>
    <section data-role="content">
        <h2 class="flex justify-center">Modify Truck</h2>
        <form id="frmModifyTruck" name="frmModifyTruck">

            <label for="txtNumAddMod">Truck Number:</label>
            <input type="number" id="txtNumAddMod" name="txtNumAddMod" data-clear-btn="true">

            <label for="txtPurchaseAddMod">Purchase Date:</label>
            <input type="date" id="txtPurchaseAddMod" name="txtPurchaseAddMod" data-clear-btn="true">

            <label for="txtMakeAndModelMod">Vehicle Make and Model:</label>
            <input type="text" id="txtMakeAndModelMod" name="txtMakeAndModelMod" data-clear-btn="true">

            <label for="txtVinAddMod">VIN Number:</label>
            <input type="text" id="txtVinAddMod" name="txtVinAddMod" data-clear-btn="true">

            <label for="cmbType1Mod">Assigned Driver:</label>
            <select name="cmbType1Mod" id="cmbType1Mod">
            </select>


            <div data-type="horizontal">
                <a href="#" data-role="button" data-rel="back" data-inline="true" data-icon="back">Back to previous</a>

                <button type="button" id="btnDelete" name="btnDelete" data-inline="true" data-icon="minus">Delete
                </button>

                <button type="button" id="btnUpdate" name="btnUpdate" data-inline="true" data-icon="check"
                        class="ui-btn-active">
                    Update
                </button>
            </div>
        </form>
    </section>
    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; Group 5</h1>
    </footer>
</div>

<!-------------------------------------------------Modify/Detail Driver page------------------------------------------------->
<div data-role="page" id="pageDriverDetail">
    <header data-role="header" data-position="fixed" data-theme="b">
        <h1>Modify Driver</h1>
        <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear">Settings</a></li>
                <li><a href="#pageContact" data-icon="star">Contact</a></li>
            </ul>
        </div>
    </header>
    <section data-role="content">
        <h2 class="flex justify-center">Modify Driver</h2>
        <form id="frmModifyDriver" name="frmModifyDriver">

            <label for="txtDrNameAddMod">Name:</label>
            <input type="text" id="txtDrNameAddMod" name="txtDrNameAddMod" data-clear-btn="true">


            <label for="txtDrLicenceAddMod">Licence Number:</label>
            <input type="text" id="txtDrLicenceAddMod" name="txtDrLicenceAddMod" data-clear-btn="true">

            <label for="txtDrTruckNumAddMod">Assigned Truck Number:</label>
            <input type="number" id="txtDrTruckNumAddMod" name="txtDrTruckNumAddMod" data-clear-btn="true">

            <label for="txtDrAddressAddMod">Address:</label>
            <input type="text" id="txtDrAddressAddMod" name="txtDrAddressAddMod" data-clear-btn="true">


            <div data-type="horizontal">
                <a href="#" data-role="button" data-rel="back" data-inline="true" data-icon="back">Back to previous</a>

                <button type="button" id="btnDeleteDr" name="btnDelete" data-inline="true" data-icon="minus">Delete
                </button>

                <button type="button" id="btnUpdateDr" name="btnUpdate" data-inline="true" data-icon="check"
                        class="ui-btn-active">
                    Update
                </button>
            </div>
        </form>
    </section>
    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; Group 5</h1>
    </footer>
</div>

<!-------------------------------------------------Modify/Detail Trip page------------------------------------------------->
<div data-role="page" id="pageTripDetail">
    <header data-role="header" data-position="fixed" data-theme="b">
        <h1>Modify a Trip</h1>
        <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear">Settings</a></li>
                <li><a href="#pageContact" data-icon="star">Contact</a></li>
            </ul>
        </div>
    </header>
    <section data-role="content">
        <h2 class="flex justify-center">Modify Trip</h2>
        <form id="frmModifyTrip" name="frmModifyTrip">

            <label for="txtTripTruckNumberAddMod">Truck Number:</label>
            <input type="number" id="txtTripTruckNumberAddMod" name="txtTripTruckNumberAddMod" data-clear-btn="true">

            <label for="txtTripStartDateMod">Start Date:</label>
            <input type="date" id="txtTripStartDateMod" name="txtTripStartDateMod" data-clear-btn="true">

            <label for="txtTripEndDateMod">End Date:</label>
            <input type="date" id="txtTripEndDateMod" name="txtTripEndDateMod" data-clear-btn="true">

            <label for="cmbTypeTripStartMod">Starting Location:</label>
            <select name="cmbTypeTripStartMod" id="cmbTypeTripStartMod">
            </select>

            <label for="cmbTypeTripEndMod">Ending Location:</label>
            <select name="cmbTypeTripEndMod" id="cmbTypeTripEndMod">
            </select>


            <label for="txtTripDistMod">Trip Distance (in km):</label>
            <input type="number" id="txtTripDistMod" name="txtTripDistMod" data-clear-btn="true">

            <label for="txtTripFuelEffMod">Fuel Efficiency (liters/100 kms):</label>
            <input type="number" id="txtTripFuelEffMod" name="txtTripFuelEffMod" data-clear-btn="true">

            <label for="txtTripFuelPriceMod">Fuel Price ($/liter):</label>
            <input type="number" id="txtTripFuelPriceMod" name="txtTripFuelPriceMod" data-clear-btn="true">

            <label for="txtFuelCostMod">Fuel Cost:</label>
            <input type="text" id="txtFuelCostMod" name="txtFuelCostMod" readonly>


            <div data-type="horizontal">
                <a href="#" data-role="button" data-rel="back" data-inline="true" data-icon="back">Back to previous</a>
                <button type="button" id="btnCalculateCostMod" data-inline="true" name="btnCalculateCost"
                        data-icon="arrow-r" data-theme="b">
                    Calculate Fuel Cost
                </button>
                <button type="button" id="btnDeleteTrip" name="btnDelete" data-inline="true" data-icon="minus">Delete
                </button>

                <button type="button" id="btnUpdateTrip" name="btnUpdate" data-inline="true" data-icon="check"
                        class="ui-btn-active">
                    Update
                </button>
            </div>
        </form>
    </section>
    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; Group 5</h1>
    </footer>
</div>

<!-------------------------------------------------Modify/Detail Trailer page------------------------------------------------->
<div data-role="page" id="pageTrailerDetail">
    <header data-role="header" data-position="fixed" data-theme="b">
        <h1>Modify Trailer</h1>
        <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear">Settings</a></li>
                <li><a href="#pageContact" data-icon="star">Contact</a></li>
            </ul>
        </div>
    </header>
    <section data-role="content">
        <h2 class="flex justify-center">Modify Trailer</h2>
        <form id="frmModifyTrailer" name="frmModifyTrailer">

            <label for="txtTraNumAddMod">Trailer Number:</label>
            <input type="text" id="txtTraNumAddMod" name="txtTraNumAddMod" data-clear-btn="true">

            <label for="txtTraDateAddMod">Date Of Purchase:</label>
            <input type="date" id="txtTraDateAddMod" name="txtTraDateAddMod" data-clear-btn="true">

            <label for="cmbTypeTrailerGoodsMod">Goods Type:</label>
            <select name="cmbTypeTrailerGoodsMod" id="cmbTypeTrailerGoodsMod">
            </select>


            <div data-type="horizontal">
                <a href="#" data-role="button" data-rel="back" data-inline="true" data-icon="back">Back to previous</a>

                <button type="button" id="btnDeleteTrailer" name="btnDelete" data-inline="true" data-icon="minus">Delete
                </button>

                <button type="button" id="btnUpdateTrailer" name="btnUpdate" data-inline="true" data-icon="check"
                        class="ui-btn-active">
                    Update
                </button>
            </div>
        </form>
    </section>
    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; Group 5</h1>
    </footer>
</div>

<!---------------------------------------------View All Data(everything) page--------------------------------------------->
<div data-role="page" id="pageAllData">
    <header data-role="header" data-position="fixed" data-theme="b">
        <h1>List Of Records</h1>
        <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid" class="ui-button-active ui-state-persist">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear">Settings</a></li>
                <li><a href="#pageContact" data-icon="star">Contact</a></li>
            </ul>
        </div>
    </header>

    <section data-role="content">
        <ul data-role="listview" data-inset="true" id="lstViewRecord">
            <li>
                <a data-role="button" href="#pageTruckView" class="ui-btn">
                    <h1>View Truck</h1>
                    <p>Details</p>
                    <p>Comments: All Added trucks appear here</p>
                </a>
            </li>
            <li>
                <a data-role="button" href="#pageDriverView" class="ui-btn">
                    <h1>View Driver</h1>
                    <p>Details</p>
                    <p>Comments: All Added Drivers appear here</p>
                </a>
            </li>
            <li>
                <a data-role="button" href="#pageTripView" class="ui-btn">
                    <h1>View Trips</h1>
                    <p>Details</p>
                    <p>Comments: All Added Trips appear here</p>
                </a>
            </li>
            <li>
                <a data-role="button" href="#pageTrailerView" class="ui-btn">
                    <h1>View Trailers</h1>
                    <p>Details</p>
                    <p>Comments: All Added Trailers appear here</p>
                </a>
            </li>
        </ul>
    </section>
    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; 2023 Group 5</h1>
    </footer>
</div>

<!-------------------------------------------------View Truck Records page------------------------------------------------->
<div data-role="page" id="pageTruckView">
    <header data-role="header" data-position="fixed" data-theme="b">
        <h1>View Trucks</h1>
        <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear">Settings</a></li>
                <li><a href="#pageContact" data-icon="star">Contact</a></li>
            </ul>

        </div>
    </header>
    <section data-role="content">
        <a href="#" data-rel="back" class="ui-btn ui-corner-all ui-btn-inline ui-btn-icon-left ui-icon-carat-l">Back</a>
        <h4 style="color: white" align="center"></h4>
        <ul data-role="listview" id="lvAll" class="ui-listview-inset">
            <li><a href="https://www.youtube.com/watch?v=ApXoWvfEYVU">
                <img src="img/sunflower.jpg" alt="sunflower">
                <h2>Sunflower</h2>
                <p>By: Post Malone</p></a>
            </li>
            <li><a href="https://www.youtube.com/watch?v=0go2nfVXFgA">
                <img src="img/sty.jpg" alt="somebody to you">
                <h2>Somebody To You</h2>
                <p>By: The Vamps</p></a>
            </li>
            <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <img src="img/nggyu.jpg" alt="never gonna give you up">
                <h2>Never Gonna Give You Up</h2>
                <p>By: Rick Astley</p></a>
            </li>
        </ul>
    </section>
    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; 2023 Group 5</h1>
    </footer>
</div>

<!-------------------------------------------------View Trip Records page------------------------------------------------->
<div data-role="page" id="pageTripView">
    <header data-role="header" data-position="fixed" data-theme="b">
        <h1>View Trucks</h1>
        <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear">Settings</a></li>
                <li><a href="#pageContact" data-icon="star">Contact</a></li>
            </ul>

        </div>
    </header>
    <section data-role="content">
        <a href="#" data-rel="back" class="ui-btn ui-corner-all ui-btn-inline ui-btn-icon-left ui-icon-carat-l">Back</a>
        <h4 style="color: white" align="center"></h4>
        <ul data-role="listview" id="lvAllTrip" class="ui-listview-inset">
            <li><a href="https://www.youtube.com/watch?v=ApXoWvfEYVU">
                <img src="img/sunflower.jpg" alt="sunflower">
                <h2>Sunflower</h2>
                <p>By: Post Malone</p></a>
            </li>
            <li><a href="https://www.youtube.com/watch?v=0go2nfVXFgA">
                <img src="img/sty.jpg" alt="somebody to you">
                <h2>Somebody To You</h2>
                <p>By: The Vamps</p></a>
            </li>
            <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <img src="img/nggyu.jpg" alt="never gonna give you up">
                <h2>Never Gonna Give You Up</h2>
                <p>By: Rick Astley</p></a>
            </li>
        </ul>
    </section>
    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; 2023 Group 5</h1>
    </footer>
</div>

<!-------------------------------------------------View Driver Records page------------------------------------------------->
<div data-role="page" id="pageDriverView">
    <header data-role="header" data-position="fixed" data-theme="b">
        <h1>View Trucks</h1>
        <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear">Settings</a></li>
                <li><a href="#pageContact" data-icon="star">Contact</a></li>
            </ul>

        </div>
    </header>
    <section data-role="content">
        <a href="#" data-rel="back" class="ui-btn ui-corner-all ui-btn-inline ui-btn-icon-left ui-icon-carat-l">Back</a>
        <h4 style="color: white" align="center"></h4>
        <ul data-role="listview" id="lvAllDriver" class="ui-listview-inset">
            <li><a href="https://www.youtube.com/watch?v=ApXoWvfEYVU">
                <img src="img/sunflower.jpg" alt="sunflower">
                <h2>Sunflower</h2>
                <p>By: Post Malone</p></a>
            </li>
            <li><a href="https://www.youtube.com/watch?v=0go2nfVXFgA">
                <img src="img/sty.jpg" alt="somebody to you">
                <h2>Somebody To You</h2>
                <p>By: The Vamps</p></a>
            </li>
            <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <img src="img/nggyu.jpg" alt="never gonna give you up">
                <h2>Never Gonna Give You Up</h2>
                <p>By: Rick Astley</p></a>
            </li>
        </ul>
    </section>
    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; 2023 Group 5</h1>
    </footer>
</div>

<!-------------------------------------------------View Trailer Records page------------------------------------------------->
<div data-role="page" id="pageTrailerView">
    <header data-role="header" data-position="fixed" data-theme="b">
        <h1>View Trucks</h1>
        <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear">Settings</a></li>
                <li><a href="#pageContact" data-icon="star">Contact</a></li>
            </ul>

        </div>
    </header>
    <section data-role="content">
        <a href="#" data-rel="back" class="ui-btn ui-corner-all ui-btn-inline ui-btn-icon-left ui-icon-carat-l">Back</a>
        <h4 style="color: white" align="center"></h4>
        <ul data-role="listview" id="lvAllTrailer" class="ui-listview-inset">
            <li><a href="https://www.youtube.com/watch?v=ApXoWvfEYVU">
                <img src="img/sunflower.jpg" alt="sunflower">
                <h2>Sunflower</h2>
                <p>By: Post Malone</p></a>
            </li>
            <li><a href="https://www.youtube.com/watch?v=0go2nfVXFgA">
                <img src="img/sty.jpg" alt="somebody to you">
                <h2>Somebody To You</h2>
                <p>By: The Vamps</p></a>
            </li>
            <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <img src="img/nggyu.jpg" alt="never gonna give you up">
                <h2>Never Gonna Give You Up</h2>
                <p>By: Rick Astley</p></a>
            </li>
        </ul>
    </section>
    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; 2023 Group 5</h1>
    </footer>
</div>

<!-------------------------------------------------Settings page------------------------------------------------->
<div data-role="page" id="pageSettings">
    <header data-role="header" data-position="fixed" data-theme="b">
        <h1>Settings</h1>
        <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear" class="ui-button-active ui-state-persist">Settings</a></li>
                <li><a href="#pageContact" data-icon="star">Contact</a></li>
            </ul>
        </div>
    </header>
    <section data-role="content">
    <div >
        <button   type="button" onclick="window.location.href='profile.php'" class=" text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" ><i class="fas fa-user-circle"></i>Profile</button>
	    <button   type="button" onclick="window.location.href='logout.php'" class=" text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Logout</button>
        </div>
    </section>
    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; 2023 Group 5</h1>
    </footer>
</div>
<!-------------------------------------------------Contact page------------------------------------------------->
<div data-role="page" id="pageContact">
    <header data-role="header" data-position="fixed" data-theme="b">
        <h1>Settings</h1>
        <div data-role="navbar" data-iconpos="top">
            <ul>
                <li><a href="#pageHome" data-icon="home">Home</a></li>
                <li><a href="#pageAllData" data-icon="grid">View Data</a></li>
                <li><a href="#pageSettings" data-icon="gear">Settings</a></li>
                <li><a href="#pageContact" data-icon="star" class="ui-button-active ui-state-persist">Contact</a></li>
            </ul>
        </div>
    </header>
    
    <section data-role="content">
        <ul data-role="listview" id="listviewInfo" class="ui-listview-inset">
            <li>
            <a class="ui-btn">
                <img src="images/nehal.png" alt="Nehal">
                    <h1>Name: <span style="font-weight: lighter;">Nehal Ranjitsinh Dogra</span></h1>
                    <h2>Student Id: <span style="font-weight: lighter;">8777004</span></h2>
                    <h3>Email: <span style="font-weight: lighter;">ndogra7004@conestogac.on.ca</span></h3>
                </a>
            </li>
            <li>
                <a class="ui-btn">
                <img src="images/v2.jpg" alt="Vatsal">
                    <h1>Name: <span style="font-weight: lighter;">Vatsal Bhaveshbhai Nariya</span></h1>
                    <h2>Student Id: <span style="font-weight: lighter;">8777007</span></h2>
                    <h3>Email: <span style="font-weight: lighter;">vnariya8007@conestogac.on.ca</span></h3>
                </a>
            </li>
            <li>
                <a class="ui-btn"> 
                <img src="images/c1.png"  alt="kush">
                    <h1>Name: <span style="font-weight: lighter;">Kush Bipinchandra Patel</span></h1>
                    <h2>Student Id: <span style="font-weight: lighter;">8776687</span></h2>
                    <h3>Email: <span style="font-weight: lighter;">kpatel6687@conestogac.on.ca</span></h3>
                </a>
            </li>
        </ul>
    </section>
    <footer data-role="footer" data-position="fixed" data-theme="b">
        <h1>&copy; 2023 Group 5</h1>
    </footer>
</div>

</body>
</html>
