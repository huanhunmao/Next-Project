
// export async function getAllEvents() {
//     const response = await fetch('https://nextjs-50eda-default-rtdb.firebaseio.com/sales.json');

//     const data = await response.json();
//     const events = []
//     for (const key of data){
//         events.push({
//             id:key,
//             ...data[key],
//         })
//     }
//     // const events = data && data.events && Object.values(data.events).filter(e => e.isFeatured);
//     return events;
// }

// export async function getFeaturedEvents(){
//     const allEvents = await getAllEvents()

//     console.log('allEvents', allEvents);
//     return Object.values(allEvents).filter(e => e.isFeatured)
// }