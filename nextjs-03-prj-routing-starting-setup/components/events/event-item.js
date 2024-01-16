import Link  from 'next/link'

function EventItem(props){
    const {title, image, date, location, id} = props;
    console.log('title',title);

    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

    const formattedAddress = location && location.replace(', ', '\n')
    const exploreLink = `/events/${id}`

    return (
        <li>
            <img src={'/' + image} alt=''/>
            <div>
                <div>
                    <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div>
                        <address>{formattedAddress}</address>
                    </div>
                    </div>
                    <div>
                    <Link href={exploreLink}>Explore Event</Link>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default EventItem