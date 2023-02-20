
function initMap(): void {
  const bangalore = { lat: 12.97, lng: 77.59 };

  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 4,
      center: bangalore,
    }
  );

  google.maps.event.addListener(map, 'click', (event) => {
    console.log(event.latLng);
    addMarker(event.latLng, map);
  });
  // Add a marker at the center of the map.
  addMarker(bangalore, map);
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;

function addMarker(location, map) {
  let marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  google.maps.event.addListener(marker, 'click', function (f) {
    var currentZoom;
    var para = document.createElement('p');

    var closeButton = document.createElement('button');
    closeButton.onclick = function () {
      marker.setMap(null);
    };
    closeButton.innerText = 'close';
    para.append(closeButton);

    let infoWindow = new google.maps.InfoWindow({
      content: para,
    });
    infoWindow.open({
      anchor: marker,
      map: map,
    });
    console.log(infoWindow);

    google.maps.event.addListener(infoWindow, 'click', function (g) {
      console.log(infoWindow);
      infoWindow.close();
    });
  });

 
}

export {};
