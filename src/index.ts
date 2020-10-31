import express from 'express';

export const app = express();

export const router = express.Router({
	strict: true,
});

/**
 * Starts the server
 * @param PORT the port
 * @param cb the function to all after it starts
 */
export function start(PORT: number, cb: () => void) {
	app.use(router);
	app.listen(PORT, cb);
}

/**
 * sets a value for the app
 * @param setting the setting to set
 * @param val the value
 */
export function set(setting: string, val: any) {
	app.set(setting, val);
}

export * from './decorators';
