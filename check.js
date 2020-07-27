<!DOCTYPE html>
<html lang='en'>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv=Expires content="Tue, Sep 20 2018 15:27:22 GMT">
	<meta http-equiv="Last-Modified" content="Tue, Sep 20 2018 15:27:22 GMT">
	<!--<meta http-equiv="X-UA-Compatible" content="IE=edge">-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="keywords" content="weather, world, Openstreetmap, forecast, Openweather, current">
	<meta name="description" content="Simple and fast and free weather API from OpenWeatherMap you have access to current weather data, hourly, 5- and 16-day forecasts. Historical weather data for 40 years back for any coordinate. Weather maps, UV Index, air pollution
 and historical data">
	<meta name="author" content="OpenWeatherMap.org">
	<meta name="domain" content="OpenWeatherMap.org">
	<meta name="p:domain_verify" content="34fe229eab8562dca90f4a5962ff80a9" />
	<meta property="title" content="Weather API" />
	<link rel="shortcut icon" href="/themes/openweathermap/assets/vendor/owm/img/icons/favicon.ico" />
	<link rel="icon" href="/themes/openweathermap/assets/vendor/owm/img/icons/logo_16x16.png" sizes="16x16"
		type="image/png">
	<link rel="icon" href="/themes/openweathermap/assets/vendor/owm/img/icons/logo_32x32.png" sizes="32x32"
		type="image/png">
	<link rel="icon" href="/themes/openweathermap/assets/vendor/owm/img/icons/logo_60x60.png" sizes="60x60"
		type="image/png">
	<title>Weather API - OpenWeatherMap</title>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-31601618-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-31601618-1');
	</script>
	<script src="//code.jquery.com/jquery-1.9.1.min.js" integrity="sha256-wS9gmOZBqsqWxgIVgA8Y9WcQOa7PgSIX+rPA0VL2rbQ="
		crossorigin="anonymous"></script>
	<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Array.from,Array.assign,fetch&flags=always,gated">
	</script>
	<script src='/themes/openweathermap/assets/js/bundle_owm_preload.c31872127471c475ade1.js'></script>
	<link href='/themes/openweathermap/assets/css/bundle_owm_styles.c31872127471c475ade1.css' rel="stylesheet">
	<link href='/themes/openweathermap/assets/css/stick_footer_panel.c31872127471c475ade1.css' rel="stylesheet">
	<!-- Resources -->
	<!--link href='/themes/openweathermap/assets/vendor/mosaic/fonts/font-awesome/css/font-awesome.min.css' rel="stylesheet"-->
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
		integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
	<link href='https://fonts.googleapis.com/css?family=Oswald:400,700,300' rel='stylesheet' rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,700,500,400italic,500italic' rel="stylesheet">
	<link href='/themes/openweathermap/assets/css/new_owm_styles.t5b22b0c2ecd513644.css' rel="stylesheet">

	<!-- Resources -->
	<!--link href='/themes/openweathermap/assets/vendor/mosaic/fonts/font-awesome/css/font-awesome.min.css' rel="stylesheet"-->
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
		integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
	<link href='https://fonts.googleapis.com/css?family=Oswald:400,700,300' rel='stylesheet' rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,700,500,400italic,500italic' rel="stylesheet">
</head>

<body class="body-orange">
	<ul class="header-website" onClick="toggleMenu(event)">
		<li class="logo">
			<a href="/">
				<img src="/themes/openweathermap/assets/img/logo_white_cropped.png">
    </a>
		</li>
		<li class="hamburger">
			<img src="/themes/openweathermap/assets/img/owm_icons/icon_hamburger.svg"/>
  </li>
		<li>
			<form role="search" id="nav-search-form" action="/find" method="get">
				<input type="text" id="q" name="q"  placeholder="Weather in your city">
				<input type="submit" style="display:none;">
    </form>
		</li>
		<li>
			<a href="/guide" onclick="_gaq.push(['_trackEvent', 'Navbar', 'Main', 'weather']);">Get Started</a>
		</li>
		<li>
			<a href="/api" onclick="_gaq.push(['_trackEvent', 'Navbar', 'Main', 'api']);">API</a>
		</li>
		<li>
			<a href="/price" onclick="_gaq.push(['_trackEvent', 'Navbar', 'Main', 'price']);">Pricing</a>
		</li>
		<li>
			<a href="/weathermap" onclick="_gaq.push(['_trackEvent', 'Navbar', 'Main', 'weather']);">Maps</a>
		</li>
		<li>
			<a href="/examples" onclick="_gaq.push(['_trackEvent', 'Navbar', 'Main', 'examples']);">Partners</a>
		</li>
		<li>
			<a href="https://openweather.co.uk/blog/category/weather" target="_blank"
				onclick="_gaq.push(['_trackEvent', 'Navbar', 'Main', 'news']);">Blog</a>
		</li>
		<li>
			<a href="https://home.openweathermap.org/marketplace" class="market-place"
				onclick="_gaq.push(['_trackEvent', 'Navbar', 'Main', 'marketplace']);" target="_blank">Marketplace</a>
		</li>
		<li class="user-sign-in">
			<a href="/home/sign_in">Sign in</a>
			</a>
		</li>
		<li class="support-item">
			<a href="https://openweathermap.force.com/s/contactsupport" target="_blank">Support</a>
		</li>
	</ul>

	<!-- Invisible header to take up the height-->
	<div class='header-invisible' style="height: 48pt; width: 100%; visibility: hidden;"></div>

	<script>
		var openMenu = false;

function unfoldMenu() {
    var ul = document.getElementsByClassName("header-website");
    ul[0].classList.add('visible');
    var children = ul[0].childNodes;
    for (var i=0; i<children.length; i++) {
        var child = children[i];
        if (child.nodeName === 'LI' && child.className !== 'logo' && child.className !== 'hamburger') {
            child.classList.add('visible');
        }
    }
}

function foldMenu() {
    var visibleEls = document.getElementsByClassName("visible");
    while (visibleEls.length > 0) {
        visibleEls[0].classList.remove('visible');
    }
}

function toggleMenu (e) {
    if (e.target) {
      if (e.target.className === 'hamburger'
        || e.target.parentNode.className === 'hamburger') {
        openMenu = !openMenu;
      } else if (!e.target.nodeName === 'input') {
        openMenu = false;
      }
      openMenu ? unfoldMenu() : foldMenu();
    }
}
	</script>
	<div id="notes_block"></div>
	<main class="wrapper">
		<div class="topic">
			<div class="container">
				<div class="row">
					<div class="col-sm-7">
						<h1 class="breadcrumb-title">Weather API</h1>
					</div>
					<div class="col-sm-5">
						<ol class="breadcrumb pull-right hidden-xs">
							<li><a href="/">Home</a></li>

							<li class="breadcrumb__leaf">Weather API</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<p class=lead>
						Please <a href="/home/sign_up">sign up</a> and use our fast and easy-to-work weather APIs for
						free. Look at our <a href="/price">monthly subscriptions</a> for more options rather than the
						Free account that we provide you. Read <a href="/appid">How to start</a> first and enjoy using
						our powerful weather APIs.


				</div>
			</div> <!-- / .row -->
			<section id="current">
				<h2 class="headline first-child text-color">Current & Forecast weather data collection</h2>
				<div class="row">
					<div class="col-sm-4">
						<h3>Current Weather Data</h3>
						<a type="button" class="btn_block black round" href="/current">API doc</a>
						<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
						<p>
							<ul>
								<li>Access current weather data for any location including over 200,000 cities </li>
								<li>Current weather is frequently updated based on global models and data from more than
									40,000 weather stations</li>
								<li>JSON, XML, and HTML formats</li>
								<li>Available for both Free and paid subscriptions</li>
							</ul>
						</p>
					</div>
					<div class="col-sm-4">
						<h3>Hourly Forecast 4 days</h3>
						<a type="button" class="btn_block black round" href="/api/hourly-forecast">API doc</a>
						<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
						<p>
							<ul>
								<li>Hourly forecast is available for 4 days</li>
								<li>Forecast weather data for 96 timestamps</li>
								<li>Higher geographic accuracy</li>
								<li>JSON and XML formats</li>
								<li>Available for Developer, Professional and Enterprise accounts</li>
							</ul>
						</p>
					</div>
					<div class="col-sm-4">
						<h3>One Call API<sup style="color:#e96e50;"><b> NEW</b></sup></h3>
						<a type="button" class="btn_block black round" href="/api/one-call-api">API doc</a>
						<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
						<p>
							<ul>
								<li>Make one API call and get current, forecast and historical weather data</li>
								<li><b>Minute forecast</b> for 1 hour</li>
								<li><b>Hourly forecast</b> for 48 hours</li>
								<li><b>Daily forecast</b> for 7 days</li>
								<li><b>Historical data</b> for 5 previous days</li>
								<li>JSON format</li>
								<li>Available for both Free and paid subscriptions</li>
							</ul>
						</p>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-4">
						<h3>Daily Forecast 16 days</h3>
						<a type="button" class="btn_block black round" href="/forecast16">API doc</a>
						<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
						<p>
							<ul>
								<li>16 day forecast is available at any location or city</li>
								<li>16 day forecast includes daily weather</li>
								<li>JSON and XML formats</li>
								<li>Available for all paid accounts </li>
							</ul>
						</p>
					</div>
					<div class="col-sm-4">
						<h3>Climatic Forecast 30 days</h3>
						<a type="button" class="btn_block black round" href="/api/forecast30">API doc</a>
						<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
						<p>
							<ul>
								<li>Forecast weather data for 30 days</li>
								<li>JSON format</li>
								<li>The frequency of weather data update <br>is 1 hour</li>
								<li>Available for Developer, Professional and Enterprise accounts</li>
							</ul>
						</p>
					</div>
					<div class="col-sm-4">
						<h3>Bulk Downloading</h3>
						<a type="button" class="btn_block black round" href="/bulk">API doc</a>
						<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
						<p>
							<ul>
								<li>We provide number of bulk files with current weather and forecasts</li>
								<li>Regular uploading weather data in JSON format</li>
								<li>Current weather bulk is available for 209,000+ cities</li>
								<li>Variety of hourly and daily forecast bulks depends on frequency of data updating
								</li>
								<li>Available for Professional and Enterprise accounts</li>
							</ul>
						</p>
					</div>

				</div>
				<!--   <div class="info-board info-board-blue">
                       <p>We have combined <b>Weather services</b> and <b>Satellite imagery</b> in a simple and fast <a href="https://agromonitoring.com/" target="blank"><b>Agro API</b></a>. We have also launched a <a href="https://agromonitoring.com/dashboard" target="_blank"><b>Dashboard</b></a> for it - it is a <b>visual service</b> where you can easily work with satellite, weather and historical data, soil temperature and moisture, accumulated temperature and precipitation, etc.
                       <a href="https://agromonitoring.com/" target="blank"><b>Learn more</b></a></p> </div> -->
				<div class="row">
					<div class="col-sm-4">
						<h3>Weather Alerts<sup style="color:#e96e50;"><b> NEW</b></sup></h3>
						<a type="button" class="btn_block orange round" href="mailto:info@openweathermap.org">Get
							access</a>
						<p>
							<ul>
								<li>Weather Alerts are based on <b>government agencies warnings</b></li>
								<li>Push notifications</li>
								<li>Coverage: many countries worldwide</li>
								<li>Flexible locations management system will help to easily integrate this product</li>
								<li>To get access please <a href="mailto:info@openweathermap.org">contact us</a></li>
							</ul>
						</p>
					</div>
					<div class="col-sm-4">
						<h3>5 day / 3 hour Forecast</h3>
						<a type="button" class="btn_block black round" href="/forecast5">API doc</a>
						<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
						<p>
							<ul>
								<li>5 day forecast is available at any location or city</li>
								<li>5 day forecast includes weather data every 3 hours</li>
								<li>JSON and XML formats</li>
								<li>Available for both Free and paid subscriptions</li>
							</ul>
						</p>
					</div>
				</div>
			</section>
			<br>
			<section id="history">
				<h2 class="headline first-child text-color">Historical weather data collection</h2>
				<div class="row">
					<div class="info-board info-board-blue">
						<h4>We provide 40-year Historical weather data for ANY location. The price is highly competitive
							- only 10$ per location! <a href="/history-bulk" target=_blank>Learn more</a></h4>
					</div>
					<div class="col-sm-4">
						<h3>Historical Weather API</h3>
						<a type="button" class="btn_block black round" href="/history">API doc</a>
						<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
						<p>
							<ul>
								<li>Through our API we provide city historical weather data for 63,000+ cities</li>
								<li>Historical data is available for 1 month back in Starter account,
									for 1 year back in Medium accounts</li>
								<li>JSON format</li>
								<li>More opportunities for agriculture in our <a
										href="https://agromonitoring.com/api/agro-api" target="blank">Agricultural
										API</a> </li>
							</ul>
						</p>
					</div>
					<div class="col-sm-4">
						<h3>Statistical Weather Data API</h3>
						<a type="button" class="btn_block black round" href="/api/statistics-api">API doc</a>
						<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
						<p>
							<ul>
								<li>Statistical data by main weather parameters for each day and
									month<br> of the year</li>
								<li>Based on our Historical weather data</li>
								<li>JSON format</li>
								<li>The frequency of weather data update <br>is 1 hour</li>
								<li>Available for Medium and Advanced accounts</li>
							</ul>
						</p>
					</div>
					<div class="col-sm-4">
						<h3>Accumulated Parameters</h3>
						<a type="button" class="btn_block black round" href="/api/accumulated-parameters">API doc</a>
						<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
						<p>
							<ul>
								<li>Accumulated temperature and accumulated precipitation</li>
								<li>Accumulated parameters are available for 1 month back in Starter account,
									for 1 year back in Medium accounts</li>
								<li>JSON format</li>
								<li>More opportunities for agriculture in our <a
										href="https://agromonitoring.com/api/agro-api" target="blank">Agricultural
										API</a> </li>
							</ul>
						</p>
					</div>
				</div>
				<br>
				<div class="row">
					<div class="col-sm-4">
						<h3>History Bulk</h3>
						<a type="button" class="btn_block black round" href="/history-bulk">Doc</a>
						<a type="button" class="btn_block orange round"
							href="https://home.openweathermap.org/history_bulks/new">GET</a>
						<p>
							<ul>
								<li>History Bulk provides weather data for <b>any</b> location for up to 40 years back
									<br>(from January 01, 1979).</li>
								<li>Available at <a href="https://home.openweathermap.org/marketplace">Marketplace</a>
								</li>
								<li>CSV and JSON formats</li>
								<li>The price is highly competitive - only <b>10$</b> per location</li>
							</ul>
						</p>
					</div>
					<div class="col-sm-4">
						<h3>Historical Weather Data by State for all ZIP codes, USA</h3>
						<a type="button" class="btn_block black round" href="/api/history-data-state">Doc</a>
						<a type="button" class="btn_block orange round"
							href="https://home.openweathermap.org/zip_code_data/new">GET</a>
						<p>
							<ul>
								<li>All ZIP codes within a state</li>
								<li>Hourly step</li>
								<li>CSV format</li>
								<li>2018 and 2019 years (other years are coming soon)</li>
								<li>Available at <a href="https://home.openweathermap.org/marketplace">Marketplace</a>
								</li>
							</ul>
						</p>
					</div>
					<div class="col-sm-4">
						<h3>History Forecast Bulk</h3>
						<a type="button" class="btn_block black round" href="/api/history-forecast-bulk">Doc</a>
						<a type="button" class="btn_block orange round"
							href="https://home.openweathermap.org/history_forecast_bulks/new">GET</a>
						<p>
							<ul>
								<li>Historical archive of 16-days forecast weather data </li>
								<li>Historical forecast data is available from October 7, 2017</li>
								<li>CSV and JSON formats</li>
								<li>You can purchase the product from our <a
										href="https://home.openweathermap.org/marketplace">Marketplace</a></li>
							</ul>
						</p>
					</div>
				</div>
			</section>
			<br>
			<section id="maps">
				<h2 class="headline first-child text-color">Maps collection</h2>
				<div class="row">
					<div class="col-sm-4">
						<h3>Weather Maps 2.0<sup style="color:#e96e50;"> NEW</sup></h3>
						<a type="button" class="btn_block black round" href="/api/weather-map-2">API doc</a>
						<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
						<p>
							<ul>
								<li>Forecast, Historical, Current weather maps</li>
								<li>15 weather map layers</li>
								<li>Use as layers in Direct Tiles, OpenLayers, Leaflet, and Google Maps</li>
								<li>Available for Developer, Professional and Enterprise accounts</li>
							</ul>
						</p>
					</div>
					<div class="col-sm-4">
						<h3>Relief Maps</h3>
						<a type="button" class="btn_block black round" href="/api/relief">API doc</a>
						<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
						<p>
							<ul>
								<li>The combination of a layer tint (colored raster) and a hillshade</li>
								<li>You can use own color palette</li>
								<li>Use as layers in Direct Tiles, OpenLayers, Leaflet, and Google Maps</li>
								<li>Available for Developer, Professional and Enterprise accounts</li>
							</ul>
						</p>
					</div>
					<div class="col-sm-4">
						<h3>Weather Maps 1.0</h3>
						<a type="button" class="btn_block black round" href="/api/weathermaps">API doc</a>
						<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
						<p>
							<ul>
								<li>Weather maps include precipitation, clouds, pressure, temperature, wind, and more
								</li>
								<li>Connect our weather maps to your mobile applications and websites</li>
								<li>Use as layers in Direct Tiles, OpenLayers, Leaflet, and Google Maps</li>
								<li>Available for both Free and paid subscriptions</li>
							</ul>
						</p>
					</div>
				</div>
			</section>
			<h2 class="headline first-child text-color">Other weather API's collection</h2>
			<div class="row">
				<div class="col-sm-4">
					<h3>Weather Stations</h3>
					<a type="button" class="btn_block black round" href="/stations">API doc</a>
					<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
					<p>
						<ul>
							<li>API for managing your personal weather stations </li>
							<li>Creation of the station and measurements transfer</li>
							<li>Receiving the aggregated measurements from the station</li>
							<li>Available for both Free and paid subscriptions</li>
						</ul>
					</p>
				</div>
				<div class="col-sm-4">
					<h3>Weather Triggers</h3>
					<a type="button" class="btn_block black round" href="/triggers">API doc</a>
					<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
					<p>
						<ul>
							<li>Simple syntax to create triggers which will be working upon the occurrence of specified
								weather conditions (temperature, humidity, pressure, etc.) in a certain period of time.
							</li>
							<li>The alerts will be generated in our service after performing conditions of the trigger.
							</li>
							<li>Available for both Free and paid subscriptions</li>
						</ul>
					</p>
				</div>
				<div class="col-sm-4">
					<h3>UV Index</h3>
					<a type="button" class="btn_block black round" href="/api/uvi">API doc</a>
					<a type="button" class="btn_block orange round" href="/price">Subscribe</a>
					<p>
						<ul>
							<li>Current UV index (Clear Sky), forecast and historical data are available for any geo
								location (lat/lon)</li>
							<li>Interpreting of the UV Index and recommended protection are provided</li>
							<li>JSON format</li>
							<li>Available for Professional and Enterprise accounts </li>
						</ul>
					</p>
				</div>
			</div>

			<br>
			<br>
			<div class="row">
				<div class="col-sm-12">
					<h2 class="headline first-child text-color">
						API documentation
					</h2>
				</div>
			</div> <!-- / .row -->
			<div class="row">
				<div class="col-sm-4">
					<h3><a href="/appid">How to start</a></h3>
					<ul>
						<li><a href="/appid#get">How to start in 3 simple steps</a></li>
						<li><a href="/appid#use">Example of using API key in API call</a></li>
						<li><a href="/appid#work">Tips on how to use API effectively</a></li>
						<li><a href="/appid#Accesslimitation">What happens when your account exceeds a limit of
								calls</a></li>


					</ul>
					<h3><a href="/current">Current weather data</a></h3>
					<ul>
						<li><a href="/current#one">Call current weather data for one location</a>
							<ul>
								<li><a href="/current#name">By city name</a></li>
								<li><a href="/current#cityid">By city ID</a></li>
								<li><a href="/current#geo">By geographic coordinates</a></li>
								<li><a href="/current#zip">By ZIP code</a></li>
							</ul>
						</li>
						<li><a href="/current#cities">Call current weather data for several cities</a>
							<ul>
								<li><a href="/current#rectangle">Cities within a rectangle zone</a></li>
								<li><a href="/current#cycle">Cities in cycle</a></li>
								<li><a href="/current#severalid">Call for several city IDs</a></li>
							</ul>
						</li>
						<li><a href="/current#bulk">Bulk downloading</a></li>
						<li><a href="/current#parameter">Parameters of API response</a>
							<ul>
								<li><a href="/current#current_JSON">JSON</a></li>
								<li><a href="/current#current_XML">XML</a></li>
								<li><a href="/current#list">List of condition codes</a></li>
								<li><a href="/current#min">Min/max temperature in current weather API and forecast
										API</a></li>
							</ul>
						</li>
						<li><a href="/current#other">Other features</a>
							<ul>
								<li><a href="/current#format">Format</a></li>
								<li><a href="/current#accuracy">Search accuracy</a></li>
								<li><a href="/current#data">Units format</a></li>
								<li><a href="/current#multi">Multilingual support</a></li>
								<li><a href="/current#call">Call back function for JavaScript code</a></li>
							</ul>
						</li>
					</ul>
					<h3><a href="/forecast5">5 day / 3 hour weather forecast</a></h3>
					<ul>
						<li><a href="/forecast5#5days">Call 5 day / 3 hour forecast data</a>
							<ul>
								<li><a href="/forecast5#name5">By city name</a></li>
								<li><a href="/forecast5#cityid5">By city ID</a></li>
								<li><a href="/forecast5#geo5">By geographic coordinates</a></li>
								<li><a href="/forecast5#zip">By ZIP code</a></li>
							</ul>
						</li>
						<li><a href="/forecast5#bulk">Bulk downloading</a></li>
						<li><a href="/forecast5#parameter">Parameters of API response</a>
							<ul>
								<li><a href="/forecast5#JSON">JSON</a></li>
								<li><a href="/forecast5#XML">XML</a></li>
								<li><a href="/forecast5#list">List of condition codes</a></li>
								<li><a href="/forecast5#min">Min/max temperature in current weather API and forecast
										API</a></li>
							</ul>
						</li>
						<li><a href="/forecast5#other">Other features</a>
							<ul>
								<li><a href="/forecast5#format">Format</a></li>
								<li><a href="/forecast5#accuracy">Search accuracy</a></li>
								<li><a href="/forecast5#limit">Limitation of result</a></li>
								<li><a href="/forecast5#data">Units format</a></li>
								<li><a href="/forecast5#multi">Multilingual support</a></li>
								<li><a href="/forecast5#call">Call back function for JavaScript code</a></li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="col-sm-4">
					<h3><a href="/forecast16">16 day / daily weather forecast</a></h3>
					<ul>
						<li><a href="/forecast16#16days">Call 16 day / daily forecast data</a>
							<ul>
								<li><a href="/forecast16#name16">By city name</a></li>
								<li><a href="/forecast16#cityid16">By city ID</a></li>
								<li><a href="/forecast16#geo16">By geographic coordinates</a></li>
								<li><a href="/forecast16#zip">By ZIP code</a></li>
							</ul>
						</li>
						<li><a href="/forecast16#bulk">Bulk downloading</a></li>
						<li><a href="/forecast16#parameter">Parameters of API response</a>
							<ul>
								<li><a href="/forecast16#JSON">JSON</a></li>
								<li><a href="/forecast16#XML">XML</a></li>
								<li><a href="/forecast16#list">List of condition codes</a></li>
								<li><a href="/forecast16#min">Min/max temperature in current weather API and forecast
										API</a></li>
							</ul>
						</li>
						<li><a href="/forecast16#other">Other features</a>
							<ul>
								<li><a href="/forecast16#format">Format</a></li>
								<li><a href="/forecast16#accuracy">Search accuracy</a></li>
								<li><a href="/forecast16#limit">Limitation of result</a></li>
								<li><a href="/forecast16#data">Units format</a></li>
								<li><a href="/forecast16#multi">Multilingual support</a></li>
								<li><a href="/forecast16#call">Call back function for JavaScript code</a></li>
							</ul>
						</li>
					</ul>
					<h3><a href="/history">Historical data for cities</a></h3>
					<ul>
						<li><a href="/history#city">Call historical data for cities</a>
							<ul>
								<li><a href="/history#cityid">By city ID</a></li>
								<li><a href="/history#name">By city name</a></li>
								<li><a href="/history#geo">By geographic coordinates</a></li>
							</ul>
						</li>
						<li><a href="/history#parameter">Parameters of API response</a>
							<ul>
								<li><a href="/history#JSON">JSON</a></li>
								<li><a href="/history#list">List of condition codes</a></li>
								<li><a href="/history#min">Min/max temperature in historical weather API and forecast
										API</a></li>
							</ul>
						</li>
					</ul>
					<h3><a href="/history-bulk">History Bulk</a></h3>
					<ul>
						<li><a href="/history-bulk#data">Data extract description</a></li>
						<li><a href="/history-bulk#examples">Examples</a></li>
						<li><a href="/history-bulk#parameter">Parameters of API response</a>
							<ul>
								<li><a href="/history-bulk#JSON">JSON</a></li>
								<li><a href="/history-bulk#list">List of condition codes</a></li>
							</ul>
						</li>
					</ul>
					<h3><a href="/api/uvi">UV index</a> </h3>
					<ul>
						<li><a href="/api/uvi#current">Current UV data for one location</a>
						</li>
						<li><a href="/api/uvi#forecast">Forecast UV data for one location</a>
						</li>
						<li><a href="/api/uvi#history">Historical UV data for one location</a>
					</ul>
				</div>
				<div class="col-sm-4">
					<h3><a href="/bulk">Bulk downloading</a></h3>
					<ul>
						<li><a href="/bulk#bulk_forecast">Forecast bulks</a></li>
						<li><a href="/bulk#bulk_current">Current weather bulks</a></li>
					</ul>
					<h3><a href="/stations">Weather stations</a> </h3>
					<ul>
						<li><a href="/stations#steps">Three simple steps</a></li>
						<li><a href="/stations#main">Weather Stations API 3.0 basic methods</a></li>
						<li><a href="/stations#additional">Additional features</a></li>
					</ul>
					<h3><a href="/api/weathermaps">Map layers</a></h3>
					<ul>
						<li><a href="/api/weathermaps#urlformat">URL format</a></li>
						<li><a href="/api/weathermaps#examples">Examples of weather map layers</a></li>
						<li><a href="/api/weathermaps#legend">Map styles legend</a></li>
						<li><a href="/api/weathermaps#google2">Google Maps JavaScript API based on OpenWeatherMap
								API</a></li>
						<li><a href="/api/weathermaps#library">Libraries to connect weather layers</a></li>
						<ul>
							<li><a href="/api/weathermaps#clouds">Clouds</a></li>
							<li><a href="/api/weathermaps#precip">Precipitation</a></li>
							<li><a href="/api/weathermaps#pres">Sea level pressure</a></li>
							<li><a href="/api/weathermaps#wind">Wind speed</a></li>
							<li><a href="/api/weathermaps#temp">Temperature</a></li>
						</ul>
					</ul>
					<h3><a href="/triggers">Weather alerts</a></h3>
					<ul>
						<li><a href="/triggers#steps">Three simple steps</a></li>
						<li><a href="/triggers#main">Weather Triggers API basic methods</a></li>
						<li><a href="/triggers#additional">Additional features</a></li>
						<li><a href="/triggers-struct">Weather Triggers Struct</a></li>
					</ul>
					<h3><a href="/examples">Partners and solutions of API use</a></h3>
					<ul>
						<li><a href="/examples">Google solutions, Ubuntu mobile, Android, Java, PHP, big library on
								GitHub and others</a></li>
					</ul>
					<h3><a href="https://openweathermap.force.com">Support Center</a></h3>
					<ul>
						<li><a href="https://openweathermap.force.com/s/topic/0TO3i000000D2joGAC/faq">FAQ</a></li>
						<li><a href="https://openweathermap.force.com/s/contactsupport">Ask Support Center</a></li>
					</ul>
				</div>
			</div>
		</div> <!-- / .container -->
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
					<!-- OWM long bottom -->
					<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px"
						data-ad-client="ca-pub-9649553505534207" data-ad-slot="1070308379"></ins>
					<script>
						(adsbygoogle = window.adsbygoogle || []).push({});
					</script>
				</div>
			</div>
		</div>

	</main>
	<div id="stick-footer-panel"></div>
	<div class="footer-website" onClick="toggleFooterSection(event)">

		<div class="horizontal-section">

			<div class="section">
				<p class="section-heading">Product Collections</p>
				<div class="section-content">
					<ul>
						<li><a href="/api#current">Current and Forecast APIs</a></li>
						<li><a href="/api#history">Historical Weather Data</a></li>
						<li><a href="/api#maps">Weather Maps</a></li>
						<li><a href="/widgets-constructor">Widgets</a></li>
					</ul>
				</div>
			</div>

			<div class="section">
				<p class="section-heading">Subscription</p>
				<div class="section-content">
					<ul>
						<li><a href="/appid">How to start</a></li>
						<li><a href="/price">Pricing</a></li>
						<li><a href="https://home.openweathermap.org/users/sign_up">Subscribe for free</a></li>
					</ul>
				</div>
			</div>

			<div class="section">
				<p class="section-heading"><a href="https://openweather.co.uk/about" target="_blank">About us</a></p>
				<div class="section-content">
					<p>OpenWeather is a team of IT experts and data scientists that has been practising deep weather
						data science since 2014. For each point on the globe, OpenWeather provides historical, current
						and forecasted weather data via light-speed APIs. Headquarters in London, UK.</p>
				</div>
			</div>

		</div>

		<div class="horizontal-section">
			<div class="section">
				<p class="section-heading">Technologies</p>
				<div class="section-content">
					<ul>
						<li><a href="/technology">Weather models</a></li>
						<li><a href="/accuracy-and-quality">Accuracy and quality of weather data</a></li>
						<li><a href="/stations">Connect your weather station</a></li>
					</ul>
				</div>
			</div>
			<div class="section">
				<p class="section-heading">Terms & Conditions</p>
				<div class="section-content">
					<ul>
						<li><a href="https://openweather.co.uk/storage/app/media/Terms/Openweather_terms_and_conditions_of_sale.pdf"
								target="_blank">Terms and conditions of sale</a></li>
						<li><a href="https://openweather.co.uk/privacy-policy" target="_blank">Privacy Policy</a></li>
						<li><a href="https://openweather.co.uk/storage/app/media/Terms/Openweather_website_terms_and_conditions_of_use.pdf"
								target="_blank">Website terms and conditions</a></li>
					</ul>
				</div>
			</div>
			<div class="section not-foldable">
				<p class="section-heading" style="visibility: hidden">Contact us</p>
				<div class="section-content">
					<ul>
						<li><a href="https://openweather.co.uk/team" target="_blank">Our team</a></li>
						<li><a href="https://openweather.co.uk/blog/category/weather" target="_blank">Blog</a></li>
						<li><a href="https://openweathermap.force.com/s/contactsupport" target="_blank">Support
								center</a></li>
						<li><a href="mailto:info@openweathermap.org">info@openweathermap.org</a>
						<li>
					</ul>
				</div>
			</div>
		</div>
		<br />
		<div class="horizontal-section">
			<span>© 2012 — 2020 OpenWeather ® All rights reserved.</span>
			<div class="social">
				<a href="https://www.facebook.com/groups/270748973021342"
					target="_blank"><img src="/themes/openweathermap/assets/img/owm_icons/icon_facebook.png"/></a>
					<a href="https://twitter.com/OpenWeatherMap"
						target="_blank"><img src="/themes/openweathermap/assets/img/owm_icons/icon_twitter.png"/></a>
						<a href="https://www.linkedin.com/company/9816754"
							target="_blank"><img src="/themes/openweathermap/assets/img/owm_icons/icon_linkedin.png"/></a>
							<a href="https://medium.com/@openweathermap"
								target="_blank"><img src="/themes/openweathermap/assets/img/owm_icons/icon_medium.png"/></a>
								<a href="https://t.me/openweathermap"
									target="_blank"><img src="/themes/openweathermap/assets/img/owm_icons/icon_telegram.png"/></a>
									<a href="https://github.com/search?q=openweathermap&ref=cmdform"
										target="_blank"><img src="/themes/openweathermap/assets/img/owm_icons/icon_github.png"/></a>
			</div>
		</div>
	</div>

	<script>
		function toggleFooterSection (e) {
    if (e.target && (e.target.className === 'section-heading' || e.target.parentNode.className === 'section-heading')) {
      //locate section
      let section = e.target.className === 'section-heading' ? e.target.parentNode : e.target.parentNode.parentNode;
      if (section.classList.contains('visible')) {
        section.classList.remove('visible')
      } else {
        section.classList.add('visible')
      }
    }
  }
	</script>

	<script src="https://cdn.ravenjs.com/3.6.1/raven.min.js"></script>
	<script>
		Raven.config('http://66df88eb63e94f27964b84031e49b358@sentry.owm.io/16').install()
	</script>
	<script src='/themes/openweathermap/assets/js/bundle_owm_postload.c31872127471c475ade1.js'></script>
	<script src='/themes/openweathermap/assets/js/stick_footer_panel.c31872127471c475ade1.js'></script>
</body>

</html>