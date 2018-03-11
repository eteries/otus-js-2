const promiseReduce = (arr, fn, initial) => {
  return arr.reduce( (store, promise, i) => {
    return store
      .then(a => promise(a)
        .then(b => fn(a,b))
        .catch(() => {throw 'Rejected: ' + arr[i]}));
  }, Promise.resolve(initial));
};

/*
const promise0 = () => Promise.resolve(0),
      promise1 = () => Promise.resolve(1),
      promise2 = () => Promise.resolve(2);

const sumFn = (a, b) => a + b;

promiseReduce([promise0, promise1, promise2], sumFn, 0).then(res => console.log(res), er => console.log(er)); 
*/
