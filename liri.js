var keys = require("./keys.js");
var request = require("request");
var Twitter = require("twitter");
var liriCommand = process.argv[2];
var fs = require("fs");

if(liriCommand === 'my-tweets'){
    var client = new Twitter({
        consumer_key: keys.twitterKeys.consumer_key,
        consumer_secret: keys.twitterKeys.consumer_secret,
        access_token_key: keys.twitterKeys.access_token_key,
        access_token_secret: keys.twitterKeys.access_token_secret
    });

    client.get('https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=901621790807531520&count=20', function(error, response){
        if(error) throw error;
        for (var i = 0; i < response.length; i++) {
        console.log(response[i].text);
    }
    });
}

if(liriCommand === 'spotify-this-song'){
    //need to capture process.argv[3] and beyond using a for loop and store the song name into a variable that can be thrown into spotify

   // var songName = process.argv;
  //  for (var i = 3; i < songName.length; i++){
  //      var spotSearch = "",
   // };

    //next up we hook into Spotify's api, then console.log the artist, song name, album, and song preview link, default is The Sign by Ace of Base
}

if(liriCommand === 'movie-this'){
    //need to capture process.argv[3] and beyond using a for loop and store the movie name that can be thrown into OMDB

  //  var movieName = process.argv;
  //  for (var i = 3; i < movieName.length; i++){
  //      var movieSearch = "",
  //  }

    //next up we need to hit OMDB api with movie name, then console.log movie title, movie year, rating, rotten tomatoes rating, country, language, plot, & actors, defaults to Mr. Nobody
}

if(liriCommand === 'do-what-it-says'){
    //use fs to read random.txt
  //  fs.readFile('/random.txt', (err, data) => {
  //      if (err) throw err;
  //      console.log(data);
  //  });

    //pass data from readFile into process.argv[2] then execute, in this case does spotify-this-song with I want it that way

}