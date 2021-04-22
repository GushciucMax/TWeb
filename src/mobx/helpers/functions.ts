import { IRequestData, ISnapshotContentModelIn } from "../interfaces"


export function makeSnapshotIn(data: IRequestData[]): ISnapshotContentModelIn[] {

    return data.map((hits: IRequestData ) => {
        return {
            id: hits.id.toString(),
            title: hits.tags,
            description: hits.user,
            img: hits.webformatURL
        }
    })

}