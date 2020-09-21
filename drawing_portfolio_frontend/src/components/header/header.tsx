import React from 'react';
import { useState } from "react";
import { motion, AnimateSharedLayout, Spring } from "framer-motion";

//----css----//
import './header.scss'

//----types----//
type LinksProps = {
    path: string,
    name: string,
    isSelected: Boolean,
    onHover : () => void ,
    onClick : () => void 
}

type Link = {
    path: string,
    name: string
}


//----static----//
const spring : Spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
};


const links : Link[] = [
    {
        path: "#",
        name: "Home"
    },
    {
        path: "#",
        name: "Drawing"
    },
    {
        path: "#",
        name: "Photohraphy"
    },
    {
        path: "#",
        name: "Shop"
    },
    {
        path: "#",
        name: "About"
    },
]


//----components----//
function Link({path,name,isSelected,onHover,onClick} : LinksProps){
    return(
        <a  className={`header__link`}  
            href={path} 
            onClick={onClick}
            onMouseEnter={onHover}>

            <span>{name}</span>

            {isSelected && (
            <motion.div
                layoutId="outline"
                className="header__link__bg"
                initial={false}
                whileHover={{ opacity: 0 }}
                transition={spring}
            />)}

        </a>
    )
}


function Header(){

    const [selected, setSelected] = useState(links[0]);
    const [activeLink, setActiveLink] = useState(links[0]);


    console.log(selected)
    return(
        <header className="header">
            <div className="header__inner">
    
            <a className="header__logo__container" href="/">
                <div className="header__logo"></div>
                <h1 className="header__logo__title">Simon Renault</h1>
            </a>
           
            <div className="nav" onMouseLeave={() => setSelected(activeLink)} >
                <AnimateSharedLayout>

                    {links.map((link,index) => (
                        <Link
                            key={index + 'link'}
                            path={link.path}
                            name={link.name}
                            isSelected={selected === link}
                            onClick={()=> setActiveLink(link)}
                            onHover={() => setSelected(link)}
                        />
                    ))}

                </AnimateSharedLayout>
            </div>
    
            </div>
      </header>
    )
}


export default Header