//Checking Usernames: Do the following to create a program that simulates
// how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. 
//Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// List of current users
let current_users3: string[] = ["alice", "bob", "charlie", "david", "emma"];

// List of new users
let new_users33: string[] = ["Alice", "john", "Ella", "charlie", "mike"];

// Convert all current usernames to lowercase for case-insensitive comparison
let current_users_lower: string[] = current_users3.map(username => username.toLowerCase());

// Loop through new_users to check availability of usernames
new_users33.forEach(new_user33 => {
    // Convert the new username to lowercase for case-insensitive comparison
    let new_user_lower: string = new_user33.toLowerCase();

    // Check if the new username is already in use
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, ${new_user33} is already taken. Please enter a new username.`);
    } else {
        console.log(`${new_user33} is available.`);
    }
});
