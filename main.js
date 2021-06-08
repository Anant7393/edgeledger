function initMap()  {
    const loc = {lat: 42.361145, lng: -71.057083}
    const map = new google.maps.Map(document.querySelector('.map') , {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 14,
      center: loc
    });
    const marker = new google.maps.Marker({position: loc, map :map });
  }
  