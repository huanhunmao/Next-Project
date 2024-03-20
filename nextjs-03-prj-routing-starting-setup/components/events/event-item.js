import Link  from 'next/link'
import classes from '../../styles/event-item.module.css'
import Button from '../../ui/button';
import ArrowRightIcon from '../icons/arrow-right-icon';
import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import Image from 'next/image';

function EventItem(props){
    const {title, image, date, location, id} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

    const formattedAddress = location && location.replace(', ', '\n')
    const exploreLink = `/events/${id}`

    return (
        <li className={classes.item}>
            <Image className={classes.img} src={'/' + image} alt='' width={250} height={160}/>
            <div className={classes.content}>
                <div>
                    <div>
                    <h2 className={classes.h2}>{title}</h2>
                    <div  className={classes.date}>
                     <DateIcon/>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon/>
                        <address >{formattedAddress}</address>
                    </div>
                    </div>
                    <div className={classes.actions}>
                    <Button link={exploreLink}>
                   <span>Explore Event</span> 
                   <span className={classes.icon}><ArrowRightIcon/></span>
                    </Button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default EventItem