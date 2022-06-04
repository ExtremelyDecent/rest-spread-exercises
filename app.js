
const filterOutOdds = (...arg) =>arg.filter(n=>n%2=== 0);

//const findMin = (...arg) => arg.reduce((cur,next)=> (next > cur ? cur : next ));
const findMin = (...arg) => Math.min(...arg);

const mergeObjects = (obj, obj2) => ({...obj, ...obj2});
const doubleAndReturnArgs = (arr, ...arg) => ([...arr,...arg.map(n=>n*2)]);

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const randomItem = Math.floor(Math.random()*items.length);
    //console.log(randomItem);
    return [...items.slice(0,randomItem), ...items.slice(randomItem + 1) ];
}
    

/** Return a new array with every item in array1 and array2. */


const extend = (array1, array2) => {
    return [...array1, ...array2];
} 

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) =>{
    let newObject = {...obj};
    newObject[key] = val;
    return newObject;   
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObject = {...obj};
    delete newObject[key];
    return newObject;  
}

/** Combine two objects and return a new object. */


const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}
 

/** Return a new object with a modified key and value. */

const update = (obj, key, val) =>{
    let newObject = {...obj};
    newObject[key] = val;
    return newObject;  
}
