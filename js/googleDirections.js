// function googleDirections(startLat, startLong, addressLat, addressLon) {
//     var googleKey = "&key=AIzaSyB-VF7nGUXZizMU85BJnAQ06Qg_acuZYJw";
//     var googleDirectionsURL = "https://maps.googleapis.com/maps/api/directions/json?origin=" + startLat + "," + startLong + "&destination=" + addressLat + "," + addressLon + googleKey;
//     $.ajax({
//       url: googleDirectionsURL,
//       method: "GET"
//     }).then(function (res) {
//       console.log("Directions ran");
//       console.log(res);
//   })
// }