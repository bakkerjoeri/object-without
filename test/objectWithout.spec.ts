import objectWithout from './../src/objectWithout';

describe('objectWithout', () => {
	test('returns an object excluding given properties', () => {
		const entity = {
			name: 'Jackie',
			sprite: 'hero',
			health: 3,
		};

		const firstTestEntity = objectWithout(entity, 'health');
		expect(firstTestEntity).toEqual({ name: 'Jackie', sprite: 'hero' });

		const secondTestEntity = objectWithout(entity, 'name', 'sprite');
		expect(secondTestEntity).toEqual({ health: 3 });
	});

	test('returns a new object', () => {
		const entity = {
			name: 'Jackie',
			sprite: 'hero',
		};

		const newEntity = objectWithout(entity, 'sprite');
		expect(entity === newEntity).toBe(false);
	});

	test('doesn\'t change the initial array', () => {
		const entity = {
			name: 'Jackie',
			sprite: 'hero',
		};

		const newEntity = objectWithout(entity, 'sprite');
		expect(entity).toEqual({ name: 'Jackie', sprite: 'hero' });
	});
});
