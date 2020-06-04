<!DOCTYPE html>
<html>
<head>
	<title>WanderTrake</title>
    <link rel="icon" href="new_img/logo/logo3.png" type="image/gif">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

    <!--	<link rel="stylesheet" type="text/css" media="screen and (min-width: 1084px)" href="css/index.css">-->
    <!--	<link rel="stylesheet" type="text/css" media="screen and (min-width: 601px) and (max-width: 1083px)" href="css/index600up.css">-->
    <!--	<link rel="stylesheet" type="text/css" media="screen and (max-width: 600px)" href="css/index600down.css">-->
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 1084px)" href="css/TripsLanding.css">
    <link rel="stylesheet" type="text/css" media="screen and (min-width: 601px) and (max-width: 1083px)" href="css/TripsLanding600up.css">
    <link rel="stylesheet" type="text/css" media="screen and (max-width: 600px)" href="css/TripsLanding600down.css">
    <link href="https://fonts.googleapis.com/css?family=Muli:300,400,600,700,900&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/humanity/jquery-ui.css">

    <script>
        // $(document).ready(function () {
        //     $("#check-business").prop("checked",false);
        //     $("#wrong_number").hide();
        //     $("#invalid_email").hide();
        //     $("#match_pwd").hide();
        //     $('#signupBody').show();
        //     $('#signupOTPBody').hide();
        //     $('#signupEnterOTPBody').hide();
        //     $('#signupSetPwdBody').hide();
        //
        //     $('#myModalSignup').removeClass('show').addClass('fade');
        //
        //     $("#match_pwd").hide();
        //     $("input[name='ConfirmPwd']").keyup(function(){
        //         if ($(this).val() != $("#password").val()){
        //             $("#match_pwd").show();
        //             $("#signupSetPwdButton").attr('disabled','disabled');;
        //         }
        //         else{
        //             $("#match_pwd").hide();
        //             $("#signupSetPwdButton").removeAttr('disabled');;
        //         }
        //     });
        //     var auth_key = localStorage.getItem("auth_key");
        //
        //     var dash = (localStorage.getItem("user_type") == 'VENDOR' || localStorage.getItem("user_type") == 'ADMIN') ? "dashboard" : "user";
        //
        //     $(".login-status").each(function () {
        //
        //         if (auth_key != undefined) {
        //             $('.header button').hide();
        //             $('#buis_reg_btn').hide();
        //             if (auth_key != undefined) {
        //                 $('.header button').hide();
        //                 $('#buis_reg_btn').hide();
        //                 if(dash != "user"){
        //                     this.innerHTML = '<div class="dropdown"> ' +
        //                         // '<a href="#" class="cws-button small  alt mb-20 dropbtn">My Account</a>' +
        //                         '<a href="#" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">My Account</a>' +
        //                         // '<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">My Account</button>'+
        //                         '<div class="dropdown-menu">'+
        //                         '<li><a class ="dropdown-item" href="/' + dash + '" class="top-wallet" >Dashboard</a></li>'+
        //                         '<li><a href="settings" class="top-wallet" onclick="">Settings</a></li>'+
        //                         '<li><a href="#" class="top-wallet" onclick="logout()">Logout</a></li>'+
        //                         '</div> </div> ';
        //                     // '<div class="dropdown-content" id="myDropdown">' +
        //                     // '<a href="/' + dash + '" class="top-wallet" >Dashboard</a> ' +
        //                     // ' <a href="#" class="top-wallet" onclick="logout()">Logout</a>' +
        //                     // '</div>  </div>';
        //                 }
        //                 else{
        //                     this.innerHTML = '<div class="dropdown"> ' +
        //                     '<a href="#" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">My Account</a>' +
        //                         // '<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">My Account</button>'+
        //                         '<div class="dropdown-menu">'+
        //                         // '<a href="#" class="cws-button small  alt mb-20 dropbtn">My Account</a>' +
        //                         '<li><a href="#" class="top-wallet" onclick="logout()">Logout</a></li>'+
        //                         '</div> </div> ';
        //                     }
        //                     $(".top-login").off('click');
        //                 } else {
        //                     $('.header button').show();
        //                 }
        //             } else {
        //                 $('.header button').show();
        //             }
        //         });
        //
        //     $("#login_owner").submit(function (e) {
        //
        //         e.preventDefault();
        //
        //         $.ajax({
        //
        //             type: 'POST',
        //             url: 'https://api.wandertribe.in/api/login',
        //
        //             data: $("#login_owner").serialize(),
        //             dataType: 'json',
        //
        //             beforeSend: function () {
        //                 $('.loader-outer').show();
        //             },
        //
        //             success: function (data, textStatus, xhr) {
        //                 $('.loader-outer').hide();
        //                 if (xhr.status == 200) {
        //                     //document.querySelector('#myModalLogin').style.width=0;
        //
        //                     localStorage.setItem("auth_key", data.result.auth_key);
        //                     localStorage.setItem("user_type", data.result.user_type);
        //                     localStorage.setItem("user_name", data.result.name);
        //                     localStorage.setItem("mobile", data.result.mobile);
        //                     localStorage.setItem("user_gst_no", data.result.gst_no);
        //                     localStorage.setItem("user_email", data.result.email);
        //                     localStorage.setItem("device", 'web');
        //                     location.reload();
        //                 }
        //                 else if (xhr.status == 208) {
        //                     localStorage.setItem("auth_key", data.auth_key);
        //                     var auth_key = localStorage.getItem("auth_key");
        //                     var device = 'web';
        //                     if (confirm("User already logged in from another browser.Do you want to logout the existing id?")) {
        //                         $.ajax({
        //                             type: 'POST',
        //                             url: 'https://api.wandertribe.in/api/logout',
        //                             headers: {
        //                                 auth_key: auth_key,
        //                             },
        //                             data: {
        //                                 device: device,
        //                             },
        //                             beforeSend: function() {
        //                                 $('.loader-outer').show();
        //                             },
        //
        //                             success: function (data, textStatus, xhr) {
        //                                 $('.loader-outer').hide();
        //                                 if (xhr.status == 200) {
        //                                     //
        //                                     location.reload();
        //                                     alert("user successfully logged out");
        //                                 }
        //                             },
        //                             error: function (data) {
        //                                 console.log('An error occurred.');
        //                             }
        //                         })
        //                     }
        //                     if (xhr.status != 200 && xhr.status != 208) {
        //                         alert('invalid login details');
        //                     }
        //                 }
        //                 else {
        //                     alert("Wrong credentials are entered...")
        //                 }
        //             },
        //             error: function (data) {
        //                 console.log('An error occurred.');
        //             }
        //         });
        //     });
        //
        //     var signup_form = $('#signupformid');
        //
        //     signup_form.submit(function (e) {
        //         e.preventDefault();
        //         if($("#check-business").prop("checked") == true){
        //             localStorage.setItem("user_type", "VENDOR");
        //             localStorage.setItem("company_name",document.getElementById('reg_company_name').value);
        //         }
        //         else{
        //             localStorage.setItem("user_type", "CUSTOMER");
        //         }
        //         localStorage.setItem("mobile",document.getElementById('reg_mobile').value);
        //         localStorage.setItem("user_email",document.getElementById('reg_email').value );
        //         localStorage.setItem("user_name",document.getElementById('reg_name').value );
        //         $.ajax({
        //             type: signup_form.attr('method'),
        //             url: signup_form.attr('action'),
        //             data: signup_form.serialize(),
        //             dataType: 'json',
        //             beforeSend: function () {
        //                 $('.loader-outer').show();
        //             },
        //             success: function (data, textStatus, xhr) {
        //                 $('.loader-outer').hide();
        //                 if (xhr.status == 200) {
        //                     window.stop();
        //                     $("#signupBody").hide();
        //                     $("#signupOTPBody").show();
        //                     $('#verify_number').val(localStorage.getItem('mobile'));
        //                 } else if (xhr.status == 201) {
        //                     alert('Mobile number already found');
        //                     // $('#email_error_message').html('Email Already exists !').css('color', 'red')
        //                 } else if (xhr.status == 202) {
        //                     alert('Email already found');
        //                     // $('#email_error_message').html('Email Already exists !').css('color', 'red')
        //                 }
        //             },
        //
        //             error: function (data) {
        //                 console.log('An error occurred.');
        //                 console.log(data);
        //             }
        //         });
        //     });
        //
        //     $("#sendOtp").submit(function (e) {
        //         e.preventDefault();
        //         $.ajax({
        //             type: 'POST',
        //             url: 'https://api.wandertribe.in/api/sendOtp',
        //             data: {
        //                 'mobile': localStorage.getItem('mobile'),
        //                 'type': 'otp',
        //                 'title': sessionStorage.getItem('mobile_verification_type')
        //             },
        //             dataType: 'json',
        //             beforeSend: function () {
        //                 $('.loader-outer').show();
        //             },
        //             success: function (data, textStatus, xhr) {
        //                 $('.loader-outer').hide();
        //                 if (xhr.status == 200) {
        //                     window.stop();
        //                     $('#signupBody').hide();
        //                     $("#signupOTPBody").hide();
        //                     $("#signupEnterOTPBody").show();
        //                 } else if (xhr.status == 201) {
        //                     alert('No user found with this mobile number');
        //                 }
        //
        //             },
        //             error: function (data) {
        //                 $('.loader-outer').hide();
        //                 alert('An error occurred.');
        //                 console.log(data);
        //             }
        //         });
        //     });
        //
        //     $("#verify_otp_form").submit(function (e) {
        //         e.preventDefault();
        //         var verification_type = sessionStorage.getItem('mobile_verification_type');
        //         $.ajax({
        //             type: 'POST',
        //             url: 'https://api.wandertribe.in/api/verifyOtp',
        //             data: {
        //                 'mobile': localStorage.getItem('mobile'),
        //                 'otp': document.getElementById('otp').value,
        //                 'title': "verification_type",
        //             },
        //             dataType: 'json',
        //             beforeSend: function () {
        //                 $('.loader-outer').show();
        //             },
        //             success: function (data, textStatus, xhr) {
        //                 $('.loader-outer').hide();
        //                 console.log(data);
        //                 if (xhr.status == 200) {
        //                     window.stop();
        //                     $("#signupEnterOTPBody").hide();
        //                     $("#signupSetPwdBody").show();
        //                 }
        //                 else if (xhr.status == 202){
        //                     alert('Please entry the correct OTP !');
        //                     $('#signupBody').hide();
        //                     $("#signupOTPBody").hide();
        //                     $("#signupEnterOTPBody").show();
        //                 }
        //             },
        //             error: function (data) {
        //                 $('.loader-outer').hide();
        //                 console.log('An error occurred.');
        //                 console.log(data);
        //             }
        //         });
        //
        //     });
        //
        //     $("#registration_form").submit(function (e) {
        //         e.preventDefault();
        //         $.ajax({
        //             type: 'POST',
        //             url: 'https://api.wandertribe.in/api/register',
        //             data: {
        //                 'name': localStorage.getItem('user_name'),
        //                 'mobile': localStorage.getItem('mobile'),
        //                 'email':localStorage.getItem('user_email'),
        //                 'password':document.getElementById('password').value,
        //                 'device':'web',
        //                 'company_name':localStorage.getItem('company_name'),
        //                 'user_type':localStorage.getItem("user_type")
        //             },
        //             dataType: 'json',
        //             beforeSend: function () {
        //                 $('.loader-outer').show();
        //             },
        //             success: function (data, textStatus, xhr) {
        //                 $('.loader-outer').hide();
        //                 if (xhr.status == 200) {
        //                     $("#logsignpop").hide();
        //                     localStorage.setItem("auth_key", data.result.auth_key);
        //                     localStorage.setItem("user_type", data.result.user_type);
        //                     localStorage.setItem("mobile", data.result.mobile);
        //                     localStorage.setItem("user_email", data.result.email);
        //                     localStorage.setItem("user_name", data.result.name);
        //                     localStorage.setItem("device", 'web');
        //                     top.location.href = 'index.php';
        //                 } else if (xhr.status == 201) {
        //                     alert('User Already Registered');
        //                     // $('#email_error_message').html('Email Already exists !').css('color', 'red')
        //                 } else if (xhr.status == 202) {
        //                     alert('User Already Registered');
        //                     // $('#email_error_message').html('Email Already exists !').css('color', 'red')
        //                 }
        //             },
        //
        //             error: function (data) {
        //                 console.log('An error occurred.');
        //                 console.log(data);
        //             }
        //         });
        //     });
        //     $("#reg_mobile").blur(function () {
        //         var Number = document.getElementById('reg_mobile').value;
        //         var IndNum = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
        //
        //         if(IndNum.test(Number)){
        //             $("#wrong_number").hide();
        //             $("#signupButton").removeAttr('disabled');
        //         }
        //         else{
        //             $("#wrong_number").show();
        //             $("#signupButton").attr('disabled','disabled');
        //             // $('#errMessage').text('please enter valid mobile number');
        //             // document.getElementById('profile_telephoneNumber').focus();
        //         }
        //     });
        //     $("#reg_email").blur(function () {
        //         var email = document.getElementById('reg_email').value;
        //         var email_reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //
        //         if(email_reg.test(email)){
        //             $("#invalid_email").hide();
        //             $("#signupButton").removeAttr('disabled');
        //         }
        //         else{
        //             $("#invalid_email").show();
        //             $("#signupButton").attr('disabled','disabled');
        //             // $('#errMessage').text('please enter valid mobile number');
        //             // document.getElementById('profile_telephoneNumber').focus();
        //         }
        //     });
        //
        //     if($("#check-business").prop("checked") != true) {
        //         $("#reg_company_name").attr('disabled','disabled');
        //     }
        //     var checkbox = document.querySelector("input[name=buisness_checkbox]");
        //
        //     checkbox.addEventListener( 'change', function() {
        //         if(this.checked) {
        //             $("#reg_company_name").removeAttr('disabled');
        //         } else {
        //             $("#reg_company_name").attr('disabled','disabled');
        //         }
        //     });
        //
        //     var buisness_modal = document.querySelector("#buis_reg_btn");
        //
        //     buisness_modal.addEventListener('onclick',function () {
        //         $("#check-business").attr('checked',true);
        //         $("#reg_company_name").removeAttr('disabled');
        //     })
        // });
function logout() {
    var auth_key = localStorage.getItem("auth_key");
    $.ajax({

        type: 'POST',
        url: 'https://api.wandertribe.in/api/logout',
        headers: {
            auth_key: auth_key,

        },
        data: {
            device: "web",
        },
        beforeSend: function () {
            $('.loader-outer').show();
        },

        success: function (data, textStatus, xhr) {
            $('.loader-outer').hide();
            if (xhr.status == 200) {
                localStorage.removeItem('auth_key');
                localStorage.removeItem('user_type');
                localStorage.removeItem('user_name');
                localStorage.removeItem('user_email');
                localStorage.removeItem('mobile');
                top.location.href = 'index.php';
            }
        },
        error: function (data) {
            console.log('An error occurred.');
        }
    });
};
function search(){
    var location = document.getElementById('pac-input').value;
    var startDate = document.getElementById('date').value;
    var roadType = document.getElementById('roadType').value;
    var roadTypeObj = {
        'smooth': "SMOOTH HIGHWAY",
        'twist': "TWIST AND TURN",
        'bumpy': "BUMPY RIDES",
        'offroading': "OFFROADING"
    };
    // var roadTypeF;
    // if(roadType === '') {
    //     roadTypeF='';
    // }
    // else {
    //     roadTypeF = roadTypeObj[roadType].includes(' ')===true ? 
    //     roadTypeObj[roadType].split(' ').join('%20') : roadTypeObj.roadType;
    // }
    localStorage.setItem('meetupPoint', location);
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('road_type', roadType);

    top.location.href = 'SearchTrips.php';

    // top.location.href = 'SearchTrips.php?meetupPoint=' + (document.getElementById('pac-input').value)
    // +
    // '&startDate=' +document.getElementById('date').value
    // +
    // '&RType=' +roadTypeF ;
}

</script>
</head>
<body>
    <!--  loader -->
<!--    <div class="loader-outer">-->
<!--        <div class="loader-icon">-->
<!--            <div class="loader-inner">-->
<!--                <img src='img/fullscreen-loader.gif'>-->
<!--                <p>Processing. Please Wait...</p>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
    <!--  loader  -->

    <div style="background-image: linear-gradient(to right, purple, #1A1780);">
        <?php include 'common.php'; ?>
<!--        <div class="row header">-->
<!--            <div class="col-xs-2 col-sm-2 col-md-4 logo">-->
<!--                <img src="new_img/logo/logo1.png" alt="">-->
<!--            </div>-->
<!--            <div class="col-xs-7 col-sm-6 col-md-4 col-xs-offset-3 col-sm-offset-4 col-md-offset-4 certify">-->
<!--                <div class="row">-->
<!--                    <div class="col-xs-6 business" id = "buis_reg_btn">-->
<!--                        <a href="#myModalSignup" data-toggle="modal">-->
<!--                            <img src="new_img/business-reg.png" alt="">-->
<!--                        </a>-->
<!--                    </div>-->
<!---->
<!--                    <div class="col-xs-6 login_button" style="padding-left: 0;">-->
<!--                        <button class="btn btn-primary" data-toggle="modal" data-target="#myModalLogin">-->
<!--                            Login or Create Account-->
<!--                        </button>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="inner-nav desktop-nav">-->
<!--                    <ul class="clearlist">-->
<!--                        <li>-->
<!--                            <div class="login-status top-login" id="acc_status"></div>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--            </div>-->
<!---->
<!--            <div class="modal M-log-in" id="myModalLogin">-->
<!--                <div class="modal-dialog modal-dialog-centered">-->
<!--                    <div class="modal-content">-->
<!--                        <div class="modal-body M-16 row">-->
<!--                            <div class="col-xs-6">-->
<!--                                <div class="leaf1">-->
<!--                                    <img src="new_img/login/leaf1.png">-->
<!--                                </div>-->
<!--                                <div class="leaf-banda">-->
<!--                                    <div class="leaf2">-->
<!--                                        <img src="new_img/login/leaf2.png">-->
<!--                                    </div>-->
<!--                                    <div class="banda">-->
<!--                                        <img src="new_img/login/banda.png">-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="wander-text">-->
<!--                                    <h3>WanderTribe</h3>-->
<!--                                    <p>-->
<!--                                        One Stop Destination for All Your Authentic Offbeat Travel & Experience.-->
<!--                                    </p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="col-xs-6">-->
<!--                                <div style="margin-left: 5%; margin-right: 10%;">-->
<!--                                    <div class="login-with">-->
<!--                                        <h2>Log in with</h2>-->
<!--                                        <a href="https://api.wandertribe.in/socialMediaRedirect/google"><img src="new_img/login/google.png"></a>-->
<!--                                        <p>OR</p>-->
<!--                                        <a href="https://api.wandertribe.in/socialMediaRedirect/facebook"><img src="new_img/login/fb.png"></a>-->
<!---->
<!--                                    </div>-->
<!--                                    <div>-->
<!--                                        <form id="login_owner">-->
<!--                                            <div class="form-group">-->
<!--                                                <label >Registered Email/Mobile no.</label>-->
<!--                                                <input type="text" name="mobile" class="form-control"-->
<!--                                                placeholder="Enter Email/Mobile no.">-->
<!--                                            </div>-->
<!--                                            <div class="form-group">-->
<!--                                                <label>Password</label>-->
<!--                                                <input type="password" name="password" class="form-control"-->
<!--                                                placeholder="Enter Password">-->
<!--                                            </div>-->
<!--                                            <input type="hidden" value="web" id="user_type_customer" name="device"/>-->
<!--                                            <button type="submit">LOGIN</button>-->
<!--                                        </form>-->
<!--                                        <div style="margin-top: 10%;">-->
<!--                                            <center><a href="#myModalReset" class="forgot" data-toggle="modal"-->
<!--                                               data-dismiss="modal">Forgot Password?</a></center>-->
<!--                                           </div>-->
<!---->
<!--                                           <p>New to WanderTribe? <a href="#myModalSignup" data-toggle="modal"-->
<!--                                              data-dismiss="modal">-->
<!--                                          Create account now.</a></p>-->
<!--                                      </div>-->
<!--                                  </div>-->
<!--                              </div>-->
<!--                          </div>-->
<!--                      </div>-->
<!--                  </div>-->
<!--              </div>-->
<!---->
<!--              <div class="modal Model-signUp" id="myModalSignup">-->
<!--                <div class="modal-dialog">-->
<!--                    <div class="modal-content">-->
<!--                        <div class="modal-body scroll d-block">-->
<!--                            <div class="container" style="width: 100%; padding: 0;">-->
<!--                                <div class="row" id="signupBody" style="margin: 0;">-->
<!--                                    <div class="col-xs-6 fixed">-->
<!--                                        <div class="leaf1">-->
<!--                                            <img src="new_img/signup/leaf1.png">-->
<!--                                        </div>-->
<!--                                        <div class="leaf-banda ">-->
<!--                                            <div class="leaf2">-->
<!--                                                <img src="new_img/signup/leaf2.png">-->
<!--                                            </div>-->
<!--                                            <div class="banda">-->
<!--                                                <img src="new_img/signup/banda.png">-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="wander-text">-->
<!--                                            <h3>WanderTribe</h3>-->
<!--                                            <p>-->
<!--                                                Aggregator for Alternate Travel Experience.-->
<!--                                            </p>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="leaf3">-->
<!--                                            <img src="new_img/signup/leaf3.png">-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="col-xs-6" id="signupInfo">-->
<!--                                        <div>-->
<!--                                            <div id="circleInfo1"></div>-->
<!--                                            <hr id="lineInfo2">-->
<!--                                            <div id="circleInfo3"></div>-->
<!--                                            <hr id="lineInfo2">-->
<!--                                            <div id="circleInfo3"></div>-->
<!--                                            <hr id="lineInfo2">-->
<!--                                            <div id="circleInfo3"></div>-->
<!--                                        </div>-->
<!---->
<!--                                        <div style="margin-left: 10px;">-->
<!---->
<!--                                            <div class="signup-with">-->
<!--                                                <h2>Signup with</h2>-->
<!--                                                <a href="https://api.wandertribe.in/socialMediaRedirect/google"><img src="new_img/login/google.png"></a>-->
<!--                                                <p>OR</p>-->
<!--                                                <a href="https://api.wandertribe.in/socialMediaRedirect/facebook"><img src="new_img/login/fb.png"></a>-->
<!--                                            </div>-->
<!--                                            <div>-->
<!--                                                <form method="post"-->
<!--                                                action="https://api.wandertribe.in/api/check_mob_email"-->
<!--                                                enctype="multipart/form-data" id="signupformid">-->
<!--                                                <div class="form-group">-->
<!--                                                    <label for="name">Full Name</label>-->
<!--                                                    <input type="text" name="name" class="form-control"-->
<!--                                                    placeholder="Enter full name" id="reg_name" required>-->
<!--                                                </div>-->
<!--                                                <input type="checkbox" id="check-business" name="buisness_checkbox">-->
<!--                                                <label class="control-label">BUSINESS NAME-->
<!--                                                    <span>(only for business user)</span>-->
<!--                                                </label>-->
<!--                                                <div class="form-group">-->
<!--                                                    <input type="text" name="company" class="form-control"-->
<!--                                                    placeholder="Enter your company name" id = "reg_company_name" required>-->
<!--                                                </div>-->
<!--                                                <div class="form-group">-->
<!--                                                    <label for="mob">Enter Mobile no.</label>-->
<!--                                                    <input type="text" name="mobile" class="form-control"-->
<!--                                                    placeholder="Enter your mobile no." id = "reg_mobile" required>-->
<!--                                                    <span id="wrong_number" class="text-danger">please enter a valid number</span>-->
<!--                                                </div>-->
<!--                                                <div class="form-group">-->
<!--                                                    <label for="email">Email ID (optional)</label>-->
<!--                                                    <input type="email" name="email" class="form-control"-->
<!--                                                    placeholder="Enter your email-id" id = "reg_email" required>-->
<!--                                                    <span id="invalid_email" class="text-danger">Invalid email</span>-->
<!--                                                </div>-->
<!--                                                <input type="hidden" value="web" id="reg_device" name="device"/>-->
<!--                                                <div class="form-group">-->
<!--                                                    <input type="submit" class="btn form-control reg_btn" id="signupButton" value="SIGNUP"-->
<!--                                                    style="background-image: linear-gradient(to right, #ffdf31, #ff9900);">-->
<!--                                                </div>-->
<!---->
<!--                                            </form>-->
<!--                                            <div class="links">-->
<!--                                                <p>Already have an account? <a href="#myModalLogin"-->
<!--                                                   data-toggle="modal" data-dismiss="modal">-->
<!--                                               Log in.</a></p>-->
<!--                                           </div>-->
<!--                                       </div>-->
<!--                                   </div>-->
<!--                               </div>-->
<!--                           </div>-->
<!--                           <div class="row" id="signupOTPBody">-->
<!--                            <div class="col-xs-6 fixed">-->
<!--                                <div class="leaf1">-->
<!--                                    <img src="new_img/signup/leaf1.png">-->
<!--                                </div>-->
<!--                                <div class="leaf-que">-->
<!--                                    <div class="leaf2">-->
<!--                                        <img src="new_img/signup/leaf2.png">-->
<!--                                    </div>-->
<!--                                    <div class="que">-->
<!--                                        <img src="new_img/signup/phone.png">-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="leaf3">-->
<!--                                    <img src="new_img/signup/leaf3.png">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="col-xs-6">-->
<!--                                <div id="signupOTPInfo">-->
<!--                                    <div id="circleInfo2"></div>-->
<!--                                    <hr id="lineInfo1">-->
<!--                                    <div id="circleInfo1"></div>-->
<!--                                    <hr id="lineInfo2">-->
<!--                                    <div id="circleInfo3"></div>-->
<!--                                    <hr id="lineInfo2">-->
<!--                                    <div id="circleInfo3"></div>-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                    <div class="reset-text">-->
<!--                                        <h3>Verify Mobile Number</h3>-->
<!--                                        <p>-->
<!--                                            We will send an OTP to your registered mobile number or email.-->
<!--                                        </p>-->
<!--                                    </div>-->
<!--                                    <div>-->
<!--                                        <form id = "sendOtp">-->
<!--                                            <div class="form-group">-->
<!--                                                <label for="email-mob">Enter Registered Mobile no.</label>-->
<!--                                                <input type="text" name="mobile" class="form-control"-->
<!--                                                placeholder="Enter Email/Mobile no." id = "verify_number" readonly>-->
<!--                                            </div>-->
<!--                                            <button id="signupOTPButton" type="submit">GET OTP</button>-->
<!--                                        </form>-->
<!--                                        <div class="links">-->
<!--                                            <p>Already have an account? <a href="#myModalLogin"-->
<!--                                               data-toggle="modal" data-dismiss="modal">-->
<!--                                           Log in.</a></p>-->
<!--                                       </div>-->
<!---->
<!--                                   </div>-->
<!--                               </div>-->
<!--                           </div>-->
<!--                       </div>-->
<!---->
<!--                       <div class="row" id="signupEnterOTPBody" >-->
<!--                        <div class="col-xs-6 fixed">-->
<!--                            <div class="leaf1">-->
<!--                                <img src="new_img/signup/leaf1.png">-->
<!--                            </div>-->
<!--                            <div class="leaf-que">-->
<!--                                <div class="leaf2">-->
<!--                                    <img src="new_img/signup/leaf2.png">-->
<!--                                </div>-->
<!--                                <div class="que">-->
<!--                                    <img src="new_img/signup/phone.png">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="leaf3">-->
<!--                                <img src="new_img/signup/leaf3.png">-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-xs-6">-->
<!--                            <div id="signupEnterOTPInfo">-->
<!--                                <div id="circleInfo2"></div>-->
<!--                                <hr id="lineInfo1">-->
<!--                                <div id="circleInfo2"></div>-->
<!--                                <hr id="lineInfo1">-->
<!--                                <div id="circleInfo1"></div>-->
<!--                                <hr id="lineInfo2">-->
<!--                                <div id="circleInfo3"></div>-->
<!--                            </div>-->
<!--                            <div style="margin-left: 10px;">-->
<!--                                <div class="reset-text">-->
<!--                                    <h3>OTP verification</h3>-->
<!--                                    <p>-->
<!--                                        We have sent an OTP to your registered mobile number or email,-->
<!--                                        please check.-->
<!--                                    </p>-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                    <form id="verify_otp_form">-->
<!--                                        <div class="form-group">-->
<!--                                            <label for="otp">Enter OTP</label>-->
<!--                                            <input type="text" name="otp" class="form-control" id="otp"-->
<!--                                            placeholder="Enter OTP">-->
<!--                                        </div>-->
<!--                                        <button type="submit">Verify and Proceed</button>-->
<!--                                    </form>-->
<!--                                    <div class="links">-->
<!--                                        <p>Already have an account? <a href="#myModalLogin"-->
<!--                                           data-toggle="modal" data-dismiss="modal">-->
<!--                                       Log in.</a></p>-->
<!--                                   </div>-->
<!--                               </div>-->
<!--                           </div>-->
<!--                       </div>-->
<!--                   </div>-->
<!---->
<!--                   <div class="row" id="signupSetPwdBody" >-->
<!--                    <div class="col-xs-6 fixed">-->
<!--                        <div class="leaf1">-->
<!--                            <img src="new_img/signup/leaf1.png">-->
<!--                        </div>-->
<!--                        <div class="leaf-que">-->
<!--                            <div class="leaf2">-->
<!--                                <img src="new_img/signup/leaf2.png">-->
<!--                            </div>-->
<!--                            <div class="que">-->
<!--                                <img src="new_img/signup/setPwd.png">-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="leaf3">-->
<!--                            <img src="new_img/signup/leaf3.png">-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-xs-6">-->
<!--                        <div id="signupSetPwdInfo">-->
<!--                            <div id="circleInfo2"></div>-->
<!--                            <hr id="lineInfo1">-->
<!--                            <div id="circleInfo2"></div>-->
<!--                            <hr id="lineInfo1">-->
<!--                            <div id="circleInfo2"></div>-->
<!--                            <hr id="lineInfo1">-->
<!--                            <div id="circleInfo1"></div>-->
<!--                        </div>-->
<!---->
<!--                        <div style="margin-left: 10px;">-->
<!--                            <div class="reset-text">-->
<!--                                <h3>Set Your Password</h3>-->
<!--                                <p>-->
<!--                                </p>-->
<!--                            </div>-->
<!--                            <div>-->
<!--                                <form id="registration_form">-->
<!--                                    <div class="form-group">-->
<!--                                        <label for="pwd">Enter new Password</label>-->
<!--                                        <input type="password" name="password" class="form-control" id="password"-->
<!--                                        placeholder="Enter new Password">-->
<!--                                    </div>-->
<!--                                    <div class="form-group">-->
<!--                                        <label for="ConfirmPwd">Confirm Password</label>-->
<!--                                        <input type="password" name="ConfirmPwd" class="form-control"-->
<!--                                        placeholder="Re-enter new Password">-->
<!--                                        <span id="match_pwd" class="text-danger">Password and confirm password does not match</span>-->
<!--                                    </div>-->
<!---->
<!--                                    <button type="submit" id="signupSetPwdButton" >-->
<!--                                        Submit-->
<!--                                    </button>-->
<!--                                </form>-->
<!--                                <div class="links">-->
<!--                                    <p>Already have an account? <a href="#myModalLogin"-->
<!--                                       data-toggle="modal" data-dismiss="modal">-->
<!--                                   Log in.</a></p>-->
<!--                               </div>-->
<!--                           </div>-->
<!--                       </div>-->
<!--                   </div>-->
<!--               </div>-->
<!---->
<!--           </div>-->
<!--       </div>-->
<!--   </div>-->
<!--</div>-->
<!--</div>-->
<!---->
<!--<div class="modal M-18" id="myModalReset">-->
<!--    <div class="modal-dialog modal-dialog-centered">-->
<!--        <div class="modal-content">-->
<!--            <div class="modal-body">-->
<!--                <div class="container-fluid">-->
<!--                    <div class="row">-->
<!--                        <div class="col-xs-6 ">-->
<!--                            <div class="leaf1">-->
<!--                                <img src="new_img/login/leaf1.png">-->
<!--                            </div>-->
<!--                            <div class="leaf-que">-->
<!--                                <div class="leaf2">-->
<!--                                    <img src="new_img/login/leaf2.png">-->
<!--                                </div>-->
<!--                                <div class="que">-->
<!--                                    <img src="new_img/reset/que.png">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="leaf3">-->
<!--                                <img src="new_img/login/leaf3.png">-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-xs-6">-->
<!--                            <div style=" margin-right: 8%;">-->
<!--                                <div class="reset-text">-->
<!--                                    <h3>Reset Password</h3>-->
<!--                                    <p>-->
<!--                                        We will send an OTP to your registered mobile number or email.-->
<!--                                    </p>-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                    <form>-->
<!--                                        <div class="form-group">-->
<!--                                            <label for="email-mob">Enter Registered Email/Mobile no.</label>-->
<!--                                            <input type="text" name="email-mob" class="form-control"-->
<!--                                            placeholder="Enter Email/Mobile no.">-->
<!--                                        </div>-->
<!--                                        <button data-toggle="modal" data-target="#myModalReset1"-->
<!--                                        data-dismiss="modal">-->
<!--                                        GET OTP-->
<!--                                    </button>-->
<!--                                </form>-->
<!--                                <div class="links">-->
<!--                                    <a href="#myModalSignup" data-toggle="modal"-->
<!--                                    data-dismiss="modal">Create account now</a><a href="#"> |</a> <a-->
<!--                                    href="#myModalLogin" data-toggle="modal"-->
<!--                                    data-dismiss="modal">Login</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->
<!--</div>-->
<!---->
<!--<div class="modal " id="myModalReset1">-->
<!--    <div class="modal-dialog modal-dialog-centered">-->
<!--        <div class="modal-content">-->
<!--            <div class="modal-body">-->
<!--                <div class="container" style="width: 100%; padding: 0;">-->
<!--                    <div class="row" style="margin: 0;">-->
<!--                        <div class="col-xs-6">-->
<!--                            <div class="leaf1">-->
<!--                                <img src="new_img/login/leaf1.png">-->
<!--                            </div>-->
<!--                            <div class="leaf-que">-->
<!--                                <div class="leaf2">-->
<!--                                    <img src="new_img/login/leaf2.png">-->
<!--                                </div>-->
<!--                                <div class="que">-->
<!--                                    <img src="new_img/reset/que.png">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="leaf3">-->
<!--                                <img src="new_img/login/leaf3.png">-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-xs-6">-->
<!--                            <div style="margin-left: 10px; margin-right: 56px;">-->
<!--                                <div class="reset-text">-->
<!--                                    <h3>Reset Password</h3>-->
<!--                                    <p>-->
<!--                                        We have sent an OTP to your registered mobile number or email,-->
<!--                                        please check.-->
<!--                                    </p>-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                    <form>-->
<!--                                        <div class="form-group">-->
<!--                                            <label for="otp">Enter OTP</label>-->
<!--                                            <input type="text" name="otp" class="form-control"-->
<!--                                            placeholder="Enter OTP">-->
<!--                                        </div>-->
<!--                                        <button data-toggle="modal" data-target="#myModalReset2"-->
<!--                                        data-dismiss="modal">-->
<!--                                        VERIFY OTP-->
<!--                                    </button>-->
<!--                                </form>-->
<!--                                <div class="links">-->
<!--                                    <a href="#myModalSignup" data-toggle="modal"-->
<!--                                    data-dismiss="modal">Create account now</a><a href="#"> |</a> <a-->
<!--                                    href="#myModalLogin" data-toggle="modal"-->
<!--                                    data-dismiss="modal">Login</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->
<!--</div>-->
<!---->
<!--<div class="modal" id="myModalReset2">-->
<!--    <div class="modal-dialog modal-dialog-centered">-->
<!--        <div class="modal-content">-->
<!--            <div class="modal-body">-->
<!--                <div class="container" style="width: 100%; padding: 0;">-->
<!--                    <div class="row" style="margin: 0;">-->
<!--                        <div class="col-xs-6">-->
<!--                            <div class="leaf1">-->
<!--                                <img src="new_img/login/leaf1.png">-->
<!--                            </div>-->
<!--                            <div class="leaf-que">-->
<!--                                <div class="leaf2">-->
<!--                                    <img src="new_img/login/leaf2.png">-->
<!--                                </div>-->
<!--                                <div class="que">-->
<!--                                    <img src="new_img/reset/que.png">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="leaf3">-->
<!--                                <img src="new_img/login/leaf3.png">-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-xs-6">-->
<!--                            <div style="margin-left: 10px; margin-right: 56px;">-->
<!--                                <div class="reset-text">-->
<!--                                    <h3>Reset Password</h3>-->
<!--                                    <p>-->
<!--                                        <!-- Change Password. -->-->
<!--                                    </p>-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                    <form>-->
<!--                                        <div class="form-group">-->
<!--                                            <label for="pwd">Enter new Password</label>-->
<!--                                            <input type="password" name="password" class="form-control"-->
<!--                                            placeholder="Enter new Password">-->
<!--                                        </div>-->
<!--                                        <div class="form-group">-->
<!--                                            <label for="ConfirmPwd">Confirm Password</label>-->
<!--                                            <input type="password" name="ConfirmPwd" class="form-control"-->
<!--                                            placeholder="Re-enter new Password">-->
<!--                                        </div>-->
<!---->
<!--                                        <button type="submit">-->
<!--                                            RESET PASSWORD-->
<!--                                        </button>-->
<!--                                    </form>-->
<!--                                    <div class="links">-->
<!--                                        <a href="#myModalSignup" data-toggle="modal"-->
<!--                                        data-dismiss="modal">Create account now</a><a href="#"> |</a> <a-->
<!--                                        href="#myModalLogin" data-toggle="modal"-->
<!--                                        data-dismiss="modal">Login</a>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->
<!---->
<!--</div>-->
</div>

<div style="position: relative;">
    <img class="hero-image" src="new_img/road-trip/hero-image.png" alt="">
    <div class="holiday-text">
        <h2 class="demo">Wantertribe Driving Holidays, RoadTrips and Expeditions  </h2>
        <h3>Drives to amazing place</h3>
        <h3>Just show up with your favourite wheels</h3>
    </div>

    <div class="activities">
        <ul class="nav nav-tabs">
            <li>
                <a  href="index.php">
                    <img src="new_img/facility/stays.png" alt="">
                    <h5>Stays</h5>
                </a> 
            </li>
            <li>
                <a href="treksLanding.php">
                    <img src="new_img/facility/treks.png" alt="">
                    <h5>Treks</h5>
                </a>
            </li>
            <li class="active">
                <a data-toggle="tab" href="#home">
                    <img src="new_img/facility/road-trips.png" alt="">
                    <h5>Road Trips</h5>
                </a>
            </li>
            <li>
                <a data-toggle="tab" href="#home">
                    <img src="new_img/facility/experiences.png" alt="">
                    <h5>Experiences</h5>
                </a>
            </li>
            <li>
                <a data-toggle="tab" href="#home">
                    <img src="new_img/facility/travel-calender.png">
                    <h5>Travel Calender</h5>
                </a>
            </li>
            <li>
                <a data-toggle="tab" href="#home">
                    <img src="new_img/facility/others.png" alt="">
                    <h5>Others</h5>
                </a>
            </li>
        </ul>

    </div>
</div>

<div class="tab-content">
    <div id="treks" class="tab-pane fade in active" style="background: #ECEFF1;">
        <center>
            <ul class="list-inline" style="position: relative;">
                <li class="active">
                    <div class="visual">
                        <img src="new_img/icons/destination.png" alt="">
                        <span>Where</span>
                    </div>
                    <div>
                        <input id="pac-input" class="controls item-info" type="text" placeholder="location">
                    </div>
                </li>
                <li>
                    <div class="visual">
                        <img src="new_img/icons/check-in.png" alt="">
                        <span>When</span>
                    </div>
                    <div>
                        <input type="date" name="date-in" class="item-info" id="date">
                    </div>
                </li>
                <li>

                    <div class="visual">
                        <img src="new_img/icons/check-out.png" alt="">
                        <span>Difficulty Level</span>
                    </div>
                    <div>
                        <select class="item-info" id="roadType">
                            <option value="">Select road type</option>
                            <option value="smooth">SMOOTH HIGHWAY</option>
                            <option value="twist">TWIST AND TURN</option>
                            <option value="bumpy">BUMPY RIDES</option>
                            <option value="offroading">OFFROADING</option>
                        </select>
                    </div><!-- 20 <span>Feb, 2020</span> -->
                </li>
                <br><br><br>
                <div class="search"><button class="btn btn-warning" onclick="search()">SEARCH YOUR DRIVE</button></div>
            </ul>
        </center>
    </div>
</div>

<div class="sideSearch">
    <a href="#treks" id ="search1"><img src="new_img/icons/search1.png"></a>
</div>

<div class="planning">
    <h2>Planning a road trip is easier than thought</h2>
    <div class="container">
        <div class="row">
            <div class="col-xs-4">
                <img src="new_img/planning/itineraries.png" alt="">
            </div>
            <div class="col-xs-4">
                <img src="new_img/planning/lodging.png" alt="">
            </div>
            <div class="col-xs-4">
                <img src="new_img/planning/logistics.png" alt="">
            </div>
        </div>
    </div>
</div>

<!-- <div class="travel">
    <h2>Travel India with <span style="font-weight: 900;"> WanderTribe </span></h2>
    <div class="row">
        <img src="new_img/state-bg/arrow-left.png" class="arrow" onclick="previousL()">
        <div class="col-sm-2 col-xs-3 state" onclick="stateTrek()">
            <h3></h3>
            <h4>REGION</h4>
            <img src="new_img/state-bg/driving.png" alt="" class="driving">
            <h5>BEST TRIPS</h5>
        </div>
        <div class="col-sm-2 col-xs-3 state" onclick="stateTrek()">
            <h3></h3>
            <h4>REGION</h4>
            <img src="new_img/state-bg/driving.png" class="driving">
            <h5>BEST TRIPS</h5>
        </div>
        <div class="col-sm-2 col-xs-3 state" onclick="stateTrek()">
            <h3></h3>
            <h4>REGION</h4>
            <img src="new_img/state-bg/driving.png" class="driving">
            <h5>BEST TRIPS</h5>
        </div>
        <div class="col-sm-2 col-xs-3 state" onclick="stateTrek()">
            <h3></h3>
            <h4>REGION</h4>
            <img src="new_img/state-bg/driving.png" class="driving">
            <h5>BEST TRIPS</h5>
        </div>
        <div class="col-sm-2 col-xs-3 state" onclick="stateTrek()" style="position: relative;">
            <h3></h3>
            <h4>REGION</h4>
            <img src="new_img/state-bg/driving.png" class="driving">
            <h5>BEST TRIPS</h5>
        </div>
        <img class="arrow" onclick="nextR()" src="new_img/state-bg/arrow-right.png">
    </div>         
</div> -->

<div class="future-treks">
    <h1 style="margin-bottom: 5px;"><span>Our </span>Upcoming Driving Vacations,</h1>
    <h1>Drives and Expeditions</h1>
    <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-3">
            <img src="new_img/road-trip/trip.png" class="trek-bg">
            <h2>New Delhi - Road trip</h2>   
        </div>

        <div class="col-xs-6 col-sm-4 col-md-3">
            <img src="new_img/road-trip/trip.png" class="trek-bg">
            <h2>New Delhi - Road trip</h2>   
        </div>

        <div class="col-xs-6 col-sm-4 col-md-3">
            <img src="new_img/road-trip/trip.png" class="trek-bg">
            <h2>New Delhi - Road trip</h2>   
        </div>

        <div class="col-xs-6 col-sm-4 col-md-3">
            <img src="new_img/road-trip/trip.png" class="trek-bg">
            <h2>New Delhi - Road trip</h2>   
        </div>
    </div>

    <!-- <button class="show-more">SHOW MORE</button> -->
</div>

<?php include 'commonFooter.php' ?>;

<script type="text/javascript" src="js/TripsLanding.js"></script>
</body>
</html>

