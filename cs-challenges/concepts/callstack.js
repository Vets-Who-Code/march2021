// Simple callstack example
// sandwich outputs

function A(n) {
  console.log("A");

  const bResult = B(n);
  console.log({ bResult });

  console.log("Exiting A");

  return bResult + n;
}

function B(n) {
  console.log("B");
  return n ** 2;
}

console.log(A(5));
