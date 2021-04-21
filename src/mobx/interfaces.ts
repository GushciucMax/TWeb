import { Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import { ContentModel } from "./models/ContentModel.model";
import { RootStore$ } from "./stores/RootStore$.store";


export interface IRoot$ extends Instance<typeof RootStore$> {
} 

export interface IContentModel$ extends Instance<typeof ContentModel> {
} 

export interface ISnapshotContentModelIn extends SnapshotIn<typeof ContentModel> {
}

export interface ISnapshotContentModelOut extends SnapshotOut<typeof ContentModel> {
}

export interface IRequestData {

    id: string,
    webformatURL: string,
    tags: string,
    user: string
}