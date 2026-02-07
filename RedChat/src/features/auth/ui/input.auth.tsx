import { useRef, useState, useEffect, type JSX, type MouseEventHandler } from "react";
import { EyeClosed } from 'lucide-react';
import { Eye} from 'lucide-react';

interface InputProps {
    label: string;
    type: string;
    Icon: JSX.Element;
    placeholder: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;



    
}

const Input = (): React.ReactElement => {
  
 
  return (
    <div className="mb-6 relative">
   
        <label
          htmlFor={}
          className="text-gray-200 text-sm font-medium mb-2 flex items-center gap-2"
        >
           <Icon stroke="#ff6251" size={17} />
      
        </label>
    
      <div className="relative">
        
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          </div>
        
        <input className="w-full pl-12 pr-4 py-3.5 bg-[#0a0e27]/60 border border-red-900/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600/50 transition-all duration-200"
        />
        
          <button
            type="button"
            onClick={}
            className="absolute inset-y-0 right-4 flex items-center text-gray-400"
            aria-label=''
          >
            <Eye color='#ff6251'/> <EyeClosed color='#ff6251'/>
          </button>
    
      </div>
    </div>
  );
};

export default Input