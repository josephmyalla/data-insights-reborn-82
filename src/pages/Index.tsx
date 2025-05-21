
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CourseCard from "@/components/CourseCard";
import CategoryCard from "@/components/CategoryCard";
import Newsletter from "@/components/Newsletter";
import { ChevronRight, Database, BookOpen, BarChart, Code, TrendingUp } from "lucide-react";

const Index = () => {
  // Sample data for articles
  const articles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      title: "10 Essential Python Libraries for Data Science in 2025",
      excerpt: "Discover the top Python libraries that every data scientist should know to stay ahead of the curve.",
      category: "Python",
      author: "Alex Johnson",
      date: "May 15, 2025"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      title: "Understanding Neural Networks: A Beginner's Guide",
      excerpt: "A comprehensive introduction to neural networks and deep learning for beginners.",
      category: "Deep Learning",
      author: "Maria Garcia",
      date: "May 10, 2025"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
      title: "Data Visualization Techniques: Best Practices for 2025",
      excerpt: "Learn how to effectively communicate insights through powerful data visualizations.",
      category: "Visualization",
      author: "David Kim",
      date: "May 5, 2025"
    }
  ];

  // Sample data for courses
  const courses = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      title: "Machine Learning Fundamentals",
      description: "Learn the core principles of machine learning algorithms and implementation.",
      level: "Beginner" as const,
      duration: "8 weeks",
      price: "$99",
      instructor: "Dr. Rebecca Chen"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      title: "Advanced Deep Learning with TensorFlow",
      description: "Master neural networks, CNN, RNN and more with practical projects.",
      level: "Advanced" as const,
      duration: "12 weeks",
      price: "$149",
      instructor: "Prof. James Wilson"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
      title: "Data Analysis with Python",
      description: "Learn how to analyze data effectively using Python and its libraries.",
      level: "Intermediate" as const,
      duration: "6 weeks",
      price: "$79",
      instructor: "Sarah Johnson"
    }
  ];

  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-av-blue to-av-purple-dark text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Master Data Science with Expert-Led Courses & Resources
              </h1>
              <p className="text-lg mb-8 text-gray-200">
                Learn from industry experts, build projects, and advance your career in data science, machine learning, and analytics.
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
            <div className="hidden md:block animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" 
                alt="Data scientists collaborating" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Learning Paths</h2>
            <p className="text-av-gray max-w-2xl mx-auto">
              Choose from a variety of specialized learning paths designed to help you achieve your career goals in data science and analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard 
              title="Data Science" 
              description="Learn the fundamentals of data science, analytics, and statistical methods."
              icon={<Database size={32} />} 
              url="/topics/data-science" 
              color="#9b87f5" 
            />
            <CategoryCard 
              title="Machine Learning" 
              description="Master algorithms, models, and real-world ML applications."
              icon={<BarChart size={32} />} 
              url="/topics/machine-learning" 
              color="#FF6B6B" 
            />
            <CategoryCard 
              title="Deep Learning" 
              description="Explore neural networks, computer vision, and NLP."
              icon={<BookOpen size={32} />} 
              url="/topics/deep-learning" 
              color="#4ECDC4" 
            />
            <CategoryCard 
              title="Programming" 
              description="Build strong coding foundations with Python, R, and SQL."
              icon={<Code size={32} />} 
              url="/topics/programming" 
              color="#FFD166" 
            />
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-av-gray-light">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Courses</h2>
              <p className="text-av-gray">Expert-led courses to advance your data skills</p>
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
      <section className="py-20 bg-av-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-av-purple">100+</div>
              <p className="text-gray-300">Expert Instructors</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-av-purple">500+</div>
              <p className="text-gray-300">Video Courses</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-av-purple">2M+</div>
              <p className="text-gray-300">Community Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-av-purple">95%</div>
              <p className="text-gray-300">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
              <p className="text-av-gray">Fresh insights and tutorials from our experts</p>
            </div>
            <Link to="/blog" className="mt-4 md:mt-0 flex items-center text-av-purple font-medium hover:text-av-purple-dark transition-colors">
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
      <section className="py-20 bg-av-gray-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trending Topics</h2>
            <p className="text-av-gray max-w-2xl mx-auto">
              Explore the most popular topics in data science and analytics right now.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {[
              "Python for Data Science", "TensorFlow", "Neural Networks", 
              "Deep Learning", "Data Visualization", "Natural Language Processing", 
              "Computer Vision", "Machine Learning Algorithms", "Big Data", 
              "Data Engineering", "SQL", "Data Analytics", "R Programming",
              "Statistical Analysis", "Time Series Analysis", "Pandas", "NumPy"
            ].map((topic, index) => (
              <Link 
                key={index}
                to={`/topic/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white px-4 py-2 rounded-full text-sm text-av-blue hover:bg-av-purple hover:text-white transition-colors duration-200"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-av-gray max-w-2xl mx-auto">
              Hear from our community members who transformed their careers with our resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-av-purple rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-medium">Jennifer Davis</h4>
                  <p className="text-sm text-av-gray">Data Scientist at Tech Corp</p>
                </div>
              </div>
              <p className="text-av-gray">
                "The machine learning courses helped me transition from a business analyst to a data scientist role. The practical projects were especially valuable."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-av-purple rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MT
                </div>
                <div>
                  <h4 className="font-medium">Michael Thompson</h4>
                  <p className="text-sm text-av-gray">ML Engineer at StartupXYZ</p>
                </div>
              </div>
              <p className="text-av-gray">
                "I had zero coding experience when I started. Now I'm working as an ML engineer, all thanks to the step-by-step curriculum and supportive community."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-av-purple rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SP
                </div>
                <div>
                  <h4 className="font-medium">Sarah Parker</h4>
                  <p className="text-sm text-av-gray">Analytics Manager at Fortune 500</p>
                </div>
              </div>
              <p className="text-av-gray">
                "The advanced analytics courses helped me lead data initiatives at my company. The ROI of these courses has been incredible for my career growth."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-av-purple to-av-purple-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Data Science Journey?</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">
              Join our community of over 2 million data enthusiasts and accelerate your career.
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-av-purple-dark hover:bg-gray-100">
              Get Started For Free
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <Newsletter />
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;
