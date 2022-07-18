let myArr = []

function insert(element) {

    //If not number -> return;
    if(!Number.isInteger(element)) {
        console.log(`${element} is not integer`)
    }

    console.log(`------------`)
    console.log(`Start add ${element}`);
    console.log(`------------`)

    // If array empty -> push to array
    if(!myArr.length) {
        myArr.push(element);
        return;
    }

    // If element is biggest, add to first position
    if(element >= myArr[0]) {
        myArr.splice(0,0, element);
        console.log(`${element} is add to 1st position of array`)
        return;
    }

    // Push to middle of array by compare each element
    for (let i = 0; i < myArr.length; i++) {
        if(element > myArr[i]) {
            myArr.splice(i,0, element);
            console.log(`${element} is add to ${i} position of array`)
            return;
        }
    }

    // Push to last position of array
    myArr.push(element);
}

insert(4);
insert(1)
insert(8);
insert(7);
insert(3);

insert(6);
insert(10)
insert(220);
insert(33);
insert(53);
insert(20);


console.log(`Result: ${myArr}`);
