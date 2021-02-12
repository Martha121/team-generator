const Intern = require('../lib/Intern.js');

test ('creates an intern object', () => {
    const intern = new Intern('Tom Uhlig', '0', 'tom@tom.com', 'UT');
    expect(intern.name).toBe('Tom Uhlig');
    expect(intern.id).toBe('0');
    expect(intern.email).toBe('tom@tom.com');
    expect(intern.school).toBe('UT');
});

test("gets intern's school", () => {
    const intern = new Intern('Tom Uhlig', '0', 'tom@tom.com', 'UT');
    expect(intern.getSchool()).toEqual(expect.stringContaining('UT'));
});

test("gets intern's role", () => {
    const intern = new Intern('Tom Uhlig', '0', 'tom@tom.com', 'UT');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});
