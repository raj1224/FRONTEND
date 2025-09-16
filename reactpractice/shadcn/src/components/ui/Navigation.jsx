import React from 'react'
import { Link,useLocation } from 'react-router-dom';
// import {moon ,sun, X } from 'lucide-react';

import { useState,useEffect } from 'react';
// import { cn } from '../../lib/utils.js';
import { cn } from "../../lib/utils.js";

const Navigation = () => {
    const location = useLocation();
    const [isDark, setDark] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems=[
        {name:"Home",path:"/"},
        {name:"About",path:"/about"},
        {name:"projects",path:"/projects"},
        {name:"Contact",path:"/Contact"},
    ]

    const isActiveRoute =(path)=>{
        return location.pathname === path;
    }
  return (
    <nav className='bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <Link to={"/"} className='text-2xl font-bold text-foreground hover:text-primary transition-colors'>Portfolio</Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
                {navItems.map((item)=>(
                    <Link key={item.name} to={item.path} className={cn("text-sm font-medium transition-colors hove:text-primary",
                        isActiveRoute(item.path)?
                        "text-primary border-b-2 border-primary pb-1"
                        :"text-muted-foreground"
                    )}>
                        {item.name}
                    </Link>

                ))}
            </div>

        </div>

    </nav>
  )
}

export default Navigation