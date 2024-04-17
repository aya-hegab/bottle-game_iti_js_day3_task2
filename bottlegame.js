var arr = ["ahmed", "islam", "sandra", "Fatma", "Ali"];
// console.log(arr[Math.floor(Math.random() * arr.length)]);

var arrRandom = [];

arrRandom.push(
  arr[Math.floor(Math.random() * arr.length)],
  arr[Math.floor(Math.random() * arr.length)]
);

console.log(arrRandom);
