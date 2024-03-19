import { useState } from "react";
import EventList from "../components/events/event-list"
// import { getFeaturedEvents } from "../dummy-data"
import useSWR  from 'swr'

function HomePage(){
    const [featuredEvents, setFeaturedEvents] = useState([])
    // const featuredEvents = getFeaturedEvents()

    const fetchData = async () => {
        const response = await fetch('https://nextjs-50eda-default-rtdb.firebaseio.com/sales.json');
        const data = await response.json();
            const transformData = []
            for(let key in data){
                transformData.push({
                    id: key,
                    isFeatured: data[key].isFeatured
                })
            }
    
            const transformDatas = Object.values(data.events).filter(e => e.isFeatured)
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

    return (
        <div>
            <EventList items={featuredEvents}/>
        </div>
    )
}

export default HomePage