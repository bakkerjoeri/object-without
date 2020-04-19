export default function objectWithout(object, ...keysToRemove) {
    const entries = Object.entries(object);
    return entries.reduce((newObject, [currentKey, currentValue]) => {
        if (keysToRemove.includes(currentKey)) {
            return newObject;
        }
        return Object.assign(Object.assign({}, newObject), { [currentKey]: currentValue });
    }, {});
}
