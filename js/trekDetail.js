var resizeDetail = function() {
    if (window.innerWidth < 880) {
        $('.trek-place > div:first-child').removeClass('col-sm-8').addClass('col-sm-7');
        $('.trek-place > div:last-child').removeClass('col-sm-4').addClass('col-sm-5');

        $('.impDetail .form-query').removeClass('col-sm-offset-1 col-sm-4').addClass('col-sm-5');
    } else {
        $('.trek-place > div:first-child').removeClass('col-sm-7').addClass('col-sm-8');
        $('.trek-place > div:last-child').removeClass('col-sm-5').addClass('col-sm-4');
        $('.impDetail .form-query').removeClass('col-sm-5').addClass('col-sm-4 col-sm-offset-1');
    }
}

window.onload = function() {
    document.querySelector('a#itineraryShow').textContent === 'Collapse Itinerary';
    resizeDetail();
}

var settings = {
    "url": "https://dev.unfoldingskies.com/api/treks/trek_details",
    "method": "POST",
    "data": { "_id": localStorage.getItem('_id') },
    beforeSend: function() {
        $('.loader-outer').show();
        //console.log('Hi')
    },
    success: function() {
        $('.loader-outer').hide();
        //console.log('bye')
    },
    error: function() {
        console.log('error');
    }
};

var diff, cancellationPolicyFn, itineraryShowFn, emergencyPlanFn, disasterPlanFn, medicalPlanFn;

$.ajax(settings).done(function(response) {
    console.log(response);

    diff = response.difficultyLevel;
    trekImage = response.trekImage[1];

    document.querySelector('.trek-pagination').innerHTML =
        `<h2>Treks > ${response.state}><span> ${response.trekTitle}</span></h2>`;
    if (typeof(trekImage) == "object") {
        trekImage = response.trekImage;
        var i = 0;
        length = trekImage.length;

        var timeOut = function() {
            setTimeout(next, 5000);
        }

        var next = function() {

            var slide = document.getElementById("trek_image");
            var slides = response.trekImage;
            slide.src = response.trekImage[i].url;
            //it is giving errors, so commented out.
            timeOut();
            i++;
            if (i >= length) {
                i = 0;
            };
        };

        next();

        // document.getElementById("trek_image").src = trekImage;
    }
    // if(typeof (trekImage) == "undefined" || typeof (trekImage) == null){
    // 	trekImage = "new_img/trek-image.png";
    // 	document.getElementById("trek_image").src = "new_img/trek-image.png";
    // }
    if (typeof(trekImage) == "string") {
        trekImage = response.trekImage;
        var i = 0
        length = trekImage.length;

        var timeOut = function() {
            setTimeout(next, 5000);
        }

        var next = function() {

            var slide = document.getElementById("trek_image");
            var slides = response.trekImage;
            slide.src = response.trekImage[i];
            timeOut();
            i++;
            if (i >= length) {
                i = 0;
            };
        };

        next();
        // document.getElementById("trek_image").src = trekImage;
    }

    document.querySelector('.trekDifficulty').textContent = diff;
    document.querySelector('.trek-place-detail > h1').textContent = response.trekTitle;
    document.querySelector('.trek-place-location > h2').textContent = response.location;

    document.querySelector('#weatherDetail1 > span').textContent = response.totalDays + ' D';
    document.querySelector('#weatherDetail2 > span').textContent = response.totalDays - 1 + ' N';

    if (response.distance == undefined || response.distance == null) {
        document.querySelector('#weatherDetail3 > span').textContent = 'Not provided';
        $('#weatherDetail3 > span').css({ fontSize: '12px', color: 'red' });
    } else {
        document.querySelector('#weatherDetail3 > span').textContent = response.distance + ' km';
    }

    if (response.maxAltitude == undefined || response.maxAltitude == null) {
        document.querySelector('#weatherDetail4 > span').textContent = 'Not provided';
        $('#weatherDetail4 > span').css({ fontSize: '12px', color: 'red' });
    } else {
        document.querySelector('#weatherDetail4 > span').textContent = response.maxAltitude + ' ft';
    }

    document.querySelector('.amount h5').textContent = '₹ ' + response.pricePerPerson;

    if (response.company == undefined || response.company == null) {
        document.querySelector('.impDetail h2 > span').textContent = 'Not provided';
        $('.impDetail h2 > span').css({ fontSize: '20px', color: 'red' });
    } else {
        document.querySelector('.impDetail h2 > span').textContent = response.company;
    }

    document.querySelector('.impDetail p.overview').textContent = response.trekOverview;

    if (diff == 'Moderate') {
        $(".trekDifficulty").attr("id", "Moderate");
    }
    if (diff == 'Hard') {
        $(".trekDifficulty").attr("id", "Hard");
    }
    if (diff == 'Easy') {
        $(".trekDifficulty").attr("id", "Easy");
    }

    if (response.location.length > 40) {
        $('.guide-amount').removeClass('guide-amount').addClass('guide-amount-dynamic');
    }

    // $('.guide').click(function() {
    // 	$('.guide-popup').toggleClass('guide-popup-show');
    // })


    itineraryShowFn = function() {
        console.log('itineraryShowFn');
        var itineraryShowLink = document.querySelector('a#itineraryShow');

        if (response.trekDayDetails == null || response.trekDayDetails == undefined) {
            document.querySelector('#listItinerary').innerHTML =
                'Itinerary Details is not provided by company.';
            itineraryShowLink.style.display = 'none';
        } else {
            var listItineraryHTML = '';

            if (itineraryShowLink.textContent === 'Collapse Itinerary') {
                console.log('Collapse Itinerary');

                var item = response.trekDayDetails[0];
                listItineraryHTML = `<li>
				<h4>Day 1 - ${item.title}</h4>
				<h4 class="location">Location: ${item.locations}</h4>
				<img src=${item.trekDayImage} alt="Image not provided.">

				<p>${item.activityDescription}</p>
				</li>`;

                $('ul#listItinerary p').addClass('hidden');

                if (response.trekDayDetails.length == 1) {
                    itineraryShowLink.style.display = 'none';
                    return;
                }
            } else {
                response.trekDayDetails.forEach(function(item, index) {
                    listItineraryHTML += `<li>
					<h4>Day ${index+1} - ${item.title}</h4>
					<h4 class="location">Location: ${item.locations}</h4>
					<img src=${item.trekDayImage} alt="Image not provided.">

					<p>${item.activityDescription}</p>
					</li>`;
                });

                $('ul#listItinerary p').removeClass('hidden');
            }

            //listItineraryHTML+= '<h2 class="line"></h2>';

            document.querySelector('ul#listItinerary').innerHTML = listItineraryHTML;

            itineraryShowLink.textContent === 'Collapse Itinerary' ?
                itineraryShowLink.textContent = 'Expand Itinerary' :
                itineraryShowLink.textContent = 'Collapse Itinerary';

        }
    }

    if (response.languages.hindi != true)
        document.querySelector('.tour-guide span.lang1').hide();

    if (response.languages.english != true)
        document.querySelector('.tour-guide span.lang2').hide();

    // Response Plans
    emergencyPlanFn = function() {
        console.log('emergencyPlanFn');

        var emergencyPlanLink = document.querySelector('#emergencyPlan a');
        if (response.emergencyResponsePlan == null) {
            (document.querySelector('.plans p:nth-of-type(1)').innerHTML =
                'Emergency Response Plan is not provided by company.');
            emergencyPlanLink.style.display = 'none';
        } else {
            if (emergencyPlanLink.textContent === 'Show less') {
                console.log('show less');
                $('#emergencyPlan p').addClass('hid');
            } else {
                $('#emergencyPlan p').removeClass('hid');
            }
            document.querySelector('#emergencyPlan p').innerHTML = response.emergencyResponsePlan;
        }

        emergencyPlanLink.innerText === "Show less" ? emergencyPlanLink.innerText = "Show more" :
            emergencyPlanLink.innerText = "Show less";

    }

    disasterPlanFn = function() {
        console.log('disasterPlanFn');
        var disasterPlanLink = document.querySelector('#disasterPlan a');

        if (response.naturalDisasterResponsePlan == null) {
            (document.querySelector('#disasterPlan p').innerHTML =
                'Natural Disaster Response Plan is not provided by company.');
            disasterPlanLink.style.display = 'none';
        } else {
            if (disasterPlanLink.textContent === 'Show less') {
                console.log('show less');
                $('#disasterPlan p').addClass('hid');
            } else {
                $('#disasterPlan p').removeClass('hid');
            }

            document.querySelector('#disasterPlan p').innerHTML = response.naturalDisasterResponsePlan;
        }

        disasterPlanLink.innerText === "Show less" ? disasterPlanLink.innerText = "Show more" :
            disasterPlanLink.innerText = "Show less";

        // (response.naturalDisasterResponsePlan != null) ?
        // (document.querySelector('.plans p:nth-of-type(2)').innerHTML = response.naturalDisasterResponsePlan) :
        // (document.querySelector('.plans p:nth-of-type(2)').innerHTML =
        // 	'Natural Disaster Response Plan is not provided by company.');
    }

    medicalPlanFn = function() {
        console.log('medicalPlanFn');
        var medicalPlanLink = document.querySelector('#medicalPlan a');

        if (response.medicalResponsePlan == null) {
            (document.querySelector('#medicalPlan p').innerHTML =
                'Medical Response Plan is not provided by company.');
            medicalPlanLink.style.display = 'none';
        } else {
            if (medicalPlanLink.textContent === 'Show less') {
                console.log('show less');
                $('#medicalPlan p').addClass('hid');
            } else {
                $('#medicalPlan p').removeClass('hid');
            }
            document.querySelector('#medicalPlan p').innerHTML = response.medicalResponsePlan;
        }

        medicalPlanLink.innerText === "Show less" ? medicalPlanLink.innerText = "Show more" :
            medicalPlanLink.innerText = "Show less";

        // (response.medicalResponsePlan != null) ?
        // (document.querySelector('.plans p:nth-of-type(3)').innerHTML = response.medicalResponsePlan) :
        // (document.querySelector('.plans p:nth-of-type(3)').innerHTML =
        // 	'Medical Response Plan is not provided by company.');
    }

    //document.querySelector('#cancellationShow').addEventListener('click', cancellationPolicyFn);
    cancellationPolicyFn = function() {
        console.log('cancellationPolicyFn')
        var cancellationShowLink = document.querySelector('a#cancellationShow');

        if (response.cancellationPolicy == null || response.cancellationPolicy == undefined) {
            document.querySelector('#listCancellation').innerHTML =
                'Cancellation Policy is not provided by company.';
            cancellationShowLink.style.display = 'none';
        } else {
            document.querySelector('#listCancellation').innerHTML = '';
            if (response.cancellationPolicy.startsWith('*')) {
                console.log('*');

                var cancellationArr = response.cancellationPolicy.split('*');
                console.log(cancellationArr);

                if (cancellationShowLink.textContent === 'Show less') {
                    console.log('show less');
                    document.querySelector('#listCancellation').insertAdjacentHTML('beforeend',
                        '<li>' + cancellationArr[1] + '</li>');
                } else {
                    for (var i = 1; i < cancellationArr.length; i++) {
                        document.querySelector('#listCancellation').insertAdjacentHTML('beforeend',
                            '<li>' + cancellationArr[i] + '</li>');
                    }
                }

            } else {
                console.log('.');

                var cancellationArr = response.cancellationPolicy.split('.');
                console.log(cancellationArr);

                if (cancellationShowLink.textContent === 'Show less') {
                    document.querySelector('#listCancellation').insertAdjacentHTML('beforeend',
                        '<li>' + cancellationArr[0] + '</li>');
                } else {

                    for (var i = 0; i < cancellationArr.length - 1; i++) {
                        document.querySelector('#listCancellation').insertAdjacentHTML('beforeend',
                            '<li>' + cancellationArr[i] + '</li>');
                    }
                }
            }

        }
        cancellationShowLink.innerText === "Show less" ? cancellationShowLink.innerText = "Show more" :
            cancellationShowLink.innerText = "Show less";
    }


    response.trekDates.forEach(function(item) {
        //console.log(item);
        var date = item.startDate.day + '/' + item.startDate.month + '/' + item.startDate.year + ' to ' +
            item.toDate.day + '/' + item.toDate.month + '/' + item.toDate.year;

        var dateFinal = new Date();
        dateFinal.setDate(item.startDate.day);
        dateFinal.setMonth(item.startDate.month - 1);
        dateFinal.setYear(item.startDate.year);
        //console.log(dateFinal);
        var today = new Date();
        if (today < dateFinal) {
            document.querySelector('.form-query form select').insertAdjacentHTML('beforeend',
                '<option>' + date + '</option>');
        }
    });


    document.querySelector('.restrict-people h5:nth-of-type(1)').textContent = `Min - ${response.minPeople}`;
    document.querySelector('.restrict-people h5:nth-of-type(2)').textContent = `Max - ${response.maxPeople}`;

    document.getElementById("people").placeholder = response.minPeople;
    document.getElementById("people").value = response.minPeople;

    $('#plusCircle').click(function() {
        if (document.getElementById("people").value < response.maxPeople) {
            var val = document.getElementById("people").value;
            var num = +val + 1;
            document.getElementById("people").value = num;
        }
    })

    $('#minusCircle').click(function() {
        if (document.getElementById("people").value > response.minPeople) {
            var val = document.getElementById("people").value;
            var num = +val - 1;
            document.getElementById("people").value = num;
        }
    })

});

$(document).ajaxStop(function() {
    itineraryShowFn();
    emergencyPlanFn();
    disasterPlanFn();
    medicalPlanFn();
    cancellationPolicyFn();
});