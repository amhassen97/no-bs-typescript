let username: string = "Abdullah";

let hasLoggedIn: boolean = true;

// hasLoggedIn +=  " Hassen";

console.log(hasLoggedIn);

let myNumber : number = 10;

let Regex: RegExp = /foo/;

const names: string[] = username.split(" ");
const myValues: Array<number> = [1,2,3];

interface Person {
    firstName: string;
    lastName: string;
} 

const myPerson: Person   = {
    firstName: "Abdullah",
    lastName: "Hassen",
}

const ids: Record<number, string> ={
    10: "a",
    20: "b",
}

/* Infer types where possible - leave types mainly to variable declarations  */

ids[30] = "c";

if(ids[30] === "D"){

}

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

[1, 2, 3].forEach((v) => console.log(v));

const out = [4, 5, 6].map((v) =>  `${v * 10}`)