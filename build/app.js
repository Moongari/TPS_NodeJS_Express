"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const crmRoutes_1 = require("./Routes/crmRoutes");
class App {
    constructor() {
        this.routeRacine = new crmRoutes_1.Routes();
        this.app = express();
        this.config();
        this.routeRacine.routes(this.app);
    }
    config() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map