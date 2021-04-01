import { contentMock } from '../Mock/content'

export function getInitialState() {
	return JSON.parse(localStorage.getItem('initialState')) || []
}

export function setInitStateToLocalStorage() {
	localStorage.setItem('initialState', JSON.stringify(contentMock))
}

export function setUpdateState(state) {
	return localStorage.setItem('initialState', JSON.stringify(state))
}

export function getStateByKey(key) {
	return JSON.parse(localStorage.getItem(key))
}

export function removeCard(initialState, index){
	const state = initialState
	const removedElement = state.splice(index, 1)
	return [removedElement, state]
}
