import { Link } from 'react-router-dom';
import { Code } from 'lucide-react';
export const Logo=()=>(
     
              <Link to="/" className="flex items-center space-x-2">
               
                 <Code className={`h-4 w-6 text-av-purple`} />

               
                <span className="text-2xl font-bold gradient-text">JMyalla</span>
              </Link>
    
)