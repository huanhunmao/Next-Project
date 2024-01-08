import fs from 'node:fs'
import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

const db = sql('meals.db')

export async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve,2000))
    return await db.prepare('SELECT * FROM meals').all()
}

export  function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export function saveMeal(meal){
    meal.slug = slugify(meal.title, {lower: true})
    meal.instructions = xss(meal.instructions)

    const extension = meal.image && meal.image.split('.').pop() || ''
    const fileName = `${meal.slug}.${extension}`

    // 如何使用 fs 将图片存储到 本地 file 内 而不是 存到服务器
    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage = meal.image && meal.image.arrayBuffer()

    meal.image && stream.write(Buffer.from(bufferedImage, error => {
        if(error){
            // throw new Error('Saving image failed!')
            console.error(error)
        }
    }))

    meal.image = `/images/${fileName}`

    // db 存储
    db.prepare(`
    INSERT INTO meals 
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title, 
            @summary, 
            @instructions, 
            @creator,
            @creator_email,
            @image,
            @slug
        )
    `).run(meal)
}