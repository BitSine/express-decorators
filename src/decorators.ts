import { _app, _router } from '.';

export function get(location: string) {
	return (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
		_router.get(location, descriptor.value);
	};
}

export function post(location: string) {
	return (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
		_router.post(location, descriptor.value);
	};
}

export function put(location: string) {
	return (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
		_router.put(location, descriptor.value);
	};
}

/**
 * use this as delete
 */
export function remove(location: string) {
	return (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
		_router.delete(location, descriptor.value);
	};
}

/**
 * sets the target function as a middleware
 * @param paths optional. The paths to apply to. If this is empty it applies to all paths
 */
export function use(...paths: string[]) {
	return (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
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
