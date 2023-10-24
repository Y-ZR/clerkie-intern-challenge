"use client"

import { usePathname } from 'next/navigation';
import React, { FC } from 'react';
import { NavLink, navLinks } from '../Sidebar/sidebar';
import styles from "./header.module.css";

// Define the HeaderProps interface if needed
interface HeaderProps {
  // Define any props if the component accepts them
}

// Create the Header component as a functional component
const Header: FC<HeaderProps> = (props) => {
  // Use the usePathname hook to get the current pathname
  const pathname = usePathname();

  // Find the matching NavLink based on the pathname
  const link: NavLink | undefined = navLinks.find((navLink) => navLink.path === pathname);

  return (
    <div className={styles.header}>
      {/* Render the title from the found NavLink */}
      <div className={styles.title}>{link?.title}</div>
    </div>
  );
}

export default Header;