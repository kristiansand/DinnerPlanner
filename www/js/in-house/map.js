var kristiansand = new google.maps.LatLng(58.147406, 7.996714);
var marker;
      function initialize() {
        var mapOptions = {
          center: kristiansand,
          zoom: 15
        };
        var mapdiv = document.getElementById('map-canvas');
          mapdiv.style.width = '100%';
    mapdiv.style.height = '70%';
        var map = new google.maps.Map(mapdiv,
            mapOptions);
        if(place){
            var placeLocation;
          if(place == "domkirken"){
              placeLocation = new google.maps.LatLng(58.146106, 7.995159);
          }
            else if(place == "colorline"){
                placeLocation = new google.maps.LatLng(58.144704, 7.990182);
            }
             marker = new google.maps.Marker({
                map:map,
                draggable:false,
                animation: google.maps.Animation.DROP,
                position: placeLocation
              });
              marker.setAnimation(google.maps.Animation.BOUNCE);
        }
          
          
      }
      google.maps.event.addDomListener(window, 'load', initialize);