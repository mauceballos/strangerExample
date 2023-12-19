import { addItem, validationHomePage } from '../support/components';
import { credentials  } from '../support/credentials';

describe('Check max long in description', () => {

    it('should Create Item with invalid text', () => {
        validationHomePage()
        addItem(credentials.InvalidTextCredential)
        
    })

})