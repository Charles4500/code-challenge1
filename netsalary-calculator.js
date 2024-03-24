function calculateSalary (basicSalary, benefits){
  // const for rates//
  const nhifRate = 0.1;
  const taxRate = 0.2;
  const nssfRate = 0.05;

// salary before any deductions are done//
  const grossSalary = basicSalary + benefits

// const for calculations of rates //
  const nhif = grossSalary * nhifRate;
  const tax = grossSalary * taxRate;
  const nssf = grossSalary * nssfRate;

  const netSalary = grossSalary - (nhif + tax + nssf);
  return{
    grossSalary,
    nhif,
    tax,
    nssf,
    netSalary
  }
}
// Users place their basic salary and benefits here//
const input = calculateSalary(20000, 5000);
calculateSalary(input);
console.log("grossSalary is:" , input.grossSalary);
console.log("nhif is:" , input.nhif);
console.log("tax is:",input.tax);
console.log("nssf is:" , input.nssf);
console.log("netSalary is:" , input.netSalary);