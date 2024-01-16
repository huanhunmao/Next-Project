function EventItem(props){
    const {items} = props;

    return (
        <ul>
            {items.map(item => <li></li>)}
        </ul>
    )
}

export default EventItem