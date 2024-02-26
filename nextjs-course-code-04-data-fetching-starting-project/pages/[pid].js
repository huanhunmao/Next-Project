import path from 'path'
import fs from 'fs/promises'
import { Fragment } from 'react'

// npm run build 
 function ProductDetailPage(props){
    const { loadedProduct } = props

    if(!loadedProduct){
        return <p>Loading ... </p>
    }

    const { title, description } = loadedProduct
    
    return (
        <Fragment>
            <h1>{title}</h1>
            <p>{description}</p>
        </Fragment>
    )
}

async function getData(){
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath)
    // JSON.parse 转为数组/对象
    const data = JSON.parse(jsonData)

    return data
}

// 用于在构建时获取并预渲染页面的静态数据
export async function getStaticProps(context){
    const { params } = context

    const paramsId = params.pid

    const data = await getData()

    const product = data.products.find(product => product.id === paramsId)

    return {
        props: {
            loadedProduct: product
        }
    }

}

// 用于在构建时为具有动态路由的页面预先生成静态路径
// 当应用中有需要根据动态参数（例如 /posts/[id].js 中的 [id]）来渲染不同内容的页面时，
// Next.js 需要知道应该为哪些参数值创建预渲染的静态页面
export async function getStaticPaths(){
    const data = await getData()
    const ids = data.products.map(product => product.id)
    const pathWithParams = ids.map(id => ({
        params: {pid: id}
    }))
    
    return {
        paths: pathWithParams,
        // fallback: false  // 如果写 false 上面 paths 中没有预先写好 就会 404
        // fallback: true // 直接点击链接 可以进入 但如果直接输入 url 比如 http://localhost:3000/p2 就会报错需要上面加检查  if(!loadedProduct){...}
        fallback: 'blocking' // 将在服务器端阻塞并立即生成该页面  速度会慢些  临时生成 生成好后展示
    }
}

export default ProductDetailPage