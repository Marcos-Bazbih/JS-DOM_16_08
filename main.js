// ***************************___1___******************************
let buttonOne = document.getElementById("buttonOne");
buttonOne.addEventListener("click", function(){
    buttonOne.innerText = "לחצו עליי";
})
// ***************************___1___******************************



// ***************************___2___******************************
let ButtonOne = document.getElementById("ButtonOne");
ButtonOne.addEventListener("click", function(){
    alert(ButtonOne.innerText);
})


let ButtonTwo = document.getElementById("ButtonTwo");
ButtonTwo.addEventListener("click", function(){
    alert(ButtonTwo.innerText);
})


let ButtonThree = document.getElementById("ButtonThree");
ButtonThree.addEventListener("click", function(){
    alert(ButtonThree.innerText);
})


let ButtonFour = document.getElementById("ButtonFour");

ButtonFour.addEventListener("click", function(){
    alert(ButtonFour.innerText);
})
// ***************************___2___******************************



// ***************************___3___******************************
let lists = document.getElementsByClassName("lists");

lists[0].addEventListener("click", function(){
    console.log(lists[0].innerText);
})
lists[1].addEventListener("click", function(){
    console.log(lists[1].innerText);
})
lists[2].addEventListener("click", function(){
    console.log(lists[2].innerText);
})
lists[3].addEventListener("click", function(){
    console.log(lists[3].innerText);
})
lists[4].addEventListener("click", function(){
    console.log(lists[4].innerText);
})
// ***************************___3___******************************



// ***************************___4___******************************
let num =0;
let theButton = document.getElementById("theButton");
theButton.addEventListener("click", function(){
    num++;
    theP.innerText = num;
})
// ***************************___4___******************************



// ***************************___5___******************************
let theSecondButton = document.getElementById("theSecondButton");
theSecondButton.addEventListener("click", function(){
    num -=2;
    theP.innerText = num;
})
// ***************************___5___******************************



// ***************************___7___******************************
const array = [
    {
        name: "milk",
        price: 20,
        description: "milk is very good"
    },
    {
        name: "water",
        price: 10,
        description: "water is very good"
    },
    {
        name: "sugar",
        price: 15,
        description: "sugar is not good"
    }
]


let max = array[0].price;
let maxName = array[0].name;

for(let i=1; i<array.length; i++){
    if(array[i].price > max){
        max = array[i].price;
        maxName = array[i].name;
    }
}
console.log(`${maxName} is ${max}`);


let min = array[0].price;
let minName = array[0].name;

for(let i=1; i<array.length; i++){
    if(array[i].price < min){
        min = array[i].price;
        minName = array[i].name;
    }
}
console.log(`${minName} is ${min}`);


for(let i=0; i<array.length;i++){
    array[i].price -= (array[i].price/100*30)
}
console.log(array);
// ***************************___7___******************************