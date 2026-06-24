/* Basic TypeScript types */
// 1. Primitive types - most basic types in TypeScript: numbers, bigint (a numeric data type in JavaScript to represent numbers larger than the standard integer type.), strings, booleans, null (used when you want to explicitly define something as empty or non-existent), undefined (used more as a placeholder that means a variable has been declared but has not yet been assigned a value (in other words not initialized), void and never) -- stick to lowercase when declaring 

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

//

/* Literals and Emums */

// Literals - a specific value that a variable can hold, we can use literal types to restrict a variable to hold only a specific value or set of values. Can be used when needing to be exact. Literal(s) can be used as a type.

let literal1: "hello" | "hi" | "hey"; // explicit typing, we explicitly tell ts that literal1 can only be one of the three string values. can be one value or multiple ( by using a union type).

let literal2: true; // explicit typing, we explicitly tell ts that literal2 can only be the boolean value true

//Enums - enables devs to establish a collection of named constants (enumerators), each linked with an integer value. We can have numeric enums and string enums. Instead of hardcoding strings or numbers, we can make our code a little easier to read and understand by encoding different values with variable names.

//This is a numeric enum:
enum Size {      // First letter is capitalised
  Small, // returns 0
  Medium, // returns 1
  Large, // returns 2
}                    //basic enum syntax.  These values are auto-incremented starting from 0. We can also assign specific values to the enum members, for example: 
/* 
enum Size {      
Small = 1,
Medium = 3,
Large = 5
}
 */

//accessing enum values:
Size.Small; // returns 0

//Reason for using this instead of a string literal type ("Small" | "Medium" | "Large") is that it is easier to read and understand, and it also provides a way to group related values together. It also provides a way to easily access the values of the enum, and it can be used in switch statements and other control flow structures. Enums can also be used to create a set of related constants that can be used throughout your codebase, which can help to improve code readability and maintainability.
// A string literal type has strings not put into context, whereas an enum has the strings put into context by grouping them together under a common name (Size in this case).

var size: Size = Size.Medium; // we can assign the enum value to a variable of type Size, this can also be written as 'var size: Size = 1'; but it is better to use the enum value for readability and maintainability.

//String enum:
enum Direction {
    Up = "UP",  // Up variable is assocciated with the string value "UP" ... note that the string value is in uppercase, this is a common convention for enum values, but it is not required. The variable name can be in any case, but the string value is usually in uppercase. They can even be the same.
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

//Enums are treated as datatypes, and can be used to create sets of constants for use with variables and properties.

var value: Direction; //only one of the four string values can be assigned to value, and it has to be of type Direction

value = Direction.Up; // we can assign the enum value to a variable of type Direction, this can also be written as 'value: Direction = "UP";' but it is better to use the enum value for readability and maintainability.

//

/* Any, Unknown and type casts */

// 'Any' type allows for flexible typing but sacrifices type safety as it lacks complile-time type checking


