export type Webinar = {
    title: string,
    description: string,
    date: Date,
    capacity: number,
    rsvp: number,
    kind: string,
    url: string,
    price?: number,
    talks: Talk
}