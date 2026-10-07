import Image from 'next/image';
import React from 'react';

const NewsDetailsPage = async({params}:{params:{newsId:string}}) => {

    const {newsId}=await params
        const res=  await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
        const data= await res.json()
        const news=data.data


    return (
        <div>
            
            <h1>{news.title}</h1>
            <Image
             height={600}
              width={600}
               src={news.imageUrl}
                alt={news.title}
                >
                
            </Image>
            <p>{news.text}</p>
        </div>
    );
};

export default NewsDetailsPage;