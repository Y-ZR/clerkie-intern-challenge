"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './sidebar.module.css';
import Icon from '../Icon';

// Define the interface for NavLink
export interface NavLink {
  title: string;
  path: string;
}

// Define an array of navigation links
export const navLinks: NavLink[] = [
  { title: 'Home', path: '/' },
  { title: 'Friends', path: '/friends' },
];

// Create the SideBar functional component
const SideBar: React.FC = () => {
  // Get the current pathname using usePathname hook
  const pathname = usePathname();

  // Construct the JSX for the SideBar
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        {/* Render the Icon component with specific props */}
        <Icon title="Clerkie" dimensions={20} spaced={true} />
        <span>Clerkie Challenge</span>
      </div>
      {navLinks.map((link) => (
        // Create links using the Link component
        <Link href={link.path} key={link.path}>
          <div
            className={`${styles.link} ${
              pathname === link.path ? styles.activeLink : ''
            }`}
          >
            {/* Render the Icon component for each link with specific props */}
            <Icon title={link.title} dimensions={24} spaced={true} />
            <span>{link.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;