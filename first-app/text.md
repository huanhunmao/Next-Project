生产环境的新增图片 无法 显示出来 

因为图片 存储在本地 

需要 是 aws s3  将图片 放到 云端 

然后 新增时候 拉下来  用

最关键步骤 如下 


<!-- app/meals/[mealSlug]/page.js -->

<Image
  src={`https://maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com/${meal.image}`}
  alt={meal.title}
  fill
/>

 <!-- next.config.js file -->

 const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};


<!-- lib/meals.js -->

npm install @aws-sdk/client-s3



import { S3 } from '@aws-sdk/client-s3';

const s3 = new S3({
  region: 'us-east-1'
});
const db = sql('meals.db'); // <- this was already there!

export async function saveMeal(meal) {
...
 
  s3.putObject({
    Bucket: 'maxschwarzmueller-nextjs-demo-users-image',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });
...
}