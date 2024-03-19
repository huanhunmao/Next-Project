import { useRouter } from 'next/router'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/events-search'
import { getAllEvents } from '../../helpers/api-util'
// import {getAllEvents} from '../../dummy-data'
import useSWR  from 'swr'

function EventPage(){
    const router = useRouter()
    const fetchData = async () => {
        const response = await fetch('https://nextjs-50eda-default-rtdb.firebaseio.com/events.json');
        const data = await response.json();
            const transformData = []
            for(let key in data){
                transformData.push({
                    id: key,
                    ...data[key],
                })
            }
    
            return   Object.values(data)
      };
    
      
        const { data, error } = useSWR('data',fetchData);

        if(!data){
            return <p>Loading ...</p>
        }

    function findEventsHandler(year, month){
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }
    return (
        <div>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList items={data}/>
        </div>
    )
}

export default EventPage