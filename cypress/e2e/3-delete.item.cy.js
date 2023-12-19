import { deleteItem, validationDeleteItem, validationHomePage } from '../support/components';
import { getElementLength } from '../support/driver';
import { credentials  } from '../support/credentials';
import { itemListLocator, itemLeyendLocator} from "../pages/home.page"


describe('Delete an item ', () => {
    
    it('should Delete Item with valid text', () => {
        validationHomePage()
        deleteItem(credentials.deleteItemCredential);
        getElementLength(itemListLocator,itemLeyendLocator,'newListLength');
        validationDeleteItem(false)
    }) 

})