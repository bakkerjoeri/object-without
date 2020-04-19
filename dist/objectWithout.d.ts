export default function objectWithout<ObjectType extends object, KeysToRemove extends [...(keyof ObjectType)[]]>(object: ObjectType, ...keysToRemove: KeysToRemove): {
    [RemainingKey in Exclude<keyof ObjectType, KeysToRemove[number]>]: ObjectType[RemainingKey];
};
