import { ContentModel } from '../models/ContentModel.model'
import { contentMock } from '../../Mock/content'
import { AddContent } from '../models/AddContentModel.model'
import { v4 as uuid } from 'uuid'
import axios from 'axios'
import { notification } from 'antd'
import { flow } from 'mobx'
import { applySnapshot, types } from 'mobx-state-tree'
import { makeSnapshotIn } from '../helpers/functions'
import { IContentModel, ISnapshotContentModelIn } from '../interfaces'

export const RootStore$ = types.model('RootStore$', {
	content$: types.array(ContentModel),
	addContent$: types.maybe(AddContent)
})

.actions((self) => ({

	fetchImagesfromAPI: flow (function* (){
		try{
			const res = yield axios.get('https://pixabay.com/api/', {
				params: {
					key: '21267302-af61bb3a1194b18a3a862ed11',
					q: 'nature',
					per_page: 8
				}
			})

			console.log('>>res', res)

			const beautifyData = makeSnapshotIn(res.data.hits)

			applySnapshot(self.content$, beautifyData)
			
			notification.success({ message: 'Data was updated' })
		} catch(e) {
			notification.error({ message: e.message })
		}
	})
}))

	.actions((self) => ({
		setUpdateContent(content: ISnapshotContentModelIn[]){
			applySnapshot(self.content$, content)
		},

		setInitialState(){
			self.fetchImagesfromAPI()
			applySnapshot(self.content$, contentMock)
		},

		setAddContentInitial() {
            const emptyData = {
                title: '',
                description: '',
                img: ''
            }

            // @ts-ignore
            self.addContent$ = emptyData

        },

		addContent(data: IContentModel){
			const newData = {
                ...data,
                id: uuid()
            }

			self.content$.push(newData)

			// @ts-ignore
            self.addContent$ = {}
		}	
	}))

	.views((self) => ({
		get contentSum(){
			return self.content$.length
		}
	}))
