<html>
<head>    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149144948-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'UA-149144948-1');
    </script>
    <title>Add Cultural Events</title>
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
                <h1><strong>Cultural Events</strong></h1>
                <div class="collapsed">
                    <a href="#" id="submenutoggle"><h1>Cultural Events<i class="fa fa-bars"></i></h1></a>
                </div>
            </div>
            <!-- /submenu -->
            <div class="col-md-12">


                <div class="shadow-box col-md-6 col-md-offset-3 text-center">
                    <div class="contact-item mt-5 mb-10">
                        <h2 class="title-section text-center"><span class="font-bold">Add Cultural Calendar</span></h2>


                    </div>
                    <form id="calendarForm" method="post" action="" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="name">
                                Festival Name*
                            </label>
                            <input class="form-control" type="text" id="name" name="name" placeholder="Enter your name" required
                            >
                        </div>
                        <div class="form-group">
                            <label for="destination">
                                Festival Destination*
                            </label>
                            <input class="form-control" type="text" id="destination" name="destination"
                                   placeholder="Enter your destination" required
                            >
                        </div>
                        <div class="form-group">
                            <label for="from_date">
                                Festival Start Date:
                            </label>
                            <input class="form-control" type="date" id="from_date" name="from_date"
                                   placeholder="Enter your start Date" required>
                        </div>
                        <div class="form-group">
                            <label for="to_date">
                                Festival End Date:
                            </label>
                            <input class="form-control" type="date" id="to_date" name="to_date"
                                   placeholder="Enter your End Date" required>
                        </div>
                        <div class="form-group">
                            <label for="description">
                                Festival Description
                            </label>
                            <input class="form-control" type="text" id="description" name="description"
                                   placeholder="Enter your description" required>
                        </div>
                        <div class="form-group">
                            <label for="image">
                                Festival Images
                            </label>
                            <input class="form-control" type="file" id="image" name="image[]" multiple required>
                        </div>
                        <input type="hidden" id="eventTypeInput" name="eventType">
                        <div class="form-group">
                            <label for="eventType">
                                Event Type
                            </label>
                            <input type="checkbox" value="Y" onclick="eventTypeObj('art')" id="art">Art Event
                            <input type="checkbox" value="Y" onclick="eventTypeObj('food')" id="food">Food Event
                            <input type="checkbox" value="Y" onclick="eventTypeObj('religious')" id="religious">Religious
                            Event
                            <input type="checkbox" value="Y" onclick="eventTypeObj('cultural')" id="cultural">Cultural
                            Event
                            <input type="checkbox" value="Y" onclick="eventTypeObj('agriculture')" id="agriculture">Agriculture
                            Event
                            <input type="checkbox" value="Y" onclick="eventTypeObj('family')" id="family">Family/Friend
                            Event
                        </div>

                        <div class="form-group">
                            <button class="btn btn-success" style="width: 100px" type="submit">Submit</button>
                        </div>

                    </form>

                    <div class="col-md-6" style="display: none"  id="culturaleventLink">
                        http://development.wandertribe.in/cultureCalendar.php?id=<span  id="culturaleventId" ></span>
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

    var eventType = {
        art: 'N',
        food: 'N',
        religious: 'N',
        cultural: 'N',
        agriculture: 'N',
        family: 'N'
    };


    function eventTypeObj(type) {

        if (eventType[type] == 'Y') {
            eventType[type] = 'N';
        } else {
            eventType[type] = 'Y';
        }
        $("#eventTypeInput").val(JSON.stringify(eventType));
    }

    $("#calendarForm").submit(
        function (e) {
            e.preventDefault();
            $.ajax({
                type: 'POST',
                url: 'https://dev.unfoldingskies.com/api/properties/add_cultural_event',
                data: new FormData($(this)[0]),
                headers: {
                    Authorization: "$2y$10$lvjuFMyZlmDTJuoj9C41nuv9ShLe38jEGVKwl4mqJsYTr6PNUNTa6"
                },
                cache: false,
                contentType: false,
                processData: false,
                beforeSend: function () {
                    $('.loader-outer').show();
                },

                success: function (data, textStatus, xhr) {
                    $('.loader-outer').hide();
                    if (xhr.status == 200) {
                        console.log(data);
                        $("#culturaleventId").html(data._id);
                        $("#culturaleventLink").show();
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

</script>

<!--Start of Tawk.to Script-->
<script type="text/javascript">
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/5d92f6b7db28311764d6a4f9/default';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
</script>
<!--End of Tawk.to Script-->
</body>
</html>
