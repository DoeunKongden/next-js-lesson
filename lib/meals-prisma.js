import fs from 'node:fs';
import prisma from "./prisma"
import slugify from "slugify";
import xss from "xss";

export async function getMeal() {
    return new Promise(async (resolve, reject) => {
        try {
            prisma.dummyMeal.findMany().then((meals) => {
                resolve(meals);
            })
        } catch (error) {
            reject(error);
        }
    })
};

export async function getMealBySlug(slug) {
    return new Promise(async (resolve, reject) => {
        try {
            prisma.dummyMeal.findUnique({
                where: {
                    slug: slug,
                }
            }).then((meal) => {
                resolve(meal);
            })
        } catch (error) {
            reject(error);
            console.log('error :', error)
        }
    })
};

export async function createMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions)

    //getting extension of upload image
    const extension = meal.image.name.split('.').pop(); //popping will get the last element which will be the file extension
    const fileName = `${meal.slug}.${extension}`;

    //creating a write stream : allow us to write data to a certain file
    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = await meal.image.arrayBuffer();
    // writing to that stream
    // write(thing you want to write, function that execute when you're done writing)
    stream.write(Buffer.from(bufferedImage), (error) => {
        if(error){
            throw new Error("Saving Image Fail!");
        }
    }); //the write method takes in a chunk (we need to convert our stream to a buffer)

    meal.image = `/images/${fileName}`

    const createdMeal = await prisma.dummyMeal.create({
        data:{
            slug: meal.slug,
            title: meal.title,
            image: meal.image,
            summary: meal.summary,
            instruction: meal.instructions,
            creator: meal.creator,
            creator_email: meal.creator_email
        }
    })
    return createdMeal;
}


