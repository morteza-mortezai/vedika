export interface IMedia {
    name: string,
    _id: number,
    desc: string,
    addr: string,
    created: string,
    cats:Array<number>
    locations:Array<number>

}
export interface ICreateMedia {
    type:number
    name: string|null
    desc: string|null
    addr: string|null
    cats:Array<number>
    locations:Array<number>
}

export interface ICreateOffer {
    mediaId:number
  plan:Array<number>
}