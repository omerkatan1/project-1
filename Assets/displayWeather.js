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
            icon: response.weather[0].main,
            lat: response.coord.lat,
            lon: response.coord.lon,
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

    //dynamic day/night function call begin
    getSRSS(weather.lat, weather.lon);
    //dynamic day/night function call end  

    if (weather.icon === "Clear") {
        $("#icon").addClass("fas fa-sun");
        $('body').css({
            backgroundImage: 'url("Assets/Images/sunny.jpg")', 'background-repeat': 'no-repeat',
            class: "backgroundImg"
        });
    }
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

function getSRSS(lat, lng) {
    var queryURL = "https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lng;
    console.log("latitude:" + lat);
    console.log("longitude:" + lng);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log("Sunrise:" + response.results.sunrise);
        console.log("Sunset:" + response.results.sunset);

        // api seems to return inaccurate data, future versions will use a different api,
        // all values returned by api are behind by 5 hours, correction for this is error margin
        // also add minute determination for greater accuraccy.
        var errorMargin = 5;
        var curhour = (new Date()).getHours();
        var sunrise = errorMargin + response.results.sunrise[0];
        var sunset = sunrise + response.results.day_length[1];
        if (curhour >= sunrise && curhour <= sunset) {
            $(".weatherInfo").removeClass("nightbody").addClass("daybody");
        } else {
            $(".weatherInfo").removeClass("daybody").addClass("nightbody");
        }

    })
}