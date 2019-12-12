"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    routes(app) {
        // racine du site
        app.route('/').get((Req, Res) => {
            Res.status(200).send({
                message: 'vous etes a la racine du Site !'
            });
        });
        // Contact
        app.route('/contact')
            // GET
            .get((req, res) => {
            // Get all contacts
            res.status(200).send({
                message: 'Vous etes sur la partie Contact'
            });
        });
        // POST
        app.post((req, res) => {
            // Create new contact
            res.status(200).send({
                message: 'POST request successfulll!!!!'
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map