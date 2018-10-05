// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => { 
  return propertyName;
}
 
 
const createNotEnumerableProperty = (propertyName) => {
  propertyName = Symbol("propertyName");
  return propertyName; 
 }


const createProtoMagicObject = () => {
  let F = new Function();
  F.__proto__ = F.prototype;
  return F;	
}


let counter2018 = 0;

const incrementor = () => {
  counter2018++;
  
  incrementor.toString = function() { 
    return counter2018; 
  } 

  return incrementor; 
	
}


let counter2019 = 1;

const asyncIncrementor = () => {
  
  function asyncIncrementor2018() {
    return function() { return counter2019++; }
  } 
  
  let counter = asyncIncrementor2018();
  return counter();
}


const createIncrementer = () => {
	
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let inc2018 = array[Symbol.iterator]();	
	
  return inc2018;
		
}

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
  return new Promise( (resolve, reject) => { 
           setTimeout(() => resolve(param), 1000);
    	 })
}


const getDeepPropertiesCount = (obj) => {
	
  let count = 1;
  let protection = 1;
  let obj2018 = obj;
  let obj2019 = {};
	
  while (protection) {
  	protection = 0;
	
	for(let i in obj2018) {
	
	  if(Object.keys(obj2018[i]).length) {
	    count += Object.keys(obj2018[i]).length;
		protection = 1;
		obj2019 = obj2018[i];
      }
	}
	obj2018 = obj2019;
  }

  return  count;
}


const createSerializedObject = () => {
  return null;
}


const toBuffer = () => {};


const sortByProto = (arr) => {
	
  function counter2018(object){
    let counter=0;
    
	while (object){
      counter++;
      object=object.__proto__;
    }

    return counter;
  }

  function compare(a, b) {
	let x1 = counter2018(a);
    let x2 = counter2018(b);
    if (x1 > x2) return -1;
    if (x1 < x2) return 1;
  }

  return  arr.sort(compare);
}

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;