// given an array and give back an array where every element is multiplied by 2

//  we can do this using map
 const input=[1,2,3,4,5];

//  function transform(n){
//     return n*2;
//  }

//  const ans= input.map(transform);
//  console.log(ans);

//  const ans2=input.map(function(n){
//     return n*2;
//  });
//  console.log(ans2);



//  filter
const arr=[1,2,3,4,5,6];

function filterlogic(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}

const ans= arr.filter(filterlogic);
console.log(ans);