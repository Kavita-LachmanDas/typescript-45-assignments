//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array

function show_magicians1(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Creating an array of magician's names
const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Dynamo"];

// Calling the show_magicians() function with the array
show_magicians(magicianNames);