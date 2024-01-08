// if u visit this url--> http://localhost:3000/meals/xxx
import { getMeal } from '@/lib/meals'
import classes from './page.module.css'
import Image from 'next/image'

export default  function MealDetailPage({params}){
    const meal =  getMeal(params.mealslug)

    meal.instructions = meal.instructions.split(/\n/g).join('<br/>');
    console.log('meal.instructions',meal.instructions);

    return (
        <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src={meal.image} alt={meal.title} fill/>
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${meal.creator_email}`}>NAME</a>
                </p>
                <p className={classes.summary}>SUMMARY</p>
            </div>
        </header>
        <main>
            <p className={classes.instructions}
            dangerouslySetInnerHTML={{
                __html:meal.instructions
            }}>
            </p>
        </main>
        </>
    )
}