import { NextFunction, Request, Response } from 'express';
import { get, start, use } from '.';

class main {
	@get('/')
	req(_req: Request, res: Response, _next: NextFunction) {
		res.status(200);
		res.json({
			e: 'e',
		});
	}

	@get('/hi')
	req2(_req: Request, res: Response, _next: NextFunction) {
		res.status(200);
		res.json({
			msg: 'hello, world!',
		});
	}

	@use()
	mid(req: Request, res: Response, next: NextFunction) {
		console.log(res.statusCode);
		console.log(`running ${req.url}`);

		next();
	}

	@use('/hi')
	hi(req: Request, res: Response, next: NextFunction) {
		console.log('saying hi');

		next();
	}
}

const classes = [new main()];
start(8080, () => console.log('started on http://localhost:8080'));
