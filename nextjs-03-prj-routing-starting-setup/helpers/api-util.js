
export async function getAllEvents() {
    const response = await fetch('https://nextjs-50eda-default-rtdb.firebaseio.com/events.json');

    const data = await response.json();
    console.log('data',data);
    // const events = []
    // for (const key of data){
    //     events.push({
    //         id:key,
    //         ...data[key],
    //     })
    // }

    // return events;
}

// export async function getFeaturedEvents(){
//     const allEvents = await getAllEvents()

//     return Object.values(allEvents).filter(e => e.isFeatured)
// }

export async function getEventById(id){
    const allEvents = await getAllEvents()
    return allEvents.find((event) => event.id === id);
}