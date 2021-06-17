var map;
var icono;

const coordenadas = {
  lat: 0,
  lng: 0,
};

const propiedades = {
  center: coordenadas,
  zoom: 16,
};

var data = [];

function iniciaMapa() {
  map = new google.maps.Map(document.getElementById("map"), propiedades);
  icono = {
    url: "http://kttm.toyota-industries.com/images/marker.gif",
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0),
  };

  data.push(returnData(20.6805858, -103.3772777));
  navigator.geolocation.getCurrentPosition((posicion) => {
    data.push(returnData(posicion.coords.latitude, posicion.coords.longitude));
  });

  var marker = returnMarker({ position: coordenadas });

  if (navigator.geolocation) {
    let i = 0;
    setInterval(() => {
      moverPosicion(data[i]);
      i++;
      if (i == data.length) {
        i = 0;
      }
    }, 3000);
  }
}
const returnData = (lat, lng) => {
  var position = { lat, lng };
  var marker = returnMarker({ position }, icono);
  return { position, marker };
};

const returnMarker = (d) => {
  return new google.maps.Marker({
    position: d.position,
    icon: icono,
    map: map,
  });
};

const moverPosicion = (datos) => {
  // marker.setPosition(pos);
  map.panTo(datos.position);
  map.setCenter(datos.position);
};

function togglePaymentMethod(card) {
  if (card) {
    document.getElementById("divCard").style.display = "block";
  } else {
    document.getElementById("divCard").style.display = "none";
  }
}
