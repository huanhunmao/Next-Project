import {useRouter} from 'next/router'

function ClientProjectDetailPage(){
    const router = useRouter()

    console.log(router.query); // {id: '123', clientprojectid: '999'}
    return (
        <div>
            <h1>The client project detail Page</h1>
        </div>
    )
}

export default ClientProjectDetailPage