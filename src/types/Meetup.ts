export type Meetup = {
    title: string,
    description: string,
    date: Date,
    capacity: number,
    rsvp: number,
    kind: string,
    location: string,
    price: number,
    talks: Talk[]  
}
