export const credentials = {
    InvalidTextCredential: {
        text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        name: 'Create Item',
        type: 'create',
        filePath: 'pic.jpg',
        validation: true
    },
    InvalidPictureCredential: {
        text: 'text',
        name: 'Create Item',
        type: 'create',
        filePath: 'pic-fail.jpg',
        validation: true
    },
    validCredential: {
        text: 'testing text area',
        name: 'Create Item',
        type: 'create',
        filePath: 'pic.jpg',
        validation: false
    },
    updateCredential: {
        text: 'Will is hunted - update',
        name: 'Edit',
        type: 'Update Item',
        filePath: 'pic-update.jpg',
        validation: false
    },
    deleteItemCredential: {
        text: 'testing text area',
        name: 'Delete',
        type: 'delete'
    }

}