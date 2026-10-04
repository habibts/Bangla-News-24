import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface IHeadLines{
    id:string,
    title:string
}

const Marquee = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await res.json()
    const headlines:IHeadLines[]=data.data
    console.log(headlines);
    return (
        <div className="bg-red-700 text-white">
            <div className="flex max-w-7xl mx-auto">
                <div className="bg-red-800 py-1 px-5">সর্বশেষ</div>
            <MarqueeText className="py-1"
            direction="right" duration={8}>
            {
                headlines.map(h=>
                    
                <span key={h.id}>
                    <span>{h.title}</span>
                    <span className="mx-5">•</span>
                </span>)
            }
            </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;