const express = require("express")
const app = express()
const router = express.Router()
var SpotifyWebApi = require('spotify-web-api-node');
app.use(express.static("public"))
// credentials
var spotifyApi = new SpotifyWebApi({
  clientId: 'b92f3ee0fda4431492c28a2bf8f32652',
  clientSecret: '5e16118d2fed482dbd2e6f9c3660fdbe',
  redirectUri: 'https://spotify-recommendations.hchristy1234.repl.co/callback',
});

// authorize
app.get("/auth", (req, res) => {
  const authorizeURL = spotifyApi.createAuthorizeURL(["playlist-read-private", "playlist-modify-private",
    "playlist-modify-public"], req.params.id);

  res.redirect(authorizeURL);
});
app.get("/callback", (req, res) => {
  res.redirect(`/music.html#${req.query.code}`)
})

app.get("/getChill", async (req, res) => {
  let codeRequest = await spotifyApi.authorizationCodeGrant(req.query.code);
  spotifyApi.setAccessToken(codeRequest.body.access_token);
  // seeds for recommendation (chill)
  spotifyApi.getRecommendations({
    limit: 10,
    market: "US",
    max_energy: 0.8,
    max_liveness: 0.8,
    seed_artists: ['1McMsnEElThX1knmY4oliG', '5IH6FPUwQTxPSXurCrcIov'],
    seed_tracks: ['5CZ40GBx1sQ9agT82CLQCT'],
    max_danceability: 0.8,
    seed_genres: ['pop'],
    min_popularity: 50
  })
    .then(function(data) {
      // getting only the song IDs from the data
      let recommendations = data.body;
      res.send(recommendations)
    }, function(err) {
      console.log("Something went wrong!", err);
    });
})

app.get("/getStudy", async (req, res) => {
  let codeRequest = await spotifyApi.authorizationCodeGrant(req.query.code);
  spotifyApi.setAccessToken(codeRequest.body.access_token);
  // seeds for recommendation (study)
  spotifyApi.getRecommendations({
    limit: 10,
    market: "US",
    max_energy: 0.5,
    seed_artists: ['0fauHpmSHwodVYIjTqOGHz'],
    seed_tracks: ['7vd1j4IDTU0koES9M8dvBQ'],
    seed_genres: ['study'],
    min_popularity: 50,
    min_instrumentalness: 0.5,
    max_liveness: 0.7,
    max_speechiness: 0.4
  })
    .then(function(data) {
      // getting only the song IDs from the data
      let recommendations = data.body;
      res.send(recommendations)
    }, function(err) {
      console.log("Something went wrong!", err);
    });
})

app.get("/getDance", async (req, res) => {
  let codeRequest = await spotifyApi.authorizationCodeGrant(req.query.code);
  spotifyApi.setAccessToken(codeRequest.body.access_token);
  // seeds for recommendation (dance)
  spotifyApi.getRecommendations({
    limit: 10,
    market: "US",
    seed_artists: ['1HY2Jd0NmPuamShAr6KMms'],
    seed_tracks: ['32OlwWuMpZ6b0aN2RZOeMS'],
    seed_genres: ['dance'],
    min_danceability: 0.6,
    min_energy: 0.5,
    min_liveness: 0.6,
    min_popularity: 50
  })
    .then(function(data) {
      // getting only the song IDs from the data
      let recommendations = data.body;
      res.send(recommendations)
    }, function(err) {
      console.log("Something went wrong!", err);
    });
})

app.get("/getSleep", async (req, res) => {
  let codeRequest = await spotifyApi.authorizationCodeGrant(req.query.code);
  spotifyApi.setAccessToken(codeRequest.body.access_token);
  // seeds for recommendation (sleep)
  spotifyApi.getRecommendations({
    limit: 10,
    market: "US",
    seed_artists: ['6XJykeImeaTIiXaeoORBs5'],
    seed_tracks: ['2hIzjuxyItTpPuZZIULExJ'],
    seed_genres: ['sleep', 'ambient'],
    max_danceability: 0.4,
    max_energy: 0.4,
    max_liveness: 0.4,
    min_popularity: 50
  })
    .then(function(data) {
      // getting only the song IDs from the data
      let recommendations = data.body;
      res.send(recommendations)
    }, function(err) {
      console.log("Something went wrong!", err);
    });
})

app.get("/getCry", async (req, res) => {
  let codeRequest = await spotifyApi.authorizationCodeGrant(req.query.code);
  spotifyApi.setAccessToken(codeRequest.body.access_token);
  // seeds for recommendation (cry)
  spotifyApi.getRecommendations({
    limit: 10,
    market: "US",
    seed_artists: ['7H55rcKCfwqkyDFH9wpKM6'],
    seed_tracks: ['05CrK6Q5VGtfPDtyQFJ4Kf', '3VlbOrM6nYPprVvzBZllE5'],
    seed_genres: ['sad'],
    max_danceability: 0.5,
    max_energy: 0.5,
    max_liveness: 0.4,
    min_popularity: 50
  })
    .then(function(data) {
      // getting only the song IDs from the data
      let recommendations = data.body;
      res.send(recommendations)
    }, function(err) {
      console.log("Something went wrong!", err);
    });
})

app.get("/getSingAlong", async (req, res) => {
  let codeRequest = await spotifyApi.authorizationCodeGrant(req.query.code);
  spotifyApi.setAccessToken(codeRequest.body.access_token);
  // seeds for recommendation (sing-along)
  spotifyApi.getRecommendations({
    limit: 10,
    market: "US",
    seed_artists: ['2kHxkdiKCSnHMkhIgFBZaI'],
    seed_tracks: ['0qcr5FMsEO85NAQjrlDRKo', '6klpXs2uAjagnZMFkt4qkl'],
    seed_genres: ['pop', 'disney'],
    min_danceability: 0.3,
    min_energy: 0.3,
    min_liveness: 0.3,
    min_popularity: 50
  })
    .then(function(data) {
      // getting only the song IDs from the data
      let recommendations = data.body;
      res.send(recommendations)
    }, function(err) {
      console.log("Something went wrong!", err);
    });
})

app.use('/', router)
app.listen(3000, () => {
  console.log('running')
})