 $(document).ready(function() {
   
   $("input").on("click", function() {
   
     $("input").val("");
   
   });
   
var url_1;
   var url;
   var pageid = [];
   var titles=[];
   var new_pageid=[];
   $(".empty").empty();

   $("input")
     .keyup(function() {
       value = $(this).val();
       $("p").text(value);
     })
     .keyup();

   $(document).keypress(function(e) {
     if (e.which == 13) {

       $(".empty").empty();

       url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + value + "&format=json&callback=?";

       $.getJSON(url, function(json) {
         
         for(var i in json.query.search){
           
           url_1="https://en.wikipedia.org/wiki/"+json.query.search[i].title.replace(/\s/gi,"%20");
           
           $(".empty").append("<a href='" + url_1+"' target='_blank'><div class='test'>" + json.query.search[i].title +"</div></a>");
           
         }
         
       });

     }
   });

   $(".search").on("click", function() {
     
     
       $(".empty").empty();

       url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + value + "&format=json&callback=?";

       $.getJSON(url, function(json) {
         
         for(var i in json.query.search){
           
           url_1="https://en.wikipedia.org/wiki/"+json.query.search[i].title.replace(/\s/gi,"%20");
           
           $(".empty").append("<a href='" + url_1+"' target='_blank'><div class='test'>" + json.query.search[i].title +"</div></a>");
           
         }
         
       });

     
     
   });

 });