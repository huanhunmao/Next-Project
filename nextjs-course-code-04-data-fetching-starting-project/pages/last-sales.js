import {useState, useEffect} from 'react'
import useSWR from 'swr';

function LastSalesPage(){
    const [sales, setSales] = useState()

    // 定义一个异步获取数据的函数
const fetchData = async () => {
    const response = await fetch('https://nextjs-50eda-default-rtdb.firebaseio.com/sales.json');
    const data = await response.json();
        const transformData = []
        for(let key in data){
            transformData.push({
                id: key,
                username: data[key].username,
                volume: data[key].volume
            })
        }

        setSales(transformData)
        return data;
  };

  
    const { data, error } = useSWR('data',fetchData);
    console.log(data);

    if (error) {
        return <p>Has errors</p>;
    }

    if (!data || !sales) {
        return <p>Loading ...</p>;
    }

    const transformData = Object.entries(data).map(([id, { username, volume }]) => ({
        id,
        username,
        volume,
    }));

    if (transformData.length === 0) {
        return <p>No data yet</p>;
    }

    // useEffect(() => {
    //     setIsLoading(true)
    //     fetch('https://nextjs-50eda-default-rtdb.firebaseio.com/sales.json',)
    //         .then(data => data.json())
    //         .then(data => {
    //             const transformData = []
    //
    //             for(let key in data){
    //                 transformData.push({
    //                     id: key,
    //                     username: data[key].username,
    //                     volume: data[key].volume
    //                 })
    //             }
    //             console.log(transformData)
    //             setSales(transformData)
    //
    //             setIsLoading(false)})
    //         .catch(e => console.error(e))
    // },[])


    return (
        <ul>
        {
            sales.map(item => (
                <li key={item.id}>
                    {item.username}-${item.volume}
                </li>
            ))
        }
        </ul>
    )
}

export default  LastSalesPage