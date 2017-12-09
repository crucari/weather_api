/*global $*/
/*global $getJSON*/
			var API_KEY = "bb7e46d051ba9f78edc5f3fc0b38532d";
			$(function() {
				var loc;
				$getJSON('http://ipinfo.io', function(d) {
					console.log("assiging the data ");
					loc = d.loc.split(",");
					console.log(loc);
					$.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + loc[0] + '&lon=' + loc[1] + '&APPID=' + API_KEY, function(wd) {
						console.log("got the data ,", wd);
						var currentLocation = wd.name;
						var currentWeather = wd.weather[0].description;
						var currentTemp = wd.main.temp;
						var high = wd.main.temp_max;
						var low = wd.main.temp_min;
						$('#currentLocationlocation').html(currentLocation);
						$('#currentTemp').html(currentTemp);
						$('#currentWeather').html(currentWeather);
						$('#high-low').html(high + " / " + low);
					
					});
					//call api//
				});
			});