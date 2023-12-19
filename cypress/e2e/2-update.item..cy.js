import { editItem, validationLeyend, validationHomePage } from '../support/components';
import { credentials  } from '../support/credentials';

describe('Update an item ', () => {

    it('should Update Item with valid text', () => {
        validationHomePage()
        editItem(credentials.updateCredential)
        validationLeyend(credentials.updateCredential.text)
    })

})