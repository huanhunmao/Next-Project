import {useRouter} from 'next/router'

function BlogPostPage(){
    const router = useRouter()

    console.log(router.query); 
    // {
    //     "slug": [
    //         "2022",
    //         "12"
    //     ]
    // }

    return (
        <div>
            <h1>The Blog Post Page</h1>
        </div>
    )
}

export default BlogPostPage