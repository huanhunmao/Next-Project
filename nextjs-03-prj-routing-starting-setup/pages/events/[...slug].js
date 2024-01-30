import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import { Fragment } from 'react'
import ResultsTitle from '../../components/events/results-title'
import ErrorAlert from '../../components/events/error-alert'
import Button from '../../ui/button'

function FilteredEventsPage(){
    const router = useRouter()

    const filterData = router.query.slug
    // console.log('filterData',filterData); // ['2021', '1']

    if(!filterData){
        return <p className='center'>Loading</p>
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth
    const date = new Date(numYear, numMonth)

    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 ||
     numYear < 2021 || numMonth < 1 || numMonth > 12){
        return (
            <Fragment>
                <ErrorAlert>
                <p>Invalid filter. Please adjust your values!</p>
                </ErrorAlert>
                <Button link='/events'>Show all events</Button>
            </Fragment>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if(!filteredEvents || filteredEvents.length === 0){
        return ( <Fragment>
            <ErrorAlert>
            <p>No events found for the chosen filter!</p>
            </ErrorAlert>
            <Button link='/events'>Show all events</Button>
        </Fragment>)
    }

    return (
        <Fragment>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </Fragment>
    )
}

export default FilteredEventsPage