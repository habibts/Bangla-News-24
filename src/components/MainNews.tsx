import Image from 'next/image';
import React from 'react';

interface INews{
    id:string;
    title:string;
    description:string;
    category:string;
    imageUrl:string;
    imageAlt:string;
}

const MainNews = ({ news }:{news:INews[]}) => {
const [firstNews,...otherNews]=news
    
    return (
        <div className='flex gap-2'>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <Image
                        height={600}
                        width={600}
                        src={firstNews.imageUrl}
                        alt={firstNews.imageAlt} />
                </figure>
                <div className="card-body">
                    <p className='text-red-600 font-semibold'>{firstNews.category}</p>
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>
                    
                </div>
            </div>
            <div className='grid gap-2'>
                {
                    otherNews.slice(0,4).map(on=>
                        <div key={on.id} className="card bg-base-100 border border-gray-300 py-5">
                            <p className='text-red-600 font-semibold'>{on.category}</p>
                            <div>
                                {on.title}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MainNews;