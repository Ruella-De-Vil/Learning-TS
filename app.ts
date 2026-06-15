/* Basic TypeScript types */
/* 1. Primitive types - most basic types in TypeScript: numbers, strings, booleans, null (used when you want to explicitly define something as empty or non-existent), undefined (used more as a placeholder that means a variable has been declared but has not yet been assigned a value (in other words not initialized), void and never) -- stick to lowercase when declaring */

let a = 1; //inferred as number - implicit typing, because 1 is a number ts deternmines 1 is a number and sets a to be of type number;

// a = 'hi'; (error, because a is of type number and we are trying to assign a string to it)

let x: number = 2; //explicit typing, we explicitly tell ts that x is of type number

let b: string; //explicit typing can be used when we dont assing a value to it, we explicitly tell ts that b is of type string in this instance (or whatever type we want in other instances)

b = "hello"; // we can assign a value to b later, but it has to be of type string

let c: boolean; //explicit typing, we explicitly tell ts that c is of type boolean

let d = null; // used when you want to explicitly define something as empty or non-existent, null implicitly gets the type ' any ' - which means it can be assigned any type at a later point (this can be used when we dont know what value is going to be stored in d) - this explicitly omits type checking

let e = undefined; //more used as a placeholder that means a variablw has been declared but has not yet been assigned a value, undefined implicitly gets the type ' any ' - which means it can be assigned any type at a later point (this can be used when we dont know what value is going to be stored in e) - this explicitly omits type

//

/* Arrays and Tuples*/

// Arrays - stick to keeping values of the same type in one array, but you can have arrays of different types as well

let arr1: number[] = [1, 2, 3]; // explicit typing, we explicitly tell ts that arr1 is an array of numbers

let arr2: string[] = ["a", "b", "c", ""]; // explicit typing, we explicitly tell ts that arr2 is an array of strings

let arr3: (number | string)[] = [1, "a", 2, "b"]; // explicit typing, we explicitly tell ts that arr3 is an array of numbers and strings (union type)

let arr4: string[][] = [["a", "b"], ["c", "d"]]; // this is a nested string array, an array of arrays of strings

let arr5 = [[1, 2], [3, 4, ""]]; // this is a nested number array, an array of arrays of numbers and strings as it is not explicitly typed, so ts infers the type as (string | number)[][]

/*best to explicitly type an empty array as it infers an empty array as 'any' type.*/

//Tuples - a fixed length array that has defined values for each position in the array.

const coord: [number, number] = [1, 2]; // explicit typing, we explicitly tell ts that coord is a tuple of two numbers

const coord2: [number, string] = [1, "a"]; // explicit typing, we explicitly tell ts that coord2 is a tuple of a number and a string, unlike an implicitly typed array which holds a number and a string (where a union type is detected).

const coord3: [number, number, string] = [1, 2, "a"]; // explicit typing, we explicitly tell ts that coord3 is a tuple of two numbers and a string

const coord4: [number, number][] = [[1, 2], [3, 4]]; // explicit typing, we explicitly tell ts that coord4 is an array of tuples of two numbers
