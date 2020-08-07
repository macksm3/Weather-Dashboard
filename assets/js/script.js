// HW6 Weather Dashboard js file
// document ready
$(function() {
  
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


  const buttonTesterOne = $("#btnTestOne");
  const buttonTesterTwo = $("#btnTestTwo");
  

  const currentWeather =  {
    "coord": {
        "lon": -71.68,
        "lat": 42.9
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 300.65,
        "feels_like": 297.79,
        "temp_min": 298.15,
        "temp_max": 302.59,
        "pressure": 1019,
        "humidity": 39
    },
    "visibility": 10000,
    "wind": {
        "speed": 5.1,
        "deg": 250,
        "gust": 8.2
    },
    "clouds": {
        "all": 20
    },
    "dt": 1596743770,
    "sys": {
        "type": 1,
        "id": 3331,
        "country": "US",
        "sunrise": 1596707019,
        "sunset": 1596758488
    },
    "timezone": -14400,
    "id": 0,
    "name": "Mont Vernon",
    "cod": 200
  }
  // *************** end of weather response ******************

  const currentForecast =  {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1596747600,
            "main": {
                "temp": 299.3,
                "feels_like": 297.51,
                "temp_min": 299.11,
                "temp_max": 299.3,
                "pressure": 1019,
                "sea_level": 1018,
                "grnd_level": 989,
                "humidity": 39,
                "temp_kf": 0.19
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 3.06,
                "deg": 288
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-06 21:00:00"
        },
        {
            "dt": 1596758400,
            "main": {
                "temp": 293.39,
                "feels_like": 292.74,
                "temp_min": 291.71,
                "temp_max": 293.39,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 990,
                "humidity": 56,
                "temp_kf": 1.68
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 44
            },
            "wind": {
                "speed": 1.46,
                "deg": 294
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-07 00:00:00"
        },
        {
            "dt": 1596769200,
            "main": {
                "temp": 289.49,
                "feels_like": 288.47,
                "temp_min": 288.81,
                "temp_max": 289.49,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 991,
                "humidity": 61,
                "temp_kf": 0.68
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 11
            },
            "wind": {
                "speed": 1.08,
                "deg": 309
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-07 03:00:00"
        },
        {
            "dt": 1596780000,
            "main": {
                "temp": 288.17,
                "feels_like": 287.01,
                "temp_min": 288.08,
                "temp_max": 288.17,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 991,
                "humidity": 67,
                "temp_kf": 0.09
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 48
            },
            "wind": {
                "speed": 1.32,
                "deg": 344
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-07 06:00:00"
        },
        {
            "dt": 1596790800,
            "main": {
                "temp": 287.44,
                "feels_like": 286.6,
                "temp_min": 287.44,
                "temp_max": 287.44,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 991,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 1.31,
                "deg": 347
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-07 09:00:00"
        },
        {
            "dt": 1596801600,
            "main": {
                "temp": 290.79,
                "feels_like": 290.43,
                "temp_min": 290.79,
                "temp_max": 290.79,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 993,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 60
            },
            "wind": {
                "speed": 1.26,
                "deg": 39
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-07 12:00:00"
        },
        {
            "dt": 1596812400,
            "main": {
                "temp": 292.23,
                "feels_like": 292.63,
                "temp_min": 292.23,
                "temp_max": 292.23,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 993,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 93
            },
            "wind": {
                "speed": 0.98,
                "deg": 140
            },
            "visibility": 10000,
            "pop": 0.08,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-07 15:00:00"
        },
        {
            "dt": 1596823200,
            "main": {
                "temp": 297.02,
                "feels_like": 297.34,
                "temp_min": 297.02,
                "temp_max": 297.02,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 993,
                "humidity": 57,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 1.76,
                "deg": 126
            },
            "visibility": 10000,
            "pop": 0.08,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-07 18:00:00"
        },
        {
            "dt": 1596834000,
            "main": {
                "temp": 297.12,
                "feels_like": 297.47,
                "temp_min": 297.12,
                "temp_max": 297.12,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 991,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.46,
                "deg": 127
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-07 21:00:00"
        },
        {
            "dt": 1596844800,
            "main": {
                "temp": 292.52,
                "feels_like": 293.2,
                "temp_min": 292.52,
                "temp_max": 292.52,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 992,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.2,
                "deg": 122
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-08 00:00:00"
        },
        {
            "dt": 1596855600,
            "main": {
                "temp": 289.15,
                "feels_like": 290.15,
                "temp_min": 289.15,
                "temp_max": 289.15,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 991,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.15,
                "deg": 93
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-08 03:00:00"
        },
        {
            "dt": 1596866400,
            "main": {
                "temp": 288.37,
                "feels_like": 289.72,
                "temp_min": 288.37,
                "temp_max": 288.37,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 991,
                "humidity": 99,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 0.41,
                "deg": 90
            },
            "visibility": 10000,
            "pop": 0.06,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-08 06:00:00"
        },
        {
            "dt": 1596877200,
            "main": {
                "temp": 288.37,
                "feels_like": 289.03,
                "temp_min": 288.37,
                "temp_max": 288.37,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 991,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.32,
                "deg": 11
            },
            "visibility": 10000,
            "pop": 0.48,
            "rain": {
                "3h": 0.21
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-08 09:00:00"
        },
        {
            "dt": 1596888000,
            "main": {
                "temp": 290.61,
                "feels_like": 291.85,
                "temp_min": 290.61,
                "temp_max": 290.61,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 992,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 0.96,
                "deg": 46
            },
            "visibility": 10000,
            "pop": 0.39,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-08 12:00:00"
        },
        {
            "dt": 1596898800,
            "main": {
                "temp": 293.22,
                "feels_like": 294.59,
                "temp_min": 293.22,
                "temp_max": 293.22,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 991,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 79
            },
            "wind": {
                "speed": 1.71,
                "deg": 108
            },
            "visibility": 8823,
            "pop": 0.59,
            "rain": {
                "3h": 2.21
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-08 15:00:00"
        },
        {
            "dt": 1596909600,
            "main": {
                "temp": 295.18,
                "feels_like": 295.92,
                "temp_min": 295.18,
                "temp_max": 295.18,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 991,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 86
            },
            "wind": {
                "speed": 2.2,
                "deg": 117
            },
            "visibility": 10000,
            "pop": 0.9,
            "rain": {
                "3h": 2.16
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-08 18:00:00"
        },
        {
            "dt": 1596920400,
            "main": {
                "temp": 296.13,
                "feels_like": 296.59,
                "temp_min": 296.13,
                "temp_max": 296.13,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 989,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 77
            },
            "wind": {
                "speed": 1.94,
                "deg": 127
            },
            "visibility": 10000,
            "pop": 0.19,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-08 21:00:00"
        },
        {
            "dt": 1596931200,
            "main": {
                "temp": 291.61,
                "feels_like": 292.29,
                "temp_min": 291.61,
                "temp_max": 291.61,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 989,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 58
            },
            "wind": {
                "speed": 1.51,
                "deg": 131
            },
            "visibility": 10000,
            "pop": 0.05,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-09 00:00:00"
        },
        {
            "dt": 1596942000,
            "main": {
                "temp": 288.86,
                "feels_like": 289.46,
                "temp_min": 288.86,
                "temp_max": 288.86,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 989,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 14
            },
            "wind": {
                "speed": 1.16,
                "deg": 203
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-09 03:00:00"
        },
        {
            "dt": 1596952800,
            "main": {
                "temp": 288.6,
                "feels_like": 289.42,
                "temp_min": 288.6,
                "temp_max": 288.6,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 989,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 28
            },
            "wind": {
                "speed": 1.12,
                "deg": 230
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-09 06:00:00"
        },
        {
            "dt": 1596963600,
            "main": {
                "temp": 288.85,
                "feels_like": 289.75,
                "temp_min": 288.85,
                "temp_max": 288.85,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 988,
                "humidity": 99,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 1.3,
                "deg": 261
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-09 09:00:00"
        },
        {
            "dt": 1596974400,
            "main": {
                "temp": 293.46,
                "feels_like": 294.77,
                "temp_min": 293.46,
                "temp_max": 293.46,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 989,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 61
            },
            "wind": {
                "speed": 1.72,
                "deg": 283
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-09 12:00:00"
        },
        {
            "dt": 1596985200,
            "main": {
                "temp": 300.23,
                "feels_like": 300.68,
                "temp_min": 300.23,
                "temp_max": 300.23,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 989,
                "humidity": 50,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 53
            },
            "wind": {
                "speed": 2.06,
                "deg": 311
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-09 15:00:00"
        },
        {
            "dt": 1596996000,
            "main": {
                "temp": 302.53,
                "feels_like": 301.33,
                "temp_min": 302.53,
                "temp_max": 302.53,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 987,
                "humidity": 36,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 27
            },
            "wind": {
                "speed": 2.92,
                "deg": 290
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-09 18:00:00"
        },
        {
            "dt": 1597006800,
            "main": {
                "temp": 302.13,
                "feels_like": 301.85,
                "temp_min": 302.13,
                "temp_max": 302.13,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 986,
                "humidity": 41,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.39,
                "deg": 308
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-09 21:00:00"
        },
        {
            "dt": 1597017600,
            "main": {
                "temp": 295.54,
                "feels_like": 296.07,
                "temp_min": 295.54,
                "temp_max": 295.54,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 987,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 2.18,
                "deg": 291
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-10 00:00:00"
        },
        {
            "dt": 1597028400,
            "main": {
                "temp": 293.43,
                "feels_like": 293.34,
                "temp_min": 293.43,
                "temp_max": 293.43,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 987,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.47,
                "deg": 284
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-10 03:00:00"
        },
        {
            "dt": 1597039200,
            "main": {
                "temp": 292.05,
                "feels_like": 292.47,
                "temp_min": 292.05,
                "temp_max": 292.05,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 987,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 3
            },
            "wind": {
                "speed": 1.8,
                "deg": 290
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-10 06:00:00"
        },
        {
            "dt": 1597050000,
            "main": {
                "temp": 291.01,
                "feels_like": 291.65,
                "temp_min": 291.01,
                "temp_max": 291.01,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 986,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 52
            },
            "wind": {
                "speed": 1.36,
                "deg": 284
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-10 09:00:00"
        },
        {
            "dt": 1597060800,
            "main": {
                "temp": 294.59,
                "feels_like": 295.98,
                "temp_min": 294.59,
                "temp_max": 294.59,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 988,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 57
            },
            "wind": {
                "speed": 1.07,
                "deg": 284
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-10 12:00:00"
        },
        {
            "dt": 1597071600,
            "main": {
                "temp": 303.37,
                "feels_like": 305.83,
                "temp_min": 303.37,
                "temp_max": 303.37,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 988,
                "humidity": 47,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 0.26,
                "deg": 281
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-10 15:00:00"
        },
        {
            "dt": 1597082400,
            "main": {
                "temp": 306.7,
                "feels_like": 308.85,
                "temp_min": 306.7,
                "temp_max": 306.7,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 987,
                "humidity": 39,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 50
            },
            "wind": {
                "speed": 0.72,
                "deg": 188
            },
            "visibility": 10000,
            "pop": 0.01,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-10 18:00:00"
        },
        {
            "dt": 1597093200,
            "main": {
                "temp": 302.12,
                "feels_like": 304.18,
                "temp_min": 302.12,
                "temp_max": 302.12,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 985,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 66
            },
            "wind": {
                "speed": 1.49,
                "deg": 166
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-10 21:00:00"
        },
        {
            "dt": 1597104000,
            "main": {
                "temp": 297.64,
                "feels_like": 299.43,
                "temp_min": 297.64,
                "temp_max": 297.64,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 985,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 71
            },
            "wind": {
                "speed": 1.4,
                "deg": 205
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-11 00:00:00"
        },
        {
            "dt": 1597114800,
            "main": {
                "temp": 293.86,
                "feels_like": 294.56,
                "temp_min": 293.86,
                "temp_max": 293.86,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 986,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 22
            },
            "wind": {
                "speed": 1.79,
                "deg": 224
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-11 03:00:00"
        },
        {
            "dt": 1597125600,
            "main": {
                "temp": 292.91,
                "feels_like": 293.79,
                "temp_min": 292.91,
                "temp_max": 292.91,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 985,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 11
            },
            "wind": {
                "speed": 1.69,
                "deg": 247
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-11 06:00:00"
        },
        {
            "dt": 1597136400,
            "main": {
                "temp": 291.58,
                "feels_like": 292.79,
                "temp_min": 291.58,
                "temp_max": 291.58,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 985,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.23,
                "deg": 240
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-11 09:00:00"
        },
        {
            "dt": 1597147200,
            "main": {
                "temp": 296.34,
                "feels_like": 298.59,
                "temp_min": 296.34,
                "temp_max": 296.34,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 986,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.82,
                "deg": 219
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-11 12:00:00"
        },
        {
            "dt": 1597158000,
            "main": {
                "temp": 302.95,
                "feels_like": 303.18,
                "temp_min": 302.95,
                "temp_max": 302.95,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 986,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.02,
                "deg": 199
            },
            "visibility": 10000,
            "pop": 0.03,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-11 15:00:00"
        },
        {
            "dt": 1597168800,
            "main": {
                "temp": 305.25,
                "feels_like": 305.31,
                "temp_min": 305.25,
                "temp_max": 305.25,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 985,
                "humidity": 39,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 2.96,
                "deg": 210
            },
            "visibility": 10000,
            "pop": 0.06,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-11 18:00:00"
        }
    ],
    "city": {
        "name": "Mont Vernon",
        "coord": {
            "lat": 42.8976,
            "lon": -71.6762
        },
        "country": "US",
        "timezone": -14400,
        "sunrise": 1596707018,
        "sunset": 1596758487
    }
  };
  // *************** end of forcast response ******************


  function getForcast(location) {
    console.log(location);

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + location + "&appid=" + APIKey;
    // We then created an AJAX call
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function(response) {
      // console.log(response);
      console.log(queryURL);
    buttonTesterTwo.on("click", function() {
      // currentForecast = response;
      // Create CODE HERE to Log the queryURL
      // Create CODE HERE to log the resulting object
      console.log(currentForecast.list);

      const forecastCity = currentForecast.city.name;
      console.log(forecastCity);
      const dayZeroBlock = currentForecast.list[0];
      console.log(dayZeroBlock);
      const dayOneBlock = currentForecast.list[7];
      console.log(dayOneBlock);
      const dayTwoBlock = currentForecast.list[15];
      console.log(dayTwoBlock);
      const dayThreeBlock = currentForecast.list[23];
      console.log(dayThreeBlock);
      const dayFourBlock = currentForecast.list[31];
      console.log(dayFourBlock);
      const dayFiveBlock = currentForecast.list[39];
      console.log(dayFiveBlock);
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
    console.log(location);

    // Here we are building the URL we need to query the database
    // var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + location + "&appid=" + APIKey;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + location + "&appid=" + APIKey;

    // We then created an AJAX call
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function(response) {
      // Create CODE HERE to Log the queryURL
      console.log(queryURL);
      // Create CODE HERE to log the resulting object
      // console.log(response);
      // const currentWeather = response;
      
    buttonTesterOne.on("click", function() {
      // ****** for current weather start ********
      const dateCurrent = moment.unix(currentWeather.dt).format("(M/D/YYYY)");
      console.log(currentWeather.dt);
      console.log(dateCurrent);
      // Transfer content to HTML
      const currentWeatherIcon = (`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`);
      console.log(currentWeather.weather[0].icon);
      $(".city").text(`${currentWeather.name} ${dateCurrent} `).append(`<i><img src="${currentWeatherIcon}"></i>`);
      $(".wind").text(`Wind Speed: ${currentWeather.wind.speed} MPH`);
      $(".humidity").text(`Humidity: ${currentWeather.main.humidity}%`);
      // extract date from datecode integer 
      // Convert the temp to fahrenheit
      var tempF = (currentWeather.main.temp - 273.15) * 1.80 + 32;

      // add temp content to html
      // $(".temp").text("Temperature (K) " + response.main.temp);
      $(".tempF").text("Temperature (F) " + tempF.toFixed(0));

      // Log the data in the console as well
      // console.log("Wind Speed: " + response.wind.speed);
      // console.log("Humidity: " + response.main.humidity);
      // console.log("Temperature (F): " + tempF);
      // ****** for current weather end ********

      getForcast(location);
    });
   
  }
  function renderCities() {
    // first clear elements
    $searchedCityList.empty();
    // create new li for each cityHistory
    cityHistory.forEach(function(element) {
      console.log(element);
      const listItem = $("<button>");
      // add li attribute (class) for styling
      listItem.addClass("cityBtn").text(element);
      $searchedCityList.append(listItem);
      // add delete button
    });

  }

  function storeCities() {
    localStorage.setItem("cityHistory", JSON.stringify(cityHistory));
  }

  // when search city name is entered... 
  $zipSearchForm.on("submit", function() {
    event.preventDefault();
    const zipCodeSearch = $citySearchName
      .val()
      .trim();
    if (zipCodeSearch === "") {
      return;
    }
    cityHistory.push(zipCodeSearch);
    console.log(cityHistory);
    // clear search field
    $citySearchName.val("");  
    storeCities();
    renderCities();
    getWeather(zipCodeSearch);
  });



});
