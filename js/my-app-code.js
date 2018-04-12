document.addEventListener('DOMContentLoaded', function() {
    /*
    your code will go here
    */
    var map = L.map('map').setView([40.33, -105.6], 16);
L.tileLayer('https://api.mapbox.com/styles/v1/eafraser/cjctxp4yr1arn2tmtbdn8stts/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWFmcmFzZXIiLCJhIjoiY2l3ZmQ5cHE0MGVlaDJ6bzV1ODlzMmNocyJ9.pwXheTs7xgObVaLSfp0Jew', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);
L.esri.dynamicMapLayer({
    url: "https://mapservices.nps.gov/arcgis/rest/services/LandResourcesDivisionTractAndBoundaryService/MapServer",
    opacity: .5
  }).addTo(map);
L.esri.dynamicMapLayer({
    url: "https://services.arcgisonline.com/arcgis/rest/services/Specialty/Soil_Survey_Map/MapServer",
    opacity: 0.2
  }).addTo(map);
    
});