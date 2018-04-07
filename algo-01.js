const arr = [{name: 'a', value: 1}, {name: 'a', value: 1}]

const arrToObj = arr.reduce((a,b)=> {
    a[b['name']] = b['value']
}, {});

console.log(arrToObj);