function fibonacci(num: number): number{
  if (num==1 || num==2) return 1;
  return fibonacci(num-1) + fibonacci(num-2);
}

let n: number = 5;

let sum = 0;
console.log("Dãy số fibonacci: ");
for (let i=1;i<=n;i++){
  console.log(fibonacci(i));
  sum += fibonacci(i);
}
console.log("Sum = "+sum);