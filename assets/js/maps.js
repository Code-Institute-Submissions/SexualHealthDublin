function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: {
                lat: 53.343792,
                lng: -6.254572
            }
        });

        var labels = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";

        var locations = [
            { lat: 53.342150, lng: -6.279260 }, //https://sticlinicdublin.ie/contact/
            { lat: 53.341020, lng: -6.259620 }, //https://www.trinityclinic.ie/contact-us-1
            { lat: 53.346920, lng: -6.265770 }, //https://jervismedical.ie/sti-testing-dublin-sexual-health/
            { lat: 53.339955, lng: -6.296728}, //St. James's Hospital 
            { lat: 53.358673, lng: -6.267815}, //https://www.materprivate.ie/dublin/centre-services/all-services/sexual-health-clinic/
            { lat: 53.347634, lng: -6.268246}, //https://wellwomancentre.ie/health-matters/sexual-health/
            { lat: 53.349711, lng: -6.278260}, //https://chartermedical.ie/contact-us/location-parking/
        ];

        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });

        new MarkerClusterer(map, markers, {
          imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        });

    }