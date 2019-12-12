"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const crmModels_1 = require("../models/crmModels");
const Contact = mongoose.model('Contact', crmModels_1.ContactSchema);
//Créer un nouveau contact (demande POST)
class ContactController {
    addnewContact(Req, Res) {
        let newContact = new Contact(Req.body);
        newContact.save((err, contact) => {
            if (err) {
                Res.send(err);
            }
            else {
                Res.json(contact);
            }
        });
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=crmController.js.map