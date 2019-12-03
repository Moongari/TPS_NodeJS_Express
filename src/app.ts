import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./Routes/crmRoutes";


class App{

    public app:express.Application;
    public routeRacine : Routes = new Routes();

    constructor(){
        this.app = express();
        this.config();
        this.routeRacine.routes(this.app)
    }

    private config(){

        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));

    }

}
export default new App().app;