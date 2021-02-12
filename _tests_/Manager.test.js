const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Cesar Gamez', '8', 'cesar@cesar.com', 'Z100');
    
    expect(manager.name).toBe('Cesar Gamez');
    expect(manager.id).toBe('8');
    expect(manager.email).toBe('cesar@cesar.com');
    expect(manager.office).toBe('Z100');
});

test("gets employee's role", () => {
    const manager = new Manager('Cesar Gamez', '8', 'cesar@cesar.com', 'Z100');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});