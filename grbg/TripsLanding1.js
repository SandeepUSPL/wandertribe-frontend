// the sequence of state name in states & img link in links should be same.
var states = [{ 'Andhra Pradesh': 0 }, { 'Arunachal  Pradesh': 1 }, { 'Assam': 2 }, { 'Bihar': 3 },
    { 'Chhattisgarh': 4 }, { 'Goa': 5 }, { 'Gujarat': 6 }, { 'Haryana': 7 }, { 'Himachal Pradesh': 8 },
    { 'Jharkhand': 9 }, { 'Karnataka': 10 }, { 'Kerala': 11 }, { 'Madhya Pradesh': 12 }, { 'Maharashtra': 13 },
    { 'Manipur': 14 }, { 'Meghalaya': 15 }, { 'Mizoram': 16 }, { 'Nagaland': 17 }, { 'Odisha': 18 },
    { 'Punjab': 19 }, { 'Rajasthan': 20 }, { 'Sikkim': 21 }, { 'Tamil Nadu': 22 }, { 'Hyderabad': 23 },
    { 'Tripura': 24 }, { 'Uttar Pradesh': 25 }, { 'Uttarakhand': 26 }, { 'West Bengal': 27 },
    { 'Andaman and Nicobar Islands': 28 }, { 'Chandigarh': 29 }, { 'Dadra and Nagar Haveli and Daman and Diu': 30 }, { 'Delhi': 31 }, { 'Jammu and Kashmir': 32 },
    { 'Lakshadweep': 33 }, { 'Ladakh': 34 }, { 'Puducherry': 35 }
];

var links = ["new_img/state-bg/andhra.png", "new_img/state-bg/arunachal.png", "new_img/state-bg/assam.png",
    "new_img/state-bg/bihar.png", "new_img/state-bg/chhattisgarh.png", "new_img/state-bg/goa.png",
    "new_img/state-bg/gujarat.png", "new_img/state-bg/haryana.png", "new_img/state-bg/himachal.png",
    "new_img/state-bg/jharkhand.png", "new_img/state-bg/karnataka.png", "new_img/state-bg/kerala.png",
    "new_img/state-bg/madhya.png", "new_img/state-bg/maharashtra.png", "new_img/state-bg/manipur.png",
    "new_img/state-bg/meghalaya.png", "new_img/state-bg/mizoram.png", "new_img/state-bg/nagaland.png",
    "new_img/state-bg/odisha.png", "new_img/state-bg/punjab.png", "new_img/state-bg/rajasthan.png",
    "new_img/state-bg/sikkim.png", "new_img/state-bg/tamil.png", "new_img/state-bg/hyderabad.png",
    "new_img/state-bg/tripura.png", "new_img/state-bg/uttar.png", "new_img/state-bg/uttarakhand.png",
    "new_img/state-bg/westbengal.png", "new_img/state-bg/andaman.png", "new_img/state-bg/chandigarh.png",
    "new_img/state-bg/dadra.png", "new_img/state-bg/delhi.png", "new_img/state-bg/jammu.png",
    "new_img/state-bg/lakshadweep.png", "new_img/state-bg/ladakh.png", "new_img/state-bg/puducherry.png"
]

function details(element) {
    localStorage.setItem('state_id', element.id);
    localStorage.setItem('state_name', element.children[1].innerText);
    localStorage.setItem("road_type", '');
    top.location.href = 'StateTrips.php';
}
var upTrips;
$('.future-treks > div.row').html('');
states.forEach(function(item, index) {
        upTrips = `<div class="col-xs-6 col-sm-4 col-md-3" id=${index} 
            onclick="details(this)">
            <img src=${links[index]} class="trek-bg">
            <h2>${Object.keys(item)[0]}</h2>   
            </div>`;
        $('.future-treks > div.row').append(upTrips);
    })
    /*var state = document.getElementsByClassName("state");

  fo i = 0; i < 5; i++) {
    place = states[i];
  state[.style.backgroundImage = 'url(' + links[i] + ')';

    c = state[i].childNodes;
    .innerText = Object.keys(place)[0].toUpperCase();
}

 arrw = document.querySelector("arrow");
var tR = 0;

 functioviousL() {

        if (countR < 1)
     retrn;

        for (var i = 0; i < 5; i++) {
           ve = states[i + countR - 1];
         sta.style.backgroundImage = 'url(' + links[i + countR - 1] + ')';

       var cstate[i].childNodes;
      c[1].innerxt = Object.keys(place)[0].toUpperCase();
}
        ;
    }

functiontR() {

if ((countR + 5) < states.length)
        tR++;

    //consolg(JSON.parse(localStorage.getItem("response")).length)

 if ((countR + 5 > states.length)
            return;

        for (var i = 0; i < 5; i++) {
        var e = states[i + countR];
           statele.backgroundImage = 'url(' + links[i + countR] + ')';

       var c = state.childNodes;
     c[1].innerText  Object.keys(place)[0].toUpperCase();
    }
    }

   $('.state').cnction() {
     var bimg = thise.backgroundImage;
    var bimgArr = biplit('"');
        console.log(bimgArr);
        var index = links.indexOf(bimgArr[1]);
  var stateId = Obje.values(states[index])[0];
var stateName = Object.keys(states[index])[0];
        localStorage.setItem('state_id', stateId);
        loca.setItem('state_name', stateName);
      localStoraItem("road_type",'')
        console.log(localStorage.getItem('state_name'));

    top.loca.href = 'stateTrips.php';
    });


/*var upTrip
r settings = {
 "url": "https://devldingskies.com/api/RTrips/upcoming_RTrips",
method": "GET",
meout": 0,
"headers": {
       "Content-Type": "appl/json"
 },
eforeSend: function() {
 $('.loader-outer').how();
},
   success: n() {
      $('.louter').hide();
}


$.ajax(settings)nction(response) {
  console.loonse);
    $('.future-treks > div.row').html('');

r (resp of respoe) {
console.log(resp.RTripTitle);
        console.._id);

     var trekImaresp.RTripImage;
   if (typeorekImage) == "undefined" || typeof(trekImage) == null) {
     upTrips = `div class="col-xs-6 col-sm-4 col-md-3" id=${resp._id}
    onclick="details(this)">
            <img src="new_img/road-trip/trip.png" class="trek-bg">
            sp.RTripTitle}</h2>   
            </div>`;
        } else if (resp.RTripImage.length != 0) {
            trekImage = resp.RTripImage[0];
            if (typeof(trekImage) == "object") {
                var n = Math.floor((Math.random() * 4) + 1);
                trekImage = resp.RTripImage[n].url;
                upTrips = `<div class="col-xs-6 col-sm-4 col-md-3" id=${resp._id} 
                onclick="details(this)">
                <img src=${trekImage} class="trek-bg">
                <h2>${resp.RTripTitle}</h2>   
                </div>`;
            } else if (typeof(trekImage) == "string") {
                //trekImage = resp.RTripImage[0].url;
                upTrips = `<div class="col-xs-6 col-sm-4 col-md-3" id=${resp._id} 
                onclick="details(this)">
                <img src=${resp.RTripImage[0].split(' ').join('%20')} class="trek-bg">
                <h2>${resp.RTripTitle}</h2>   
                </div>`;
                console.log(typeof resp.RTripImage[0]);
            }

        } else {
            upTrips = `<div class="col-xs-6 col-sm-4 col-md-3" id=${resp._id} 
            onclick="details(this)">
            <img src="new_img/road-trip/trip.png" class="trek-bg">
            <h2>${resp.RTripTitle}</h2>   
            </div>`;
        }

        $('.future-treks > div.row').append(upTrips);
    }
});*/