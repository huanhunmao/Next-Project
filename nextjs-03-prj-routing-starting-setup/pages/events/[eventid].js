// import {useRouter} from 'next/router'

import EventSummary from "../../components/event-detail/event-summary"
import EventContent from "../../components/event-detail/event-content"
import EventLogistics from "../../components/event-detail/event-logistics"

// import {getEventById} from '../../dummy-data'
import { getEventById, getAllEvents } from '../../helpers/api-util'

function EventDetailPage(props){
    // const router = useRouter()

    // const eventId = router.query.eventid
    // const event = getEventById(eventId)

    if(!props.event){
        return <p>No event found!</p>
    }

    const { title, date, location, image, description } = props.event

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

export  async function getStaticProps(context){
    const eventid = context.query.eventid 

    const event = await getEventById(eventid)
    console.log('event',event);
    return {
        props: {
            event
        }
    }
}

export async function getStaticPaths(){
    const events = await getAllEvents()

    const paths = events.map(event => ({params:{ eventid: event.id}}))

    return {
        paths: paths,
        fallback: false
    }
}

export default EventDetailPage