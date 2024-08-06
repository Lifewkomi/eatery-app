import React from 'react'
import FloatingNav from "./floatingnavbar";
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';


export default function Demo() {

  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <IconHome className="h-4 w-4 text-white dark:text-white" />,
    },
    {
      name: 'About',
      link: '/about',
      icon: <IconUser className="h-4 w-4 text-white dark:text-white" />,
    },
    {
      name: 'Menu',
      link: '/menu',
      icon: <IconMessage className="h-4 w-4 text-white dark:text-white" />,
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: <IconMessage className="h-4 w-4 text-white dark:text-white" />,
    },
  ];

  return (
    <div className='relative'>
      <FloatingNav navItems={navItems} />
    </div>
  )
}


