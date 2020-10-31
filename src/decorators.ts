import { app, router } from '.';

export function get(location: string) {
	return (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
		router.get(location, descriptor.value);
	};
}

export function post(location: string) {
	return (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
		router.post(location, descriptor.value);
	};
}

export function put(location: string) {
	return (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
		router.put(location, descriptor.value);
	};
}

export function remove(location: string) {
	return (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
		router.delete(location, descriptor.value);
	};
}

export function use() {
	return (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
		app.use(descriptor.value);
	};
}
