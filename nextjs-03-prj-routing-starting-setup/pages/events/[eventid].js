import {useRouter} from 'next/router'

import EventSummary from "../../components/event-detail/event-summary"
import EventContent from "../../components/event-detail/event-content"
import EventLogistics from "../../components/event-detail/event-logistics"

import {getEventById} from '../../dummy-data'

function EventDetailPage(){
    const router = useRouter()

    const eventId = router.query.eventid
    const event = getEventById(eventId)

    if(!event){
        return <p>No event found!</p>
    }

    const { title, date, location, image, description } = event

    return (
        <div>
           <EventSummary title={title}/>
           <EventLogistics
            date={date}
            address={location}
            image={image}
            imageAlt={title}
            />
           <EventContent>
                <p>{description}</p>
           </EventContent>
        </div>
    )
}

export default EventDetailPage