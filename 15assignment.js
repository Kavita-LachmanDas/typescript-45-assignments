//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14.
// Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name
// of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.
 
//initial guest list//
var invite = ["Saima", "Shahbaz", "Naeem",]
console.log(invite[0] + ": i would like to invite you to join me at dinner")
console.log(invite[1] + ": i would like to invite you to join me at dinner")
console.log(invite[2] + ": i would like to invite you to join me at dinner")
console.log("/n Naeem will not come because of some urjent work /n" )

//updated guest list//
var invite= ["Saima", "Shahbaz", "Naeem",] 

invite.pop()
console.log(invite)
invite.push("Wardha","Maryam")
console.log(invite)
console.log(invite[0] + ": i would like to invite you to join me at dinner")
console.log(invite[1] + ": i would like to invite you to join me at dinner")
console.log(invite[2] + ": i would like to invite you to join me at dinner")
console.log(invite[3] + ": i would like to invite you to join me at dinner")
