import { Link } from "react-router-dom";

const colors =["hover:bg-av-purple","hover:bg-av-pink","hover:bg-av-blue","hover:bg-av-gray"]
let randnumber = Math.floor(Math.random() * 7);
const Technologies =()=>{
    return(
        <section className="py-20 bg-av-gray-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Technologies I can offer solutions with</h2>
            <p className="text-av-gray max-w-2xl mx-auto text-[22px]">
              With over 20 years in tech, teaching, networking, software development in different entities, I have touched many stack, and still learning.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {[
              "Python", "PyTorch", "Neural Networks", 
              "Linux Server Management", "RAG", "AI Agents", 
              "Computer Vision", "React JS", "MySql", 
              "Javascript", "SQL", "React Native", "TypeScrpt",
              "Laravel", "Tailwindcss", "Pandas", "MongoDB"
            ].map((topic, index) => (
              <Link 
                key={index}
                to={`/topic/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                className={`bg-white px-4 py-2 rounded-full text-sm text-av-blue ${colors[2]} hover:text-white transition-colors duration-200`}
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Technologies