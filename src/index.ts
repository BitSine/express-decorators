import express from 'express';

export const app = express();

export const router = express.Router({
	strict: true,
});

export function start(port?: number) {
	app.use(router);
	app.listen(port || 8080, () => {
		console.log(`Server is listening on http://localhost:${port || 8080}`);
	});
}

export * from './decorators';
