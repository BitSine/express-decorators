import { NextFunction, Request, Response } from 'express';
import { start } from '.';
import { get, use } from './decorators';

class main {
	@get('/')
	req(req: Request, res: Response, next: NextFunction) {
		res.status(200);
		res.json({
			e: 'e',
		});
	}

	@get('/hi')
	req2(req: Request, res: Response, next: NextFunction) {
		res.status(200);
		res.json({
			msge: 'hello, world!',
		});
	}
	@use()
	mid(req: Request, res: Response, next: NextFunction) {
		console.log(res.statusCode);
		next();
	}
}

const yes = new main();
start(8080, () => console.log('started on http://localhost:8080'));
