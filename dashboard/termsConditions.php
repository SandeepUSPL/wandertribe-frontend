<html>
<head>    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149144948-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-149144948-1');
    </script>
    <title>Terms & Conditions</title>
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
                <h1><strong> Terms & Conditions</strong></h1>
                <div class="collapsed">
                    <a href="#" id="submenutoggle"><h1>Terms & Conditions<i class="fa fa-bars"></i></h1></a>
                </div>
            </div>
            <!-- /submenu -->

            <!-- content main container -->
            <div class="main row">

                <!--//tile-->
                <section class="tile">

                    <div class="container text-left" style="width: 100%">
<!--                        <p id="owner_terms" class="owner_terms"></p>-->

                        <h5>Please read these Terms & Conditions carefully as they contain important information about legal rights, remedies and obligations. By accessing or using the WANDERTRIBE Platform, you agree to comply with and be bound by these Terms of Service. Please Note there is a change in Clause D "SERVICE & PLATFORM FEES" section of the WANDERTRIBE T&C, same shall be effective from 1st March 2018 to all our service providers.</h5>

                        <h5>TERMS OF SERVICE </h5>

                        <p>
                            These Terms of Service ("Terms") constitute a legally binding agreement ("Agreement") between Service provider and WANDERTRIBE governing access to and use of the WANDERTRIBE website, including any sub domains thereof, and any other websites through which WANDERTRIBE makes the WANDERTRIBE Services available (collectively, "Site"), our mobile, tablet and other smart device applications, and application program interfaces (collectively, "Application") and all associated services (collectively, "WANDERTRIBE Services"). The Site, Application and WANDERTRIBE Services together are hereinafter collectively referred to as the "WANDERTRIBE Platform". Your use of the Website, Application and/or agreement signed (either electronically or otherwise) is an acknowledgment that you have reviewed the Terms and Conditions listed at https://www.WANDERTRIBE.com agree to comply with these Terms.
                            WANDERTRIBE reserves the right to modify these Terms at any time in accordance with this provision. If we make changes to these Terms, we will post the revised Terms on the WANDERTRIBE Platform. If you disagree with the revised Terms, you may terminate this Agreement with immediate effect. If you do not terminate your Agreement before the date the revised Terms become effective, your continued access to or use of the WANDERTRIBE Platform will constitute acceptance of the revised Terms.
                        </p>

                        <h5>INTELLECTUAL PROPERTY WANDERTRIBE</h5>

                        <p>
                            Wandertribe has through the investment of considerable time and money developed a unique and distinctive system of creating a network of high quality Camps & Cottages and connecting such network Camps to potential customers In a large scale under the mark '`WANDERTRIBE" and other associated logos, designs and brands ("Marks") while each Service provider in the network continues to be an independent entity having an independent business which continue to provide services to their customers under their respective and distinct brand name/ logo/ name of establishment. The system includes proprietary and distinctive techniques, technology, training methods, operating methods, designs and decor, uniform apparel, color schemes, furnishings, marketing materials, promotional strategies, and customer service requirements ("Know-How"), all of which may be modified from time to time by WANDERTRIBE, and which are directed towards promoting the network Service provider in a manner that will enhance the goodwill associated therewith.
                            WANDERTRIBE identifies high quality camps and cottages or helps existing camps & cottages to implement systems to enable them to transform into high quality budget accommodation. Upon being satisfied that a camps and cottages meets the standards prescribed by WANDERTRIBE, WANDERTRIBE lists and promotes the hotel as "WANDERTRIBE CAMPS" or WANDERTRIBE acknowledges that the Service provider may, for its promotional purposes, need to highlight that it is a part of the network of Camps & Cottages to which WANDERTRIBE provides its services and strictly to that end, WANDERTRIBE authorizes the Service provider to use the Marks. The Service provider undertakes not to do anything to prejudice or damage the goodwill in the Marks or the reputation of WANDERTRIBE. If the Service provider becomes aware of any infringement of the Marks by any other party trading with Marks similar or identical to the Marks, the Service provider shall immediately notify the WANDERTRIBE thereof in writing. Any use of the Marks by the Service provider shall be deemed to be a use of the same by WANDERTRIBE for the purpose of trademark protection and thus where required by WANDERTRIBE, the Service provider shall join with or assist WANDERTRIBE at WANDERTRIBE's cost and expense in making or to make application to become the registered user of the Marks.
                            The Service provider agrees in order to protect the WANDERTRIBE's intellectual property rights and maintain the common identity and reputation of the network, the Service provider must comply with quality specifications laid down by WANDERTRIBE from time to time. Any breach by Service provider in respect thereof may cause irreparable harm and injury to WANDERTRIBE and its intellectual property. The Service provider shall use all reasonable endeavors to conceive and develop new and improved methods of carrying out the Business and improvements in operating procedure and other additions or modifications to the existing technology and Know-How of WANDERTRIBE (hereinafter referred to as "Improvements"). The Service provider agrees to disclose fully any Improvements to WANDERTRIBE and WANDERTRIBE shall determine the feasibility and desirability of incorporating them into WANDERTRIBE's existing technology and Know-How. The Service provider shall transfer all rights in any such Improvement to WANDERTRIBE without any additional consideration.
                        </p>

                        <h5>TERMS OF OPERATIONS</h5>

                        <p>
                            A. USE OF WANDERTRIBE PLATFORM & INTELLECTUAL PROPERTY
                            WANDERTRIBE grants to the Service provider during the period of this Agreement and subject to the terms and conditions hereof the permission to (i) utilize the Know-How and (ill be listed on WANDERTRIBE Platform or any other online website, as may be expressly permitted by WANDERTRIBE in writing, to market or promote bookings at the Service provider by associating with the Mark "WANDERTRIBE".
                            The Service provider undertakes that it will list 100% of its total room inventory on WANDERTRIBE Platform.
                            The Service provider acknowledges that in order to facilitate the completion of WANDERTRIBE's obligations under this Agreement and other similar agreements, WANDERTRIBE has the right to list all Service providers within the network of WANDERTRIBE as `WANDERTRIBE" on the WANDERTRIBE Platform; this is irrespective of the fact that the Service provider provides its services to customers (whether attracted through WANDERTRIBE Platform or in any other manner) independently, under its own brand name. However, each Service provider shall be solely responsible for providing the accommodation services to its customers. Once a booking has been confirmed to a customer on WANDERTRIBE Platform, the Service provider shall honor such bookings. In the event, the Service provider is unable to honor the booking for any unforeseeable circumstances, the Service provider shall provide alternate accommodation of comparable standards at the same price and without prejudice to its right to indemnification, the Service provider shall be liable to pay liquidated damages amounting to twice the booking amount payable in respect of the booking period.
                            WANDERTRIBE may advise the Service provider in modifying the Premises to meet WANDERTRIBE standards and agree on alterations or modification that may be required at the Premises through a mutually agreed 'Transformation Audit Report". The Service provider shall ensure that the Premises is maintained and run as per the standards set out in the Transformation Audit Report and/or the operating, brand and WANDERTRIBE standards as may be published (online or otherwise) from time to time during the term of this Agreement. WANDERTRIBE shall have the right to amend these standards unilaterally and shall keep the Service provider notified of any alterations and/or improvements in or to the operating, brand or WANDERTRIBE standards.
                            The operating, brand and WANDERTRIBE Standards which exist as on date have been provided to Service provider and it undertakes to make all such modifications/ alterations at its own cost and expenses.
                            WANDERTRIBE may assist the Service provider by providing the Know-How which shall at all times remain the property of WANDERTRIBE and train the Service provider's staff in the operation of the hotel as per the WANDERTRIBE Standards. WANDERTRIBE shall keep the Service provider notified of any alterations and/or improvements in or to the operating or brand standards. All operating costs, including the cost of employees, manpower, consumables, utilities rents, taxes etc. shall be the sole responsibility of the Service provider.
                            The Service provider acknowledges that it may be entitled to incentives or may be subject to disincentives based on its performance ranked and measured in accordance with the WANDERTRIBE's intellectual property protected Property Partner Scoring Policy as may be communicated by WANDERTRIBE from time to time. The Service provider agrees that the ranking and performance rating shall be as per the sole opinion of WANDERTRIBE and the same shall not be subject to dispute by the Service provider. WANDERTRIBE shall have the sole discretion to change the terms of the said policy from time to time.
                            B. GUEST CHECK IN AND CHECK OUT POLICY
                            WANDERTRIBE follows a standard 24 hour Check-in Check-out policy - 12 AM Check-in and 11 AM Check-out. In case of early Check-in or late Check-out request by guest, Service providers shall provide the room based on availability.
                            C. TITLE OF THE PROPERTY
                            Service provider will maintain, at all times during the term of this contract, full ownership of the property and the business now or hereafter conducted therein or there from (or, if Service provider's right and interest in the Property is derived through a lease, concession or _ other agreement, the Service provider shall keep and maintain such lease, concession or other agreement in full force and effect at all times throughout the term of the contract) free and clear of any lien, mortgage, charge or any other encumbrance. WANDERTRIBE reserves the , full right to undertake any modifications to the property. Service provider shall, at its own cost and expense, pay and discharge when due any property rents (including lease rents) and other rental payments, concession charges and any other charges payable in respect of the Property and undertake and prosecute all actions including appropriate actions, judicial or otherwise, required to assure quiet and peaceful possession and management of operations of the Camp & Cottages during the term of the contract.
                            4. CONFIDENTIALITY
                            During the term of the Agreement and thereafter all documents and instruction either supplied by WANDERTRIBE or collected by the Service provider in the course of this Agreement including the brand standards, operating standards, technology, systems, training manuals, financial details, terms of this Agreement, account and sales information etc. shall be considered as secret or confidential information of WANDERTRIBE and the Service provider undertakes not to copy or disclose any of its contents or concepts to any other party and not to make any direct or indirect use thereof except as required for due performance under this Agreement.
                            During the performance of its obligations under this Agreement, the Service provider and its employees, officers, agents, proprietors, directors, shareholders, stake holders ("Representatives") may have access to Confidential Information of WANDERTRIBE, which shall be kept fully confidential by the Service provider and its representatives. The Service provider shall execute necessary non-disclosure agreement with its Representatives or take any other steps that it would reasonably take to protect its own confidential information.
                            Breach of obligation under this Clause shall be deemed to be a breach of material obligation.
                        </p>

                        <h5>TAXES</h5>

                        <p>
                            Each Party with respect to the services rendered in its individual capacity would be solely responsible for compliance of all applicable laws and payment of all applicable taxes, cess or duties as may be required.
                            Service fees charged by WANDERTRIBE to Service providers for providing Services shall be exclusive of all taxes applicable on such transaction.
                            In this regard it is further clarified that the Service provider is solely responsible for providing boarding and lodging services to the customers on commercial basis and hence shall be solely responsible to pay appropriate taxes, cess or duties that may be levied on such service and any other ancillary purchase or sale of goods and services that is required for the purpose of rendering its services.
                            In the event WANDERTRIBE Is made liable to pay any tax under any law for the time being in force applicable on "Service provider", then Parties agree that WANDERTRIBE shall have a right to recover the same from the Service provider. The Service provider shall pay such amount without any demur or protest. WANDERTRIBE may furnish certificate/ document to demonstrate such claim for payment and proof of deposit of such tax from time to time.
                        </p>

                        <h5>EXCLUSIVITY</h5>

                        <p>
                            The Service provider shall not during the period of its Agreement with WANDERTRIBE, enter into any agreement directly or indirectly to engage with online aggregators in any manner for or in relation to selling/ marketing / promoting rooms at the Premises. Provided , however that the Service provider may continue to sell / promote rooms either directly or through any other business partner, service provider (other than specifically named above) for marketing or booking services through online or offline channel with prior written consent of WANDERTRIBE.
                            Notwithstanding anything stated herein, if the Service provider defaults / breaches its obligation under this clause then the Service provider shall be deemed to have breached a material obligation and shall be liable to pay liquidated damages as may be determined by WANDERTRIBE.
                            Breach of obligation under this clause shall be deemed to be a breach of material obligation and in addition to the remedies provided, WANDERTRIBE shall have a right to terminate the Agreement.
                        </p>

                        <h5>RIGHT TO INSPECT </h5>

                        <p>
                            WANDERTRIBE shall have a right to undertake periodic audits/ surprise checks to ensure that the Service provider is adhering to the standards of WANDERTRIBE from time to time. WANDERTRIBE shall have a right to conduct such audit without prior notice and through mystery customers. The Service provider shall not object to such audits and challenge the findings based on the fact that no prior notice was given for such audit.
                            WANDERTRIBE shall have a right to review the Guest records of the Service provider. The Service provider shall co-operate during such audit and provide necessary and correct information.
                        </p>

                        <h5>ASSIGNMENT </h5>
                        <p>
                            The Service provider shall not assign this Agreement to any third party without WANDERTRIBE's prior written consent. In the event there is a change in the control or management of the Service provider, the Service provider shall inform WANDERTRIBE in writing and WANDERTRIBE shall be entitled to terminate the Agreement with immediate notice in such case.
                            In case of sale of business or transfer of ownership, the owner or the shareholder of the Service provider shall ensure that the intended purchaser of the business agrees to adhere to the terms of this Agreement. WANDERTRIBE shall not be under any obligation to abide by this Agreement, unless the Agreement is novated.
                            If the Service provider intends to change the ownership structure of his trading style to a partnership or to a limited company or in any other manner it is agreed that any such intended change shall be deemed to be an assignment of this Agreement;
                            WANDERTRIBE shall be entitled to assign the benefit of this Agreement to any other party at any time and shall inform the Service provider thereof within a reasonable time thereafter.
                        </p>

                        <h5>TERM AND TERMINATION</h5>

                        <p>
                            The term of this Agreement shall be valid and binding upon the Parties for a period of 12 months from the date of acceptance of Agreement. The Agreement will be considered to be automatically renewed for another 12 months unless terminated by either Party in accordance with the Terms of this Agreement.
                        </p>

                        <h5>RELATIONSHIP</h5>
                        <p>
                            It is expressly agreed that nothing in this Agreement shall be construed as to create the relationship of employee, partners, collaborators, joint venture or principle agent between Parties hereto. The Parties are independent contractors agreeing to provide mutual service on the basis of this rate and marketing contract. Neither Party shall bind the other by its acts, deed nor omissions other than to the extent set out in this Agreement.
                        </p>

                        <h5>INDEMNITY </h5>

                        <p>
                            Notwithstanding other obligations, the Service provider shall indemnify WANDERTRIBE and hold harmless, its officers, directors, employees, assigns harmless against all losses, damages, liabilities, costs or expenses of whatever form or nature, including without limitation, attorney's fees and expenses and other cost of legal defense whether direct or indirect that they or any of them may sustain or incur as a result of any acts or omissions of the Hotel or any of it directors, employees, officers or agents including but not limited to (i) breach of any obligation under this Agreement (ii) negligence or other tortious conduct (iii) misrepresentation made herein (iv) any delay in payment/ non-payment of taxes.
                            WANDERTRIBE shall indemnify the Service provider and hold harmless, its officers, directors, employees, assigns harmless against all losses, damages, liabilities, costs or expenses of whatever form or nature, including without limitation, attorney's fees and expenses and other cost of legal defense whether direct or indirect that they or any of them may sustain or incur as a result of any acts or omissions of WANDERTRIBE or any of it directors, employees, officers or agents arising out of (i) breach of any obligation under this Agreement (ii) negligence or other tortious conduct or (iii) misrepresentation made herein.
                            Neither Party shall be liable to the other for any indirect, incidental, punitive, special or consequential damages or losses (including without limitation loss of profit or revenue etc.) whether under contract or in tort and even if the other party had been advised of the possibility of such damage or loss.

                            The obligation under this Clause shall survive for a period of one year after termination of this Agreement.
                        </p>

                        <h5>WARRANTIES </h5>

                        <p>
                            Service provider represents and warrants that it has full legal right, power and authority to carry on its business and to enter into this Agreement and perform all its obligations, terms and conditions hereunder and neither the execution nor delivery of this Agreement, nor fulfillment nor compliance with the terms and provision hereof, will conflict with, or result in a breach of terms, conditions or provisions of, or constitute a default under, or result in any violation of its charter document or bye law, if any, or any agreement, restriction, instrument, order , judgement, decree, statute, law, rule or regulation to which it is subjected or require any consent, approval or other action by any court, tribunal, administrative or governmental body.
                            Service provider additionally represents that it is operating its business in compliance with all the applicable laws, regulations and statutes and it has the requisite licenses in place (including lift operating, fire department clearance, tourism, local municipality approvals and licenses etc.) to operate the business.
                            The Parties hereto agree that each of the provisions contained in this Agreement shall be severable, and the unenforceability of one or more provisions of this Agreement shall not affect the enforceability of any other provision(s) or of the remainder of this Agreement.
                            The courts in New Delhi shall have exclusive jurisdiction to settle any disputes between the Parties under this Agreement.
                        </p>

                    </div>

                </section>
                <!--// /tile-->


            </div>
            <!-- /content container -->


        </div>
        <!-- Page content end -->


    </div>
    <!-- Make page fluid-->


</div>
<!-- Wrap all page content end -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


<script>

    //$(document).ready(
    //    function terms() {
    //        console.log('data');
    //        $.ajax({
    //            type: "GET",
    //            url: '<?php //echo $_SERVER['API_ENDPOINTS'];?>///api/terms_cond',
    //            success: function (data) {
    //                console.log(data);
    //                $(".owner_terms").html(data.privacyPolicy);
    //            },
    //            error: function (error) {
    //                console.log(error);
    //            }
    //        })
    //    }
    //)

</script>


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
