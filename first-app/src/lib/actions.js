'use server'

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"

export async function shareMeals(formData){
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    }

    await saveMeal(meal)

    redirect('/meals')
    // meal {
    //     title: '11111',
    //     summary: '222',
    //     instructions: 'adadasdads',
    //     image: null,
    //     creator: 'Marxu',
    //     creator_email: 'markfu1996@gmail.com'
    //   }
}