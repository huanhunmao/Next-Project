import path from 'path'
import fs from 'fs/promises'

function HomePage(props) {
    const {products} = props;
  return (
    <ul>
      {
        products.map(product => (
            <li key={product.id}>{product.title}</li>
        ))
      }
    </ul>
  );
}

export async function  getStaticProps(){
    // process.cwd() 表示当前文件夹
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath)
    // JSON.parse 转为数组/对象
    const data = JSON.parse(jsonData)

    return {
        props:{
            products: data.products
        }
    }
}

export default HomePage;
