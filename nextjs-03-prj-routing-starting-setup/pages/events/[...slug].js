import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import { Fragment } from 'react'
import ResultsTitle from '../../components/events/results-title'
import ErrorAlert from '../../components/events/error-alert'
import Button from '../../ui/button'
import Head from 'next/head'

function FilteredEventsPage(props){
    const router = useRouter()

    const filterData = router.query.slug
    // console.log('filterData',filterData); // ['2021', '1']

    const  headData = 
        <Head>
        <title>Filter items</title>
        <meta
    name='description'
    content='filter year or month'
    />
    </Head>

    if(!filterData){
        return <Fragment>
            {headData}
            <p className='center'>Loading</p>
        </Fragment>
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth
    const date = new Date(numYear, numMonth)

    if(props.hasError){
        return (
            <Fragment>
                {headData}
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
             {headData}
            <ErrorAlert>
            <p>No events found for the chosen filter!</p>
            </ErrorAlert>
            <Button link='/events'>Show all events</Button>
        </Fragment>)
    }

    return (
        <Fragment>
            {headData}
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </Fragment>
    )
}


export async function getServerSideProps(context){
    const { params } = context

    const filterData = params.slug 

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 ||
     numYear < 2021 || numMonth < 1 || numMonth > 12){
        return {
                props: { hasError: true}
            }
    }

    return {
        props: { hasError: false}
    }
}

export default FilteredEventsPage