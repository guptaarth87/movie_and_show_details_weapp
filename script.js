// https://www.omdbapi.com/?t=mission%20imposible&apikey=4231788e
// const fetch=require('node-fetch')
function printall(search_key){
  
    const search_keyword=search_key;
    const API_URL="https://www.omdbapi.com/?t="+search_keyword+"&apikey=4231788e"
            return fetch(API_URL)
             .then(res=>res.json())
             .then(data=>{
                 const resp=data.Response;
            if(resp=='True'){
                 const img_url=data.Poster;
                 const type=data.type
                 const title=data.Title;
                 const imdb_rating=data.imdbRating;
                 const production=data.Production;
                 const year=data.Year;
                 const rated=data.Rated;
                 const released=data.Released;
                 const runtime=data.Runtime;
                 const genre=data.Genre;
                 const director=data.Director;
                 const writer=data.Writer;
                 const actors=data.Actors;
                 const plot=data.Plot;
                 const language=data.Language;
                 const country=data.Country;
                 const awards=data.Awards;
                 const imdbvotes=data.imdbVotes;
                 const boxoffice=data.BoxOffice;
            //defining template
            const template=`<h2>Title       : ${title}</h2>
                            <h3>IMDB rating : ${imdb_rating}</h3>
                            <h3>IMDB Votes  : ${imdbvotes}</h3>
                            <h4>Rated       : ${rated}</h4>
                            <h4>Type        : ${type} </h4>
                            <h4>YEAR        : ${year}</h4>
                            <h4>Production  : ${production}</h4>
                            <h4>Genre       : ${genre}</h4>
                            <h4>Released    : ${released}</h4>
                            <h4>Runtime     : ${runtime}<h4>
                            <h4>Director    : ${director}</h4>
                            <h4>Writer      : ${writer}</h4>
                            <h4>Actors      : ${actors}</h4>
                            <h4>Language    : ${language}</h4>
                            <h4>Country     : ${country}</h4>
                            <h4>Awards      : ${awards}</h4>
                            <h4>Box Office  : ${boxoffice}</h4>
                            <h3>Plot        : ${plot}</h3>
                            `
            document.getElementById('photo_placeholder').innerHTML+=`<img class="s" src=${img_url} />`;
            document.getElementById('text_placeholder').innerHTML+=template;
            clr()
            }else{
              document.getElementById('photo_placeholder').innerHTML+=`<h3 class="txt-color">No result available try something else!</h3>`;
              clr()
            }   
             })
}
function clr() {
  document.getElementById('search_key').value = ""; 
 }
function nasa_image(){
   
    let search_key = document.getElementById("search_key").value;
    // let search_key='rambo'
     console.log(search_key)
     printall(search_key)
    //  refreshPage()
     return false;
      
  }

