jQuery(function() {

   $("body").on("click", '#moreinfobutton', function() {
      $(this).parent().parent().parent().find(".showMoreStuff").toggleClass("hide");
   })

   getCharacters();

   function getCharacters() {
      $("#putCharactersHerePage").html("");
      $.ajax({
         url: `https://gateway.marvel.com:443/v1/public/characters?&apikey=50d21a7f18276125689a2e2f1c9bcd8e`,
         method: 'GET',
         success: function successHandler(featuredCharacters) {
            console.log(featuredCharacters);
            featuredCharacters.data.results.forEach(function(Character) {
               var characterID = Character.id;
               var series = Character.series.items[0];
               console.log(series);
               $("#putCharactersHerePage").append(`
                      <div>
                          <div class="row">
                                <div class="col-md-6"><img src="${Character.thumbnail.path}.${Character.thumbnail.extension}" class="img-responsive character-image-large"></div>
                                <div class="col-md-4 comic_info">${Character.name}</div>
                                <div class="col-md-2 comic_info"><button data-id="${characterID}" class="infoButton btn btn-lg btn-default" id="moreinfobutton">Get more info</button></div>
                          </div>
                          <div class="row hide showMoreStuff">
                                <div class="col-md-6 comic_info">${Character.description}</div>
                                <div class="col-md-6 comic_info">${series}</div>
                          </div>
                      </div>
                      `)
            })
         },
      });
   }
}); // end of jQuery function tag:
