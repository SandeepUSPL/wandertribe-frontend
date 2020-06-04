<html>
<head>    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149144948-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-149144948-1');
    </script>
    <title>Add Property Type</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8"/>
    <meta name="keywords" content="wandertribe ,theroadlesstravelled ,TRLT ,travel ,travelling ,traveltheworld ,naturalworld ,lifeawayfromlife ,outdoorliving ,incredibleindia ,travelindia ,travelrealindia ,exploreindia ,himachal ,himalaya ,pahadipeople ,pahadilife ,localpeople ,himalayanpeople ,adventure ,trekking ,hiking ,walking ,diving ,snorkeling ,running ,mountainbike ,birdwatching ,swimming ,fishing ,boating ,newplace ,newexperiences , ,travelphotography ,travelblogger ,travelgram ,tourism ,hotel ,hotels ,hospitalityindustry ,travelagency ,worldtravel ,traveltips ,nature ,beauty ,beautiful ,pahadi_corner ,himachal ,himachaltourism ,travelrealindia ,himachalpradesh ,photographers_of_india ,himalayas ,travelgram ,mountains ,nature ,wanderlust ,traveller ,portrait ,mypixeldiary ,traveldiaries ,Instahimachal ,StoriesofIndia ,indiapictures ,hills ,IndianPhotoGraphy ,weuttarakhand ,roads ,uttarakhandheaven ,roadtrip ,travelrealindia ,uttarakhand ,himachal   ,uttarkashidiaries ,himalayas  ,india ,travel ,mountains ,wanderlust,travelphotography ,travelcouple ,travelph ,travellers ,traveleurope ,travelblog ,travelstoke ,travelgram ,travelawesome ,travelguide ,traveller ,instatravel ,travel_drops ,travelbook ,travels ,traveler ,travelislife ,travelholic ,traveldeeper ,travelbag ,traveladdict ,travelling ,travelphoto ,traveltheworld ,traveling ,travelblogger ,travel_captures,solotravels ,solotraveldiaries ,solotravelstories ,nomadiclife ,womenwhoexplore ,womenwhotravel ,travelingladies ,familytravels ,travelingwithkids ,familytravelmoment ,roamtheplanet,sky ,clouds ,beach ,food ,nature  ,snow ,sunset ,night ,mountains ,sunsetporn ,nightphotography ,postcardsfromtheworld ,choosemountains ,optoutside ,ipulledoverforthis ,viewfromthetop ,sunset_madness,travelista  ,travelingplanet ,travelingworld ,travelingislife ,travelingsoul ,travelpicsdaily  ,travelstories ,globelletravels ,travelvibes ,globetrotters ,travelworld ,travelwriter ,adventureawaits  ,travellingram ,travelquote ,travelquotes ,theuprootedrose,exploretheglobe ,travelinstyle ,adventureanywhere ,letsgoeverywhere ,worldtraveller ,hello_worldpics ,travelwell ,postcardplaces ,meettheworld ,globetrotting,travelinspo">


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
            width: 30%;
            background: #2d0829;
            color: white;
        }

        .form-nav > div:first-child {
            text-align: -webkit-center;
        }

        .show-image-div {
            height: 406px;
            overflow-y: scroll;
            overflow: auto;
            background: whitesmoke;
            background-clip: content-box;
        }

        .show-tent-image-div {
            height: 336px;
            overflow-y: scroll;
            overflow: auto;
            background: whitesmoke;
            background-clip: content-box;
        }

        .show-image-div img {
            margin: 10px;
            width: 40%;
        }

        .show-tent-image-div img {
            margin: 10px;
            width: 40%;
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
                <h1><strong>Add Property Type</strong></h1>
                <div class="collapsed">
                    <a href="#" id="submenutoggle"><h1>Add Property Type<i class="fa fa-bars"></i></h1></a>
                </div>
            </div>
            <!-- /submenu -->

            <!-- content main container -->
            <div class="main row">

                <form class="add-form" enctype="multipart/form-data" id="formId">

                    <!--                    <div id="first_part" style="">-->
                    <!---->
                    <!--                        <div class="col-md-7 col-sm-7 col-xs-12">-->
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
                    <!--                                <label for="destination" class="col-md-5 col-sm-5 col-xs-12 control-label">Search Your-->
                    <!--                                    Destination* </label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="text" class="form-control" id="autocomplete" name="destination"-->
                    <!--                                           value="" onkeypress="return event.keyCode != 13;">-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!---->
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
                    <!--                            <div class="row form-group">-->
                    <!--                                <label for="meal_image" class="col-md-5 col-sm-5 col-xs-12 control-label">Add Meal Menu Image </label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="file" class="form-control" id="meal_image" name="meal_image[]" placeholder="" multiple>-->
                    <!--                                </div>-->
                    <!--                            </div>-->

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
                    <!--                            <div class="col-md-12 col-sm-12 col-xs-12 show-image-div" id="camp_image_div">-->
                    <!--                                <img src="images/wall.jpg" alt="Camp image" />-->
                    <!--                                <p>-->
                    <!--                                    Please Upload all images at once...-->
                    <!--                                </p>-->
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
                    <!--                            <div class="col-md-6 col-sm-6 col-xs-12 form-group">-->
                    <!--                                <label class="col-md-5 col-sm-5 col-xs-12 control-label">Category</label>-->
                    <!--                                <div class="col-md-7 col-sm-7 col-xs-12">-->
                    <!--                                    <input type="checkbox" name="couple_friendly" value="couple_friendly"-->
                    <!--                                           id="couple_friendly">-->
                    <!--                                    Couples <br>-->
                    <!--                                    <input type="checkbox" name="family_friendly" value="family_friendly"-->
                    <!--                                           id="family_friendly">-->
                    <!--                                    Family <br>-->
                    <!--                                    <input type="checkbox" name="youngsters_friendly" value="youngsters_friendly"-->
                    <!--                                           id="youngsters_friendly">-->
                    <!--                                    Youngsters <br>-->
                    <!--                                    <input type="checkbox" name="day_off" value="day_off"-->
                    <!--                                           id="day_off">-->
                    <!--                                    Day-Off <br>-->
                    <!--                                    <input type="checkbox" name="female_friendly" value="female_friendly"-->
                    <!--                                           id="female_friendly">-->
                    <!--                                    Female Special <br>-->
                    <!--                                    <input type="checkbox" name="senior_citizen_friendly"-->
                    <!--                                           value="senior_citizen_friendly"-->
                    <!--                                           id="senior_citizen_friendly">-->
                    <!--                                    Senior Citizen <br>-->
                    <!--                                    <input type="checkbox" name="dog_friendly" value="dog_friendly"-->
                    <!--                                           id="dog_friendly">-->
                    <!--                                    Dog Friendly<br>-->
                    <!--                                    <input type="checkbox" name="luxury" value="luxury"-->
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
                    <!--                            <div class="col-md-12 col-sm-12 col-xs-12 show-image-div" id="meal_image_div">-->
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

                    <div id="third_part" class="col-md-12 col-sm-12 col-xs-12">

                        <div class="col-md-12 col-sm-12 col-xs-12">

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
                            <!--                                    <div class="col-md-12 col-sm-12 col-xs-12 show-tent-image-div" id="dome_image_div">-->
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
                            <!--                                    <div class="col-md-12 col-sm-12 col-xs-12 show-tent-image-div" id="tent_image_div">-->
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
                            <!--                                    <div class="col-md-12 col-sm-12 col-xs-12 show-tent-image-div" id="swiss_image_div">-->
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
                            <!--                                    <div class="col-md-12 col-sm-12 col-xs-12 show-tent-image-div"-->
                            <!--                                         id="cottage_image_div">-->
                            <!---->
                            <!--                                    </div>-->
                            <!---->
                            <!--                                </div>-->
                            <!---->
                            <!--                            </div>-->

                            <input type="hidden" value="<?php echo $_GET['c_id']; ?>" name="camp_id">

                            <div id="homestay" class="col-md-12 col-sm-12 col-xs-12">
                                <div class="col-md-7 col-sm-7 col-xs-12">

                                    <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                        <label class="col-md-5 col-sm-5 col-xs-12 control-label">Camp/Homestay
                                            Type</label>
                                        <div class="col-md-7 col-sm-7 col-xs-12">
                                            <select class="form-control" name="camp_type"
                                                    id="camp_type">
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
                                            <select class="form-control" name="category"
                                                    id="category">
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
                                                   style="text-align: left">Add Image*</label>
                                            <input type="file" class="form-control" id="image"
                                                   name="image[]" placeholder=""
                                                   onchange="show_image(this);" multiple required>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-xs-12 show-tent-image-div"
                                         id="image_div">

                                    </div>

                                </div>

                            </div>


                        </div>

                        <div class="col-md-12 col-sm-12 col-xs-12 form-nav">
                            <!--                            <div class="col-md-6 col-sm-6 col-xs-12">-->
                            <!--                                <input type="button" value="Previous" class="form-control" onclick="get_second_part()">-->
                            <!--                            </div>-->
                            <div class="col-md-12 col-sm-12 col-xs-12">
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
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_qn71MFToKOPARXqmGQj60564ddiSFv0&libraries=places&callback=initAutocomplete"
        async defer></script>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://code.jquery.com/jquery.js"></script>

<!--<script>-->
<!--    $(document).ready(function xyz() {-->
<!--        $('#gst_no').val((localStorage.getItem('user_gst_no') == null ||) ? localStorage.getItem('user_gst_no') : '');-->
<!--    });-->
<!--</script>-->

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

</script>

<script>

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
            $("#image_div").html("");
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
    //
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
    //     if (nxt) {
    //         var file_count = $("#camp_image")[0].files.length;
    //
    //         if (file_count > 0) {
    //             document.getElementById("first_part").style.display = 'none';
    //             document.getElementById("third_part").style.display = 'none';
    //             document.getElementById("second_part").style.display = 'block';
    //         }
    //         else {
    //             alert("Please Choose Property image");
    //         }
    //     }
    //
    //
    // }
    //
    // function get_third_part() {
    //     document.getElementById("first_part").style.display = 'none';
    //     document.getElementById("second_part").style.display = 'none';
    //     document.getElementById("third_part").style.display = 'block';
    // }
    //
    // function initAutocomplete() {
    //     var autocomplete = new google.maps.places.Autocomplete(
    //         document.getElementById('autocomplete'), {types: ['geocode']});
    // }

    var auth_key = localStorage.getItem("auth_key");
    var frm = $('#formId');
    frm.submit(function (e) {
        e.preventDefault();

        // var valid_tent = false;
        // var valid_swiss = false;
        // var valid_cottage = false;
        // var valid_homestay = false;
        // var valid_dome = false;
        // var least_flag = false;
        //
        // if ($("#tent_price_per_person").val() != "" || $("#tent_no_of_inventory").val() != "" || $("#tent_image")[0].files.length != 0) {
        //     least_flag = true;
        //     if ($("#tent_image")[0].files.length == 0 || $("#tent_price_per_person").val() == "" || $("#tent_no_of_inventory").val() == "" ) {
        //         alert("Please fill complete details of Alpine (inventory, price per person and image fields are mandatory)");
        //         least_flag = false;
        //         return false;
        //     }
        //     else {
        //         valid_tent = true;
        //     }
        // }
        //
        //
        // if ($("#swiss_price_per_person").val() != "" || $("#swiss_no_of_inventory").val() != "" || $("#swiss_image")[0].files.length != 0) {
        //     least_flag = true;
        //     if ($("#swiss_image")[0].files.length == 0 || $("#swiss_price_per_person").val() == "" || $("#swiss_no_of_inventory").val() == "" ) {
        //         alert("Please fill complete details of Swiss (inventory, price per person and image fields are mandatory)");
        //         least_flag = false;
        //         return false;
        //     }
        //     else {
        //         valid_swiss = true;
        //     }
        // }
        //
        //
        // if ($("#dome_price_per_person").val() != "" || $("#dome_no_of_inventory").val() != "" || $("#dome_image")[0].files.length != 0) {
        //     least_flag = true;
        //     if ($("#dome_image")[0].files.length == 0 || $("#dome_price_per_person").val() == "" || $("#dome_no_of_inventory").val() == "" ) {
        //         alert("Please fill complete details of Dome (inventory, price per person and image fields are mandatory)");
        //         least_flag = false;
        //         return false;
        //     }
        //     else {
        //         valid_dome = true;
        //     }
        // }
        //
        //
        // if ($("#cottage_price_per_person").val() != "" || $("#cottage_no_of_inventory").val() != "" || $("#cottage_image")[0].files.length != 0) {
        //     least_flag = true;
        //     if ($("#cottage_image")[0].files.length == 0 || $("#cottage_price_per_person").val() == "" || $("#cottage_no_of_inventory").val() == "" ) {
        //         alert("Please fill complete details of Cottage (inventory, price per person and image fields are mandatory)");
        //         least_flag = false;
        //         return false;
        //     }
        //     else {
        //         valid_cottage = true;
        //     }
        // }
        //
        //
        // if ($("#homestay_price_per_person").val() != "" || $("#homestay_no_of_inventory").val() != "" || $("#homestay_image")[0].files.length != 0) {
        //     least_flag = true;
        //     if ($("#homestay_image")[0].files.length == 0 || $("#homestay_price_per_person").val() == "" || $("#homestay_no_of_inventory").val() == "" ) {
        //         alert("Please fill complete details of Homestay (inventory, price per person and image fields are mandatory)");
        //         least_flag = false;
        //         return false;
        //     }
        //     else {
        //         valid_homestay = true;
        //     }
        // }
        //
        //
        // if ((valid_tent || valid_homestay || valid_cottage || valid_dome || valid_swiss)&&least_flag) {
        if (auth_key != undefined) {
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

                url: '<?php echo $_SERVER['API_ENDPOINTS'];?>/api/new_property_type',
                type: 'post',
                data: new FormData($(this)[0]),
                cache: false,
                contentType: false,
                processData: false,
                headers: {
                    "auth_key": auth_key
                },
                beforeSend: function () {
                    $('.loader-outer-progress').show();
                },
                success: function (data, textStatus, xhr) {
                    $('.loader-outer-progress').hide();
                    if (xhr.status == 200) {
                        localStorage.setItem('user_gst_no', $('#gst_no').val());
                        top.location.href = 'myProperty.php';
                    } else if (xhr.status == 202) {
                        alert('Camp Already Found');
                    } else if (xhr.status == 201) {
                        alert('Manager Already Found!!');
                    }
                },
                error: function (data) {
                    $('.loader-outer-progress').hide();
                    alert('An error occurred');
                }
            });
        } else {
            alert("Please Login Again");
            top.location.href = '../index.php';
        }
        // }
        // else if (!least_flag) {
        //     alert("Please fill complete details of atleast one camp/homestay (inventory, price per person and image fields are mandatory)");
        // }


    });

    $(':input[type="number"]').keydown(function () {
        return event.keyCode == 69 ? false : true;
    });


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
