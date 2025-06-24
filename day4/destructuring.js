const person={
    personName:"john",
    age:30,
};

const {personName,age}=person;
// console.log(personName,age);

let nums=[1,2,3,4];

// const [a,b,c,d]=nums;
// console.log(a,b,c,d);

let nums1=[1,2,3,4];
let nums2=[5,6,7,8];

// let res=[...nums1,...nums2];//Spread operator
// const [...nums3]=nums1.concat(nums2);
// console.log(nums1.concat(nums2));
// console.log(res);

const [a,b,...abc]=nums1;//Rest operator
console.log(abc);
