
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, Search, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container-custom">
        <div className="flex justify-between items-center">
         <Logo/>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/" className="nav-link">Home</Link>
              <div className="relative group">
                <button className="nav-link flex items-center">
                  Courses <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2 hidden group-hover:block z-10">
                  <Link to="/courses/data-science" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">Data Science</Link>
                  <Link to="/courses/machine-learning" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">Machine Learning</Link>
                  <Link to="/courses/deep-learning" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">Deep Learning</Link>
                </div>
              </div>
              <div className="relative group">
                <button className="nav-link flex items-center">
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2 hidden group-hover:block z-10">
                  <Link to="/resources/blogs" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">Blogs</Link>
                  <Link to="/resources/tutorials" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">Tutorials</Link>
                  <Link to="/resources/webinars" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">Webinars</Link>
                </div>
              </div>
              <Link to="/community" className="nav-link">Community</Link>
              <Link to="/about" className="nav-link">About</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-av-gray hover:text-av-blue">
                <Search className="h-5 w-5" />
              </button>
              <Button variant="outline" className="border-av-purple text-av-purple hover:bg-av-purple hover:text-white">
                Sign In
              </Button>
              <Button className="bg-av-purple hover:bg-av-purple-dark text-white">
                Sign Up
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
                Courses <ChevronDown className="ml-1 h-4 w-4" />
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
