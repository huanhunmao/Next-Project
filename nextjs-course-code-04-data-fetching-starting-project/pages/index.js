import path from 'path'
import fs from 'fs/promises'
import Link from 'next/link'

function HomePage(props) {
    const {products} = props;
  return (
    <ul>
      {
        products.map(product => (
            <li>
            <Link href={`/${product.id}`}>{product.title}</Link>
            </li>
        ))
      }
    </ul>
  );
}

export async function  getStaticProps(){
    // console.log('Re generating');
    // process.cwd() 表示当前文件夹
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath)
    // JSON.parse 转为数组/对象
    const data = JSON.parse(jsonData)

    // 拿不到数据时
    if(!data){
        return {
            redirect: {
                destination: '/no-data'
            }
        }
    }

    // 获取数据为 空
    if(data.products.length === 0){
        return {
            notFound: true
        }
    }

    return {
        props:{
            products: data.products
        },
        revalidate: 10, // 生产环境会根据 这个值获得更新的内容  比如10s 内多次内容更新会在 一次内容更新后 10s 再进行
        // notFound: true，
        // redirect: {
        //     destination: '/no-data'
        // }
    }
}

export default HomePage;
