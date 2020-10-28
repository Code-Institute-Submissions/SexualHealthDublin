function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {
        lat: 53.343792,
        lng: -6.254572
        }
    });
  var infoWin = new google.maps.InfoWindow();
  var markers = locations.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
var locations = [
    { lat: 53.342150, 
      lng: -6.279260,
      info: "Himerus Health<br>4th Floor, The Meath Primary Care Centre<br>Camden Clinic, Heytesbury Street, D8<br>Mon-Fri: 8:30-21:00<br>Sat: 10:00-13:00" }, //https://sticlinicdublin.ie/contact/
    { lat: 53.341020,
      lng: -6.259620, 
      info: "Trinity Clinic<br>1st Floor, 27 South Anne Street, D2<br>Mon-Fri: 8:30-17:00<br>Walk-ins Welcome" }, //https://www.trinityclinic.ie/contact-us-1
    { lat: 53.346920, 
      lng: -6.265770, 
      info: "Jervis Medical Centre<br>1 Jervis Street, D1<br>Mon-Fri: 8.30–18:00" }, //https://jervismedical.ie/sti-testing-dublin-sexual-health/
    { lat: 53.339955, 
      lng: -6.296728, 
      info: "The GUIDE Clinic - Hospital 5<br>St. James's Hospital<br>James's Street, D8<br>Currently closed for STI screening walk-ins, clinic times vary"}, //St. James's Hospital 
    { lat: 53.358673, 
      lng: -6.267815, 
      info: "Mater Private Hospital Sexual Health Clinic,<br> 44 Eccles Street, D7<br>Referral required for appointment"}, //https://www.materprivate.ie/dublin/centre-services/all-services/sexual-health-clinic/
    { lat: 53.347083, 
      lng: -6.263484, 
      info: "Well Woman Centre - Liffey Street<br>35 Liffey Street Lower, D1<br>Hours vary, book online"}, //https://wellwomancentre.ie/health-matters/sexual-health/
    { lat: 53.331955, 
      lng: -6.237036, 
      info: "Well Woman Centre - Pembroke Road<br>67 Pembroke Rd, D7<br>Hours vary, book online"},
    { lat: 53.395260, 
      lng: -6.214270, 
      info: "Well Woman Centre - Coolock<br>Northside Shopping Centre, Oscar Traynor Rd, Coolock, D17<br>Hours vary, book online"},
    { lat: 53.357816, 
      lng: -6.265193,
      info: "MPower Community Rapid HIV Testing<br>70 Eccles Street, D7<br>Note: Services for gbMSM only"},
    { lat: 53.349919,
      lng: -6.269466,
      info: "Gay Men's Health Service - Outhouse<br>105 Capel Street, D1<br>3rd Sunday of the month<br>13:30-15:00 or when slots fill up<br>Note: This is a drop-in service for gay and bisexual men,<br>MSM and transgender women"},
];

google.maps.event.addDomListener(window, "load", initMap);