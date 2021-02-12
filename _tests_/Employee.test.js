const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Marissa Uhlig', '10', 'marissa@marissa.com');

    expect(employee.name).toBe('Marissa Uhlig');
    expect(employee.id).toBe('10');
    expect(employee.email).toBe('marissa@marissa.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Marissa Uhlig', '10', 'marissa@marissa.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Marissa Uhlig'));
});

test("gets employee's ID", () => {
    const employee = new Employee('Marissa Uhlig', '10', 'marissa@marissa.com');

    expect(employee.getId()).toEqual(expect.stringContaining('10'));
});

test("gets employee's email", () => {
    const employee = new Employee('Marissa Uhlig', '10', 'marissa@marissa.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('marissa@marissa.com'));
});

test("gets employee's role", () => {
    const employee = new Employee('Marissa Uhlig', '10', 'marissa@marissa.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});