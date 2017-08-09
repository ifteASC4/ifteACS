
function initAutocomplete(){

    // makes a map
    var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7419340, lng: -74.0049590},
          zoom: 11,
          mapTypeId: 'roadmap'
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = '1';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
}
// the geolocations of the markers
var locations = [
        // 27 people in mlb
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        {lat: 40.7419340, lng: -74.0049590},
        // end of mlb

        // 40 in library
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        {lat: 40.7531820, lng: -73.9822530},
        // end of library

        //times square movies
        {lat: 40.7584240, lng: -73.9883750},
        {lat: 40.7591170, lng: -73.9830690},
        {lat: 40.7591170, lng: -73.9830690},
        {lat: 40.7591170, lng: -73.9830690},
        {lat: 40.7591170, lng: -73.9830690},
        {lat: 40.7591170, lng: -73.9830690},
        {lat: 40.7569840, lng: -73.9845480},
        {lat: 40.7569840, lng: -73.9845480},
        {lat: 40.7569840, lng: -73.9845480},
        {lat: 40.7569840, lng: -73.9845480},
        {lat: 40.7569840, lng: -73.9845480},
        {lat: 40.7569840, lng: -73.9845480},
        {lat: 40.7569840, lng: -73.9845480},
        {lat: 40.7569840, lng: -73.9845480},
        {lat: 40.7569840, lng: -73.9845480},
        {lat: 40.7569840, lng: -73.9845480},
        {lat: 40.7569840, lng: -73.9845480},
        {lat: 40.7569840, lng: -73.9845480},
        {lat: 40.7569840, lng: -73.9845480},
        {lat: 40.7569840, lng: -73.9845480},
        {lat: 40.7572530, lng: -73.9867680},
        {lat: 40.7572530, lng: -73.9867680},
        {lat: 40.7572530, lng: -73.9867680},
        {lat: 40.7572530, lng: -73.9867680},
        {lat: 40.7572530, lng: -73.9867680},
        {lat: 40.7572530, lng: -73.9867680},
        {lat: 40.7572530, lng: -73.9867680},
        {lat: 40.7572530, lng: -73.9867680},
        {lat: 40.7572530, lng: -73.9867680},
        {lat: 40.7572530, lng: -73.9867680},
        {lat: 40.7568780, lng: -73.9884070},
        {lat: 40.7568780, lng: -73.9884070},
        {lat: 40.7568780, lng: -73.9884070},
        {lat: 40.7568780, lng: -73.9884070},
        {lat: 40.7562590, lng: -73.9865080},
        {lat: 40.7562590, lng: -73.9865080},
        {lat: 40.7562590, lng: -73.9865080},
        {lat: 40.7562590, lng: -73.9865080},
        //end of tsa

        //start of bronx
        {lat: 40.8723990, lng: -73.8713100},
        {lat: 40.8723990, lng: -73.8713100},
        {lat: 40.8723990, lng: -73.8713100},
        {lat: 40.8723990, lng: -73.8713100},
        {lat: 40.8723990, lng: -73.8713100},
        {lat: 40.8723990, lng: -73.8713100},
        //end of bronx

        //start of brooklyn
        {lat: 40.6781780, lng: -73.9441580},
        {lat: 40.6781780, lng: -73.9441580},
        {lat: 40.6781780, lng: -73.9441580},
        {lat: 40.6781780, lng: -73.9441580},
        {lat: 40.6781780, lng: -73.9441580},
        {lat: 40.6781780, lng: -73.9441580},
        {lat: 40.6781780, lng: -73.9441580},
        {lat: 40.6781780, lng: -73.9441580},
        {lat: 40.6781780, lng: -73.9441580},
        {lat: 40.6781780, lng: -73.9441580},
        {lat: 40.6781780, lng: -73.9441580},
        {lat: 40.6781780, lng: -73.9441580},
        {lat: 40.6781780, lng: -73.9441580},
        {lat: 40.6781780, lng: -73.9441580},
        // end of brooklyn

        //start of queens
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520},
        {lat: 40.7282240, lng: -73.7948520}
        //end of queens


      ];


