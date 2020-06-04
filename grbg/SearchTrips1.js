var resizeDetail = function() {
    if (window.innerWidth < 880) {
        $('.trip-img').removeClass('col-sm-6').addClass('col-sm-5');
        $('.trip-detail').removeClass('col-sm-6').addClass('col-sm-7');
    } else {
        $('.trip-img').removeClass('col-sm-5').addClass('col-sm-6');
        $('.trip-img').removeClass('col-sm-7').addClass('col-sm-6');
    }
}

var x;
if (localStorage.getItem('road_type') !== null) {
    $('#btn_' + localStorage.getItem('road_type'))
        .css({ color: "#024959", "background-color": "#FFFFFF" });
}
document.querySelector('.visual input[name="date-in"]').value =
    localStorage.getItem('startDate');
document.getElementById('pac-input').value = localStorage.getItem('meetupPoint');
var selectRType = document.querySelectorAll('select.item-info > option');
var selectOpArr = Array.from(selectRType);

for (var i = 0; i < selectOpArr.length; i++) {
    console.log(selectOpArr[i].value);
    if (selectOpArr[i].value === localStorage.getItem('road_type')) {
        console.log('selected', i);
        selectOpArr[i].setAttribute('selected', 'selected');
        break;
    }
}

var dataObj = {
    "meetupPoint": localStorage.getItem('meetupPoint'),
    "startDate": localStorage.getItem('startDate')
};

var rType = localStorage.getItem('road_type');
switch (rType) {
    case 'smooth':
        //var difficulty = localStorage.getItem('trekDifficulty');
        dataObj['RType'] = 'SMOOTH HIGHWAY';
        break;

    case 'twist':
        //var difficulty = localStorage.getItem('trekDifficulty');
        dataObj['RType'] = 'TWIST AND TURN';
        break;
    case 'bumpy':
        //var difficulty = localStorage.getItem('trekDifficulty');
        dataObj['RType'] = 'BUMPY RIDES';
        break;

    case 'offroading':
        //var difficulty = localStorage.getItem('trekDifficulty');
        dataObj['RType'] = 'OFFROADING';
}

$.ajax({
    "method": "POST",
    "url": "https://dev.unfoldingskies.com/api/RTrips/RTrip_query",
    "headers": {
        "Content-Type": "application/json"
    },
    "data": JSON.stringify(dataObj),
    beforeSend: function() {
        $('.loader-outer').show();
    },
    success: function(response, textStatus, xhr) {
        x = response;
        console.log(response);
        $('.loader-outer').hide();

        if (response.length === 0) {
            $('#noPropertyModal').removeClass('fade').addClass('show');

            $('.future-treks').html('');
            $('.noTreksFound').show();

            setTimeout(function() {
                $('#noPropertyModal').removeClass('show').addClass('fade');
            }, 3000);
        }

        var upTrips, upTripsImg, i = 0;
        $('.future-trips').html('');
        //$('.trek-text > h3').text('')
        for (resp of response) {
            i++;
            var trekImage = resp.RTripImage;
            if (typeof(trekImage) == "undefined" || typeof(trekImage) == null) {
                upTripsImg = `<div class="col-sm-6 trip-img">
                <img src="new_img/road-trip/trip.png">
                </div>
                `;
            } else if (resp.RTripImage.length != 0) {
                trekImage = resp.RTripImage[0];
                if (typeof(trekImage) == "object") {
                    var n = Math.floor((Math.random() * 4) + 1);
                    trekImage = resp.RTripImage[n].url;
                    upTripsImg = `<div class="col-sm-6 trip-img">
                    <img src=${trekImage}>
                    </div>`;
                } else if (typeof(trekImage) == "string") {
                    //trekImage = resp.RTripImage[0].url;
                    upTripsImg = `<div class="col-sm-6 trip-img">
                    <img src=${resp.RTripImage[0].split(' ').join('%20')}>
                    </div>`;
                    console.log(typeof resp.RTripImage[0]);
                }

            } else {
                upTripsImg = `<div class="col-sm-6 trip-img">
                <img src="new_img/road-trip/trip.png">
                </div>`;
            }

            /*var pLengthClass;
            if (resp.RTripTitle.length > 60 || path.join(' > ').length > 90) {
                pLengthClass = 'inc-amt-dynamic';
            } else {
                pLengthClass = 'inc-amt';
            }*/

            upTrips = `${upTripsImg}
            <div class="col-sm-6 trip-detail">
            <h3 class="rt${i}">${resp.RType}</h3>
            <h1>${resp.RTripTitle}</h1>
            
            <div class="days">
            <img src="new_img/icons/sunny.png">
            <span>${resp.totalDays} Days</span>
            </div>
            <h4>New Delhi (1) > Himachal (1) > Leh (2)</h4>
            
            <div class="row inc-amt">
            <div class="col-xs-6">
            <h2>Inclusions</h2>
            <div class=" inclusions row">
            <div class="col-xs-3">
            <img src="new_img/icons/campground.png">
            <h5>STAYS</h5>
            </div>
            <div class="col-xs-3">
            <img src="new_img/icons/food.png">
            <h5>FOOD</h5>
            </div>
            <div class="col-xs-3">
            <img src="new_img/icons/vehicle.png">
            <h5>VEHICLE</h5>
            </div>
            </div>
            </div>
            <div class="col-xs-6 amt">
            <h6>Starts from</h6>
            <span>₹${resp.pricePerPerson}</span><br/>
            <button id=${resp._id} onclick="details(this)">View Details</button>
            </div>
            </div>
            </div>`;

            $('.future-trips').append(upTrips);

            if (resp.RTripTitle.length > 40) {
                $('.inc-amt').removeClass('inc-amt').addClass('inc-amt-dynamic');
            }

            var r_type = resp.RType;
            if (r_type == 'SMOOTH HIGHWAY') {
                $('.future-trips .rt' + i).css('background-color', '#E5CF08'); //attr("id", "Moderate");
            }
            if (r_type == 'TWIST AND TURN') {
                $(".future-trips .rt" + i).css('background-color', '#00C51C'); //attr("id", "Hard");
            }
            if (r_type == 'BUMPY RIDES') {
                $(".future-trips .rt" + i).css('background-color', '#FF5700'); //attr("id", "Easy");
            }
            if (r_type == 'OFFROADING') {
                $(".future-trips .rt" + i).css('background-color', '#4E5AFF'); //attr("id", "Easy");
            }
        }
        resizeDetail();
    }
});

function details(element) {
    //console.log('trip-detail trip-detail');
    localStorage.setItem('trip_id', element.id);
    top.location.href = 'TripDetail.php';
}

function roadType(_this) {
    if (_this.id == 'btn_smooth') {
        localStorage.setItem('road_type', 'smooth')
        top.location = "SearchTrips.php";
    }
    if (_this.id == 'btn_bumpy') {
        localStorage.setItem('road_type', 'bumpy');
        top.location = "SearchTrips.php";
    }
    if (_this.id == 'btn_twist') {
        localStorage.setItem('road_type', 'twist')
        top.location = "SearchTrips.php";
    }
    if (_this.id == 'btn_offroading') {
        localStorage.setItem('road_type', 'offroading')
        top.location = "SearchTrips.php";
    }
    // $("#btn_easy").attr('color','#024959');
    // style="color: #024959; background-color: #FFFFFF;"
}

$('.search-trek button').click(function() {
    var location = document.getElementById('pac-input').value;
    var startDate = document.getElementById('date').value;
    var roadType = document.getElementById('roadType').value;
    var roadTypeObj = {
        'smooth': "SMOOTH HIGHWAY",
        'twist': "TWIST AND TURN",
        'bumpy': "BUMPY RIDES",
        'offroading': "OFFROADING"
    };
    var roadTypeF;
    if (roadType === '') {
        roadTypeF = '';
    } else {
        roadTypeF = roadTypeObj[roadType].includes(' ') === true ?
            roadTypeObj[roadType].split(' ').join('%20') : roadTypeObj.roadType;
    }

    localStorage.setItem('meetupPoint', location);
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('road_type', roadType);

    top.location = "SearchTrips.php";
});