const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
    const engineer = new Engineer ('Cesar Uhlig', '9', 'uhlig@uhlig.com', 'uhligithub')
    
    expect(engineer.name).toBe('Cesar Uhlig');
    expect(engineer.id).toBe('9');
    expect(engineer.email).toBe('uhlig@uhlig.com');
    expect(engineer.github).toBe('uhligithub');
});

test ("gets engineer's github username", () => {
    const engineer = new Engineer ('Cesar Uhlig', '9', 'uhlig@uhlig.com', 'uhligithub')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('uhligithub'));
});

test("gets engineer's role", () => {
    const engineer = new Engineer ('Cesar Uhlig', '9', 'uhlig@uhlig.com', 'uhligithub')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});