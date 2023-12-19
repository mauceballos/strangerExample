import { validationHomePage, validationLeyend } from '../support/components'

describe('5- Check if exist in the list the item with text “​Creators: Matt Duffer, Ross Duffer” ', () => {
    it('should check success', () => {
        validationHomePage();
        validationLeyend('Creators: Matt Duffer, Ross Duffer')
    });
});