console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = count; i < 100; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printOdds(window.prompt("enter starting number"));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName = "", age = 0) {
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    const broken = "Your age is invalid.";
    if (age >= 16) {
        return(aboveSixteen);
    }
    else if (age < 16 && age > 0) {
        return(belowSixteen);
    }
    else {
        return(broken);
    }
}
console.log(checkAge(window.prompt("enter your name"), window.prompt("enter your age")));

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function getCoordinates(x, y) {
    if (x == 0 && y == 0) {
        console.log("You are at the origin.");
    }
    else if (x == 0) {
        console.log("You are on the Y axis.");
    }
    else if (y == 0) {
        console.log("You are on the X axis.");
    }
    else if (x > 0 && y > 0) {
        console.log("You are in Quadrant 1.");
    }
    else if (x < 0 && y > 0) {
        console.log("You are in Quadrant 2.");
    }
    else if (x < 0 && y < 0) {
        console.log("You are in Quadrant 3.");
    }
    else if (x > 0 && y < 0) {
        console.log("You are in Quadrant 4.");
    }
    else {
        console.log("You are nowhere.");
    }
}
console.log(getCoordinates(prompt("What is your X coordinate?"), prompt("What is your Y coordinate?")));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangleType (a, b, c) {
    if (a + b < c || b + c < a || a + c < b) {
        console.log("Invalid triangle")
    }
    else if (a == b && b == c) {
        console.log("Equilateral triangle")
    }
    else if (a == b || b == c || c == a) {
        console.log("Isosceles triangle")
    }
    else {
        console.log("Scalene")  
    }      
}
console.log(triangleType(prompt("Enter a"), prompt("Enter b"), prompt("Enter c")));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataPlan (planLimit, curDay, curUsage) {
    const daysLeft = 30 - curDay;
    const dataRemaining = planLimit - curAverUsage;
    const idealUsage = planLimit / 3;
    const curAverUsage = curUsage / curDay;
    const projectedUsage = curAverUsage * 30;
    const exceededUsage = projectedUsage - planLimit;
    const newIdealUsage = dataRemaining / daysLeft

    console.log(`${curDay} days used, ${daysLeft} days remaining\n Average daily use: ${idealUsage} GB/day\n`);
    console.log(`You are EXCEEDING your daily average by (${curAverUsage} GB/day), continuing this high usage, you'll exceed your plan by ${exceededUsage} GB. \nTo stay below your data plan, use no more than ${newIdealUsage} GB/day.`);

}
dataPlan(100, 15, 56);

//function data(planLimit, day, usage) {
    //console.log(`${day} days used, ${30 - day} days remaining.`);
    //console.log(`Average daily use: ${usage / day} GB/day`);
    //if (usage > planLimit) {
        //console.log(`You are EXCEEDING your average daily use (${planLimit} GB/day),`);
        //console.log(`continuing this high usage, you'll exceed your data plan by ${(usage / day) * (30 - day)}.`);
        //console.log(`To stay below your data plan, use no more than ${planLimit / 30} GB/day.`);
    //}
//}
//console.log(data(prompt("enter plan limit"), prompt("enter your current day"), prompt("enter your GB usage")));