"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import Icon from '../Icon/icon';
import styles from './sidebar.module.css';

// Define an interface for navigation links
export interface NavLink {
  title: string;
  path: string;
}

// Create an array of navigation links
export const navLinks: NavLink[] = [
  { title: 'Home', path: '/' },
  { title: 'Friends', path: '/friends' }
];

// Define the Sidebar component as a functional component
const Sidebar: FC = () => {
  // Get the current pathname using usePathname hook
  const pathname = usePathname();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        {/* Display the Clerkie Icon */}
        <Icon src="/Clerkie.svg" alt="clerkie-icon" dimensions={20} />
        <span>Clerkie Challenge</span>
      </div>

      {/* Map over the navigation links and create link elements */}
      {navLinks.map((link) => (
        <Link href={link.path} key={link.path}>
          <div
            className={`${styles.link} ${pathname === link.path ? styles.activeLink : ''}`}
          >
            {/* Display the Home Icon and link title */}
            <Icon src="/Home.svg" alt="home-icon" dimensions={24} />
            <span>{link.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;