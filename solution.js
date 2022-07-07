// 1
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondCity = euroCities[1];
console.log(`1. ${euroCities}, ${secondCity}`);

// 2
euroCities.splice(0, 1, "Berlin");
console.log(`2. ${euroCities}`);

// 3
console.log(`3. ${euroCities.length}`);

// 4
euroCities.pop();
console.log(`4. ${euroCities}`);

// 5
euroCities.push("Budapest");
console.log(`5. ${euroCities}`);

// 6
const asianCities = ["city1", "city2", "city3", "city4", "city5"];
console.log(`6. ${asianCities}`);

// 7
const worldCities = euroCities.concat(asianCities);
console.log(`7. ${worldCities}`);

// 8
worldCities.reverse();
console.log(`8. ${worldCities}`);

// 9
euroCities.splice(2, 1);
console.log(`9. ${euroCities}`);

// 10
const anotherVariable = asianCities.slice(1, 4);
console.log(`10. ${anotherVariable}`);

// 11
worldCities.splice(2, 1, "Toronto");
console.log(`11. ${worldCities}`);

// 12
worldCities.splice(1, 0, "Washington");
console.log(`11. ${worldCities}`);

// 13
const str = worldCities.join("");
console.log(`12. ${str}`);

// Bonus
const strOne = "Hello World";
const strOneArr = strOne.split("");
const reverseStrOne = strOneArr.reverse();
console.log(`Bonus. ${reverseStrOne.join("")}`);

// Extra Practice
// 1
const myFriendsArr = ["John", "Peter", "Mario"];
console.log(`EP1. ${myFriendsArr}`);

// 2
const myParentsNames = ["Dad", "Mom"];
console.log(`EP2. ${myParentsNames}`);

// 3
const concatedArr = myFriendsArr.concat(myParentsNames);
console.log(`EP3. ${concatedArr}`);

// 4
const myPetsNames = ["Lisa", "Tuti", "Jr", "Duda"];
const concatedArrTwo = concatedArr.concat(myPetsNames);
console.log(`EP4. ${concatedArrTwo}`);

// 5
console.log(`EP5. ${concatedArrTwo.reverse()}`);

// 6
const findMom = concatedArrTwo.indexOf("Mom");
console.log(`EP6. ${findMom}`);

// 7
concatedArrTwo[4] = "Super Mom";
console.log(`EP7. ${concatedArrTwo}`);
