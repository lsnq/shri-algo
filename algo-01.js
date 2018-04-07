const arr = [{name: 'a', value: 1}, {name: 'b', value: 1}]

const arrToObj = arr.reduce((acc,val) => {
    acc[val.name] = val.value;
    return acc;
}, {});

console.log(arrToObj);