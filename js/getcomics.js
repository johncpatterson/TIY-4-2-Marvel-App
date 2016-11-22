jQuery(function() {

   getComics();

   function getComics() {
      $("#putComicsHerePage").html("");
      $.ajax({
         url: `https://gateway.marvel.com:443/v1/public/comics?&apikey=50d21a7f18276125689a2e2f1c9bcd8e`,
         method: 'GET',
         success: function successHandler(featuredComics) {

            featuredComics.data.results.forEach(function(Comic) {
               $("#putComicsHerePage").append(`
                      <div class="row">
                            <div class="col-md-5"><img src="${Comic.thumbnail.path}.${Comic.thumbnail.extension}" class="img-responsive comic-image-large"></div>
                            <div class="col-md-5 comic_info">${Comic.title}</div>
                            <div class="col-md-2 comic_info comic_price">$ ${Comic.prices[0].price}</div>
                      </div>
                      `)
            })
         },
      });
   }
}); // end of jQuery function tag:
