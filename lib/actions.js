'use server'
import { redirect } from "next/navigation";
import { createMeal } from "./meals-prisma"

export const shareMeal = async (formData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }
    
    await createMeal(meal);
    redirect('/meals')
}