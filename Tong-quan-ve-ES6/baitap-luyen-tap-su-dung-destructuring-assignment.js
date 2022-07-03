// let profile = {
//     fname: 'Code',
//     lname: 'Gym',
//     bday: new Date('1979-01-02')
// }
// // let fname = profile.fname;
// // let lname = profile.lname;
// // console.log(fname, lname);
//
// const {fname, lname, bday} = profile;
// console.log(fname, lname, bday);

function detectCollision(objects, point) {
    for (let i = 0; i < objects.length; i++) {
        let object = objects[i]
        if (point.x >= object.x && point.x <= object.x + object.width &&
            point.y >= object.y && point.y <= object.y + object.height)
            return object
    }
}
const myObjects = [
    {x:  10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x:   0, y:  0, width: 10, height:  5}
]
console.log(detectCollision(myObjects, {x: 4, y: 2}))

const rectangle = myObjects.find(obj => obj.width !== obj.height)
console.log(rectangle)