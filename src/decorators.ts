import { RequestHandler } from 'express';
import { _app, _router } from '.';

interface req {
	val: RequestHandler;
	location: string;
	target: string;
	type: string;
}

let reqs: req[] = [];

export function get(location: string) {
	return (
		target: Object,
		_propertyKey: string,
		descriptor: TypedPropertyDescriptor<RequestHandler>,
	) => {
		reqs.push({
			location,
			val: descriptor.value,
			target: target.constructor.name,
			type: 'get',
		});
	};
}

export function post(location: string) {
	return (
		target: Object,
		_propertyKey: string,
		descriptor: TypedPropertyDescriptor<RequestHandler>,
	) => {
		reqs.push({
			location,
			val: descriptor.value,
			target: target.constructor.name,
			type: 'post',
		});
	};
}

export function put(location: string) {
	return (
		target: Object,
		_propertyKey: string,
		descriptor: TypedPropertyDescriptor<RequestHandler>,
	) => {
		reqs.push({
			location,
			val: descriptor.value,
			target: target.constructor.name,
			type: 'put',
		});
	};
}

/**
 * use this as delete
 */
export function remove(location: string) {
	return (
		target: Object,
		_propertyKey: string,
		descriptor: TypedPropertyDescriptor<RequestHandler>,
	) => {
		reqs.push({
			location,
			val: descriptor.value,
			target: target.constructor.name,
			type: 'delete',
		});
	};
}

/**
 * sets the target function as a middleware
 * @param paths optional. The paths to apply to. If this is empty it applies to all paths
 */
export function use(...paths: string[]) {
	return (
		_target: any,
		_propertyKey: string,
		descriptor: TypedPropertyDescriptor<RequestHandler>,
	) => {
		if (paths[0]) {
			for (let i = 0; i < paths.length; i++) {
				const path = paths[i];
				_app.use(path, descriptor.value);
			}
		} else {
			_app.use(descriptor.value);
		}
	};
}

export function resolver(path: string) {
	return (constructor: Function) => {
		for (let i = 0; i < reqs.length; i++) {
			const req = reqs[i];
			if (req.target === constructor.name) {
				switch (req.type) {
					case 'get':
						_router.get(path + req.location, req.val);
						break;
					case 'post':
						_router.post(path + req.location, req.val);
						break;
					case 'put':
						_router.put(path + req.location, req.val);
						break;
					case 'delete':
						_router.delete(path + req.location, req.val);
						break;

					default:
						break;
				}
			}
		}
	};
}
