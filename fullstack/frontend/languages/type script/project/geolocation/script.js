function getLocation() {
    if ("geolocation" in navigator) {
        // Geolocation is available
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            

            // Display the user's location
            document.getElementById("demo").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
        });
    } else {
        // Geolocation is not available in this browser
        document.getElementById("demo").innerHTML = "Geolocation is not available.";
    }
}
