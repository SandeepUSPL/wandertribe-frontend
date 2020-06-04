
<html>
  <head>    <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149144948-1"></script>
      <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-149144948-1');
      </script>
    <title>Support</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8" />

    <link rel="icon" type="image/ico" href="images/favicon.ico" />
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

      @media screen and (max-width: 600px) {
        .navbar-collapse{
          display: none;
        }
      }

      @media screen and (min-width: 601px) {
        .navbar-collapse{
          display: block !important;
        }
      }

    </style>
  </head>
  <body class="brownish-scheme">

    <!-- Preloader -->
    <div class="mask"><div id="loader"></div></div>
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
            <h1><strong>Support</strong></h1>
            <div class="collapsed">
              <a href="#" id="submenutoggle"><h1>Support<i class="fa fa-bars"></i></h1></a>
            </div>
          </div>
          <!-- /submenu -->

          <!-- content main container -->
          <div class="main row" style="background-color: white">

            <div class="col-md-4">

              <!--//tile-->
              <section class="tile">

                <!--//jumbotron unit-->
                <div class="jumbotron white-bg">

                  <div class="container text-center">
                    <h4>Email Us</h4>
                    <p>info@indusroot.com</p>
                  </div>

                </div>

              </section>
              <!--// /tile-->

            </div>

            <div class="col-md-8"

              <!--//tile-->
              <section class="tile ">

                <!--//tile body-->
                <div class="tile-body">

                  <form class="form-horizontal" role="form">

                    <div class="form-group">
                      <label for="name" class="col-sm-4 control-label">Your Name</label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" id="name">
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="email" class="col-sm-4 control-label">Your Email</label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" id="email">
                      </div>
                    </div>


                    <div class="form-group">
                      <label for="message" class="col-sm-4 control-label">Message</label>
                      <div class="col-sm-8">
                        <textarea class="form-control" id="message" rows="3" placeholder="How may we help you?"></textarea>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="col-sm-offset-4 col-sm-8">
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </div>
                    </div>

                  </form>

                </div>
                <!--// /tile body-->

              </section>
              <!--// /tile-->

            </div>


          </div>
          <!-- /content container -->






        </div>
        <!-- Page content end -->






      </div>
      <!-- Make page fluid-->




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

    <script>

      function show_nav() {
        $('.navbar-collapse').toggle();
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
