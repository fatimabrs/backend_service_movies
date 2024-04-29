const express = require("express");

const logger = require("morgan");

const app = express();

const movies = require("./movies.json");

const port = 4000;

const db = require("./models");

app.use(logger("dev"));

app.use(express.json());

db.mongoose
  .connect(db.url)
  .then(() => {
    console.log(`Connected to the database '${db.url}' !`);
  })
  .catch(err => {
    console.log(`Cannot connect to the database '${db.url}' !`, err);
    process.exit();
  });


//definition des routes de la fonction pour executer une requete

// app.get("/", (req, res) => {
//     console.log(`Request from ${req.url}`);
//     res.send("server running");
// });


// app.get("/movies", (req, res) => {
//     // console.log(`Request from ${req.url}`);
//     // res.send("our movies ...");
//  res.status(200).json(movies); //on precise le format d'affichage des information
// });
//   app.get("/movies/:id", (req, res) => {
//     //  const id_movie = parseInt(req.params.id);
//     //   const movie = movies.find(m => m.id == id_movie);
//     // res.status(200).json(movie); 
//  });
//pour ajouter un film avec la methode post
// app.post("/movies", (req,res) => {
//     movies.push(req.body);
//     res.status(200).json(movies);
// });

//pour remplacer un film par un autre

// app.put("/movies/:id", (req,res) =>{
//     const id = parseInt(req.params.id); // recuperer l'id et le convertir en int
//     let movie= movies.find(m => m.id == id); //on recherche la ligne correspondant a l'id puis la remplace par le nouveau film movie
//     (movie.title = req.body.title), (movie.realese = req.body.realese);
//     res.status(200).json(movies);
// });

//supprimer un film
// app.delete("/movies/:id", (req,res) =>{
//     const id = parseInt(req.params.id);
//     const movieDel = movies.findIndex(m => m.id == id);
//     if(movieDel !=-1){
//         movies.splice(movieDel, 1);
//         res.status(200).json({message: `Film ${movieDel+1} a ete supprime avec succes`});
//     }
//     else{
//         res.status(404).json({message: `Film non trouver`});
//     }
// });


 app.listen( port, () =>
    console.log(`Server listening at http://localhost:${port}`)
);



 