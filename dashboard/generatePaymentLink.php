<html>
<head>    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149144948-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-149144948-1');
    </script>
    <title>Generate Payment Link</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8"/>

    <link rel="icon" type="image/ico" href="images/favicon.ico"/>
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!--<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">-->
    <link rel="stylesheet" href="css/animate.min.css">

    <link href="css/minoral.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
    <style>

        @media screen and (max-width: 600px) {
            .navbar-collapse {
                display: none;
            }
        }

        @media screen and (min-width: 601px) {
            .navbar-collapse {
                display: block !important;
            }
        }

    </style>
    <script>

        //    $(function () {
        //        var dateFormat = "mm/dd/yy",
        //            from = $("#from_date")
        //                .datepicker({
        //                    minDate: 0,
        //                    numberOfMonths: 1,
        //                    showAnim: "blind"
        //                })
        //                .on("change", function () {
        //                    to.datepicker("option", "minDate", getDate(this));
        //                }),
        //            to = $("#to_date").datepicker({
        //                numberOfMonths: 1,
        //                showAnim: "blind"
        //            })
        //                .on("change", function () {
        //                    // from.datepicker("option", "maxDate", getDate(this));
        //                });
        //
        //        function getDate(element) {
        //            var date;
        //            try {
        //                date = $.datepicker.parseDate(dateFormat, element.value);
        //            } catch (error) {
        //                date = null;
        //            }
        //
        //            return date;
        //        }
        //    });
        //
        //    $(function () {
        //        var dateFormat = "mm/dd/yy",
        //            from = $("#from_date_mobile")
        //                .datepicker({
        //                    minDate: 0,
        //                    numberOfMonths: 1,
        //                    showAnim: "blind"
        //                })
        //                .on("change", function () {
        //                    to.datepicker("option", "minDate", getDate(this));
        //                }),
        //            to = $("#to_date_mobile").datepicker({
        //                numberOfMonths: 1,
        //                showAnim: "blind"
        //            })
        //                .on("change", function () {
        //                    // from.datepicker("option", "maxDate", getDate(this));
        //                });
        //
        //        function getDate(element) {
        //            var date;
        //            try {
        //                date = $.datepicker.parseDate(dateFormat, element.value);
        //            } catch (error) {
        //                date = null;
        //            }
        //
        //            return date;
        //        }
        //    });
        //
        //    function display_search() {
        //        document.getElementById("mobile_search_form").style.width = "100%";
        //        document.getElementById("destination_mobile").focus();
        //    }
        //
        //    function close_display_search() {
        //        document.getElementById("mobile_search_form").style.width = "0%";
        //    }
        //</script>
</head>
<body class="brownish-scheme">

<!-- Preloader -->
<div class="mask">
    <div id="loader"></div>
</div>
<!--/Preloader -->

<!-- Wrap all page content here -->
<div id="wrap">


    <!-- Make page fluid -->
    <div class="row">


        <!-- Fixed navbar -->
        <div class="navbar navbar-default navbar-fixed-top" role="navigation">


            <!-- Branding -->
            <div class="navbar-header col-md-2">
                <div onclick="show_nav()">
                    <img src="images/favicon.ico">
                </div>
                <a class="navbar-brand" href="index.php" style="background: none">

                    <strong>Menu</strong>
                    <!--<strong>ADMIN</strong> <span class="divider vertical"></span> Panel-->
                </a>
            </div>
            <!-- Branding end -->

            <div class="navbar-logout" onclick="logout_owner()">
                <img src="../img/logout.png" title="logout">
            </div>


            <!-- .nav-collapse -->
            <div class="navbar-collapse">


                <!-- Content collapsing at 768px to sidebar -->
                <div class="collapsing-content">

                </div>
                <!-- /Content collapsing at 768px to sidebar -->


                <!-- Sidebar -->
                <ul class="nav navbar-nav side-nav" id="navigation">
                    <li class="collapsed-content">
                        <!-- Collapsed content pasting here at 768px -->
                    </li>
                    <li class="user-status status-online block" id="user-status">
                        <div class="profile-photo">
                            <img src="images/profile-photo.jpg" alt/>
                        </div>
                        <div class="user-detail" id="user">
                            <p id="user_name" style="font-weight: bolder"></p>
                            <p>(<span id="user_mobile"></span>)</p>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="index.php" title="Dashboard">
                            <i class="fa fa-dashboard">
                                <span class="overlay-label red"></span>
                            </i>
                            Dashboard <b class="fa fa-angle-left dropdown-arrow"></b>
                        </a>
                    </li>

                    <!--<li class="dropdown">-->
                    <!--<a href="pendingRequisition.html" title="Pending Request">-->
                    <!--<i class="fa fa-dashboard">-->
                    <!--<span class="overlay-label red"></span>-->
                    <!--</i>-->
                    <!--Pending Request <b class="fa fa-angle-left dropdown-arrow"></b>-->
                    <!--</a>-->
                    <!--</li>-->

                    <li class="dropdown">
                        <a href="booking.php" title="Booking">
                            <i class="fa fa-list">
                                <span class="overlay-label green"></span>
                            </i>
                            Booking <b class="fa fa-angle-left dropdown-arrow"></b>
                        </a>

                    </li>

                    <li class="dropdown">
                        <a href="myProperty.php" title="My Property">
                            <i class="fa fa-dashboard">
                                <span class="overlay-label red"></span>
                            </i>
                            My Property <b class="fa fa-angle-left dropdown-arrow"></b>
                        </a>
                    </li>

                    <li class="dropdown">
                        <a href="addProperty.php" title="Add Property">
                            <i class="fa fa-dashboard">
                                <span class="overlay-label red"></span>
                            </i>
                            Add Property <b class="fa fa-angle-left dropdown-arrow"></b>
                        </a>
                    </li>

                    <li class="dropdown">
                        <a href="sales.php" title="Sales">
                            <i class="fa fa-dashboard">
                                <span class="overlay-label red"></span>
                            </i>
                            Sales <b class="fa fa-angle-left dropdown-arrow"></b>
                        </a>
                    </li>

                    <li class="dropdown">
                        <a href="paymentSettlement.php " title=" Payment Settlement">
                            <i class="fa fa-dashboard">
                                <span class="overlay-label red"></span>
                            </i>
                            Payment Settlement<b class="fa fa-angle-left dropdown-arrow"></b>
                        </a>
                    </li>

                    <li class="dropdown">
                        <a href="inviteTravelAgents.php" title=" Invite Travel Agents">
                            <i class="fa fa-dashboard">
                                <span class="overlay-label red"></span>
                            </i>
                            Invite Travel Agents <b class="fa fa-angle-left dropdown-arrow"></b>
                        </a>
                    </li>

                    <li class="dropdown">
                        <a href="profile.php" title="Profile">
                            <i class="fa fa-dashboard">
                                <span class="overlay-label red"></span>
                            </i>
                            Profile <b class="fa fa-angle-left dropdown-arrow"></b>
                        </a>
                    </li>

                    <li class="dropdown">
                        <a href="feedback.php" title="Feedback">
                            <i class="fa fa-dashboard">
                                <span class="overlay-label red"></span>
                            </i>
                            Feedback <b class="fa fa-angle-left dropdown-arrow"></b>
                        </a>
                    </li>

                    <li class="dropdown">
                        <a href="termsConditions.php" title="Terms & Conditions">
                            <i class="fa fa-dashboard">
                                <span class="overlay-label red"></span>
                            </i>
                            Terms & Conditions<b class="fa fa-angle-left dropdown-arrow"></b>
                        </a>
                    </li>

                    <li class="dropdown">
                        <a href=" support.php" title="Support">
                            <i class="fa fa-dashboard">
                                <span class="overlay-label red"></span>
                            </i>
                            Support <b class="fa fa-angle-left dropdown-arrow"></b>
                        </a>
                    </li>

                    <li class="dropdown" onclick="logout_owner()">
                        <a href="#" title="Logout">
                            <i class="fa fa-dashboard">
                                <span class="overlay-label red"></span>
                            </i>
                            Logout <b class="fa fa-angle-left dropdown-arrow"></b>
                        </a>
                    </li>


                </ul>

            </div>

        </div>

        <!-- Page content -->
        <div id="content" class="col-md-12">

            <!-- submenu -->
            <div class="submenu">
                <h1><strong>Generate Payment Link</strong></h1>
                <div class="collapsed">
                    <a href="#" id="submenutoggle"><h1>Generate Payment Link<i class="fa fa-bars"></i></h1></a>
                </div>
            </div>
            <!-- /submenu -->

            <!-- content main container -->
            <div class="main row text-center">
                <form action="" method="post" id="searchForm">
                    <div class="col-md-3">
                        <div class="form-group">
                            <label>Destination</label>
                            <select class="form-control search-field" name="destination_name"
                                    id="destination" style="box-shadow: none;">
                                <option value="Barot">Barot</option>
                                <option value="Bir Billing">Bir Billing</option>
                                <option value="Chail">Chail</option>
                                <option value="Dehradun">Dehradun</option>
                                <option value="Dharamshala">Dharamshala</option>
                                <option value="Jibhi">Jibhi</option>
                                <option value="Kanatal">Kanatal</option>
                                <option value="Kasol">Kasol</option>
                                <option value="Leh">Leh</option>
                                <option value="Manali">Manali</option>
                                <option value="McLeod Ganj">McLeod Ganj</option>
                                <option value="Mukteshwar">Mukteshwar</option>
                                <option value="Naggar">Naggar</option>
                                <option value="Naldehra">Naldehra</option>
                                <option value="Narkanda">Narkanda</option>
                                <option value="Pangot">Pangot</option>
                                <option value="Rishikesh">Rishikesh</option>
                                <option value="Shimla">Shimla</option>
                                <option value="Shoghi">Shoghi</option>
                                <option value="Tirthan Valley">Tirthan Valley</option>
                            </select>

                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>From Date</label>
                            <input placeholder="Depart date" type="date"
                                   class="form-control" id="from_date"
                                   name="from_date" autocomplete="off">

                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>To Date</label>
                            <input placeholder="Return date" type="date"
                                   class="form-control" id="to_date"
                                   name="to_date" autocomplete="off">
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>No of Bookings</label>
                            <input type="number" placeholder="2" class="form-control" id="no_of_person"
                                   name="booking_required">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group"><br>
                            <button class="btn btn-success" type="submit">Search Property</button>
                        </div>
                    </div>


                </form>

            </div>
            <div class="text-center">
                Your final Price is <span id="finalPrice">0</span>
            </div>
            <!-- /content container -->

            <div class="row margin-left-20" style="display: none" id="campTable">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Property Name</th>
                        <th>Property Price</th>
                        <th>Property Category</th>
                        <th>Property Type</th>
                        <th>Book Now</th>
                    </tr>
                    </thead>
                    <tbody id="propertyTable">
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="row margin-left-20" style="display: none" id="campBooking">
                <div>

                </div>
                <div class="col-md-12 edit-details" id="edit_details"
                     style=" max-height: 600px; overflow-y: scroll">
                    <div class="flex-box text-center">
                        <div>Room 1</div>
                        <div>
                            <div>
                                Adults (max <span class="adult_occupancy"></span> )
                            </div>
                            <div>

                                <span class="big-thin" onclick="delete_adult(this)">-</span> <input
                                        class="adults" onchange="get_pricing()" type="number" value="1"
                                        oninput="validity.valid||(value='');" readonly> <span class="add-button"
                                                                                              onclick="add_adult(this)">+</span>

                            </div>
                        </div>
                        <div>
                            <div>
                                Children (max 2)
                            </div>
                            <div>

                                <span class="big-thin" onclick="delete_child(this)">-</span> <input
                                        class="children" onchange="get_pricing()" type="number" value="0"
                                        oninput="validity.valid||(value='');" readonly> <span class="add-button"
                                                                                              onclick="add_child(this)">+</span>

                            </div>
                        </div>

                    </div>
                    <div class="text-center edit-detail-room" id="edit_room">

                    </div>
                </div>
                <div class="text-center edit-buttons">
                    <button class="cws-button small "
                            style="width: 40%;  border-radius: 10px" onclick="add_room();">Add
                    </button>
                    <button class="cws-button small"
                            style="width: 40%;  border-radius: 10px" onclick="remove_room();">Remove
                    </button>
                </div>


            </div>
            <div class="row text-center">
                <label>Booking For</label>
                <button class="btn btn-primary" onclick="existingUser()">Existing User</button>
                <button class="btn btn-primary" onclick="newUser()">New User</button>
            </div>
            <div id="existingUser" class="text-center " style="display: none">
                <form id="existingUserForm">
                    <div class="form-group">
                        <label>Enter Mobile No</label>
                        <input type="number" id="mobile" name="mobile" class="form-control">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn-default">Get Details</button>
                    </div>
                </form>

            </div>
            <div id="newUser" class="text-center" style="display: none">
                <form id="newUserForm">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" id="name" name="name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Mobile</label>
                        <input type="number" id="mobile" name="mobile" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" id="email" name="email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" id="password" name="password" class="form-control">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn-default">Add new user</button>
                    </div>
                </form>
            </div>
            <div id="userDetailDiv" class="text-center" style="display: none">
                <h5>User Details are :</h5>
                <div class="form-group">
                    <label>Name</label>
                    <h6 id="userName"></h6>
                </div>
                <div class="form-group">
                    <label>Mobile No </label>
                    <h6 id="userMobile"></h6>
                </div>
                <div class="form-group">
                    <label>Email Id is</label>
                    <h6 id="userEmail"></h6>
                </div>
                <input type="hidden" id="auth_key">
                <div class="form-group">
                    <button class="btn btn-success" onclick="generateLink()">Generate Payment Link</button>
                    <div style="display: none" id="paymentLinkDiv">
                        <h5>Your payment Link is <span id="paymentLinkFinal"></span></h5>
                    </div>

                </div>

            </div>

        </div>
        <!-- Page content end -->


    </div>
    <!-- Make page fluid-->


</div>
<!--  loader -->
<div class="loader-outer">
    <div class="loader-icon">
        <div class="loader-inner">
            <img src='../img/fullscreen-loader.gif'>
            <p>Processing. Please Wait...</p>
        </div>
    </div>
</div>
<!-- Wrap all page content end -->


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://code.jquery.com/jquery.js"></script>

<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>
<!--<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js?lang=css&amp;skin=sons-of-obsidian"></script>-->

<script src="js/plugins/jquery.nicescroll.min.js"></script>

<script src="js/plugins/blockui/jquery.blockUI.js"></script>

<script src="js/plugins/jquery.easypiechart.min.js"></script>


<script src="js/plugins/jquery.animateNumbers.js"></script>

<script src="js/plugins/flot/jquery.flot.min.js"></script>
<script src="js/plugins/flot/jquery.flot.time.min.js"></script>
<script src="js/plugins/flot/jquery.flot.selection.min.js"></script>
<script src="js/plugins/flot/jquery.flot.animator.min.js"></script>
<script src="js/plugins/flot/jquery.flot.orderBars.js"></script>

<script src="js/plugins/rickshaw/raphael-min.js"></script>
<script src="js/plugins/rickshaw/d3.v2.js"></script>
<script src="js/plugins/rickshaw/rickshaw.min.js"></script>

<script src="js/plugins/skycons/skycons.js"></script>

<script src="js/plugins/jquery.sparkline.min.js"></script>

<script src="js/plugins/summernote/summernote.min.js"></script>

<script src="js/plugins/chosen/chosen.jquery.min.js"></script>

<script src="js/plugins/owl-carousel/owl.carousel.min.js"></script>

<script src="js/plugins/tabdrop/bootstrap-tabdrop.min.js"></script>

<script src="js/charts.js"></script>

<script src="js/minoral.min.js"></script>
<script src="js/minoral.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
<script>
    function create_UUID() {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        localStorage.setItem('order_id', uuid);
        return uuid;
    }

    function generateLink() {
        $.ajax({
            type: 'POST',
            crossDomain: true,
            url: '<?php echo $_SERVER['API_ENDPOINTS'];?>/api/create_payment_link',
            headers: {
                "auth_key": $("#auth_key").val()
            },
            data: {
                camp_id: propertyDetails['camp']['camp_id'],
                camp_code: subPropertyDetails['camp_code'],
                order_id: create_UUID(),
                amount: $("#finalPrice").html(),
                booking_status: 'PENDING',
                no_of_bookings: $("#no_of_person").val(),
                from_date: fromDate,
                to_date: toDate,
            },
            dataType: 'json',

            beforeSend: function () {
                $('.loader-outer').show();
            },

            success: function (response, textStatus, xhr) {
                $('.loader-outer').hide();

                if (xhr.status == 200) {
                    var link = 'https://www.wandertribe.in/paymentLinkProcess.php?payId=' + response.transaction_id;
                    $("#paymentLinkFinal").html(link);
                    $("#paymentLinkDiv").show();
                }
            },
            error: function (error) {
                $('.loader-outer').hide();
                console.log('error');
            }
        });

    }

    $("#newUserForm").submit(
        function (e) {
            $("#userDetailDiv").hide();
            e.preventDefault();
            $.ajax({
                type: 'POST',
                url: '<?php echo $_SERVER['API_ENDPOINTS']; ?>/api/register',
                data: $("#newUserForm").serialize(),

                beforeSend: function () {
                    $('.loader-outer').show();
                },

                success: function (data, textStatus, xhr) {
                    $('.loader-outer').hide();
                    if (xhr.status == 200) {
                        $("#newUser").hide();

                        $("#userName").html(data.result.name);
                        $("#userMobile").html(data.result.mobile);
                        $("#userEmail").html(data.result.email);
                        $("#auth_key").val(data.result.auth_key);

                        $("#userDetailDiv").show();
                    }
                },
                error:

                    function (error) {
                        $('.loader-outer').hide();
                        console.log('error');
                    }
            })
        }
    );


    $("#existingUserForm").submit(function (e) {
        $("#userDetailDiv").hide();
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: '<?php echo $_SERVER['API_ENDPOINTS'];?>/api/get_user_info',
            data: $("#existingUserForm").serialize(),

            beforeSend: function () {
                $('.loader-outer').show();
            },

            success: function (data, textStatus, xhr) {
                $('.loader-outer').hide();
                if (xhr.status == 200) {
                    $("#existingUser").hide();
                    $("#userDetailDiv").show();

                    $("#userName").html(data.name);
                    $("#userMobile").html(data.mobile);
                    $("#userEmail").html(data.email);
                    $("#auth_key").val(data.authKey);

                }
            },
            error:

                function (error) {
                    $('.loader-outer').hide();
                    console.log('error');
                }
        })
    });

    function existingUser() {
        $("#userDetailDiv").hide();
        $("#newUser").hide();
        $("#existingUser").show();
    }

    function newUser() {
        $("#userDetailDiv").hide();
        $("#existingUser").hide();
        $("#newUser").show();
    }

    function get_pricing() {
        var rooms = [];
        $('.adults').each(function () {
            rooms.push(this.value);
        });

        var child = 0;
        var adults = 0;
        $('.adults').each(function () {
            adults += parseFloat(this.value);
        });
        $('.children').each(function () {
            child += parseFloat(this.value);
        });


        $.ajax({
            type: 'POST',
            url: '<?php echo $_SERVER['API_ENDPOINTS'];?>/api/get_pricing',
            headers: {
                "auth_key": localStorage.getItem("auth_key")
            },
            data: {
                children: child,
                adults: adults,
                days: days,
                rooms: rooms,
                camp_id: propertyDetails['camp']['camp_id'],
                camp_type: subPropertyType,
                camp_code: subPropertyDetails['camp_code'],
                // coupon_code: $("#coupon_code").val(),
                from_date: fromDate,
                to_date: toDate,
                device:localStorage.getItem("device")
            },

            beforeSend: function () {
                $('.loader-outer').show();
            },

            success: function (data, textStatus, xhr) {
                $('.loader-outer').hide();
                if (xhr.status == 200) {
                    $("#finalPrice").html(Math.floor(+data.result));
                }
                if(xhr.status == 400){
                    localStorage.removeItem('auth_key');
                    localStorage.removeItem('user_type');
                    localStorage.removeItem('user_name');
                    localStorage.removeItem('user_email');
                    localStorage.removeItem('mobile');
                    top.location.href = '../index.php';
                    alert("you have been logged out");
                }
            },
            error:

                function (error) {
                    $('.loader-outer').hide();
                    console.log('error');
                }
        })
    }

    var total_rooms = 1;

    function add_room() {
        total_rooms++;
        var room = '<div class="flex-box text-center">\n' +
            '                            <div>Room ' + total_rooms + '</div>\n' +
            '                            <div>\n' +
            '                                <div>\n' +
            '                                    Adults (max <span class="adult_occupancy"></span> )\n' +
            '                                </div>\n' +
            '                                <div>\n' +
            '\n' +
            '                                    <span class="delete-button" onclick="delete_adult(this)">-</span> <input class="adults" onchange="get_pricing()" type="number" value="1" oninput="validity.valid||(value=\'\');" readonly> <span class="add-button" onclick="add_adult(this)">+</span>\n' +
            '                                    \n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                            <div>\n' +
            '                                <div>\n' +
            '                                    Children (max 2)\n' +
            '                                </div>\n' +
            '                                <div>\n' +
            '\n' +
            '                                    <span class="delete-button" onclick="delete_child(this)">-</span> <input class="children" onchange="get_pricing()" type="number" value="0" oninput="validity.valid||(value=\'\');" readonly> <span class="add-button" onclick="add_child(this)">+</span>\n' +
            '\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '\n' +
            '                        </div>';
        $("#edit_room").append(room);
        $("#no_of_person").html(total_rooms);
        get_pricing();
    }

    function remove_room() {
        if (total_rooms > 1) {
            total_rooms--;
            $("#edit_room").children().last().remove();
        }
        $("#no_of_person").html(total_rooms);
        get_pricing();
    }


    function add_adult(ele) {
        console.log(max_occupancy);
        if ($(ele).siblings(".adults").val() < max_occupancy) {
            $(ele).siblings(".adults").val(1 + parseInt($(ele).siblings(".adults").val()));
            $(ele).siblings(".adults").trigger("change");
        }
    }

    function delete_adult(ele) {
        if ($(ele).siblings(".adults").val() > 1) {
            $(ele).siblings(".adults").val(parseInt($(ele).siblings(".adults").val()) - 1);
            $(ele).siblings(".adults").trigger("change");
        }
    }

    function add_child(ele) {
        if ($(ele).siblings(".children").val() < 2) {
            $(ele).siblings(".children").val(1 + parseInt($(ele).siblings(".children").val()));
            $(ele).siblings(".children").trigger("change");
        }
    }

    function delete_child(ele) {
        if ($(ele).siblings(".children").val() > 0) {
            $(ele).siblings(".children").val(parseInt($(ele).siblings(".children").val()) - 1);
            $(ele).siblings(".children").trigger("change");
        }
    }


    $("#searchForm").submit(function (e) {
        e.preventDefault();
        if ($("#from_date").val() != '' && $("#to_date").val() != '' && $("#no_of_person").val() != '') {

            var frm = new Date($("#from_date").val());
            var to = new Date($("#to_date").val());
            fromDate = moment(frm).format('MM/DD/YYYY');
            toDate = moment(to).format('MM/DD/YYYY');

            $.ajax({
                type: 'POST',
                url: '<?php echo $_SERVER['API_ENDPOINTS'];?>/api/camp_query',
                data: {
                    destination_name: $("#destination").val(),
                    from_date: fromDate,
                    to_date: toDate,
                    booking_required: $("#no_of_person").val(),
                    queryType: "NULL"
                },
                dataType: 'json',

                beforeSend: function () {
                    $('.loader-outer').show();
                },

                success: function (data, textStatus, xhr) {
                    if (xhr.status == 200) {
                        console.log(data);
                        $('.loader-outer').hide();
                        if (data.result.length > 0) {
                            full_camp_list = data.result;
                            camp_list();
                        } else {
                            alert("No camp found");
                        }
                    } else {
                        alert("No camp found");
                    }
                },
                error:
                    function (error) {
                        $('.loader-outer').hide();
                        console.log('error');
                    }
            });
        } else {
            alert('Please fill search form correctly');
        }
    });

    function camp_list() {
        $("#campTable").show();
        var html = '';
        $.each(full_camp_list, function (index, value) {
            var type = '';
            if (value.resort) {
                $.each(value.resort, function (indx, val) {
                    console.log(val);
                    type = 'Resort';
                    html += ' <tr>\n' +
                        '                        <td>' + (+index + 1) + '</td>\n' +
                        '                        <td>' + value.camp.camp_name + '</td>\n' +
                        '                        <td>' + val.price_per_camp + '</td>\n' +
                        '                        <td>' + val.category + '</td>\n' + '   ' +
                        '                     <td>' + type + '</td>\n' +
                        '                     <td><button class="btn-primary btn" onclick="start_booking(\'' + (index) + '\',\'' + (indx) + '\',\'' + (type) + '\')">Book Now</button></td>\n' +
                        '\n' +
                        '                    </tr>';

                });
            }
            if (value.tent) {
                $.each(value.tent, function (indx, val) {
                    console.log(val);
                    type = 'Tent';
                    html += ' <tr>\n' +
                        '                        <td>' + (+index + 1) + '</td>\n' +
                        '                        <td>' + value.camp.camp_name + '</td>\n' +
                        '                        <td>' + val.price_per_camp + '</td>\n' +
                        '                        <td>' + val.category + '</td>\n' + '   ' +
                        '                     <td>' + type + '</td>\n' +
                        '                     <td><button class="btn-primary btn" onclick="start_booking(\'' + (index) + '\',\'' + (indx) + '\',\'' + (type) + '\')">Book Now</button></td>\n' +
                        '\n' +
                        '                    </tr>';

                });
            }
            if (value.cottage) {
                $.each(value.cottage, function (indx, val) {
                    console.log(val);
                    type = 'Cottage';
                    html += ' <tr>\n' +
                        '                        <td>' + (+index + 1) + '</td>\n' +
                        '                        <td>' + value.camp.camp_name + '</td>\n' +
                        '                        <td>' + val.price_per_camp + '</td>\n' +
                        '                        <td>' + val.category + '</td>\n' + '  ' +
                        '                      <td>' + type + '</td>\n' +
                        '                      <td><button class="btn-primary btn" onclick="start_booking(\'' + (index) + '\',\'' + (indx) + '\',\'' + (type) + '\')">Book Now</button></td>\n' +
                        '\n' +
                        '                    </tr>';

                });
            }
            if (value.swiss) {
                $.each(value.swiss, function (indx, val) {
                    console.log(val);
                    type = 'Swiss';
                    html += ' <tr>\n' +
                        '                        <td>' + (+index + 1) + '</td>\n' +
                        '                        <td>' + value.camp.camp_name + '</td>\n' +
                        '                        <td>' + val.price_per_camp + '</td>\n' +
                        '                        <td>' + val.category + '</td>\n' + '  ' +
                        '                      <td>' + type + '</td>\n' +
                        '                      <td><button class="btn-primary btn" onclick="start_booking(\'' + (index) + '\',\'' + (indx) + '\',\'' + (type) + '\')">Book Now</button></td>\n' +
                        '\n' +
                        '                    </tr>';

                });
            }
            if (value.dome) {
                $.each(value.dome, function (indx, val) {
                    console.log(val);
                    type = 'Dome';
                    html += ' <tr>\n' +
                        '                        <td>' + (+index + 1) + '</td>\n' +
                        '                        <td>' + value.camp.camp_name + '</td>\n' +
                        '                        <td>' + val.price_per_camp + '</td>\n' +
                        '                        <td>' + val.category + '</td>\n' + ' ' +
                        '                       <td>' + type + '</td>\n' +
                        '                       <td><button class="btn-primary btn" onclick="start_booking(\'' + (index) + '\',\'' + (indx) + '\',\'' + (type) + '\')">Book Now</button></td>\n' +
                        '\n' +
                        '                    </tr>';

                });
            }
            if (value.homestay) {
                $.each(value.homestay, function (indx, val) {
                    console.log(val);
                    type = 'Homestay';
                    html += ' <tr>\n' +
                        '                        <td>' + (+index + 1) + '</td>\n' +
                        '                        <td>' + value.camp.camp_name + '</td>\n' +
                        '                        <td>' + val.price_per_camp + '</td>\n' +
                        '                        <td>' + val.category + '</td>\n' +
                        '                        <td>' + type + '</td>\n' +
                        '                        <td><button class="btn-primary btn" onclick="start_booking(\'' + (index) + '\',\'' + (indx) + '\',\'' + (type) + '\')">Book Now</button></td>\n' +
                        '\n' +
                        '                    </tr>';

                });
            }

        });
        $("#propertyTable").html(html);
    }

    function start_booking(propIndex, subPropIndex, type) {
        propertyDetails = full_camp_list[propIndex];
        subPropertyDetails = full_camp_list[propIndex][type.toLowerCase()][subPropIndex];
        subPropertyType = type;

        max_occupancy = full_camp_list[propIndex][type.toLowerCase()][subPropIndex]['occupancy'];
        days = Math.floor((Date.parse(toDate) - Date.parse(fromDate)) / 86400000);
        if (days == 0) {
            days = 1;
        }
        $("#campTable").hide();
        $("#campBooking").show();
        get_pricing();
    }

    function show_nav() {
        $('.navbar-collapse').toggle();
    }

    function copy_link() {
        document.getElementById("invite_link").select();
        document.execCommand("copy");
    }


</script><!--Start of Tawk.to Script-->
<script type="text/javascript">
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/5d92f6b7db28311764d6a4f9/default';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
    })();
</script>
<!--End of Tawk.to Script-->
</body>
</html>
