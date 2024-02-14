//Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians by
//adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.


function show_magicians34(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great1(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Creating an array of magician's names
let magicianNames1: string[] = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Dynamo"];

// Adding "the Great" to each magician's name
 let magicianNames2 = make_great(magicianNames);

// Calling the show_magicians() function to see the modified list
show_magicians(magicianNames);