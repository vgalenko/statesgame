var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.265567, lng: -99.497899},
    zoom: 4,
    styles:[
      {
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'administrative.land_parcel',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'administrative.neighborhood',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'water',
        'stylers': [
          {
            'visibility': 'on'
          }
        ]
      }
    ]
  });

  var markerWA = new google.maps.Marker({
    position: {lat: 47.231262, lng: -119.885847},
    map: map,
    title: 'WASHINGTON!'
  });

  var markerOR = new google.maps.Marker({
    position: {lat: 43.803612, lng: -120.496233},
    map: map,
    title: 'Oregon!'
  });
}
