const chill = $('.chill')
const study = $('.study')
const dance = $('.dance')
const sleep = $('.sleep')
const cry = $('.cry')
const singalong = $('.singalong')
const authorize= $('.authorize')

async function callChill() {
  fetch(`/getChill?code=${window.location.hash.substring(1)}`)
    .then(response => response.json())
    .then(data => {
      const numOfSongs = data.tracks.length;
      let count = 0;
      $(".container").html("")
      $(".container").append(`
        <h2 class="text-center text-white mt-10 mb-6">Had a long day? Relax and rewind with these songs. Includes mainstream pop and similar songs—not too upbeat yet not too slow.</h2>
      `)
      while (count < numOfSongs) {
        let id = data.tracks[count].id;
        $(".container").append(`
          <div class = "song">
            <iframe class="songEmbed rounded-xl ml-auto mr-auto my-3" src="https://open.spotify.com/embed/track/${id}" width="40%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        `)
        count++;
      }
    });
}

function callStudy() {
  fetch(`/getStudy?code=${window.location.hash.substring(1)}`)
    .then(response => response.json())
    .then(data => {
      const numOfSongs = data.tracks.length;
      let count = 0;
      $(".container").html("")
      $(".container").append(`
        <h2 class="text-center text-white mt-10 mb-6">Have a huge test tomorrow? Need motivation to work on homework? These instrumental songs are the perfect background music to studying, without being too distracting.</h2>
      `)
      while (count < numOfSongs) {
        let id = data.tracks[count].id;
        $(".container").append(`
          <div class = "song">
            <iframe class="songEmbed rounded-xl ml-auto mr-auto my-3" src="https://open.spotify.com/embed/track/${id}" width="40%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        `)
        count++;
      }
    });
}

function callDance() {
  fetch(`/getDance?code=${window.location.hash.substring(1)}`)
    .then(response => response.json())
    .then(data => {
      const numOfSongs = data.tracks.length;
      let count = 0;
      $(".container").html("")
      $(".container").append(`
        <h2 class="text-center text-white mt-10 mb-6">Dance your heart out to these upbeat bops! These songs are generally catchy and uptempo, with the perfect energy to dance to.</h2>
      `)
      while (count < numOfSongs) {
        let id = data.tracks[count].id;
        $(".container").append(`
          <div class = "song">
            <iframe class="songEmbed rounded-xl ml-auto mr-auto my-3" src="https://open.spotify.com/embed/track/${id}" width="40%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        `)
        count++;
      }
    });
}

function callSleep() {
  fetch(`/getSleep?code=${window.location.hash.substring(1)}`)
    .then(response => response.json())
    .then(data => {
      const numOfSongs = data.tracks.length;
      let count = 0;
      $(".container").html("")
      $(".container").append(`
        <h2 class="text-center text-white mt-10 mb-6">Having trouble falling asleep? These ambient and low-energy songs are the perfect tunes to fall asleep to.</h2>
      `)
      while (count < numOfSongs) {
        let id = data.tracks[count].id;
        $(".container").append(`
          <div class = "song">
            <iframe class="songEmbed rounded-xl ml-auto mr-auto my-3" src="https://open.spotify.com/embed/track/${id}" width="40%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        `)
        count++;
      }
    });
}

function callCry() {
  fetch(`/getCry?code=${window.location.hash.substring(1)}`)
    .then(response => response.json())
    .then(data => {
      const numOfSongs = data.tracks.length;
      let count = 0;
      $(".container").html("")
      $(".container").append(`
        <h2 class="text-center text-white mt-10 mb-6">Feel like crying or being sad? Here's a few extremely sad (but good!) songs bound to accomplish your goals.</h2>
      `)
      while (count < numOfSongs) {
        let id = data.tracks[count].id;
        $(".container").append(`
          <div class = "song">
            <iframe class="songEmbed rounded-xl ml-auto mr-auto my-3" src="https://open.spotify.com/embed/track/${id}" width="40%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        `)
        count++;
      }
    });
}

function callSingAlong() {
  fetch(`/getSingAlong?code=${window.location.hash.substring(1)}`)
    .then(response => response.json())
    .then(data => {
      const numOfSongs = data.tracks.length;
      let count = 0;
      $(".container").html("")
      $(".container").append(`
        <h2 class="text-center text-white mt-10 mb-6">Sing along to these catchy pop and Disney songs! (Don't deafen anyone with your terrible off-key singing though!)</h2>
      `)
      while (count < numOfSongs) {
        let id = data.tracks[count].id;
        $(".container").append(`
          <div class = "song">
            <iframe class="songEmbed rounded-xl ml-auto mr-auto my-3" src="https://open.spotify.com/embed/track/${id}" width="40%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        `)
        count++;
      }
    });
}

function callAuthorize(){
  window.location.href = '../auth'
}


chill.on("click", callChill)
study.on("click", callStudy)
dance.on("click", callDance)
sleep.on("click", callSleep)
cry.on("click", callCry)
singalong.on("click", callSingAlong)
authorize.on("click", callAuthorize)