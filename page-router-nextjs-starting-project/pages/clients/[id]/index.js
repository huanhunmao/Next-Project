import {useRouter} from 'next/router'

function ClientProjectPage(){
    const router = useRouter()

    console.log(router.query); // {id: '123'}
    return (
        <div>
            <h1>The client project Page</h1>
        </div>
    )
}

export default ClientProjectPage