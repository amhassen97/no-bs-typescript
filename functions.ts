function addNumbers(a:number, b:number): number {
    return a + b ;
}


// module.exports disliked in ts
export default addNumbers;

export const addStrings = (str1: string, str2: string = ""): string =>  `${str1} ${str2}`;

// Union types
export const format = (title: string, param: string|number): string => `${title} ${param}`;

export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param));
    
}

// return promise
// change target to esnext to recognize promises in tsconfig

export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

// multiple arguments with spread/rest
function introduce (salutation: string, ...names:string[] ):string {
    return `${salutation} ${names.join( ' ')}`;
}

// types are enforced only at compile time not run time in TS
export function getName(user: {first: string; last: string}):string {
    // return `${user?.first} ${user?.last}` //Optional chaining operator - returns undefined if value is not defined instead of error
    return `${user?.first ?? 'first'} ${user?.last ?? 'last'}` //null coalescing operator- returns default with a check if it is not there

}
