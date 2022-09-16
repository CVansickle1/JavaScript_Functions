console.log("Hello World!\n==========\n");



// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    if(count <= 1){
        console.log("That number is invaild")
    }
    for(let i = 0; i <= count; i++ ){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    if(userName == null || userName == undefined || age == null || age == undefined){
        console.log("invaild input")
    }
    if(age >= 16){
        console.log(`"Congrats ${userName}, you can drive!"`)
    }
    console.log(`"Sorry ${userName}, but you need to wait until you're 16."`)
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function checkCoor(x, y){
 
    switch(true){

        case (x > 0 && y > 0):
            console.log("Quadrant 1")
            break;
        case x == 0 && (y > 0 || y < 0):
            console.log("x axis")
            break;
        case (x > 0 || x < 0) && y == 0:
            console.log("y axis")
            break;
        case x > 0 && y < 0:
            console.log("Quadrant 2")
            break;
        case x < 0 && y < 0:
            console.log("Quadrant 3")
            break;
        case x < 0 && y > 0:
            console.log("Quadrant 4")
            break;
        case x == 0 && y == 0:
            console.log("origin")
            break;
        default:
            console.log("invalid point")
    }

}

checkCoor(0,0)
checkCoor(1, 5)
checkCoor(-5, 5)
checkCoor(5, -5)
checkCoor(0, 4)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function checkTriangle(x, y, z){

    if(x + y <= z){
        console.log("Invalid Triangle")
    }
    else if(x == y == z){
        console.log("Equilateral Triangle")
    }
    else if (x == y || y == z || x == z){
        console.log("Isoceles Triangle")
    }
    else if (x != y && y != z){
        console.log("Scalene Triangle")
    }
}

function dataPlan(planLimit, day, usage){
    let expectedAvg = planLimit / 30;
    let actualAvg = usage / day;
    let daysLeftInPlan = 30 - day;
    let potentialUsage = planLimit - (actualAvg * 30);
    let newUsage = (planLimit - usage) / daysLeftInPlan

    console.log(`"${day} days used, ${daysLeftInPlan}"`)
    console.log(`Average daily use: ${actualAvg}`)
    if(potentialUsage < 0 ){
      console.log(`You are EXCEEDING your average daily use (${actualAvg} GB/day),
      continuing this high usage, you'll exceed your data plan by
      ${Math.abs(potentialUsage)} GB. 
      To stay below your data plan, use no more than ${newUsage} GB/day.`) 
    }
    else if(potentialUsage > 0){
        console.log(`You are UNDER your average daily use (${actualAvg} GB/day),
        continuing this usage, you will have 
        ${Math.abs(potentialUsage)} GB left in your data plan.
        To use all of your data, use no more than ${newUsage} GB/day.`)
    }

}

dataPlan(100, 15, 56)
dataPlan(500, 15, 56)