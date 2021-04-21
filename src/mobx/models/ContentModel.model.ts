import { notification } from 'antd'
import { types, getParentOfType } from 'mobx-state-tree'

import { RootStore$ } from '../stores/RootStore$'

export const ContentModel = types.model('ContentModel', {
    id: types.identifier,
    title: '',
    description: '',
    img: types.string
})
    .actions((self) => ({
        removeCard(id:string): void {
            const { content$, setUpdateContent } = getParentOfType(self, RootStore$)
            const newContent = content$.filter((item) => item.id !== id)
            setUpdateContent(newContent)
            notification.success({message: 'Card was deleted'})
        }
    }))
