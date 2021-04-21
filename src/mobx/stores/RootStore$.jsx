import { types } from 'mobx-state-tree'
import { ContentModel } from '../models/ContentModel.model'
import { contentMock } from '../../Mock/content'
import { AddContent } from '../models/AddContentModel.model'
import { v4 as uuid } from 'uuid'
import axios from 'axios'
import { notifyListeners } from 'mobx/dist/internal'
import { notification } from 'antd'

export const RootStore$ = types.model('RootStore$', {
	content$: types.array(ContentModel),

	addContent$: types.array(AddContent)
})
	.actions((self) => ({
		setUpdateContent(content){
			self.content$ = content
		},

		setInitialState(){
			self.content$ = contentMock
			self.fetchImagesfromAPI()
		},

		addContent(data){
			self.content$.push({
				id: uuid(),
				...data
			})

		},

		updateField(key, value) {
			self.addContent$[key] = value
		}
	}))

	.actions((self) => ({

		fetchImagesfromAPI: flow (function* (){
			try{
				const res = yield axios.get('https://pixabay.com/api/', {
					params: {
						key: '21267302-af61bb3a1194b18a3a862ed11',
						q: 'nature'
					}
				})
				const beautifyData = makeSnapshotIn(res.data)

                applySnapshot(self.content$, beautifyData)
				
				notification.success({ message: 'Data was updated' })
			} catch(e) {
				notification.error({ message: e.message })
			}
		})
	}))

	.views((self) => ({
		get contentSum(){
			return self.content$.length
		}
	}))
