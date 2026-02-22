// employee records
const employees = [
  { name: "Bali", hourlyRate: 18.5, hoursWorked: 38 },
  { name: "Seabass", hourlyRate: 22.0, hoursWorked: 45 },
  { name: "Devon", hourlyRate: 16.75, hoursWorked: 52 },
  { name: "Tyler", hourlyRate: 20.0, hoursWorked: 40 },
];

console.log("Loaded employees:", employees);
function round2(n) {
  return Math.round(n * 100) / 100;
}

// base pay up to 40 hours
function calculateBasePay(rate, hours) {
  const baseHours = Math.min(hours, 40);
  return round2(baseHours * rate);
}
// overtime pay rate
function calculateOvertimePay(rate, hours) {
  const otHours = Math.max(hours - 40, 0);
  return round2(otHours * rate * 1.5);
}
// tax rate
function calculateTaxes(grossPay) {
  return round2(grossPay * 0.15);
}
// payroll process
function processPayroll(employee) {
  const { name, hourlyRate, hoursWorked } = employee;

  const basePay = calculateBasePay(hourlyRate, hoursWorked);
  const overtimePay = calculateOvertimePay(hourlyRate, hoursWorked);
  const grossPay = round2(basePay + overtimePay);
   const taxes = calculateTaxes(grossPay);
  const netPay = round2(grossPay - taxes);

  return { name, basePay, overtimePay, grossPay, netPay };
}
// payroll report
console.log("~~~~ Payroll Report ~~~~")
for (let i = 0; i < employees.length; i++) {
  const payroll = processPayroll(employees[i]);
  console.log(
    `Employee ${i + 1}: ${payroll.name} | base: $${payroll.basePay} | OT: $${payroll.overtimePay} | gross: $${payroll.grossPay} | net: $${payroll.netPay}`
  );
}