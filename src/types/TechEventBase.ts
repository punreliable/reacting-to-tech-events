import { Talk } from './Talk'

export type TechEventBase = {
    title: string,
    description: string,
    date: Date,
    capacity: number,
    rsvp: number,
    kind: string,
}

export type Conference = TechEventBase & {
    location: string,
    price: number,
    talks: Talk[],
    
}

export type Meetup = TechEventBase & {
    location: string,
    price: string,
    talks: Talk[],
    
}


export type Webinar = TechEventBase & {
    url: string,
    price?: number,
    talks: Talk
}

export type TechEvent = Webinar | Conference | Meetup