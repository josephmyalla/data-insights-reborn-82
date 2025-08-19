
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MyLayout from "@/components/CustomLayout"
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CourseCard from "@/components/CourseCard";
import CategoryCard from "@/components/CategoryCard";
import Newsletter from "@/components/Newsletter";
import { ChevronRight, Database, BookOpen, BarChart, Code, TrendingUp, Key } from "lucide-react";
import Testimonials from "@/components/Testmonials";
import { articles } from "@/lib/articles";
import { courses } from "@/lib/courses";
import { Servces } from "@/lib/services";
import { statistics } from "@/lib/stats";
import Technologies from "@/components/Technologies";
import { LogoTicker } from "@/components/LogoTicker";

// Component to render the icon dynamically
const DynamicIcon = ({ name, size = 32 }) => {
  const icons = {
    Database: <Database size={size} />,
    BarChart: <BarChart size={size} />,
    BookOpen: <BookOpen size={size} />,
    Code: <Code size={size} />
  };
  
  return icons[name] || null;
};

const Index = () => {
 
  return (
    <MyLayout>
      <NavBar />
      
      {/* Hero Section */}
      <section className="text-white py-20">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="animate-fade-in text-center flex flex-col items-center gap-8" style={{ animationDelay: "0.2s" }}>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-2 ">
                Enhance <span className="hero-title">Efficiency With</span>  </h1>

                <h1 className="text-4xl sm:text-5xl font-bold ">AI Automation
              </h1>
              <p className="text-lg mb-8 text-gray-200 w-3/4">
                Transform workflows across industries with intelligent AI agents. Easily build and deploy automated solutions using any AI Frameworks and any or multiple LLMs by  hosting on your infrastructure or on cloud platforms scaling efficiency and innovation effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-av-purple-dark hover:bg-gray-100">
                  Explore Courses
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Browse Articles
                </Button>
              </div>
            </div>
         
          </div>
        </div>
      </section>

      {/* LLM and Framework Logos*/}
        <LogoTicker />
      {/* Categories Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Explore Trending AI Solutions</h2>
            <p className="text-av-gray max-w-2xl mx-auto text-[22px]">
              Choose from a variety of llms, GEN AI, AI Agents suitable for your niche to help you achieve your goals  at 100x speed .
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {
              Servces.map((service,index)=>{
                return(
                   <CategoryCard 
                   key={index}
              title={service.title} 
              description={service.description}
               icon={<DynamicIcon name={service.icon} />}
              url={service.url}
              color={service.color}
            />
                )
              })
           }
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
             <div className="flex flex-col items-start">
              <h2 className="section-title mb-2">Available Courses</h2>
              <p className="text-av-gray text-[22px]">Expert-led courses to advance your AI skills</p>
            </div>
            <Link to="/courses" className="mt-4 md:mt-0 flex items-center text-av-purple font-medium hover:text-av-purple-dark transition-colors">
              View All Courses <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map(course => (
              <CourseCard 
                key={course.id}
                image={course.image}
                title={course.title}
                description={course.description}
                level={course.level}
                duration={course.duration}
                price={course.price}
                instructor={course.instructor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {
        false && (
          <section className="py-20 bg-av-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {
              statistics.map((stats,index)=>{
                return(
                  <div key={index}>
                  <div>
              <div className="text-4xl font-bold mb-2 text-av-purple">{stats.qty}</div>
              <p className="text-gray-300">{stats.experts}</p>
            </div>
            </div>
                )
              })
            }
            
          </div>
        </div>
      </section>
        )
      }

      {/* Latest Articles Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex flex-col items-start">
              <h2 className="section-title mb-2">Latest Articles</h2>
              <p className="text-av-gray text-[22px]">Fresh insights and tutorials to keep you in pace with AI trends</p>
            </div>
            <Link to="/articles" className="mt-4 md:mt-0 flex items-center text-av-purple font-medium hover:text-av-purple-dark transition-colors">
              View All Articles <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map(article => (
              <ArticleCard 
                key={article.id}
                image={article.image}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                author={article.author}
                date={article.date}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      
      <Technologies />

      {/* Testimonials Section */}

      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-av-purple to-av-purple-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="newsletter-title mb-4">Ready to engage AI in Your Business?</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">
              Join our community utilising AI to 10X your business.
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-av-purple-dark hover:bg-gray-100">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <Newsletter />
      
      {/* Footer */}
      <Footer />
    </MyLayout>
  );
};

export default Index;
