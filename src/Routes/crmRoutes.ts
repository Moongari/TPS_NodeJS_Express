import { Request, Response } from 'express';
import { ContactController } from '../controllers/crmController';


export class Routes {
	public routes(app: any): void {
		// racine du site
		app.route('/').get((Req: Request, Res: Response) => {
			Res.status(200).send({
				message: 'vous etes a la racine du Site !'
			});
		});

		// Contact
		app.route('/contact')
			// GET
			.get((req: Request, res: Response) => {
				// Get all contacts
				res.status(200).send({
					message: 'Vous etes sur la partie Contact'
				});
			});

		// POST
		app.post((req: Request, res: Response) => {
			// Create new contact
			res.status(200).send({
				message: 'POST request successfulll!!!!'
			});
		});
	}
}
