import { types } from 'mobx-state-tree'
import { ContentModel } from '../models/ContentModel.model'
import { contentMock } from '../../Mock/content'

export const RootStore$ = types.model('RootStore$', {
	content$: types.array(ContentModel)
})
	.actions((self) => ({
		setUpdateContent(content){
			self.content$ = content
		},
		setInitialState(){
			self.content = contentMock
		}
	}))
