import { TechEvent } from '../types/TechEventBase'

const printEvent = ( event: TechEvent ) => {

    if(event.price) {

        if(typeof event.price === 'number' ) {

            console.log( 'Price in EUR:', event.price )
        
        } else {
        
            console.log( 'It is free!' )
        
        }
    
    }

    if( Array.isArray(event.talks)) {

        event.talks.forEach( talk => {
            console.log(talk.title)
        })

    } else {

        console.log(event.talks.title)

    }

}

export default printEvent
