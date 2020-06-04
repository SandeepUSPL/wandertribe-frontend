<html>
<head>    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149144948-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-149144948-1');
    </script>
    <title>Edit Property</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8"/>

    <link rel="icon" type="image/ico" href="images/favicon.ico"/>
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!--<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">-->
    <link rel="stylesheet" href="css/animate.min.css">
    <link rel="stylesheet" href="css/rickshaw.min.css">
    <link rel="stylesheet" href="css/bootstrap-checkbox.css">
    <link rel="stylesheet" href="css/summernote.css">
    <link rel="stylesheet" href="css/summernote-bs3.css">
    <link rel="stylesheet" href="css/chosen.min.css">
    <link rel="stylesheet" href="css/chosen-bootstrap.css">
    <link rel="stylesheet" href="css/owl.carousel.css">
    <link rel="stylesheet" href="css/owl.theme.css">
    <link rel="stylesheet" href="js/plugins/tabdrop/css/tabdrop.css">
    <link href="css/minoral.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
    <style>

        .add-form {
            margin-top: 30px;
        }

        .add-form input {
            border-radius: 10px !important;

        }

        .form-group {
            margin: 12px 0px !important;
        }

        .form-group label {
            text-align: right;
        }

        .form-nav {
            margin-top: 40px;
        }

        .form-nav input {
            width: 50%;
            background: #2d0829;
            color: white;
        }

        .form-nav > div:first-child {
            text-align: -webkit-right;
        }

        .show-image-div {
            height: 370px;
            overflow-y: scroll;
            overflow: auto;
            background: whitesmoke;
            background-clip: content-box;
        }

        .show-tent-image-div {
            height: 300px;
            overflow-y: scroll;
            overflow: auto;
            background: whitesmoke;
            background-clip: content-box;
        }

        .show-image-div img {
            margin: 10px;
            width: 90%;
        }

        .show-tent-image-div img {
            margin: 10px;
            width: 90%;
        }

        @media screen and (max-width: 600px) {
            .form-group label {
                text-align: left;
            }

            .show-tent-image-div {
                height: 150px;
            }

            .show-image-div {
                height: 150px;
            }

            .form-nav input {
                width: 100%;
                margin: 10px;
            }

            .navbar-collapse {
                display: none;
            }

            .tablinks img {
                float: none;
            }

            #content {
                padding-left: 5px !important;
                padding-right: 5px !important;
            }
        }

        .bg-error {
            background-color: antiquewhite !important;
        }

        @media screen and (min-width: 601px) {
            .add-form {
                margin-top: 30px;
                font-size: 0.85vw;
            }

            .navbar-collapse {
                display: block !important;
            }
        }

    </style>
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
                        <!--                        <ul class="dropdown-menu">-->
                        <!--                            <li class="">-->
                        <!--                                <a href="#" title="Upcoming Booking" onclick="upcoming_booking()">-->
                        <!--                                    <i class="fa fa-thumb-tack"><span class="overlay-label green80"></span></i>-->
                        <!--                                    Upcoming Booking-->
                        <!--                                </a>-->
                        <!--                            </li>-->
                        <!--                            <li>-->
                        <!--                                <a href="#" title="Past Booking" onclick="past_booking()">-->
                        <!--                                    <i class="fa fa-check-square"><span class="overlay-label green60"></span></i>-->
                        <!--                                    Past Booking-->
                        <!--                                </a>-->
                        <!--                            </li>-->
                        <!--                            <li>-->
                        <!--                                <a href="#" title="Cancelled Booking" onclick="cancelled_booking()">-->
                        <!--                                    <i class="fa fa-shield"><span class="overlay-label green40"></span></i>-->
                        <!--                                    Cancelled Booking-->
                        <!--                                </a>-->
                        <!--                            </li>-->
                        <!--                        </ul>-->
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
                    <!--                    <li class="dropdown">-->
                    <!--                        <a href="../editProperty.php" title="Add Property">-->
                    <!--                            <i class="fa fa-dashboard">-->
                    <!--                                <span class="overlay-label red"></span>-->
                    <!--                            </i>-->
                    <!--                            Edit Property <b class="fa fa-angle-left dropdown-arrow"></b>-->
                    <!--                        </a>-->
                    <!--                    </li>-->

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
                <!-- Sidebar end -->


            </div>
            <!--/.nav-collapse -->


        </div>
        <!-- Fixed navbar end -->


        <!-- Page content -->
        <div id="content" class="col-md-12">

            <!-- submenu -->
            <div class="submenu">
                <h1><strong>Edit Property Type</strong></h1>
                <div class="collapsed">
                    <a href="#" id="submenutoggle"><h1>Edit Property Type<i class="fa fa-bars"></i></h1></a>
                </div>
            </div>
            <!-- /submenu -->

            <!-- content main container -->
            <div class="main row">

                <div class="col-lg-12 margin-bottom-20">
                    <button class="btn btn-drank  margin-left-20" onclick="edit_property(<?php echo $_GET['c_id']; ?>)">
                        Edit Main Property Details
                    </button>
                </div>


                <form class="add-form" enctype="multipart/form-data" id="formId">

                    <!--                    <div id="first_part" style="">-->
                    <!---->
                    <!--                        <div class="col-md-7 col-sm-7 col-xs-12">-->

                    <input type="hidden" name="camp_id" id="camp_id" value="
                    <?php echo $_GET['c_id']; ?>">
                    <input type="hidden" name="camp_code" value="<?php echo $_GET['c_code']; ?>">
                    <input type="hidden" name="camp_type" value="<?php echo $_GET['c_type']; ?>">
                    <input type="hidden" name="type_id" id="type_id" value="">
                    <!--                            <input type="hidden" name="is_tent" id="is_tent" value="">-->
                    <!--                            <input type="hidden" name="is_dome" id="is_dome" value="">-->
                    <!--                            <input type="hidden" name="is_cottage" id="is_cottage" value="">-->
                    <!--                            <input type="hidden" name="is_swiss" id="is_swiss" value="">-->
                    <!--                            <input type="hidden" name="is_homestay" id="is_homestay" value="">-->

                    <!--                            <div class="col-md-12 col-sm-12 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">Search Your Destination</label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <select class="form-control" name="destination_name" id="destination_name">-->
                    <!--                                        <option value="Pangot">Pangot</option>-->
                    <!--                                        <option value="Bir Billing">Bir Billing</option>-->
                    <!--                                        <option value="Kanatal">Kanatal</option>-->
                    <!--                                        <option value="Leh">Leh</option>-->
                    <!--                                        <option value="Kasol">Kasol</option>-->
                    <!--                                        <option value="McLeod Ganj">McLeod Ganj</option>-->
                    <!--                                        <option value="Naggar">Naggar</option>-->
                    <!--                                        <option value="Rishikesh">Rishikesh</option>-->
                    <!--                                        <option value="Jibhi">Jibhi</option>-->
                    <!--                                        <option value="Chail">Chail</option>-->
                    <!--                                        <option value="Tirthan Valley">Tirthan Valley</option>-->
                    <!--                                        <option value="Mukteshwar">Mukteshwar</option>-->
                    <!--                                        <option value="Shoghi">Shoghi</option>-->
                    <!--                                        <option value="Barot">Barot</option>-->
                    <!--                                        <option value="Naldehra">Naldehra</option>-->
                    <!--                                        <option value="Narkanda">Narkanda</option>-->
                    <!--                                        <option value="Dehradun">Dehradun</option>-->
                    <!--                                        <option value="Dharamshala">Dharamshala</option>-->
                    <!--                                        <option value="Manali">Manali</option>-->
                    <!--                                        <option value="Shimla">Shimla</option>-->
                    <!--                                    </select>-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!--                            <div class="col-md-12 col-sm-12 col-xs-12 form-group">-->
                    <!--                                <label for="camp_name" class="col-md-5 col-sm-5 col-xs-12 control-label">Property-->
                    <!--                                    Name* </label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="text" class="form-control" id="camp_name" name="camp_name" value="">-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-12 col-sm-12 col-xs-12 form-group">-->
                    <!--                                <label for="manager_name" class="col-md-5 col-sm-5 col-xs-12 control-label">Property-->
                    <!--                                    manager Name </label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="text" class="form-control" id="manager_name" name="manager_name"-->
                    <!--                                           value="">-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-12 col-sm-12 col-xs-12 form-group">-->
                    <!--                                <label for="manager_mobile_no" class="col-md-5 col-sm-5 col-xs-12 control-label">Property-->
                    <!--                                    Manager mobile No </label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="number" max="9999999999" class="form-control" id="manager_mobile_no"-->
                    <!--                                           name="manager_mobile_no" value="" pattern="/^-?\d+\.?\d*$/"-->
                    <!--                                           onKeyPress="if((this.value.length==10)) return false;" min="0"-->
                    <!--                                           oninput="validity.valid||(value='');">-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-12 col-sm-12 col-xs-12 form-group">-->
                    <!--                                <label for="manager_email_id" class="col-md-5 col-sm-5 col-xs-12 control-label">Property-->
                    <!--                                    manager email id </label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="email" class="form-control" id="manager_email_id"-->
                    <!--                                           name="manager_email_id" value="">-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-12 col-sm-12 col-xs-12 form-group">-->
                    <!--                                <label for="landmark"-->
                    <!--                                       class="col-md-5 col-sm-5 col-xs-12 control-label">Landmark </label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="text" class="form-control" id="landmark" name="landmark" value="">-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-12 col-sm-12 col-xs-12 form-group">-->
                    <!--                                <label for="address" class="col-md-5 col-sm-5 col-xs-12 control-label">Address </label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="text" class="form-control" id="address" name="address" value="">-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-12 col-sm-12 col-xs-12 form-group">-->
                    <!--                                <label for="gst_no" class="col-md-5 col-sm-5 col-xs-12 control-label">GST No. </label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="text" class="form-control" id="gst_no" name="gst_no" value=""-->
                    <!--                                           maxlength="15">-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                                                       <div class="row form-group">-->
                    <!--                                                           <label for="meal_image" class="col-md-5 col-sm-5 col-xs-12 control-label">Add Meal Menu Image </label>-->
                    <!--                                                           <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                                               <input type="file" class="form-control" id="meal_image" name="meal_image[]" placeholder="" multiple>-->
                    <!--                                                           </div>-->
                    <!--                                                       </div>-->
                    <!---->
                    <!--                        </div>-->
                    <!---->
                    <!--                        <div class="col-md-5 col-sm-5 col-xs-12">-->
                    <!---->
                    <!--                            <div class="row form-group">-->
                    <!--                                <label class="col-md-12 col-sm-12 col-xs-12 control-label" style="text-align: left">Add-->
                    <!--                                    Property Image </label>-->
                    <!--                                <div class="col-md-12 col-sm-12 col-xs-12">-->
                    <!--                                    <input type="file" class="form-control" id="camp_image" name="camp_image[]"-->
                    <!--                                           placeholder="" onchange="show_camp_image(this);" multiple>-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-6 text-center margin-top-10">-->
                    <!--                                New Images-->
                    <!--                            </div>-->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-6 text-center margin-top-10">-->
                    <!--                                Old Images-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-6 show-tent-image-div" id="camp_image_div">-->
                    <!--                                <p>-->
                    <!--                                    Please Upload all images at once...-->
                    <!--                                </p>-->
                    <!---->
                    <!--                            </div>-->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-6 show-tent-image-div" id="old_camp_image_div">-->
                    <!---->
                    <!--                            </div>-->
                    <!---->
                    <!--                        </div>-->
                    <!---->
                    <!--                        <div class="col-md-12 col-sm-12 col-xs-12 form-nav">-->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12">-->
                    <!--                                <input type="button" value="Previous" class="form-control" disabled>-->
                    <!--                            </div>-->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12">-->
                    <!--                                <input type="button" value="Next" class="form-control" onclick="get_second_part()">-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!---->
                    <!--                    </div>-->
                    <!---->
                    <!--                    <div id="second_part" style="display: none">-->
                    <!---->
                    <!--                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">Swimming Pool</label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <select class="form-control" name="swimming_pool" id="swimming_pool">-->
                    <!--                                        <option value="Y">Y</option>-->
                    <!--                                        <option value="N">N</option>-->
                    <!--                                    </select>-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">WIFI</label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <select class="form-control" name="wifi" id="wifi">-->
                    <!--                                        <option value="Y">Y</option>-->
                    <!--                                        <option value="N">N</option>-->
                    <!--                                    </select>-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">Mobile Network</label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <select class="form-control" name="mobile_network" id="mobile_network">-->
                    <!--                                        <option value="Y">Y</option>-->
                    <!--                                        <option value="N">N</option>-->
                    <!--                                    </select>-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">CCTV</label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <select class="form-control" name="cctv" id="cctv">-->
                    <!--                                        <option value="Y">Y</option>-->
                    <!--                                        <option value="N">N</option>-->
                    <!--                                    </select>-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">Food</label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="checkbox" name="food_veg" value="food_veg" id="food_veg"> Veg<br>-->
                    <!--                                    <input type="checkbox" name="food_non_veg" value="food_non_veg" id="food_non_veg">-->
                    <!--                                    Non-Veg-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">Category</label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="checkbox" name="couple_friendly" value="Y"-->
                    <!--                                           id="couple_friendly">-->
                    <!--                                    Couples <br>-->
                    <!--                                    <input type="checkbox" name="family_friendly" value="Y"-->
                    <!--                                           id="family_friendly">-->
                    <!--                                    Family <br>-->
                    <!--                                    <input type="checkbox" name="youngsters_friendly" value="Y"-->
                    <!--                                           id="youngsters_friendly">-->
                    <!--                                    Youngsters <br>-->
                    <!--                                    <input type="checkbox" name="day_off" value="Y"-->
                    <!--                                           id="day_off">-->
                    <!--                                    Day-Off <br>-->
                    <!--                                    <input type="checkbox" name="female_friendly" value="Y"-->
                    <!--                                           id="female_friendly">-->
                    <!--                                    Female Special <br>-->
                    <!--                                    <input type="checkbox" name="senior_citizen_friendly"-->
                    <!--                                           value="Y"-->
                    <!--                                           id="senior_citizen_friendly">-->
                    <!--                                    Senior Citizen <br>-->
                    <!--                                    <input type="checkbox" name="dog_friendly" value="Y"-->
                    <!--                                           id="dog_friendly">-->
                    <!--                                    Dog Friendly<br>-->
                    <!--                                    <input type="checkbox" name="luxury" value="Y"-->
                    <!--                                           id="luxury">-->
                    <!--                                    Luxury-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">Bonfire</label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <select class="form-control" name="bonfire" id="bonfire">-->
                    <!--                                        <option value="Y">Y</option>-->
                    <!--                                        <option value="N">N</option>-->
                    <!--                                    </select>-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">Breakfast Charges </label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="number" class="form-control" id="breakfast_charges"-->
                    <!--                                           name="breakfast_charges" value="" min="0"-->
                    <!--                                           oninput="validity.valid||(value='');">-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">Evening Snacks Charges </label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="number" class="form-control" id="evening_snacks_charges"-->
                    <!--                                           name="evening_snacks_charges" value="" min="0"-->
                    <!--                                           oninput="validity.valid||(value='');">-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">Veg Lunch Charges </label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="number" class="form-control" id="veg_lunch_charges"-->
                    <!--                                           name="veg_lunch_charges" value="" min="0"-->
                    <!--                                           oninput="validity.valid||(value='');">-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">Non-Veg Lunch Charges </label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="number" class="form-control" id="nonveg_lunch_charges"-->
                    <!--                                           name="nonveg_lunch_charges" value="" min="0"-->
                    <!--                                           oninput="validity.valid||(value='');">-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">Veg Dinner Charges </label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="number" class="form-control" id="veg_dinner_charges"-->
                    <!--                                           name="veg_dinner_charges" value="" min="0"-->
                    <!--                                           oninput="validity.valid||(value='');">-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">Non-Veg Dinner Charges </label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="number" class="form-control" id="nonveg_dinner_charges"-->
                    <!--                                           name="nonveg_dinner_charges" value="" min="0"-->
                    <!--                                           oninput="validity.valid||(value='');">-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">Guide Charges<br>(if Available)</label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="number" class="form-control" id="guide_charges" name="guide_charges"-->
                    <!--                                           value="" min="0" oninput="validity.valid||(value='');">-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!---->
                    <!--                        </div>-->
                    <!---->
                    <!--                        <div class="col-md-5 col-sm-5 col-xs-12">-->
                    <!---->
                    <!--                            <div class="row form-group">-->
                    <!--                                <div class="col-md-12 col-sm-12 col-xs-12">-->
                    <!--                                    <label class="col-md-12 col-sm-12 col-xs-12 control-label" style="text-align: left">Add-->
                    <!--                                        Meal Image </label>-->
                    <!--                                    <input type="file" class="form-control" id="meal_image" name="meal_image[]"-->
                    <!--                                           placeholder="" onchange="show_meal_image(this);" multiple>-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-6 text-center margin-top-10">-->
                    <!--                                New Images-->
                    <!--                            </div>-->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-6 text-center margin-top-10">-->
                    <!--                                Old Images-->
                    <!--                            </div>-->
                    <!---->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-6 show-tent-image-div" id="meal_image_div">-->
                    <!--                                <p>-->
                    <!--                                    Please Upload all images at once...-->
                    <!--                                </p>-->
                    <!---->
                    <!--                            </div>-->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-6 show-tent-image-div" id="old_meal_image_div">-->
                    <!---->
                    <!--                            </div>-->
                    <!---->
                    <!--                        </div>-->
                    <!---->
                    <!--                        <div class="col-md-12 col-sm-12 col-xs-12 form-nav">-->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12">-->
                    <!--                                <input type="button" value="Previous" class="form-control" onclick="get_first_part()">-->
                    <!--                            </div>-->
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12">-->
                    <!--                                <input type="button" value="Next" class="form-control" onclick="get_third_part()">-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!---->
                    <!--                    </div>-->

                    <div id="third_part">

                        <!--                        <div class="col-md-12 col-sm-12 col-xs-12">-->
                        <!---->
                        <!--                            <div class="row tab">-->
                        <!--                                <div class="col-xs-2 tablinks active" onclick="chnageTab(event, 'dome')">-->
                        <!--                                    <img src="../img/dome-tent.png">-->
                        <!--                                    Dome-->
                        <!--                                </div>-->
                        <!--                                <div class="col-xs-2 tablinks" onclick="chnageTab(event, 'tent')">-->
                        <!--                                    <img src="../img/alpine-tent.png">-->
                        <!--                                    Alpine-->
                        <!--                                </div>-->
                        <!--                                <div class="col-xs-2 tablinks" onclick="chnageTab(event, 'swiss')">-->
                        <!--                                    <img src="../img/swiss-tent.png">-->
                        <!--                                    Swiss-->
                        <!--                                </div>-->
                        <!--                                <div class="col-xs-2 tablinks" onclick="chnageTab(event, 'cottage')">-->
                        <!--                                    <img src="../img/cottage-tent1.png">-->
                        <!--                                    Cottage-->
                        <!--                                </div>-->
                        <!--                                <div class="col-xs-2 tablinks" onclick="chnageTab(event, 'homestay')">-->
                        <!--                                    <img src="../img/homestay-tent.png">-->
                        <!--                                    Home Stay-->
                        <!--                                </div>-->
                        <!--                            </div>-->
                        <!---->
                        <!--                            <div id="dome" class="col-md-12 col-sm-12 col-xs-12 tabcontent" style="display: block">-->
                        <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Max Occupancy</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="dome_occupancy" id="dome_occupancy">-->
                        <!--                                                <option value="single">Single</option>-->
                        <!--                                                <option value="double">Double</option>-->
                        <!--                                                <option value="triple">Triple</option>-->
                        <!--                                                <option value="quad">Quad</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label for="address"-->
                        <!--                                               class="col-md-5 col-sm-5 col-xs-12 control-label">Category </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="text" class="form-control" id="dome_category"-->
                        <!--                                                   name="dome_category" value="">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Price per camp </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control" id="dome_price_per_camp"-->
                        <!--                                                   name="dome_price_per_camp" value="" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Price per-->
                        <!--                                            Person </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control" id="dome_price_per_person"-->
                        <!--                                                   name="dome_price_per_person" value="" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Inventory </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control" id="dome_no_of_inventory"-->
                        <!--                                                   name="dome_no_of_inventory" value="" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">CGST (%)</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control gst" id="dome_cgst"-->
                        <!--                                                   name="dome_cgst" value="" max="100" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">SGST (%)</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control gst" id="dome_sgst"-->
                        <!--                                                   name="dome_sgst" value="" max="100" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">IGST (%)</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control gst" id="dome_igst"-->
                        <!--                                                   name="dome_igst" value="" max="100" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Temprature-->
                        <!--                                            Controller </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="dome_temprature_controller"-->
                        <!--                                                    id="dome_temprature_controller">-->
                        <!--                                                <option value="fan">Fan</option>-->
                        <!--                                                <option value="cooler">Cooler</option>-->
                        <!--                                                <option value="ac">AC</option>-->
                        <!--                                                <option value="none">None</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Power<br>Supply</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="dome_power_supply"-->
                        <!--                                                    id="dome_power_supply">-->
                        <!--                                                <option value="common">Common</option>-->
                        <!--                                                <option value="private">Private</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Washroom </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="dome_washroom" id="dome_washroom">-->
                        <!--                                                <option value="common">Common</option>-->
                        <!--                                                <option value="private">Private</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Washroom Type </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="checkbox" name="dome_indian" value="indian" id="dome_indian">-->
                        <!--                                            Indian <br>-->
                        <!--                                            <input type="checkbox" name="dome_western" value="western"-->
                        <!--                                                   id="dome_western">Western <br>-->
                        <!--                                            <input type="checkbox" name="dome_pit" value="pit" id="dome_pit">Pit-->
                        <!---->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!---->
                        <!--                                </div>-->
                        <!---->
                        <!--                                <div class="col-md-5 col-sm-5 col-xs-12">-->
                        <!---->
                        <!--                                    <div class="row form-group">-->
                        <!--                                        <div class="col-md-12 col-sm-12 col-xs-12">-->
                        <!--                                            <label class="col-md-12 col-sm-12 col-xs-12 control-label"-->
                        <!--                                                   style="text-align: left">Add Dome Image </label>-->
                        <!--                                            <input type="file" class="form-control" id="dome_image" name="dome_image[]"-->
                        <!--                                                   placeholder="" onchange="show_dome_image(this);" multiple>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 text-center margin-top-10">-->
                        <!--                                        New Images-->
                        <!--                                    </div>-->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 text-center margin-top-10">-->
                        <!--                                        Old Images-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 show-tent-image-div" id="dome_image_div">-->
                        <!--                                        <p>-->
                        <!--                                            Please Upload all images at once...-->
                        <!--                                        </p>-->
                        <!---->
                        <!--                                    </div>-->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 show-tent-image-div" id="old_dome_image_div">-->
                        <!---->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                </div>-->
                        <!---->
                        <!--                            </div>-->
                        <!---->
                        <!--                            <div id="tent" class="col-md-12 col-sm-12 col-xs-12 tabcontent">-->
                        <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Max Occupancy</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="tent_occupancy" id="tent_occupancy">-->
                        <!--                                                <option value="single">Single</option>-->
                        <!--                                                <option value="double">Double</option>-->
                        <!--                                                <option value="triple">Triple</option>-->
                        <!--                                                <option value="quad">Quad</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label for="address"-->
                        <!--                                               class="col-md-5 col-sm-5 col-xs-12 control-label">Category </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="text" class="form-control" id="tent_category"-->
                        <!--                                                   name="tent_category" value="">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Price per camp </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control" id="tent_price_per_camp"-->
                        <!--                                                   name="tent_price_per_camp" value="" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Price per-->
                        <!--                                            Person </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control" id="tent_price_per_person"-->
                        <!--                                                   name="tent_price_per_person" value="" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Inventory </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control" id="tent_no_of_inventory"-->
                        <!--                                                   name="tent_no_of_inventory" value="" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">CGST (%)</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control gst" id="tent_cgst"-->
                        <!--                                                   name="tent_cgst" value="" max="100" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">SGST (%)</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control gst" id="tent_sgst"-->
                        <!--                                                   name="tent_sgst" value="" max="100" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">IGST (%)</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control gst" id="tent_igst"-->
                        <!--                                                   name="tent_igst" value="" max="100" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Temprature-->
                        <!--                                            Controller </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="tent_temprature_controller"-->
                        <!--                                                    id="tent_temprature_controller">-->
                        <!--                                                <option value="fan">Fan</option>-->
                        <!--                                                <option value="cooler">Cooler</option>-->
                        <!--                                                <option value="ac">AC</option>-->
                        <!--                                                <option value="none">None</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Power<br>Supply</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="tent_power_supply"-->
                        <!--                                                    id="tent_power_supply">-->
                        <!--                                                <option value="common">Common</option>-->
                        <!--                                                <option value="private">Private</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Washroom </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="tent_washroom" id="tent_washroom">-->
                        <!--                                                <option value="common">Common</option>-->
                        <!--                                                <option value="private">Private</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Washroom Type </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="checkbox" name="tent_indian" value="indian" id="tent_indian">-->
                        <!--                                            Indian <br>-->
                        <!--                                            <input type="checkbox" name="tent_western" value="western"-->
                        <!--                                                   id="tent_western">Western <br>-->
                        <!--                                            <input type="checkbox" name="tent_pit" value="pit" id="tent_pit">Pit-->
                        <!---->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!---->
                        <!--                                </div>-->
                        <!---->
                        <!--                                <div class="col-md-5 col-sm-5 col-xs-12">-->
                        <!---->
                        <!--                                    <div class="row form-group">-->
                        <!--                                        <div class="col-md-12 col-sm-12 col-xs-12">-->
                        <!--                                            <label class="col-md-12 col-sm-12 col-xs-12 control-label"-->
                        <!--                                                   style="text-align: left">Add Alpine Tent Image </label>-->
                        <!--                                            <input type="file" class="form-control" id="tent_image" name="tent_image[]"-->
                        <!--                                                   placeholder="" onchange="show_tent_image(this);" multiple>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 text-center margin-top-10">-->
                        <!--                                        New Images-->
                        <!--                                    </div>-->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 text-center margin-top-10">-->
                        <!--                                        Old Images-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 show-tent-image-div" id="tent_image_div">-->
                        <!--                                        <p>-->
                        <!--                                            Please Upload all images at once...-->
                        <!--                                        </p>-->
                        <!---->
                        <!--                                    </div>-->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 show-tent-image-div" id="old_tent_image_div">-->
                        <!---->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                </div>-->
                        <!---->
                        <!--                            </div>-->
                        <!---->
                        <!--                            <div id="swiss" class="col-md-12 col-sm-12 col-xs-12 tabcontent">-->
                        <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Max Occupancy</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="swiss_occupancy" id="swiss_occupancy">-->
                        <!--                                                <option value="single">Single</option>-->
                        <!--                                                <option value="double">Double</option>-->
                        <!--                                                <option value="triple">Triple</option>-->
                        <!--                                                <option value="quad">Quad</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label for="address"-->
                        <!--                                               class="col-md-5 col-sm-5 col-xs-12 control-label">Category </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="text" class="form-control" id="swiss_category"-->
                        <!--                                                   name="swiss_category" value="">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Price per camp </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control" id="swiss_price_per_camp"-->
                        <!--                                                   name="swiss_price_per_camp" value="" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Price per-->
                        <!--                                            Person </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control" id="swiss_price_per_person"-->
                        <!--                                                   name="swiss_price_per_person" value="" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Inventory </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control" id="swiss_no_of_inventory"-->
                        <!--                                                   name="swiss_no_of_inventory" value="" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">CGST (%)</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control gst" id="swiss_cgst"-->
                        <!--                                                   name="swiss_cgst" value="" max="100" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">SGST (%)</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control gst" id="swiss_sgst"-->
                        <!--                                                   name="swiss_sgst" value="" max="100" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">IGST (%)</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control gst" id="swiss_igst"-->
                        <!--                                                   name="swiss_igst" value="" max="100" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Temprature-->
                        <!--                                            Controller </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="swiss_temprature_controller"-->
                        <!--                                                    id="swiss_temprature_controller">-->
                        <!--                                                <option value="fan">Fan</option>-->
                        <!--                                                <option value="cooler">Cooler</option>-->
                        <!--                                                <option value="ac">AC</option>-->
                        <!--                                                <option value="none">None</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Power<br>Supply</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="swiss_power_supply"-->
                        <!--                                                    id="swiss_power_supply">-->
                        <!--                                                <option value="common">Common</option>-->
                        <!--                                                <option value="private">Private</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Washroom </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="swiss_washroom" id="swiss_washroom">-->
                        <!--                                                <option value="common">Common</option>-->
                        <!--                                                <option value="private">Private</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Washroom Type </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="checkbox" name="swiss_indian" value="indian" id="swiss_indian">-->
                        <!--                                            Indian <br>-->
                        <!--                                            <input type="checkbox" name="swiss_western" value="western"-->
                        <!--                                                   id="swiss_western">Western <br>-->
                        <!--                                            <input type="checkbox" name="swiss_pit" value="pit" id="swiss_pit">Pit-->
                        <!---->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!---->
                        <!--                                </div>-->
                        <!---->
                        <!--                                <div class="col-md-5 col-sm-5 col-xs-12">-->
                        <!---->
                        <!--                                    <div class="row form-group">-->
                        <!--                                        <div class="col-md-12 col-sm-12 col-xs-12">-->
                        <!--                                            <label class="col-md-12 col-sm-12 col-xs-12 control-label"-->
                        <!--                                                   style="text-align: left">Add Swiss Image </label>-->
                        <!--                                            <input type="file" class="form-control" id="swiss_image"-->
                        <!--                                                   name="swiss_image[]" placeholder=""-->
                        <!--                                                   onchange="show_swiss_image(this);" multiple>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 text-center margin-top-10">-->
                        <!--                                        New Images-->
                        <!--                                    </div>-->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 text-center margin-top-10">-->
                        <!--                                        Old Images-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 show-tent-image-div" id="swiss_image_div">-->
                        <!--                                        <p>-->
                        <!--                                            Please Upload all images at once...-->
                        <!--                                        </p>-->
                        <!---->
                        <!--                                    </div>-->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 show-tent-image-div"-->
                        <!--                                         id="old_swiss_image_div">-->
                        <!---->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                </div>-->
                        <!---->
                        <!--                            </div>-->
                        <!---->
                        <!--                            <div id="cottage" class="col-md-12 col-sm-12 col-xs-12 tabcontent">-->
                        <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Max Occupancy</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="tent_occupancy" id="tent_occupancy">-->
                        <!--                                                <option value="single">Single</option>-->
                        <!--                                                <option value="double">Double</option>-->
                        <!--                                                <option value="triple">Triple</option>-->
                        <!--                                                <option value="quad">Quad</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label for="address"-->
                        <!--                                               class="col-md-5 col-sm-5 col-xs-12 control-label">Category </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="text" class="form-control" id="cottage_category"-->
                        <!--                                                   name="cottage_category" value="">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Price per camp </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control" id="cottage_price_per_camp"-->
                        <!--                                                   name="cottage_price_per_camp" value="" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Price per-->
                        <!--                                            Person </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control" id="cottage_price_per_person"-->
                        <!--                                                   name="cottage_price_per_person" value="" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Inventory </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control" id="cottage_no_of_inventory"-->
                        <!--                                                   name="cottage_no_of_inventory" value="" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">CGST (%)</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control gst" id="cottage_cgst"-->
                        <!--                                                   name="cottage_cgst" value="" max="100" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">SGST (%)</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control gst" id="cottage_sgst"-->
                        <!--                                                   name="cottage_sgst" value="" max="100" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">IGST (%)</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="number" class="form-control gst" id="cottage_igst"-->
                        <!--                                                   name="cottage_igst" value="" max="100" min="0"-->
                        <!--                                                   oninput="validity.valid||(value='');">-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Temprature-->
                        <!--                                            Controller </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="cottage_temprature_controller"-->
                        <!--                                                    id="cottage_temprature_controller">-->
                        <!--                                                <option value="fan">Fan</option>-->
                        <!--                                                <option value="cooler">Cooler</option>-->
                        <!--                                                <option value="ac">AC</option>-->
                        <!--                                                <option value="none">None</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Power<br>Supply</label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="cottage_power_supply"-->
                        <!--                                                    id="cottage_power_supply">-->
                        <!--                                                <option value="common">Common</option>-->
                        <!--                                                <option value="private">Private</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Washroom </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <select class="form-control" name="cottage_washroom" id="cottage_washroom">-->
                        <!--                                                <option value="common">Common</option>-->
                        <!--                                                <option value="private">Private</option>-->
                        <!--                                            </select>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                        <!--                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Washroom Type </label>-->
                        <!--                                        <div class="col-md-7 col-sm-7 col-xs-12">-->
                        <!--                                            <input type="checkbox" name="cottage_indian" value="indian"-->
                        <!--                                                   id="cottage_indian"> Indian <br>-->
                        <!--                                            <input type="checkbox" name="cottage_western" value="western"-->
                        <!--                                                   id="cottage_western">Western <br>-->
                        <!--                                            <input type="checkbox" name="cottage_pit" value="pit" id="cottage_pit">Pit-->
                        <!---->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!---->
                        <!---->
                        <!--                                </div>-->
                        <!---->
                        <!--                                <div class="col-md-5 col-sm-5 col-xs-12">-->
                        <!---->
                        <!--                                    <div class="row form-group">-->
                        <!--                                        <div class="col-md-12 col-sm-12 col-xs-12">-->
                        <!--                                            <label class="col-md-12 col-sm-12 col-xs-12 control-label"-->
                        <!--                                                   style="text-align: left">Add Cottage Image </label>-->
                        <!--                                            <input type="file" class="form-control" id="cottage_image"-->
                        <!--                                                   name="cottage_image[]" placeholder=""-->
                        <!--                                                   onchange="show_cottage_image(this);" multiple>-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 text-center margin-top-10">-->
                        <!--                                        New Images-->
                        <!--                                    </div>-->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 text-center margin-top-10">-->
                        <!--                                        Old Images-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 show-tent-image-div" id="cottage_image_div">-->
                        <!--                                        <p>-->
                        <!--                                            Please Upload all images at once...-->
                        <!--                                        </p>-->
                        <!---->
                        <!--                                    </div>-->
                        <!--                                    <div class="col-md-6 col-sm-6 col-xs-6 show-tent-image-div"-->
                        <!--                                         id="old_cottage_image_div">-->
                        <!--                                    </div>-->
                        <!---->
                        <!--                                </div>-->
                        <!---->
                        <!--                            </div>-->

                        <div id="homestay" class="col-md-12 col-sm-12 col-xs-12">
                            <div class="col-md-7 col-sm-7 col-xs-12">

                                <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                    <label class="col-md-5 col-sm-5 col-xs-12 control-label">Camp/Homestay
                                        Type</label>
                                    <div class="col-md-7 col-sm-7 col-xs-12">
                                        <select class="form-control"
                                                id="camp_type" disabled>
                                            <option value="Dome">Dome</option>
                                            <option value="Tent">Alpine</option>
                                            <option value="Swiss">Swiss</option>
                                            <option value="Cottage">Cottage</option>
                                            <option value="Homestay">Homestay</option>
                                            <option value="Resort">Resort</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                                    <label class="col-md-5 col-sm-5 col-xs-12 control-label">Category</label>
                                    <div class="col-md-7 col-sm-7 col-xs-12">
                                        <select class="form-control"
                                                id="category" name="category" disabled>
                                            <option value="None">None</option>
                                            <option value="Deluxe">Deluxe</option>
                                            <option value="Super Deluxe">Super Deluxe</option>
                                            <option value="Luxury">Luxury</option>
                                            <option value="Suite">Suite</option>
                                            <option value="Family Suite">Family Suite</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                                    <label class="col-md-5 col-sm-5 col-xs-12 control-label">Occupancy
                                        <br>per Unit*</label>
                                    <div class="col-md-7 col-sm-7 col-xs-12">
                                        <input type="number" class="form-control" id="occupancy"
                                               name="occupancy" value="" min="0"
                                               oninput="validity.valid||(value='');" required>
                                    </div>
                                </div>


                                <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                                    <label class="col-md-5 col-sm-5 col-xs-12 control-label">Price per
                                        <br>Unit*</label>
                                    <div class="col-md-7 col-sm-7 col-xs-12">
                                        <input type="number" class="form-control" id="price_per_camp"
                                               name="price_per_camp" value="" min="0"
                                               oninput="validity.valid||(value='');" required>
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                                    <label class="col-md-5 col-sm-5 col-xs-12 control-label">Price per
                                        Person*</label>
                                    <div class="col-md-7 col-sm-7 col-xs-12">
                                        <input type="number" class="form-control" id="price_per_person"
                                               name="price_per_person" value="" min="0"
                                               oninput="validity.valid||(value='');" required>
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                                    <label class="col-md-5 col-sm-5 col-xs-12 control-label">Inventory*</label>
                                    <div class="col-md-7 col-sm-7 col-xs-12">
                                        <input type="number" class="form-control" id="no_of_inventory"
                                               name="no_of_inventory" value="" min="0"
                                               oninput="validity.valid||(value='');" required>
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                                    <label class="col-md-5 col-sm-5 col-xs-12 control-label">CGST (%)</label>
                                    <div class="col-md-7 col-sm-7 col-xs-12">
                                        <input type="number" step="0.01" class="form-control gst" id="cgst"
                                               name="cgst" value="" max="100" min="0"
                                               oninput="validity.valid||(value='');">
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                                    <label class="col-md-5 col-sm-5 col-xs-12 control-label">SGST (%)</label>
                                    <div class="col-md-7 col-sm-7 col-xs-12">
                                        <input type="number" step="0.01" class="form-control gst" id="sgst"
                                               name="sgst" value="" max="100" min="0"
                                               oninput="validity.valid||(value='');">
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                                    <label class="col-md-5 col-sm-5 col-xs-12 control-label">IGST (%)</label>
                                    <div class="col-md-7 col-sm-7 col-xs-12">
                                        <input type="number" step="0.01" class="form-control gst" id="igst"
                                               name="igst" value="" max="100" min="0"
                                               oninput="validity.valid||(value='');">
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                                    <label class="col-md-5 col-sm-5 col-xs-12 control-label">Temprature
                                        Controller </label>
                                    <div class="col-md-7 col-sm-7 col-xs-12">
                                        <select class="form-control" name="temprature_controller"
                                                id="temprature_controller">
                                            <option value="fan">Fan</option>
                                            <option value="cooler">Cooler</option>
                                            <option value="ac">AC</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                                    <label class="col-md-5 col-sm-5 col-xs-12 control-label">Power<br>Supply</label>
                                    <div class="col-md-7 col-sm-7 col-xs-12">
                                        <select class="form-control" name="power_supply"
                                                id="power_supply">
                                            <option value="common">Common</option>
                                            <option value="private">Private</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                                    <label class="col-md-5 col-sm-5 col-xs-12 control-label">Washroom </label>
                                    <div class="col-md-7 col-sm-7 col-xs-12">
                                        <select class="form-control" name="washroom"
                                                id="washroom">
                                            <option value="common">Common</option>
                                            <option value="private">Private</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-12 form-group">
                                    <label class="col-md-5 col-sm-5 col-xs-12 control-label">Washroom Type </label>
                                    <div class="col-md-7 col-sm-7 col-xs-12">
                                        <input type="checkbox" name="indian" value="indian"
                                               id="indian"> Indian <br>
                                        <input type="checkbox" name="western" value="western"
                                               id="western">Western <br>
                                        <input type="checkbox" name="pit" value="pit" id="pit">Pit

                                    </div>
                                </div>


                            </div>

                            <div class="col-md-5 col-sm-5 col-xs-12">

                                <div class="row form-group">
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <label class="col-md-12 col-sm-12 col-xs-12 control-label"
                                               style="text-align: left">Add Image </label>
                                        <input type="file" class="form-control" id="image"
                                               name="image[]" placeholder=""
                                               onchange="show_image(this);" multiple>
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-6 text-center margin-top-10">
                                    New Images
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-6 text-center margin-top-10">
                                    Old Images
                                </div>

                                <div class="col-md-6 col-sm-6 col-xs-6 show-tent-image-div" id="image_div">
                                    <p>
                                        Please Upload all images at once...
                                    </p>

                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-6 show-tent-image-div" id="old_image_div">

                                </div>

                            </div>

                        </div>


                    </div>

                    <div class="col-md-12 col-sm-12 col-xs-12 form-nav">
                        <!--                            <div class="col-md-6 col-sm-6 col-xs-12">-->
                        <!--                                <input type="button" value="Previous" class="form-control" onclick="get_second_part()">-->
                        <!--                            </div>-->
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <input type="submit" value="Submit" class="form-control">
                        </div>
                    </div>

            </div>

            </form>

        </div>
        <!-- /content container -->


    </div>
    <!-- Page content end -->


</div>
<!-- Make page fluid-->


</div>
<!-- Wrap all page content end -->

<!--  loader -->
<div class="loader-outer-progress">
    <div class="loader-icon">
        <div class="loader-inner">
            <img src='../img/fullscreen-loader.gif'>
            <p style="font-size: 30px;">Progress...<span id="progress_percent">0</span>%</p>
        </div>
    </div>
</div>

<!-- ! loader -->


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_qn71MFToKOPARXqmGQj60564ddiSFv0&libraries=places&callback=initAutocomplete"-->
<!--        async defer></script>-->


<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://code.jquery.com/jquery.js"></script>


<script>

    // function initAutocomplete() {
    //     var autocomplete = new google.maps.places.Autocomplete(
    //         document.getElementById('autocomplete'), {types: ['geocode']});
    // }

    var auth_key = localStorage.getItem("auth_key");

    $(document).ready(function get_camp_details() {


        // $('#gst_no').val(localStorage.getItem('user_gst_no') != null ? localStorage.getItem('user_gst_no') : '');
        // $("#camp_id_data").val(sessionStorage.getItem('edit_camp_id'));
        // $("#camp_code_data").val(sessionStorage.getItem('edit_camp_code'));
        // $("#camp_type_data").val(sessionStorage.getItem('edit_camp_type'));


        $.ajax({
            type: 'POST',
            url: '<?php echo $_SERVER['API_ENDPOINTS'];?>/api/get_property_type',
            headers: {
                "auth_key": localStorage.getItem('auth_key')
            },
            data: {
                camp_code: '<?php echo $_GET['c_code']; ?>',
                camp_type: '<?php echo $_GET['c_type']; ?>'
            },
            success: function (response) {
                console.log(response.result);

                // var destination_name = (response.result.destination_name != undefined) ? response.result.destination_name : '';
                // var propety_name = (response.result.camp_name != undefined) ? response.result.camp_name : '';
                // var manager_name = (response.result.manager.name != undefined) ? response.result.manager.name : '';
                // var manager_email = (response.result.manager.email != undefined) ? response.result.manager.email : '';
                // var manager_mobile = (response.result.manager.mobile != undefined) ? response.result.manager.mobile : '';
                // var landmark = (response.result.landmark != undefined) ? response.result.landmark : '';
                // var address = (response.result.address != undefined) ? response.result.address : '';
                // var breakfast_charges = (response.result.camp_info.breakfast_charges != undefined) ? response.result.camp_info.breakfast_charges : '';
                // var veg_lunch_charges = (response.result.camp_info.veg_lunch_charges != undefined) ? response.result.camp_info.veg_lunch_charges : '';
                // var nonveg_lunch_charges = (response.result.camp_info.nonveg_lunch_charges != undefined) ? response.result.camp_info.nonveg_lunch_charges : '';
                // var veg_dinner_charges = (response.result.camp_info.veg_dinner_charges != undefined) ? response.result.camp_info.veg_dinner_charges : '';
                // var nonveg_dinner_charges = (response.result.camp_info.nonveg_dinner_charges != undefined) ? response.result.camp_info.nonveg_dinner_charges : '';
                // var evening_snacks_charges = (response.result.camp_info.evening_snacks_charges != undefined) ? response.result.camp_info.evening_snacks_charges : '';
                // var guide_charges = (response.result.camp_info.guide_charges != undefined) ? response.result.camp_info.guide_charges : '';
                //
                // var tent_price_per_camp = (response.result.is_tent == 'Yes') ? response.result.tent.price_per_camp : '';
                // var tent_price_per_person = (response.result.is_tent == 'Yes') ? response.result.tent.price_per_person : '';
                // var tent_no_of_inventory = (response.result.is_tent == 'Yes') ? response.result.tent.no_of_inventory : '';
                // var tent_cgst = (response.result.is_tent == 'Yes') ? response.result.tent.cgst : '';
                // var tent_sgst = (response.result.is_tent == 'Yes') ? response.result.tent.sgst : '';
                // var tent_igst = (response.result.is_tent == 'Yes') ? response.result.tent.igst : '';
                // var tent_category = (response.result.is_tent == 'Yes') ? response.result.tent.category : '';
                //
                // var swiss_price_per_camp = (response.result.is_swiss == 'Yes') ? response.result.swiss.price_per_camp : '';
                // var swiss_price_per_person = (response.result.is_swiss == 'Yes') ? response.result.swiss.price_per_person : '';
                // var swiss_no_of_inventory = (response.result.is_swiss == 'Yes') ? response.result.swiss.no_of_inventory : '';
                // var swiss_cgst = (response.result.is_swiss == 'Yes') ? response.result.swiss.cgst : '';
                // var swiss_sgst = (response.result.is_swiss == 'Yes') ? response.result.swiss.sgst : '';
                // var swiss_igst = (response.result.is_swiss == 'Yes') ? response.result.swiss.igst : '';
                // var swiss_category = (response.result.is_swiss == 'Yes') ? response.result.swiss.category : '';
                //
                // var dome_price_per_camp = (response.result.is_dome == 'Yes') ? response.result.dome.price_per_camp : '';
                // var dome_price_per_person = (response.result.is_dome == 'Yes') ? response.result.dome.price_per_person : '';
                // var dome_no_of_inventory = (response.result.is_dome == 'Yes') ? response.result.dome.no_of_inventory : '';
                // var dome_cgst = (response.result.is_dome == 'Yes') ? response.result.dome.cgst : '';
                // var dome_sgst = (response.result.is_dome == 'Yes') ? response.result.dome.sgst : '';
                // var dome_igst = (response.result.is_dome == 'Yes') ? response.result.dome.igst : '';
                // var dome_category = (response.result.is_dome == 'Yes') ? response.result.dome.category : '';
                //
                // var cottage_price_per_camp = (response.result.is_cottage == 'Yes') ? response.result.cottage.price_per_camp : '';
                // var cottage_price_per_person = (response.result.is_cottage == 'Yes') ? response.result.cottage.price_per_person : '';
                // var cottage_no_of_inventory = (response.result.is_cottage == 'Yes') ? response.result.cottage.no_of_inventory : '';
                // var cottage_cgst = (response.result.is_cottage == 'Yes') ? response.result.cottage.cgst : '';
                // var cottage_sgst = (response.result.is_cottage == 'Yes') ? response.result.cottage.sgst : '';
                // var cottage_igst = (response.result.is_cottage == 'Yes') ? response.result.cottage.igst : '';
                // var cottage_category = (response.result.is_cottage == 'Yes') ? response.result.cottage.category : '';


                var price_per_camp = (response.result.price_per_camp != 'null') ? response.result.price_per_camp : '';
                var price_per_person = (response.result.price_per_person != 'null') ? response.result.price_per_person : '';
                var no_of_inventory = (response.result.no_of_inventory != 'null') ? response.result.no_of_inventory : '';
                var cgst = (response.result.cgst != 'null') ? response.result.cgst : '';
                var sgst = (response.result.sgst != 'null') ? response.result.sgst : '';
                var igst = (response.result.igst != 'null') ? response.result.igst : '';
                var category = (response.result.category != 'null') ? response.result.category : '';

                $(response.result.images).each(function (indx, value) {

                    if (value.imageType != "camp" && value.imageType != "meal") {

                        $($.parseHTML('<img>')).attr('src', value.imageUrl).appendTo("#old_image_div");
                    }

                });

                // $(function () {
                // $("#swimming_pool").val(response.result.camp_info.swimming_pool);
                // $("#wifi").val(response.result.camp_info.wifi);
                // $("#mobile_network").val(response.result.camp_info.mobile_network);
                // $("#cctv").val(response.result.camp_info.cctv);
                // $("#bonfire").val(response.result.camp_info.bonfire);


                // if (response.result.is_tent == 'Yes') {
                //     $("#tent_occupancy").val(response.result.tent.occupancy);
                //     $("#tent_power_supply").val(response.result.tent.power_supply);
                //     $("#tent_washroom").val(response.result.tent.washroom);
                //     $("#tent_washroom_type").val(response.result.tent.washroom_type);
                //     $("#tent_temprature_controller").val(response.result.tent.temprature_controller);
                //     $("#tent_cgst").val(response.result.tent.cgst);
                //     $("#tent_sgst").val(response.result.tent.sgst);
                //     $("#tent_igst").val(response.result.tent.igst);
                //
                // }
                //
                // if (response.result.is_swiss == 'Yes') {
                //     $("#swiss_occupancy").val(response.result.swiss.occupancy);
                //     $("#swiss_power_supply").val(response.result.swiss.power_supply);
                //     $("#swiss_washroom").val(response.result.swiss.washroom);
                //     $("#swiss_washroom_type").val(response.result.swiss.washroom_type);
                //     $("#swiss_temprature_controller").val(response.result.swiss.temprature_controller);
                //     $("#swiss_cgst").val(response.result.swiss.cgst);
                //     $("#tent_sgst").val(response.result.swiss.sgst);
                //     $("#swiss_igst").val(response.result.swiss.igst);
                //
                // }
                // if (response.result.is_dome == 'Yes') {
                //     $("#dome_occupancy").val(response.result.dome.occupancy);
                //     $("#dome_power_supply").val(response.result.dome.power_supply);
                //     $("#dome_washroom").val(response.result.dome.washroom);
                //     $("#dome_washroom_type").val(response.result.dome.washroom_type);
                //     $("#dome_temprature_controller").val(response.result.dome.temprature_controller);
                //     $("#dome_cgst").val(response.result.dome.cgst);
                //     $("#dome_sgst").val(response.result.dome.sgst);
                //     $("#dome_igst").val(response.result.dome.igst);
                //
                // }
                // if (response.result.is_cottage == 'Yes') {
                //
                //     $("#cottage_occupancy").val(response.result.cottage.occupancy);
                //     $("#cottage_power_supply").val(response.result.cottage.power_supply);
                //     $("#cottage_washroom").val(response.result.cottage.washroom);
                //     $("#cottage_washroom_type").val(response.result.cottage.washroom_type);
                //     $("#cottage_temprature_controller").val(response.result.cottage.temprature_controller);
                //     $("#cottage_cgst").val(response.result.cottage.cgst);
                //     $("#cottage_sgst").val(response.result.cottage.sgst);
                //     $("#cottage_igst").val(response.result.cottage.igst);
                // }

                // if (response.result.is_homestay == 'Yes') {

                $("#occupancy").val(response.result.occupancy);
                $("#power_supply").val(response.result.power_supply);
                $("#washroom").val(response.result.washroom);

                $("#temprature_controller").val(response.result.temprature_controller);
                $("#cgst").val(response.result.cgst);
                $("#sgst").val(response.result.sgst);
                $("#igst").val(response.result.igst);
                $("#camp_type").val('<?php echo $_GET['c_type'];?>');
                $("#type_id").val(response.result.id);


                if (response.result.washroom_type_indian == 'Y') {
                    $('#indian').attr('checked', true);
                }
                if (response.result.washroom_type_western == 'Y') {
                    $('#western').attr('checked', true);
                }
                if (response.result.washroom_type_pit == 'Y') {
                    $('#pit').attr('checked', true);
                }

                // $('#is_tent').val(response.result.is_tent);
                // $('#is_swiss').val(response.result.is_swiss);
                // $('#is_cottage').val(response.result.is_cottage);
                // $('#is_homestay').val(response.result.is_homestay);
                // $('#is_dome').val(response.result.is_dome);

                // var destinationSplit = destination_name.split(",");
                // $('#destination').val(destinationSplit[0]);

                // $('#camp_name').val(propety_name);
                // $('#manager_name').val(manager_name);
                // $('#manager_mobile_no').val(manager_mobile);
                // $('#manager_email_id').val(manager_email);
                // $('#landmark').val(landmark);
                // $('#address').val(address);
                // $('#breakfast_charges').val(breakfast_charges);
                // $('#nonveg_lunch_charges').val(nonveg_lunch_charges);
                // $('#veg_lunch_charges').val(veg_lunch_charges);
                // $('#veg_dinner_charges').val(veg_dinner_charges);
                // $('#nonveg_dinner_charges').val(nonveg_dinner_charges);
                // $('#evening_snacks_charges').val(evening_snacks_charges);
                // $('#guide_charges').val(guide_charges);

                // if (response.result.camp_info.couple_friendly == 'Y') {
                //     $('#couple_friendly').attr('checked', true);
                // }
                // if (response.result.camp_info.family_friendly == 'Y') {
                //     $('#family_friendly').attr('checked', true);
                // }
                // if (response.result.camp_info.youngsters_friendly == 'Y') {
                //     $('#youngsters_friendly').attr('checked', true);
                // }
                // if (response.result.camp_info.day_off == 'Y') {
                //     $('#day_off').attr('checked', true);
                // }
                // if (response.result.camp_info.female_friendly == 'Y') {
                //     $('#female_friendly').attr('checked', true);
                // }
                // if (response.result.camp_info.senior_citizen_friendly == 'Y') {
                //     $('#senior_citizen_friendly').attr('checked', true);
                // }
                // if (response.result.camp_info.dog_friendly == 'Y') {
                //     $('#dog_friendly').attr('checked', true);
                // }
                // if (response.result.camp_info.luxury == 'Y') {
                //     $('#luxury').attr('checked', true);
                // }


                //for tent only
                // $('#tent_price_per_camp').val(tent_price_per_camp);
                // $('#tent_price_per_person').val(tent_price_per_person);
                // $('#tent_no_of_inventory').val(tent_no_of_inventory);
                // $('#tent_category').val(tent_category);
                //
                // //swiss
                // $('#swiss_price_per_camp').val(swiss_price_per_camp);
                // $('#swiss_price_per_person').val(swiss_price_per_person);
                // $('#swiss_no_of_inventory').val(swiss_no_of_inventory);
                // $('#swiss_category').val(swiss_category);
                //
                // //cottage
                // $('#cottage_price_per_camp').val(cottage_price_per_camp);
                // $('#cottage_price_per_person').val(cottage_price_per_person);
                // $('#cottage_no_of_inventory').val(cottage_no_of_inventory);
                // $('#cottage_category').val(cottage_category);
                //
                // //dome
                // $('#dome_price_per_camp').val(dome_price_per_camp);
                // $('#dome_price_per_person').val(dome_price_per_person);
                // $('#dome_no_of_inventory').val(dome_no_of_inventory);
                // $('#dome_category').val(dome_category);

                //homestay
                $('#price_per_camp').val(price_per_camp);
                $('#price_per_person').val(price_per_person);
                $('#no_of_inventory').val(no_of_inventory);
                $('#category').val(category);


            },

            error: function (error) {
                console.log('error');
            }

        })
    });


    var frm = $('#formId');
    frm.submit(function (e) {
        e.preventDefault();

        $.ajax({

            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        percentComplete = (percentComplete * 100).toFixed(0);

                        $("#progress_percent").html(percentComplete);
                    }
                }, false);

                return xhr;
            },
            url: '<?php echo $_SERVER['API_ENDPOINTS'];?>/api/edit_property_type',
            type: 'POST',
            data: new FormData($(this)[0]),
            cache: false,
            contentType: false,
            processData: false,
            headers: {
                "auth_key": auth_key,
            },
            beforeSend: function () {
                $('.loader-outer-progress').show();
            },
            success: function (data, textStatus, xhr) {
                $('.loader-outer-progress').hide();
                if (xhr.status == 200) {
                    alert('Details Updated successfully');
                    top.location.href = 'myProperty.php';
                } else if (xhr.status == 202) {
                    alert('Invalid camp details');
                }
            },
            error: function (data) {
                $('.loader-outer').show();
                console.log('An error occurred.');
            }
        });
    });

</script>

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

<script>

    function show_nav() {
        $('.navbar-collapse').toggle();
    }

    // function show_camp_image(input) {
    //
    //     if (input.files) {
    //         $("#camp_image_div").html("");
    //         var filesAmount = input.files.length;
    //
    //         for (i = 0; i < filesAmount; i++) {
    //             var reader = new FileReader();
    //
    //             reader.onload = function (event) {
    //                 $($.parseHTML('<img>')).attr('src', event.target.result).appendTo("#camp_image_div");
    //             }
    //
    //             reader.readAsDataURL(input.files[i]);
    //         }
    //     }
    //
    // }
    //
    // function show_meal_image(input) {
    //
    //     if (input.files) {
    //         $("#meal_image_div").html("");
    //         var filesAmount = input.files.length;
    //
    //         for (i = 0; i < filesAmount; i++) {
    //             var reader = new FileReader();
    //
    //             reader.onload = function (event) {
    //                 $($.parseHTML('<img>')).attr('src', event.target.result).appendTo("#meal_image_div");
    //             }
    //
    //             reader.readAsDataURL(input.files[i]);
    //         }
    //     }
    //
    // }
    //
    // function show_tent_image(input) {
    //
    //     if (input.files) {
    //         $("#tent_image_div").html("");
    //         var filesAmount = input.files.length;
    //
    //         for (i = 0; i < filesAmount; i++) {
    //             var reader = new FileReader();
    //
    //             reader.onload = function (event) {
    //                 $($.parseHTML('<img>')).attr('src', event.target.result).appendTo("#tent_image_div");
    //             }
    //
    //             reader.readAsDataURL(input.files[i]);
    //         }
    //     }
    //
    // }
    //
    // function show_swiss_image(input) {
    //
    //     if (input.files) {
    //         $("#swiss_image_div").html("");
    //         var filesAmount = input.files.length;
    //
    //         for (i = 0; i < filesAmount; i++) {
    //             var reader = new FileReader();
    //
    //             reader.onload = function (event) {
    //                 $($.parseHTML('<img>')).attr('src', event.target.result).appendTo("#swiss_image_div");
    //             }
    //
    //             reader.readAsDataURL(input.files[i]);
    //         }
    //     }
    //
    // }
    //
    // function show_dome_image(input) {
    //
    //     if (input.files) {
    //         $("#dome_image_div").html("");
    //         var filesAmount = input.files.length;
    //
    //         for (i = 0; i < filesAmount; i++) {
    //             var reader = new FileReader();
    //
    //             reader.onload = function (event) {
    //                 $($.parseHTML('<img>')).attr('src', event.target.result).appendTo("#dome_image_div");
    //             }
    //
    //             reader.readAsDataURL(input.files[i]);
    //         }
    //     }
    //
    // }
    //
    // function show_cottage_image(input) {
    //
    //     if (input.files) {
    //         $("#cottage_image_div").html("");
    //         var filesAmount = input.files.length;
    //
    //         for (i = 0; i < filesAmount; i++) {
    //             var reader = new FileReader();
    //
    //             reader.onload = function (event) {
    //                 $($.parseHTML('<img>')).attr('src', event.target.result).appendTo("#cottage_image_div");
    //             }
    //
    //             reader.readAsDataURL(input.files[i]);
    //         }
    //     }
    //
    // }

    function show_image(input) {

        if (input.files) {
            $("#homestay_image_div").html("");
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function (event) {
                    $($.parseHTML('<img>')).attr('src', event.target.result).appendTo("#image_div");
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    }


    // function get_first_part() {
    //     document.getElementById("second_part").style.display = "none";
    //     document.getElementById("third_part").style.display = 'none';
    //     document.getElementById("first_part").style.display = 'block';
    // }

    // function get_second_part() {
    //     var nxt = false;
    //
    //     if ($("#autocomplete").val() == "") {
    //         $("#autocomplete").focus();
    //         $("#autocomplete").addClass("bg-error");
    //         setTimeout(function () {
    //             $("#autocomplete").removeClass("bg-error");
    //         }, 2000);
    //     }
    //     else if ($("#camp_name").val() == "") {
    //         $("#camp_name").focus();
    //         $("#camp_name").addClass("bg-error");
    //         setTimeout(function () {
    //             $("#camp_name").removeClass("bg-error");
    //         }, 2000);
    //
    //     }
    //     else {
    //         nxt = true;
    //     }
    //     if ($("#manager_mobile_no").val() != "") {
    //
    //         nxt = true;
    //
    //         if ($("#manager_name").val() == "") {
    //             nxt = false;
    //             $("#manager_name").focus();
    //             $("#manager_name").addClass("bg-error");
    //             setTimeout(function () {
    //                 $("#manager_name").removeClass("bg-error");
    //             }, 2000);
    //         }
    //
    //         if ($("#manager_mobile_no").val() < 5000000000) {
    //             nxt = false;
    //             $("#manager_mobile_no").focus();
    //             $("#manager_mobile_no").addClass("bg-error");
    //             setTimeout(function () {
    //                 $("#manager_mobile_no").removeClass("bg-error");
    //             }, 2000);
    //         }
    //     }
    //     if ($("#manager_email_id").val() != "") {
    //         nxt = true;
    //         if ($("#manager_name").val() == "") {
    //             nxt = false;
    //             $("#manager_name").focus();
    //             $("#manager_name").addClass("bg-error");
    //             setTimeout(function () {
    //                 $("#manager_name").removeClass("bg-error");
    //             }, 2000);
    //         }
    //
    //         if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#manager_email_id").val()))) {
    //             nxt = false;
    //             $("#manager_email_id").focus();
    //             $("#manager_email_id").addClass("bg-error");
    //             setTimeout(function () {
    //                 $("#manager_email_id").removeClass("bg-error");
    //             }, 2000);
    //         }
    //     }
    //
    //     if ($("#gst_no").val() != "") {
    //         nxt = true;
    //         if ($("#gst_no").val().length < 15) {
    //             nxt = false;
    //             $("#gst_no").focus();
    //             $("#gst_no").addClass("bg-error");
    //             setTimeout(function () {
    //                 $("#gst_no").removeClass("bg-error");
    //             }, 2000);
    //         }
    //     }
    //
    //
    //     // if (nxt) {
    //     //     // var file_count = $("#camp_image")[0].files.length;
    //     //     //
    //     //     // if(file_count > 0){
    //     //     document.getElementById("first_part").style.display = 'none';
    //     //     document.getElementById("third_part").style.display = 'none';
    //     //     document.getElementById("second_part").style.display = 'block';
    //     //     // }
    //     //     // else {
    //     //     //     alert("Please Choose Property image");
    //     //     // }
    //     // }
    //
    //
    // }

    // function get_third_part() {
    //     document.getElementById("first_part").style.display = 'none';
    //     document.getElementById("second_part").style.display = 'none';
    //     document.getElementById("third_part").style.display = 'block';
    // }


    function edit_property(c_id) {
        top.location.href = 'editProperty.php?c_id=' + c_id;
    }

</script>
<!--Start of Tawk.to Script-->
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
