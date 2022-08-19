function  fibonacci(num: number): number{
  if (num == 1 || num==2) return 1;

  return  fibonacci(num -1) + fibonacci(num -2);
}
let n: number =10;
let sum =0;
for (let i: number=1; i<=n; i++){
  console.log(fibonacci(i))
  sum = sum + i;
}
console.log("Sum: " + sum);