import { NextFunction, Request, Response } from 'express';
import { start } from '.';
import { get } from './decorators/get';

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
}

const yes = new main();
start();
