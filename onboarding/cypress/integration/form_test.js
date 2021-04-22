describe('forms app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    
    const nameInput = () => cy.get("input[name='username']")
    const emailInput = () => cy.get("input[name='email']")
    const passwordInput = () => cy.get("input[name='password']")
    const tOSInput = () => cy.get("[type='checkbox']")
    const submitButton = () => cy.get("button[name='submit']")

    it('sanity test making sure it works', () => {
        expect(1 + 2).to.equal(3);
    });

    it("the proper elements are showing on the screen", () => {
        nameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        tOSInput().should("exist");
        submitButton().should("exist");
    });

    it("can type inputs", () => {
        nameInput()
        .should("have.value", "")
        .type("Will")
        .should("have.value", "Will");

        emailInput()
        .should("have.value", "")
        .type("willmoon@will.com")
        .should("have.value", "willmoon@will.com");

        passwordInput()
        .should("have.value", "")
        .type("William")
        .should("have.value", "William");
    });

    it("checks terms of service box", () => {
        tOSInput()
        .check()
        .uncheck()
    });

    it("check submit button", () => {
        submitButton().should("be.disabled");
        nameInput().type("William");
        submitButton().should("be.disabled");
        emailInput().type("willthemoon@will.com");
        submitButton().should("be.disabled");
        passwordInput().type("willisthebest");
        submitButton().should("be.disabled");
        tOSInput().check();
        submitButton().should("not.be.disabled");
    });

    it("check submit button", () => {
        submitButton().should("be.disabled");
        nameInput().type("William");
        submitButton().should("be.disabled");
        emailInput().type("willthemoon@will.com");
        submitButton().should("be.disabled");
        passwordInput().type("willisthebest");
        submitButton().should("be.disabled");
        tOSInput().check();
        tOSInput().uncheck();
        submitButton().should("be.disabled");
    });



});
