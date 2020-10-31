# express-decorators
⌨ TypeScript decorator powered express apps.

# example
```ts
import { NextFunction, Request, Response } from 'express';
import { start, get, use } from 'express-class';

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
start();

```
