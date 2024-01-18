import Link  from 'next/link'
import classes from '../../styles/event-item.module.css'

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
        <li className={classes.item}>
            <img className={classes.img} src={'/' + image} alt=''/>
            <div className={classes.content}>
                <div>
                    <div>
                    <h2 className={classes.h2}>{title}</h2>
                    <div>
                        <time className={classes.date}>{humanReadableDate}</time>
                    </div>
                    <div>
                        <address className={classes.address}>{formattedAddress}</address>
                    </div>
                    </div>
                    <div className={classes.actions}>
                    <Link href={exploreLink}>Explore Event</Link>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default EventItem