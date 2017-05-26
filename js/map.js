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
}
