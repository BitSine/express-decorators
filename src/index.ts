import express from 'express';

export const app = express();

export const router = express.Router({
	strict: true,
});

export function start(PORT: number, cb: () => void) {
	app.use(router);
	app.listen(PORT, cb);
}

export function set(setting: string, val: any) {
	app.set(setting, val);
}

export * from './decorators';
