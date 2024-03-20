import useSWR  from 'swr'

import EventSummary from "../../components/event-detail/event-summary"
import EventContent from "../../components/event-detail/event-content"
import EventLogistics from "../../components/event-detail/event-logistics"
import { useRouter } from 'next/router'
import Head from 'next/head'

function EventDetailPage(){
    const router = useRouter()
    const eventid = router.query.eventid

    if(!eventid){
        return <p>Loading ...</p>
    }

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
    
            const transformDatas = Object.values(data).filter(e => e.isFeatured)

           return transformDatas.find((event) => event.id === eventid);
      };
    
      
        const { data, error } = useSWR('data',fetchData);

        if(error){
            return <p>Something error</p>
        }

    if(!data){
        return <p>Loading ...</p>
    }

    const { title, date, location, image, description } = data

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta
            name='description'
            content={description}
            />
            </Head>
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