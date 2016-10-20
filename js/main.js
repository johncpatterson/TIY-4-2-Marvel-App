jQuery(function() {


    getCharacters();
    getComics();


    function getCharacters() {
        $("#putCharactersHere").html("");
        $.ajax({
            url: `https://gateway.marvel.com:443/v1/public/characters?limit=3&apikey=50d21a7f18276125689a2e2f1c9bcd8e`,
            method: 'GET',
            success: function successHandler(featuredCharacters) {
                console.log(featuredCharacters);
                var arrayOfCharacters = featuredCharacters.data.results.forEach(function(Character) {

                    // var random = arrayOfCharacters[Math.floor(Math.random() * arrayOfCharacters.length)];   <----- attempt at random number generation.  
                    // I know I need to generate a random number then use that number to pick from the array that is returned from Marvel, just not sure how. 

                    $("#putCharactersHere").append(`
                               <div class="col-md-4"><img src="${Character.thumbnail.path}.${Character.thumbnail.extension}" class="img-responsive"></div>
                        `)

                })
            },
        });
    }


    function getComics() {
        $("#putComicsHere").html("");
        $.ajax({
            url: `https://gateway.marvel.com:443/v1/public/comics?limit=3&apikey=50d21a7f18276125689a2e2f1c9bcd8e`,
            method: 'GET',
            success: function successHandler(featuredComics) {
                console.log(featuredComics);
                featuredComics.data.results.forEach(function(Comic) {

                    $("#putComicsHere").append(`
                               <div class="col-md-4"><img src="${Comic.thumbnail.path}.${Comic.thumbnail.extension}" class="img-responsive"></div>
                        `)

                })
            },
        });
    }







    // end of jQuery function tag:
});


