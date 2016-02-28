var nothing;
$.getJSON("http://www.freecodecamp.com/news/hot", function(json) {

  for (var i in json) {
  

    $(".news").append("<div class='test'>" + "<a href='" + "http://www.freecodecamp.com/" + json[i].author.username + "' target='_blank'>" + "<img src=" + json[i].author.picture + "> " + "</a>" +
      "<div class='img-text'>" + "<a href='" + json[i].link + "'" + "target='_blank'" + ">" + "<p class='headline'>" +
      json[i].headline.substring(0, 25) + "..." + "</p>" + "</a>" + "<p class='upvotes'>Upvotes : "+  json[i].upVotes.length + "</p>" +"</div>" + "</div>");

  }

});