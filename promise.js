const myPromise = () => Promise.resolve('I have Resolved');

function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log('second');
}
firstFunction()
