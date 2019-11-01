var APIKey = "166a433c57516f51dfab1f7edaed8413";

function getWeatherInfo(addressLat, addressLon) {
    console.log(addressLat, addressLon);

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=" + APIKey + "&lat=" + addressLat + "&lon=" + addressLon;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var weather = {
            city: response.name,
            tempHigh: response.main.temp_max.toFixed(1),
            tempLow: response.main.temp_min.toFixed(1),
            wind: response.wind.speed.toFixed(1),
            icon: response.weather[0].main
        }
 
        displayWeatherInfo(weather);
    })
}

function displayWeatherInfo(weather) {
    $("<div>", {
        html: "<h2>" + weather.city + "</h2>",
        id: "icon",
        class: "city",
        appendTo: ".weatherInfo"
    })
    // $("<div>", {
    //     id: "icon",
    //     appendTo: ".weatherInfo"
    // })
    $("<div>", {
        html: "<p>" + weather.tempHigh + " / " + weather.tempLow + " °F" + "</p>",
        class: "temp",
        appendTo: ".weatherInfo"
    })
    $("<div>", {
        html: "<p>" + "Wind Speed: " + weather.wind + " MPH" + "</p>",
        class: "wind",
        appendTo: ".weatherInfo"
    })


    if (weather.icon === "Clear") {
        $("#icon").addClass("fas fa-sun");
        $('body').css({
            backgroundImage : 'url("Assets/Images/sunny.jpg")', 'background-repeat': 'no-repeat',
            class: "backgroundImg"
        });    }
    else if (weather.icon === "Clouds") {
        $("#icon").addClass("fas fa-cloud");
    }
    else if (weather.icon === "Snow") {
        $("#icon").addClass("fas fa-snowflake");
    }
    else if (weather.icon === "Drizzle") {
        $("#icon").addClass("fas fa-cloud-rain");
    }
    else if (weather.icon === "Rain") {
        $("#icon").addClass("fas fa-cloud-showers-heavy");
    }
}