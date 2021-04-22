import { notification } from 'antd'
import { types, getParentOfType } from 'mobx-state-tree'
import { ISnapshotContentModelIn } from '../interfaces'

import { RootStore$ } from '../stores/RootStore$.store'

export const ContentModel = types.model('ContentModel', {
    id: types.identifier,
    title: '',
    description: '',
    img: ''
})
    .actions((self) => ({
        removeCard(id:string): void {
            const { content$, setUpdateContent } = getParentOfType(self, RootStore$)
            const newContent: ISnapshotContentModelIn[] = content$.filter((item) => item.id !== id)
            setUpdateContent(newContent)
            notification.success({message: 'Card was deleted'})
        }
    }))
