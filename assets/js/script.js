// HW6 Weather Dashboard js file
// document ready
$(function () {

    const APIKey = "1d411bcde713445bbc91fe00a3e46eac";
    const $zipSearchForm = $("#searchForm");
    const $citySearchName = $("#citySearch");
    const $searchedCityList = $("#cityList");
    const $cardDayOne = $("#dayOne");
    const $cardDayTwo = $("#dayTwo");
    const $cardDayThree = $("#dayThree");
    const $cardDayFour = $("#dayFour");
    const $cardDayFive = $("#dayFive");
    let cityHistory = [];

    // Functions

    function renderCities() {
        // first clear elements
        $searchedCityList.empty();
        // grab array out of memory
        cityHistory = JSON.parse(localStorage.getItem("cityHistory"));
        if (cityHistory === null) { cityHistory = []; }
        console.log("city history");
        console.log(cityHistory);
        // create new li for each cityHistory
        cityHistory.forEach(function (element) {
            // console.log("city history loop");
            // console.log(element);
            const listItem = $("<button>");
            // add li attribute (class) for styling
            listItem.addClass("cityBtn").text(element);
            $searchedCityList.prepend(listItem);
            // add delete button
        });

    }

    function storeCities(newLocation) {
        console.log("new location to store");  
        console.log(newLocation);
        if(cityHistory.includes(newLocation)) {
            console.log("city already in list");
        } else {
            cityHistory.push(newLocation);
            console.log("city history to store");
            console.log(cityHistory);
            localStorage.setItem("cityHistory", JSON.stringify(cityHistory));
            renderCities();
        }
    }


    function getForcast(location) {
        // console.log("forecast location");
        // console.log(location);

        // Here we are building the URL we need to query the database
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + location + "&appid=" + APIKey;
        // We then created an AJAX call
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
        // console.log(response);
        // console.log(queryURL);
        // buttonTesterTwo.on("click", function () {
            currentForecast = response;
            // Create CODE HERE to log the resulting object
            // console.log(currentForecast.list);
            $cardDayOne.empty();
            $cardDayTwo.empty();
            $cardDayThree.empty();
            $cardDayFour.empty();
            $cardDayFive.empty();

            const forecastCity = currentForecast.city.name;
            // console.log(forecastCity);
            const dayZeroBlock = currentForecast.list[0];
            // console.log(dayZeroBlock);
            const dayOneBlock = currentForecast.list[7];
            // console.log(dayOneBlock);
            const dayTwoBlock = currentForecast.list[15];
            // console.log(dayTwoBlock);
            const dayThreeBlock = currentForecast.list[23];
            // console.log(dayThreeBlock);
            const dayFourBlock = currentForecast.list[31];
            // console.log(dayFourBlock);
            const dayFiveBlock = currentForecast.list[39];
            // console.log(dayFiveBlock);
            const dateZeroText = moment(dayZeroBlock.dt_txt).format("(M/D/YYYY)");
            const dateOneText = moment(dayOneBlock.dt_txt).format("M/D/YYYY");
            const dateTwoText = moment(dayTwoBlock.dt_txt).format("M/D/YYYY");
            const dateThreeText = moment(dayThreeBlock.dt_txt).format("M/D/YYYY");
            const dateFourText = moment(dayFourBlock.dt_txt).format("M/D/YYYY");
            const dateFiveText = moment(dayFiveBlock.dt_txt).format("M/D/YYYY");
            // console.log(dayOneBlock.weather[0].icon);
            const dayOneIcon = (`http://openweathermap.org/img/w/${dayOneBlock.weather[0].icon}.png`);
            const dayTwoIcon = (`http://openweathermap.org/img/w/${dayTwoBlock.weather[0].icon}.png`);
            const dayThreeIcon = (`http://openweathermap.org/img/w/${dayThreeBlock.weather[0].icon}.png`);
            const dayFourIcon = (`http://openweathermap.org/img/w/${dayFourBlock.weather[0].icon}.png`);
            const dayFiveIcon = (`http://openweathermap.org/img/w/${dayFiveBlock.weather[0].icon}.png`);
            // $("#dayOne .date").text(dateOneText);
            $cardDayOne.append("<h5>" + dateOneText + "</h5>");
            $cardDayOne.append(`<i><img src="${dayOneIcon}" alt="Weather Icon"></i>`);
            $cardDayOne.append("<p>Temp: " + ((dayOneBlock.main.temp - 273.15) * 1.80 + 32).toFixed(0) + " F</p>")
            $cardDayOne.append("<p>Humidity: " + dayOneBlock.main.humidity + "%</p>");

            $cardDayTwo.append("<h5>" + dateTwoText + "</h5>");
            $cardDayTwo.append(`<i><img src="${dayTwoIcon}" alt="Weather Icon"></i>`);
            $cardDayTwo.append("<p>Temp: " + ((dayTwoBlock.main.temp - 273.15) * 1.80 + 32).toFixed(0) + " F</p>")
            $cardDayTwo.append("<p>Humidity: " + dayTwoBlock.main.humidity + "%</p>");

            $cardDayThree.append("<h5>" + dateThreeText + "</h5>");
            $cardDayThree.append(`<i><img src="${dayThreeIcon}" alt="Weather Icon"></i>`);
            $cardDayThree.append("<p>Temp: " + ((dayThreeBlock.main.temp - 273.15) * 1.80 + 32).toFixed(0) + " F</p>")
            $cardDayThree.append("<p>Humidity: " + dayThreeBlock.main.humidity + "%</p>");

            $cardDayFour.append("<h5>" + dateFourText + "</h5>");
            $cardDayFour.append(`<i><img src="${dayFourIcon}" alt="Weather Icon"></i>`);
            $cardDayFour.append("<p>Temp: " + ((dayFourBlock.main.temp - 273.15) * 1.80 + 32).toFixed(0) + " F</p>")
            $cardDayFour.append("<p>Humidity: " + dayFourBlock.main.humidity + "%</p>");

            $cardDayFive.append("<h5>" + dateFiveText + "</h5>");
            $cardDayFive.append(`<i><img src="${dayFiveIcon}" alt="Weather Icon"></i>`);
            $cardDayFive.append("<p>Temp: " + ((dayFiveBlock.main.temp - 273.15) * 1.80 + 32).toFixed(0) + " F</p>")
            $cardDayFive.append("<p>Humidity: " + dayFiveBlock.main.humidity + "%</p>");
        });
    }


    function getWeather(location) {
        console.log("current weather location");
        console.log(location);

        // Here we are building the URL we need to query the database
        // var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + location + "&appid=" + APIKey;
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + location + "&appid=" + APIKey;

        // We then created an AJAX call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // Create CODE HERE to log the resulting object
            // console.log(response);
            const currentWeather = response;

            // buttonTesterOne.on("click", function() {  ****temp for testing

            // ****** for current weather start ********
            // extract date from datecode integer 
            const dateCurrent = moment.unix(currentWeather.dt).format("(M/D/YYYY)");
            //   console.log(currentWeather.dt);
            //   console.log(dateCurrent);
            // Transfer content to HTML
            const currentWeatherIcon = (`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`);
            //   console.log(currentWeather.weather[0].icon);
            $(".city").text(`${currentWeather.name} ${dateCurrent} `).append(`<i><img src="${currentWeatherIcon}"></i>`);
            $(".wind").text(`Wind Speed: ${currentWeather.wind.speed} MPH`);
            $(".humidity").text(`Humidity: ${currentWeather.main.humidity}%`);

            // Convert the temp to fahrenheit
            const tempF = (currentWeather.main.temp - 273.15) * 1.80 + 32;
            // $(".temp").text("Temperature (K) " + response.main.temp);
            $(".tempF").text("Temperature (F) " + tempF.toFixed(0));


            // store ${currentWeather.name} and (location) in local storage for button list

            // ****** for current weather end ********

            const cityZip = (`${currentWeather.name}, ${location}`);
            // console.log("city and zip combined");
            // console.log(cityZip);
            storeCities(cityZip);
            getForcast(location);
        });

    }

    // when search city name is entered... 
    $zipSearchForm.on("submit", function () {
        event.preventDefault();
        const zipCodeSearch = $citySearchName
            .val()
            .trim();
        if (zipCodeSearch === "") {
            return;
        }
        getWeather(zipCodeSearch);
        // clear search field
        $citySearchName.val("");
        // move store cities call to response of get weather
    });

    renderCities();

});
