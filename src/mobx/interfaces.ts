import { Instance, SnapshotIn } from "mobx-state-tree";
import { ContentModel } from "./models/ContentModel.model";
import { RootStore$ } from "./stores/RootStore$";


export interface IRoot$ extends Instance<typeof RootStore$> {

} 

export interface IContentModel$ extends Instance<typeof ContentModel> {

} 

export interface ISnapshotContentModelIn extends SnapshotIn<typeof ContentModel> {
}

export interface IRequestData {
    breeds: [],
    height: number,
    id: string,
    url: string,
    width: number
}