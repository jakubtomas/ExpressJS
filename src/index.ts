import * as express from 'express';
import * as fs from "fs";
import * as menu from "./menu.json";
import * as data from "./data.json";


/*
check github gursky
npm init
npm i -g typescript
sudo chown -R $USER /usr/local/lib/node_modules
npm run build
npm i ejs express
npm i --save-dev @types/express tsc-watch typescript
npm list -g —depth=0
npm run start
*/

const app = express();
const router = express.Router();
const city: string = "Amsterdam";


/*const logger = (req, res, next) =>{
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
};*/
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(router);


//app.use(logger);
/*
app.get("/", function(_req, res) {
  res.render("index", { page: "main" });
});
*/
//const url = window.location.href;


router.get("/", function(req, res) {
  res.render("index", { page: "main", menu , data});
});

app.use(function(req, res) {
  res.status(404).render("404");
});

router.get("/:page", function(req, res) {
  if (fs.existsSync("views/pages/" + req.params.page + ".ejs")) {

    var myVar= "ehsdf";
    res.render("index", { page: req.params.page  , menu: menu , myVar}); //eqvivalentna syntax
  } else {
    res.status(404).render("404" , { menu: menu});
  }
});


/*
router.get("/:page", function(req, res) {
  res.render("index", { page: req.params.page });
});*/


app.listen(8080, () => console.log('listening on port 8080'));
