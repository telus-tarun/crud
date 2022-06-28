
// let obj = {
//     id:1,
//     name:"Tarun"
// }

// let obj2 = Object.assign({},obj);
// console.log(obj2);


// let b = num(2)




// function num(x){
//     return x;
// }
// console.log(b);


// const myPromise = () => Promise.resolve('I have Resolved');

// function firstFunction() {
//   myPromise().then((res) => console.log(res));
//   console.log('second');
// }
// firstFunction()



// function add(x){

//     function sum(y){
//         return x+y
//     }
//     return sum
// }
// let num = add(2)
// console.log(num(2));




// map
// let a = [1,2,3,4,5,6,7]

// let b = a.map((item)=>{
//     return item*2
// })
// console.log(b);

// // reduce
// let c = a.reduce((item, val)=>{
//     return item+val
// }, 0)
// console.log(c)

// // filter
// let d = a.filter((item)=>{
//     return item%2 == 0
// })
// console.log(d)

let a =['abriti@gmail.com','harish@gmail.com','tarun@gnail.com']

let b = a.map((item)=>{
    let length = item.indexOf('@')
    let item1 = item.slice(0,length);
    return item1;
})
console.log(b)


// fetch method and syntax
// DOM and BOM
// Promises
// Hoisting

// document.getElementsByTagName('p').style.color = 'blue';

const options =  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;'
    },
    body: JSON.stringify({
      'productName': 'XYZ',
      'price': 200
    })
}
