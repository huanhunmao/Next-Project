import MealsGrid from '@/components/meals/meal-grid'
import classes from './page.module.css'
import Link from 'next/link'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'
import MainHeader from '@/components/main-header/main-header'

async function Meals(){
    const meals = await getMeals()

    return  <MealsGrid meals={meals}/>
}

export default function MealPage(){

    return (
        <>
         <MainHeader/>
        <header className={classes.header}>
            <h1>
                Delicious meals, created {''}
                <span className={classes.highlight}>by you</span>
            </h1>
            <p className={classes.cta}>
                <Link href='/meals/share'>
                    Share Your Favorites Recipe
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={ <p>Fetching meals ...</p>}>
            <Meals/>
            </Suspense>
        </main>
        </>
    )
}