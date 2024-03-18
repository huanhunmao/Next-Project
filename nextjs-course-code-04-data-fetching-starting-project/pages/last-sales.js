import {useState, useEffect} from 'react'

function LastSalesPage(){
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://nextjs-50eda-default-rtdb.firebaseio.com/sales.json',)
            .then(data => data.json())
            .then(data => {
                const transformData = []

                for(let key in data){
                    transformData.push({
                        id: key,
                        username: data[key].username,
                        volume: data[key].volume
                    })
                }
                console.log(transformData)
                setData(transformData)

                setIsLoading(false)})
            .catch(e => console.error(e))
    },[])


    if(isLoading){
        return <p>Loading ...</p>
    }

    if(!data){
        return <p>No data yet</p>
    }

    return (
        <ul>
        {
            data.map(item => (
                <li key={item.id}>
                    {item.username}-${item.volume}
                </li>
            ))
        }
        </ul>
    )
}

export default  LastSalesPage