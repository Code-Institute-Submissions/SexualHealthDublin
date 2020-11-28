//Map

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {
        lat: 53.343792,
        lng: -6.254572
        }
    });
  const infoWin = new google.maps.InfoWindow();
  const markers = locations.map(function(location, i) {
    const marker = new google.maps.Marker({
      position: location
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });
  const markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
const locations = [
    { lat: 53.342150, 
      lng: -6.279260,
      info: `Himerus Health
      4th Floor, The Meath Primary Care Centre
      Camden Clinic, Heytesbury Street, D8
      Mon-Fri: 8:30-21:00
      Sat: 10:00-13:00`,}, 
    { lat: 53.341020,
      lng: -6.259620, 
      info: `Trinity Clinic
      1st Floor, 27 South Anne Street, D2
      Mon-Fri: 8:30-17:00
      Walk-ins Welcome`,}, 
    { lat: 53.346920, 
      lng: -6.265770, 
      info: `Jervis Medical Centre
      1 Jervis Street, D1
      Mon-Fri: 8.30–18:00`,},
    { lat: 53.339955, 
      lng: -6.296728, 
      info: `The GUIDE Clinic - Hospital 5
      St. James's Hospital
      James's Street, D8
      Currently closed for STI screening walk-ins
      Clinic times vary`,}, 
    { lat: 53.358673, 
      lng: -6.267815, 
      info: `Mater Private Hospital Sexual Health Clinic
      44 Eccles Street, D7
      Referral required for appointment`,},
    { lat: 53.347083, 
      lng: -6.263484, 
      info: `Well Woman Centre - Liffey Street
      35 Liffey Street Lower, D1
      Hours vary, book online`,},
    { lat: 53.331955, 
      lng: -6.237036, 
      info: `Well Woman Centre - Pembroke Road
      67 Pembroke Rd, D7
      Hours vary, book online`,},
    { lat: 53.395260, 
      lng: -6.214270, 
      info: `Well Woman Centre - Coolock
      Northside Shopping Centre
      Oscar Traynor Rd, Coolock, D17
      Hours vary, book online`,},
    { lat: 53.357816, 
      lng: -6.265193,
      info: `MPower Community Rapid HIV Testing
      70 Eccles Street, D7
      Note: Services for gbMSM only`,},
    { lat: 53.349919,
      lng: -6.269466,
      info: `Gay Men's Health Service - Outhouse
      105 Capel Street, D1
      3rd Sunday of the month
      13:30-15:00 or when slots fill up
      Note: This is a drop-in service for gay and bisexual men,
      MSM and transgender women`,},
    { lat: 53.342889,
      lng: -6.257472,
      info: `Nassau Clinic Weekend Doctor
      Suite 17, First Floor, Morrison Chambers
      32 Nassau Street, D2
      Free HIV tests every Saturday
      Hours vary, book online`,},
    { lat: 53.356987,
      lng: -6.450525,
      info: `Main Street Clinic
      7 Lower Main Street, Lucan
      Mon-Fri: 9:00-17:30`,},
    { lat: 53.423872,
      lng: -6.133120,
      info: `Portmanock GP Clinic
      1 The Dunes, Portmarnock
      Hours vary, by appointment only`,},
    { lat: 53.290706,
      lng: -6.131667,
      info: `Women's Health Clinic
      81 Upper Georges Street, Dun Laoghaire
      Mon-Fri: 8:00-16:00`,},
    { lat: 53.394695,
      lng: -6.164541,
      info: `Grange Clinic
      13 Grange Road, Donaghmede, D13
      Mon-Fri: 8:30-18:30`,},
    { lat: 53.385072,
      lng: -6.383148,
      info: `Femplus - Complete Women’s Care Clinic
      171 Roselawn Road, D15
      Hours vary`,},
    { lat: 53.610103,
      lng: -6.183888,
      info: `Balbriggan Medical Centre
      Fingal House, Drogheda Street 
      Balbriggan
      Mon-Fri: 12:00-13:00`,},
    { lat: 53.304339,
      lng: -6.281341,
      info: `Dodder Park Medical
      Dodder Park House, Dodder Park Drive 
      Rathfarnham
      Mon-Fri: 9:00-12:00, 14:00-18:30`,},
    { lat: 53.286290,
      lng: -6.237146,
      info: `Centric Health
      Rockfield Medical Campus, Balally
      Dundrum, D16
      Mon-Fri: 9:00-17:30`,},
];

google.maps.event.addDomListener(window, "load", initMap);

//Contact Modal

$("#contactModal").modal({
	backdrop: true
});

$("#form").submit(function (event) {
	event.preventDefault();
	$("#submitted").text("You submitted");
});

//Questionnaire Modal

$("#questionnaireModal").modal({
	backdrop: true
});

$("#questionnaireForm").submit(function(event){
	event.preventDefault();
	$("#questionnaireSubmitted").text("You submitted");
});