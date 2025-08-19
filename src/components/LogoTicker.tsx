import {claude,ollama,gemini,langchain,langgraph,crewai, agno} from '@/lib/logos'
import {motion} from "framer-motion"

const tickers =[
  {title:"Crewai",img:crewai},
  {title:"Langgraph",img:langgraph},
  {title:"Langchain",img:langchain},
  {title:"Gemini",img:gemini},
  {title:"Ollama",img:ollama},
  {title:"Claude",img:claude},
  {title:"Agno",img:agno}

]

export const LogoTicker=()=>{
  
  return(
    <div className='py-8 md:py-12'>
      <div className='contaner'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
           <motion.div
           
            className='flex gap-14 flex-none pr-14'
              animate={{
                translateX:"-50%"
              }}
              transition={{
                duration:20,
                repeat:Infinity,
                ease:"linear",
                repeatType:"loop"
              }}
            >
              {

                [...tickers,...tickers,...tickers].map((ticker)=>{
                  return(
                    <TickerCard imgSrc={ticker.img} title={ticker.title} />
                  )
                })
              }
           </motion.div>
        </div>

      </div>

    </div>
  )
}

const TickerCard = ({ 
  imgSrc, 
  title, 
}: {
  imgSrc: string;
  title: string;
}) => {
  return (
    <div className={`rounded-2xl overflow-hidden relative group h-20 w-20 md:h-20 flex items-center justify-center`}>
      <img 
        src={imgSrc} 
        alt={title} 
        className='h-20 w-20'
      />
    </div>
  );
};