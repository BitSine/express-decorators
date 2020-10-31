import express from 'express';

const app = express();
app.use(express.json());

export const router = express.Router({
	strict: true,
});

export function start() {
	app.use(router);
	app.listen(8080, () => {
		console.log(`Server is listening on http://localhost:8080`);
	});
}
