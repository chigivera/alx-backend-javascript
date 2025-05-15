// Import from previous tasks
function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}

function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    }
  };
}

function createIteratorObject(report) {
  const employees = [];
  for (const department of Object.values(report.allEmployees)) {
    employees.push(...department);
  }
  return employees;
}

export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.join(' | ');
}

// Test
const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));
