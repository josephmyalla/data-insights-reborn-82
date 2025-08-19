
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Logo } from './Logo';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-sm py-4">
      <div className="container-custom">
        <div className="flex justify-between items-center">
         <Logo/>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/" className="nav-link text-av-purple">Home</Link>
              <div className="relative group">
                <Link to="/courses" className="nav-link flex items-center text-av-purple">
                  Courses
                </Link>
              </div>
              <div className="relative group">
                <Link to="/articles" className="nav-link flex items-center text-av-purple">
                  Articles
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
               <Button variant="outline" className="border-av-purple text-av-purple hover:bg-av-purple hover:text-white">
               Login/Register
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="p-2">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 space-y-2">
            <Link to="/" className="block py-2 nav-link">Home</Link>
            <div className="py-2">
              <button className="nav-link flex items-center" onClick={() => {}}>
                Courses 
              </button>
              <div className="pl-4 mt-1 space-y-1">
                <Link to="/courses/data-science" className="block py-1 text-sm text-av-gray hover:text-av-blue">Programming Basics</Link>
                <Link to="/courses/machine-learning" className="block py-1 text-sm text-av-gray hover:text-av-blue">Machine Learning</Link>
                <Link to="/courses/deep-learning" className="block py-1 text-sm text-av-gray hover:text-av-blue">Generative AI & AI Agents</Link>
              </div>
            </div>
            <div className="py-2">
              <button className="nav-link flex items-center" onClick={() => {}}>
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="pl-4 mt-1 space-y-1">
                <Link to="/resources/blogs" className="block py-1 text-sm text-av-gray hover:text-av-blue">Blogs</Link>
                <Link to="/resources/tutorials" className="block py-1 text-sm text-av-gray hover:text-av-blue">Tutorials</Link>              </div>
            </div>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="border-av-purple text-av-purple hover:bg-av-purple hover:text-white">
                Sign In
              </Button>
              <Button className="bg-av-purple hover:bg-av-purple-dark text-white">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
