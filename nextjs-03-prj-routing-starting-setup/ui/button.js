import Link from 'next/link'
import classes  from '../styles/button.module.css'

function Button(props){
    return (
        <Link legacyBehavior href={props.link}><a id="link" className={classes.btn}>{props.children}</a></Link>
    )
}

export default Button