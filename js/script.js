// ## Array Cardio Day 2

const people = [
    {name: 'Wes', year: 1988},
    {name: 'Kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015}
];

const comments = [
    {text: 'Love this!', id: 523423},
    {text: 'Super good', id: 823423},
    {text: 'You are the best', id: 2039842},
    {text: 'Ramen is my fav food ever', id: 123523},
    {text: 'Nice Nice Nice!', id: 542328}
];

console.log("========== People Table ==========")
console.table(people);
console.log(`\n`)

console.log("========== Comment Table ==========")
console.table(comments);
console.log(`\n`)

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
console.log("========== Array some() ==========")
console.log("===== Is at least one person 19 or older ? =====");
const isAdult = people.some(person => {
    const currentYear = new Date().getFullYear();
    return currentYear - person.year >= 19;
});
console.log(isAdult);
console.log(`\n`)

// Array.prototype.every() // is everyone 19 or older?
console.log("========== Array every() ==========")
console.log("===== is everyone 19 or older ? =====");
const allAdult = people.every(person => {
    const currentYear = new Date().getFullYear();
    return currentYear - person.year >= 19;
});
console.log(allAdult);
console.log(`\n`)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
console.log("========== Array find() ==========")
console.log("===== find the comment with the ID of 823423 =====");
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);
console.log(`\n`)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
console.log("========== Array findIndex() ==========")
console.log("===== delete the comment with the ID of 823423 =====");
const commentIndex = comments.findIndex(comment => comment.id === 823423);
console.log(`comment index is ${commentIndex}`);
console.log(`\n`)
console.log("New Comment Array after Deleted is");
comments.splice(commentIndex, 1);
console.table(comments);