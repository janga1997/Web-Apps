 $(document).ready(function() {

 	var array = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "brunofin", "comster404", "test_channel", "cretetion", "sheevergaming", "TR7K", "OgamingSC2", "ESL_SC2"];

 	for (var key in array) {

 		$.getJSON("https://api.twitch.tv/kraken/streams/" + array[key], function(json_1) {

 			if (json_1.stream === null) {

 				$.getJSON(json_1._links.channel, function(json_2) {

 					$(".list").append("<div class='test off'>" + "<img src='" + json_2.logo + "'>" + "<p>" + "<a href='" + json_2.url + "' target='_blank'>" + json_2.display_name + "</p>" + "</a>" + "<p>Offline</p>" +
 						"</div>");

 				});

 			} 
			
			else if (json_1.status===422) {

 					$(".list").append("<div class='test off'>" + "<p>Account Closed</p>" +
 						"</div>");


 			} 
			
			else {

 				$.getJSON(json_1._links.channel, function(json_2) {

 					$(".list").append("<div class='test on'>" + "<img src='" + json_2.logo + "'>" + "<p>" + "<a href='" + json_2.url + "' target='_blank'>" + json_2.display_name + "</p>" + "</a>" +"<p>"+ json_1.stream.game +"</p>" +
 						"</div>");

 				});

 			}

 		});

 	}

 	$(".offline").on("click", function() {

 		$(".list").empty();
 		for (var key in array) {

 			$.getJSON("https://api.twitch.tv/kraken/streams/" + array[key], function(json_1) {

 				if (json_1.stream === null) {

 					$.getJSON(json_1._links.channel, function(json_2) {

 						$(".list").append("<div class='test off'>" + "<img src='" + json_2.logo + "'>" + "<p>" + "<a href='" + json_2.url + "' target='_blank'>" + json_2.display_name + "</p>" + "</a>" + "<p>Offline</p>" +
 							"</div>");

 					});

 				} else if (json_1.stream === undefined) {

 					$.getJSON(json_1._links.channel, function(json_2) {

 						$(".list").append("<div class='test off'>" + "<p>Account Closed</p>" +
 							"</div>");

 					});

 				}

 			});
 		}

 	});

 	$(".online").on("click", function() {

 		$(".list").empty();
 		for (var key in array) {

 			$.getJSON("https://api.twitch.tv/kraken/streams/" + array[key], function(json_1) {

 				if (json_1.stream !== null) {

 					$.getJSON(json_1._links.channel, function(json_2) {

 						$(".list").append("<div class='test on'>" + "<img src='" + json_2.logo + "'>" + "<p>" + "<a href='" + json_2.url + "' target='_blank'>" + json_2.display_name + "</p>" + "</a>" +"<p>"+ json_1.stream.game + "</p>" +
 							"</div>");

 					});

 				}

 			});
 		}

 	});

 	$(".all").on("click", function() {

 		$(".list").empty();

 		for (var key in array) {

 			$.getJSON("https://api.twitch.tv/kraken/streams/" + array[key], function(json_1) {

 				if (json_1.stream === null) {

 					$.getJSON(json_1._links.channel, function(json_2) {

 						$(".list").append("<div class='test off'>" + "<img src='" + json_2.logo + "'>" + "<p>" + "<a href='" + json_2.url + "' target='_blank'>" + json_2.display_name + "</p>" + "</a>" + "<p>Offline</p>" +
 							"</div>");

 					});

 				} else {

 					$.getJSON(json_1._links.channel, function(json_2) {

 						$(".list").append("<div class='test on'>" + "<img src='" + json_2.logo + "'>" + "<p>" + "<a href='" + json_2.url + "' target='_blank'>" + json_2.display_name + "</p>" + "</a>" +
 							"</div>");

 					});

 				}

 			});

 		}

 	});

 });