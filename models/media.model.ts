export interface IMedia {
    name: string,
    _id: number,
    desc: string,
    MediaAddr: string,
    created: string,
    cats: Array<number>
    locations: Array<number>
}
export interface INewMedia {
    //step 1
    mediaType: number
    MediaAddr: string | null
    cats: Array<number>
    locations: Array<number>
    title: string | null
    img: string | null
    desc: string | null
    // step 2
    link: string
    contact: IContact[]
}
export interface IContact {
    cType: number
    value: string
}
export interface ICreateOffer {
    mediaId: number
    plan: Array<number>
}