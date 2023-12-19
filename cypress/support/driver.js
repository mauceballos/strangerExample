

export const clickElement = (selector, name) => {
    if (name) {
        cy.contains(selector, name).should('not.be.disabled').click();


    } else {
        getElement(selector).should('not.be.disabled').click();

    }
}

export const disableElement = (selector, name) => {
    getElement(selector, name).should('be.disabled')
}

export const clickForceElement = (selector, name) => {
    if (name) {
        cy.contains(selector, name).click({ force: true });


    } else {
        getElement(selector).click({ force: true });

    }
}

export const checkElement = (selector, timeout) => {
    return getElement(selector, { timeout: timeout }).should("be.visible");
}

export const clearFillField = (selector) => {
    getElement(selector).clear();
}

export const fillField = (selector, text) => {
    getElement(selector).type(text);
}

export const checkElementWithText = (selector, timeout, defaultOption) => {
    return getElement(selector, { timeout: timeout }).should("be.visible").should('have.text', defaultOption);
}

export const checkElementContainsText = (selector, timeout, defaultOption) => {
    return getElement(selector, { timeout: timeout }).should("be.visible").should("contain", defaultOption);
}

export const getElement = (selector) => {
    return cy.get(selector);
}


export const navigate = (url) => {
    cy.visit(url);
}

export const getElementLength = (itemListLocator, itemDetailsLocator, name) => {
    getElement(itemListLocator).find(itemDetailsLocator).then(($list) => {
        const number = $list.length;
        cy.wrap(number).as(name);
    })
}


export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const cleanArray = (actual) => {
    var newArray = new Array();
    for (var i = 0, j = actual.length; i < j; i++) {
        if (actual[i]) {
            newArray.push(actual[i]);
        }
    }
    return newArray;
}



export const firstWordUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


export const randomNumber = (min, max) => {
    const number = Math.floor(Math.random() * (parseInt(max) - min)) + min;
    return number;
}


export const disappearElement = (selector) => {
    cy.get(selector, { timeout: 50000 }).should('not.be.visible')
}

export const getElementIsNotExitAndNull = (selector) => {
    getElement(selector).should('not.exist').and('to.be.null');
}
