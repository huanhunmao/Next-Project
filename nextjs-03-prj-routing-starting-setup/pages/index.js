import { useState } from "react";
import EventList from "../components/events/event-list"
// import { getFeaturedEvents } from "../dummy-data"
import useSWR  from 'swr'
// import { getFeaturedEvents } from "../helpers/api-util";
import Head from 'next/head'

function HomePage(){
    const [featuredEvents, setFeaturedEvents] = useState([])
    // const featuredEvents = getFeaturedEvents()

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
            setFeaturedEvents(transformDatas)
            return data;
      };
    
      
        const { data, error } = useSWR('data',fetchData);

        if(!data){
            return <p>Loading ...</p>
        }

        if(error){
            return <p>Has errors</p>
        }

    if(!featuredEvents){
        return <p>Loading ...</p> 
    }

    return (
        <div>
            <Head>
                <title>NextJs Events</title>
                <meta
            name='description'
            content='Find a lot of good events that allow u to choose ... '
            />
            </Head>
            <EventList items={featuredEvents}/>
        </div>
    )
}

// export async function getStaticProps(){
//     const events = await getFeaturedEvents()

//     return {
//         props: {
//             events
//         }
//     }
// }

export default HomePage