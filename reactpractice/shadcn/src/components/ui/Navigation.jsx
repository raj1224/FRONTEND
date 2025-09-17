import React from 'react'
import { Link,useLocation } from 'react-router-dom';
import {Menu, Moon ,Sun, X } from 'lucide-react';



import { useState,useEffect } from 'react';
// import { cn } from '../../lib/utils.js';
import { cn } from "../../lib/utils.js";
import { Button } from './button.jsx';

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

    useEffect(() => {
        const isDarkMode = localStorage.getItem("theme")=== "dark";
        setDark(isDarkMode);
        if(isDarkMode){
            document.documentElement.classList.add("dark");
        }
    }, [])

    const toggleTheme =()=>{
        const newTheme = !isDark;
        setDark(newTheme);
        if(newTheme){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
        }else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    }
    

    const isActiveRoute =(path)=>{
        return location.pathname === path;
    }
  return (
    <nav className='bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
                <Link to={"/"} className='text-2xl font-bold text-foreground hover:text-primary transition-colors'>Portfolio</Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
                {navItems.map((item)=>(
                    <Link key={item.name} to={item.path} className={cn("text-sm font-medium transition-colors hove:text-primary",
                        isActiveRoute(item.path) ? "text-primary border-b-2 border-primary pb-1" : "text-muted-foreground"
                    )}>
                        {item.name}
                    </Link>

                ))}
            </div>
            

                <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}>
                    {isDark ? <Sun className='h-4 w-4'/> : <Moon className='h-4 w-4' />}
                </Button>
            </div>
            <div className='md:hidden flex items-center space-x-2'>
                <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}>
                    {isDark ? <Sun className='h-4 w-4'/> : <Moon className='h-4 w-4' />}
                </Button>
                <Button
                variant="ghost"
                size="icon"
                onClick={()=>setMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X className='h-4 w-4'/> : <Menu className='h-4 w-4' />}
                </Button>
            </div>
            {isMobileMenuOpen && (
                <div className='md:hidden border-t border-border'>
                    <div className='px-2 pt-2 pb-3 space-y-1 '>
                        {navItems.map((item)=>(
                            <Link key={item.name} to={item.path} className={cn("block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-primary",
                                isActiveRoute(item.path) ? "text-primary bg-accent" : "text-muted-foreground"
                            )}
                            onClick={()=>setMobileMenuOpen(false)}>
                                {item.name}
                            </Link>
                        ))}

                    </div>
                </div>
            )}
        </div>

    </nav>
  )
}

export default Navigation