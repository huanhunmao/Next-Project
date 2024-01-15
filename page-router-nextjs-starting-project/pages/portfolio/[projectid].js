import {useRouter} from 'next/router'

function PortfolioProjectPage(){
    const router = useRouter()

    console.log(router.pathname); // /portfolio/[projectid]
    console.log(router.query); // {projectid: 'xxx'}

    return (
        <div>
            <h1>The Portfolio Project Page</h1>
        </div>
    )
}

export default PortfolioProjectPage