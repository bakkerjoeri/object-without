# object-without

Omit one or more properties from an object.

## Installation

```sh
npm install @bakkerjoeri/object-without
```

## Usage

```js
import objectWithout from '@bakkerjoeri/object-without';

const users = {
	1: 'kate',
	2: 'derrek',
};

const kickDerrek = objectWithout(users, 2);
```

The function returns a new object without mutating the initial object.

