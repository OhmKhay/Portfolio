// function doFactorial(n) {
//     let answer = 1;
//     if (n === 0 || n === 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = doFactorial(n)
//   console.log("Answer: " + n + " is " + answer);


// const CallPro = async () => {
//    const data = await Promise.resolve(42)
// 	.then(value => value - 42)
// 	.then(value => value / value)
// 	.catch(() => -21)
// 	.then(value => value && value.toString())
// 	.catch(() => 21)
// 	.then(value => value.charCodeAt(0))
// 	.catch(() => 42)
// 	.then(value => value * 2)
// 	.finally(value => value + 5);
//     console.log("here is data:", data)
// }
// CallPro();

// function getFirstUniqueFromArray(arr){
//     if(arr.length < 1) {
//         return null;
//     }
//     return arr.filter(function(value){
//       return arr.indexOf(value) === arr.lastIndexOf(value);
//     })[0] || -1;
//   }
  
//   var Array =  [22, 25, 3, 3, 1, 2, 0, 0,120,22,25,1,2];
//   const answer = getFirstUniqueFromArray(Array);
//   console.log(answer); // 120

// var currentTimeInSeconds=Math.floor(Date.now()/1000); //unix timestamp in seconds
// var currentTimeInMilliseconds=Date.now(); // unix timestamp in milliseconds

// console.log("here si currentTime:", currentTimeInSeconds)
const fetch = require("node-fetch");
async function getData(token, url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
 const CallData = async () => {
    const data = await getData("tokenfeafefaefpefae", 'https://example.com/answer', { answer: 666 })
    console.log(data); // JSON data 
 }
 CallData();