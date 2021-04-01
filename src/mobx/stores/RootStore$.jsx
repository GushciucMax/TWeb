import { types } from 'mobx-state-tree'
import { ContentModel } from '../models/ContentModel.model'
import { contentMock } from '../../Mock/content'
import { AddContent } from '../models/AddContentModel.model'
import { v4 as uuid } from 'uuid'

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

	.views((self) => ({
		get contentSum(){
			return self.content$.length
		}
	}))
