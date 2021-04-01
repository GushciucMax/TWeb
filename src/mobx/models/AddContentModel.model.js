
import { types } from 'mobx-state-tree'


export const AddContent = types.model('AddContent', {
    title: '',
    description: '',
    img: ''
})
