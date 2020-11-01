import { NextFunction, Request, Response } from 'express';
import { get, resolver, start, use } from '.';
// these only need to be loaded. Not instantiated
@resolver('')
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

	@use('/hi', '/api/hi')
	hi(req: Request, res: Response, next: NextFunction) {
		console.log('saying hi');

		next();
	}
}

@resolver('/api')
class resolver2 {
	@get('/hi')
	api(_req: Request, res: Response, _next: NextFunction) {
		res.send('hi');
	}
}

start(8080, () =>
	console.log(`started on http://localhost:8080 on a ${process.platform}`),
);
