import { addItem, validationDeleteItem, validationLeyend, validationHomePage } from '../support/components';
import { getElementLength } from '../support/driver';
import { credentials  } from '../support/credentials';
import { itemListLocator, itemLeyendLocator} from "../pages/home.page"


describe('Create an item ', () => {

    it('should Create Item with valid text', () => {
        validationHomePage()
        addItem(credentials.validCredential)
        validationLeyend(credentials.validCredential.text)
        getElementLength(itemListLocator,itemLeyendLocator,'newListLength');
        validationDeleteItem(true)
    })

})