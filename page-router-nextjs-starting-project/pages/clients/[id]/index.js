import {useRouter} from 'next/router'

function ClientProjectPage(){
    const router = useRouter()

    console.log(router.query); // {id: '123'}

    function loadProjectHandler(){
        // load data

        // 第一种写法 
        // router.push('/clients/max/projectsMax') // {id: 'max', clientprojectid: 'projectsMax'}

        // 第二种写法 
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {
                id: 'max',
                clientprojectid: 'projectsMax'
            }
        })
        }
    
    return (
        <div>
            <h1>The client project Page</h1>
            <button onClick={loadProjectHandler}>Load Page A</button>
        </div>
    )
}

export default ClientProjectPage