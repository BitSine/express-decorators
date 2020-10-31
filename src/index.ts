import express from 'express';

export const app = express();

export const router = express.Router({
	strict: true,
});

export function start() {
	app.use(router);
	app.listen(8080, () => {
		console.log(`Server is listening on http://localhost:8080`);
	});
}

export * from './decorators';
