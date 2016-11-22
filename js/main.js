jQuery(function() {

   getCharacters();
   getComics();

   function getCharacters() {
      $("#putCharactersHere").html("");
      $.ajax({
         url: `https://gateway.marvel.com:443/v1/public/characters?&apikey=50d21a7f18276125689a2e2f1c9bcd8e`,
         method: 'GET',
         success: function successHandler(featuredCharacters) {
            console.log(featuredCharacters);
            var randomCharacters1 = _.sample(featuredCharacters.data.results);
            var randomCharacters2 = _.sample(featuredCharacters.data.results);
            var randomCharacters3 = _.sample(featuredCharacters.data.results);
            let newCharactersArray = [randomCharacters1, randomCharacters2, randomCharacters3];
            newCharactersArray.forEach(function(Character) {

               $("#putCharactersHere").append(`
                        <div class="col-md-4"><img src="${Character.thumbnail.path}.${Character.thumbnail.extension}" class="img-responsive character-image-small"></div>
                    `)
            })
         },
      });
   }

   function getComics() {
      $("#putComicsHere").html("");
      $.ajax({
         url: `https://gateway.marvel.com:443/v1/public/comics?&apikey=50d21a7f18276125689a2e2f1c9bcd8e`,
         method: 'GET',
         success: function successHandler(featuredComics) {
            console.log(featuredComics);
            var randomComics1 = _.sample(featuredComics.data.results);
            var randomComics2 = _.sample(featuredComics.data.results);
            var randomComics3 = _.sample(featuredComics.data.results);
            let newComicsArray = [randomComics1, randomComics2, randomComics3];
            newComicsArray.forEach(function(Comic) {

               $("#putComicsHere").append(`
                           <div class="col-md-4"><img src="${Comic.thumbnail.path}.${Comic.thumbnail.extension}" class="img-responsive comic-image-small"></div>
                    `)
            })
         },
      });
   }







   // end of jQuery function tag:
});
