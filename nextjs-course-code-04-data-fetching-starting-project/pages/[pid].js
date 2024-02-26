import path from 'path'
import fs from 'fs/promises'
import { Fragment } from 'react'

 function ProductDetailPage(props){
    const { loadedProduct } = props
    const { title, description } = loadedProduct
    
    return (
        <Fragment>
            <h1>{title}</h1>
            <p>{description}</p>
        </Fragment>
    )
}

// 用于在构建时获取并预渲染页面的静态数据
export async function getStaticProps(context){
    const { params } = context

    const paramsId = params.pid


    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath)
    // JSON.parse 转为数组/对象
    const data = JSON.parse(jsonData)

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
    return {
        paths: [
            {params: {pid: 'p1'}},
            {params: {pid: 'p2'}},
            {params: {pid: 'p3'}},
            {params: {pid: 'p4'}}
        ],
        fallback: false
    }
}

export default ProductDetailPage