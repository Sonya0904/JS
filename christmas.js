// let students=[
//     {name:"Anna", age:15},
//     {name:"Igor",age:16}
// ];
// console.log(students[0].name);
// console.log(students[1].age);

// let numbers = [1,2,3];
// numbers.push(4);

// let fruits = [1,2,3];
// let last = fruits.pop();
// console.log(fruits);
// console.log(last);//показывает последний удаленный элемент

// let number=[2,3];
// number.unshift(1);

// console.log(number);
// let numbers_=[1,2,3];
// let first = numbers.shift();
// console.log(numbers);
// console.log(first);

// let items=[1,2,3];
// console.log(items.length);

// let colors=["red","green","blue"];

// console.log(colors.indexOf("green")); // 1

// console.log(colors.includes("red")); //true

// let nums=[1,2,3,4];
// let part = nums.slice(1,3);

// console.log(part);
// console.log(nums);

// let removed = nums.splice(1,2);

// console.log(nums);
// console.log(removed);

// let words = ["Hello","world"];
// let message=words.join(" ");

// console.log(message);

// nums.reverse();

// console.log(nums);

// let names = ["Ira","Anna","Boris"];
// names.sort();
// console.log(names);

// let num=[10,2,14];
// num.sort((a,b)=> a-b)//от меньшего к большему
// console.log(num);

// let numm=[1,2,3];
// let newNummm = numm.map(n=>n+1);

// console.log(newNummm);

// let nums1 =[1,2,3,4,5,6,7,8,9];
// let even = nums1.filter(n=>n%2===0);

// console.log(even);

// let nums2 =[10,40,5,11,6,77];
// let even1 = nums2.filter(n=>n>10);

// console.log(even1);

// let box=[
//     {weight: 2, lable:"Not heavy"},
//     {weight: 5, lable:"Medium"},
//     {weight: 12, lable:"Heavy"},
//     {weight: 15, lable:"Very heavy"}
// ];

// let heavyBox = box.find(boxes=>boxes.weight>10);


// let innerPlanets = ["Merkuriu","Venera","Earth"];
// let otherPlanets = ["Merkuriu","Upeter","Earth"];

// let allPlanets = innerPlanets.concat(otherPlanets);
// console.log(allPlanets);



let toys = [
{
    name: "big boll with flower",
    count: 2,
    year: 1960,
    shape: "wap",
    color: "blue", size: "big",
    favorite: false
},

{
    name:"green boll with flower paint",
    count: 5,
    year: 2000,
    shape: "wap",
    color: "green" , size: "big",
    favorite: false
},
{
    name: "red boll",
    count: 3,
    year: 1990,
    shape: "wap",
    color: "red", size: "big",
    favorite: false
},

{
    name:"big boll with flower",
    count:2,
    year: 1960,
    shape:"boll",
    color:"yellow",
    size:"big",
    favorite: false
},

];

toys.forEach(toy=>{
    console.log(
        toy.name + " - " + toy.color + ", forma: " + 
        toy.shape + ", kolich: " + toy.count
    );
});

let updatedToys = toys.map(toy=>{
    return{
        ...toy,
        count:toy.count+1
    };
});

console.log(updatedToys);

function User(name, age){
    this.name = name;
    this.age = age;
}

let person = {
    name:"Anna",
    age:30,
    isAdmin:false,
    hobbies: ["sport", "photo"],
    greet(){console.log("Hi!");}
};

console.log(User.name);

console.log(User["age"])

let key="name";
console.log(User[key]);
console.log(User.key);

for(let key in User){
    console.log(key,User[key]);
}

let toyStore={
    list:["redBoll","blueBoll","star"],

    getToy(index){
        return this.list[index];
    }
};

let tree = {
    type: "green", 
    toys: [],
    changeTree (newType) {
      this. type = newType;
},
 addToy(toy) {
  this.toys.push(toy);
},

clearToys() {
  this.toys = [];
 }
};

  
























