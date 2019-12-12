import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModels';
import { Request, Response, response } from 'express';
import { request } from 'http';

const Contact = mongoose.model('Contact', ContactSchema);
//Créer un nouveau contact (demande POST)
export class ContactController{

    public addnewContact(Req: Request, Res: Response) {
        let newContact = new Contact(Req.body);

        newContact.save((err, contact) => {
            if (err) {
                Res.send(err);
            } else {
                Res.json(contact);
            }
        });


    }

}