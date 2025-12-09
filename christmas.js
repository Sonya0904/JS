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
    favorite: false, 
    image: "./images/big boll with flower.png" 
}, 
 
{ 
    name: "red boll", 
    count: 3, 
    year: 1990, 
    shape: "wap", 
    color: "red", size: "big", 
    favorite: false, 
    image: "./images/red boll.png" 
}, 
 
{ 
    name:"big boll with flower", 
    count:2, 
    year: 1995, 
    shape:"boll", 
    color:"green", 
    size:"big", 
    favorite: false, 
    image: "./images/big boll with flower.png" 
}, 
 
{ 
    name:"red-white boll", 
    count:4, 
    year: 1971, 
    shape:"boll", 
    color:"white", 
    size:"big", 
    favorite: false, 
    image: "./images/red-white boll.png" 
}, 
 
{ 
    name:"boll with river", 
    count:3, 
    year: 2000, 
    shape:"boll", 
    color:"blue", 
    size:"big", 
    favorite: false, 
    image: "./images/boll with river.png" 
}, 
 
{ 
    name:"boll with forest", 
    count:2, 
    year: 2004, 
    shape:"boll", 
    color:"blue", 
    size:"big", 
    favorite: false, 
    image: "./images/boll with forest.png" 
}, 
{ 
    name:"white ball", 
    count:5, 
    year: 1991, 
    shape:"boll", 
    color:"white", 
    size:"big", 
    favorite: true, 
    image: "./images/white ball.png" 
}, 
 
{ 
    name:"white cone", 
    count:4, 
    year: 1900, 
    shape:"boll", 
    color:"yellow", 
    size:"big", 
    favorite: false, 
    image: "./images/white cone.png" 
}, 
 
{ 
    name:"meringue ball", 
    count:7, 
    year: 1960, 
    shape:"boll", 
    color:"meringue", 
    size:"big", 
    favorite: true, 
    image: "./images/meringue ball.png" 
}, 
 
{ 
    name:"transparent", 
    count:3, 
    year: 1935, 
    shape:"boll", 
    color:"transparent", 
    size:"big", 
    favorite: false, 
    image: "./images/transparent.png" 
}, 
 
{ 
    name:"just red", 
    count:5, 
    year: 1960, 
    shape:"boll", 
    color:"red", 
    size:"big", 
    favorite: true, 
    image: "./images/just red.png" 
}, 
 
{ 
    name:"red with glitter", 
    count:10, 
    year: 1958, 
    shape:"boll", 
    color:"red", 
    size:"big", 
    favorite: true, 
    image: "./images/red with glitter.png" 
}, 
 
{ 
    name:"grape", 
    count:5, 
    year: 1940, 
    shape:"boll", 
    color:"red", 
    size:"big", 
    favorite: false, 
    image: "./images/grape.png" 
}, 
 
{ 
    name:"bell_", 
    count:3, 
    year: 1960, 
    shape:"boll", 
    color:"white", 
    size:"small", 
    favorite: true, 
    image: "./images/bell_.png" 
}, 
 
 
];

let currentTree = {
    type: "",
    garland: "",
    toys: [],
  
    setTree(newType) {
      this.type = newType;
    },
  
    setGarland(newGarland) {
      this.garland = newGarland;
    },

    addToy(toyObj) {
      this.toys.push(toyObj);
    },
  
    showInfo() {
      console.log("Ёлка:", this.type);
      console.log("Гирлянда:", this.garland);
      console.log("Игрушки:", this.toys);
    }
};

// const title = document.querySelector("h1");

// const toy = document.querySelector(".toy");

const toysGrid = document.querySelector(".toys-grid");

toys = toys.map((toy, index) => {
    return {
        ...toy,
        id: index + 1,
    };
});
console.log('updated toys:', toys);

let carenTree = {
    
}

toys.forEach((toy,index)=>{

    const toyBox = document.createElement("div");

    const img = document.createElement("img");
    img.src = toy.image;
    img.classList.add("toy");
    img.draggable = true;
    img.dataset.index = index;

    
    const countBox = document.createElement("div");
    countBox.textContent = toy.count;
    countBox.style.color = "white";
    countBox.style.textAlign = "center";
    countBox.style.fontSize = "14px";


    toyBox.appendChild(img);
    toyBox.appendChild(countBox);


    toysGrid.appendChild(toyBox);

    img.addEventListener("dragstart", e => {
        if (toy.count === 0){
            e.preventDefault();
            return;
        }
        e.dataTransfer.setData("toy", index);
    });
});


// window.addEventListener("scroll", () =>()){
//     console.log("Kryte!");
// }

// const treeArea = document.querySelector(".tree-area");

// treeArea.addEventListener("dragover", e => e.preventDefault());

// treeArea.addEventListener("drop", e => {
//   e.preventDefault();

//   const rect = treeArea.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   if (e.dataTransfer.getData("toy") !== "") {
//     const toyIndex = e.dataTransfer.getData("toy");
//     const toy = toys[toyIndex];
  
//     if (toy.count > 0) {
//       toy.count -= 1;
  
//       const xPos = x - 40;
//       const yPos = y - 40;
  
//       const img = document.createElement("img");
//       img.src = toy.image;
//       img.classList.add("toy-on-tree");
  
//       img.style.left = xPos + "px";
//       img.style.top = yPos + "px";
  
//       treeArea.appendChild(img);
  
//       currentTree.addToy(toy, xPos, yPos);
//         toysGrid.children[toyIndex].children[1].textContent = toy.count;
  
//       img.addEventListener("click", () => {
//         img.remove();
//         toy.count += 1;
//         toysGrid.children[toyIndex].children[1].textContent = toy.count;
  
//         currentTree.toys = currentTree.toys.filter(t => t.id !== toy.id);
//       });

//  }
//   }
  
//   if (e.dataTransfer.getData("garland") !== "") {
//     const gIndex = e.dataTransfer.getData("garland");
//     const garland = garlands[gIndex];
  
//     currentTree.setGarland(garland.type);
  
//     const img = document.createElement("img");
//     img.src = garland.image;
//     img.classList.add("garland-on-tree");
  
//     img.style.left = (x - 140) + "px";
//     img.style.top = (y - 20) + "px";
  
//     img.style.animationDelay = (Math.random() * 1.6) + "s";
  
//     treeArea.appendChild(img);
//   }
  
// });






const treeArea = document.querySelector(".tree-area");
let placedCounter = 0;

treeArea.addEventListener("dragover", e => e.preventDefault());

treeArea.addEventListener("drop", e => {
  e.preventDefault();

  const rect = treeArea.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (e.dataTransfer.getData("toy") !== "") {
    const toyIndex = e.dataTransfer.getData("toy");
    const toy = toys[toyIndex];

    if (toy.count > 0) {
      toy.count--;

      const xPos = x - 40;
      const yPos = y - 40;

      placedCounter++;
      const placedId = placedCounter;

      const img = document.createElement("img");
      img.src = toy.image;
      img.classList.add("toy-on-tree");

      img.style.left = xPos + "px";
      img.style.top = yPos + "px";

      img.dataset.placedId = placedId;

      treeArea.appendChild(img);

      currentTree.addToy({
        // id: toy.id,
        // placedId: placedId,
        x: xPos,
        y: yPos,
        image: toy.image
      });
      console.log('currentTree.toys:', currentTree.toys);
      

      toysGrid.children[toyIndex].children[1].textContent = toy.count;

      img.addEventListener("click", () => {
        console.log("Клик по игрушке", img.dataset.placedId);

        img.remove();

        toy.count++;
        toysGrid.children[toyIndex].children[1].textContent = toy.count;

        currentTree.toys = currentTree.toys.filter(
          t => t.placedId != img.dataset.placedId // удалить игрушку
        );
      });
    }
  }

  if (e.dataTransfer.getData("garland") !== "") {
    const gIndex = e.dataTransfer.getData("garland");
    const garland = garlands[gIndex];

    currentTree.setGarland(garland.type);

    const img = document.createElement("img");
    img.src = garland.image;
    img.classList.add("garland-on-tree");

    img.style.left = (x - 140) + "px";
    img.style.top = (y - 20) + "px";

    img.style.animationDelay = (Math.random() * 1.6) + "s";

    treeArea.appendChild(img);
    
    //при клике на гирлянду удаляем ее из DOM
     img.addEventListener("click", () => {
      img.remove();
      // удаляем гирлянду из объекта текущей ёлки
      currentTree.setGarland("");
    });
  }
});














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

// let tree = {
//     type: "green", 
//     toys: [],
//     changeTree (newType) {
//       this. type = newType;
// },
//  addToy(toy) {
//   this.toys.push(toy);
// },

// clearToys() {
//   this.toys = [];
//  }
// };

// let tree_ = {
//     type:"snow",
//     height: "big",
//     toysCount:12
// };

// Object.values(tree_);
























