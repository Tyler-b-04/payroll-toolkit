// employee records
const employees = [
  { name: "Connor", hourlyRate: 18.5, hoursWorked: 38 },
  { name: "Seabass", hourlyRate: 22.0, hoursWorked: 45 },
  { name: "Devon", hourlyRate: 16.75, hoursWorked: 52 },
  { name: "Tyler", hourlyRate: 20.0, hoursWorked: 40 },
];

console.log("Loaded employees:", employees);

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
