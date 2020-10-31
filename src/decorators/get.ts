import { router } from '..';

export function get(location: string) {
	return (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
		router.get(location, descriptor.value);
	};
}
