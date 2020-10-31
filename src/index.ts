import express, { Express } from 'express';

/**
 * DO NOT USE. ONLY USED FOR INTERNALS
 */
export let _app = express();

/**
 * DO NOT USE. ONLY USED FOR INTERNALS
 */
export const _router = express.Router({
	strict: true,
});

/**
 * Starts the server
 * @param PORT the port
 * @param cb the function to all after it starts
 */
export function start(PORT: number, cb: () => void) {
	_app.use(_router);
	_app.listen(PORT, cb);
}

/**
 * sets a value for the app
 * @param setting the setting to set
 * @param val the value
 */
export function set(setting: string, val: any) {
	_app.set(setting, val);
}

export function setApp(appToUse: Express) {
	_app = appToUse;
}

export * from './decorators';
