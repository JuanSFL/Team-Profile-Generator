const Engineer = require("../lib/Engineer");

test("will display a github username", () => {
    const testGithub = "JuanSFL";
    const employeeInstance = new Engineer("Juan", 2, "molina98j@yahoo.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "JuanSFL";
    const employeeInstance = new Engineer("JuanSFL", 2, "molina98j@yahoo.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing the role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Juan", 2, "molina98j@yahoo.com", "JuanSFL");
    expect(employeeInstance.getRole()).toBe(returnValue);
});