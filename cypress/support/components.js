
import { uploadButtonLocator, textareaLocator, buttonLocator, ButtonForSecondItemLocator, 
    itemListLocator, modalLocator, acceptDeleteButtonLocator, itemLeyendLocator, itemsTitleLocator } from '../pages/home.page'
import { checkElement, getElementLength, clickElement, fillField, getElement, clearFillField, disableElement, checkElementContainsText } from './driver'

export const validationHomePage = () => {

    checkElement(itemsTitleLocator)
    checkElementContainsText(itemsTitleLocator,500,'List of items');
    checkElement(itemListLocator)
    getElementLength(itemListLocator,itemLeyendLocator,'listLength');

}

export const uploadImage = (credentials) => {
    checkElement(uploadButtonLocator)
    
    cy.fixture(credentials.filePath).as('fileExample')
    
    cy.get(uploadButtonLocator).selectFile('@fileExample');

}

export const completeTextArea = (credentials) => {

    checkElement(textareaLocator)
    clearFillField(textareaLocator);
    fillField(textareaLocator, credentials.text)

}

export const addItem = (credentials) => {

    uploadImage(credentials);
    completeTextArea(credentials);
    credentials.validation ? disableElement(buttonLocator, credentials.name) : clickElement(buttonLocator, credentials.name)
    cy.reload()
}

export const editItem = (credentials) => {

    clickElement(ButtonForSecondItemLocator, credentials.name )
    uploadImage(credentials);
    completeTextArea(credentials);
    clickElement(buttonLocator, credentials.type)

}

export const deleteItem = (credentials)  => {

    getElement(itemListLocator).find(itemLeyendLocator).each(($ele, index, $list) => {
        let cardTitle = $ele.text()
        if (cardTitle.includes(credentials.text)) {
            cy.wrap($ele).parents('.media-body').as('element')
            cy.get('@element').find('button').contains(credentials.name).click();
            return false
        }
        
    })
    checkElement(modalLocator)
    checkElement(acceptDeleteButtonLocator)
    clickElement(acceptDeleteButtonLocator)
    cy.reload()
}

export const validationLeyend = (text) => {

    getElement(itemListLocator).find(itemLeyendLocator).should(($) => {
        const texts = $.map((i, el) => Cypress.$(el).text())
        const elements = texts.get()
        expect(elements).to.includes(text)
    })

}



export const validationDeleteItem = (flag) => {
    cy.get('@listLength').then(($elem) => {
        cy.get('@newListLength').then(($) =>{
            flag ? expect($).greaterThan($elem) : expect($elem).greaterThan($)
        })
    })
}