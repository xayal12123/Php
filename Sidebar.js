"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const Sidebar = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Bootstrap JS-i dinamik olaraq yükləyirik (Next.js xətası verməməsi üçün)
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  const isActive = (path) => (pathname === path ? "active-submenu" : "");

  return (
    <div id="sidebar" className="position-fixed">
      <div className="nav-header">
        <div className="brand-block">
          <span className="brand-title">testing<span>me</span></span>
          <small className="brand-subtitle">Admin Console</small>
        </div>
        <button className="btn btn-sm sidebar-collapse-btn" id="sidebarCollapseInside" type="button">
          <i className="bi bi-chevron-left"></i>
        </button>
      </div>

      <ul className="nav nav-pills flex-column mb-auto" id="sidebarMenu">
        {/* Dashboard */}
        <li>
          <a href="#contentSubmenu" data-bs-toggle="collapse" aria-expanded="true"
             className="nav-link side-main-link d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-speedometer2 me-2 sidebar-icon"></i> Dashboard
            </div>
            <i className="bi bi-chevron-down toggle-icon"></i>
          </a>
          <div className="collapse show" id="contentSubmenu" data-bs-parent="#sidebarMenu">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
              <li><Link href="/admin/articles" className={`nav-link ${isActive('/admin/articles')}`}>Articles</Link></li>
              <li><Link href="/admin/blogs" className={`nav-link ${isActive('/admin/blogs')}`}>Blogs</Link></li>
              <li><Link href="/admin/stories" className={`nav-link ${isActive('/admin/stories')}`}>Stories</Link></li>
            </ul>
          </div>
        </li>

        {/* Ticket Management */}
        <li>
          <a href="#acceptanceSubmenu" data-bs-toggle="collapse"
             className="nav-link side-main-link d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-patch-check-fill me-2 sidebar-icon"></i> Ticket Management
            </div>
            <i className="bi bi-chevron-down toggle-icon"></i>
          </a>
          <div className="collapse" id="acceptanceSubmenu" data-bs-parent="#sidebarMenu">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
              <li><Link href="/admin/article-tickets" className={`nav-link ${isActive('/admin/article-tickets')}`}>Article Tickets</Link></li>
              <li><Link href="/admin/blog-tickets" className={`nav-link ${isActive('/admin/blog-tickets')}`}>Blog Tickets</Link></li>
            </ul>
          </div>
        </li>

        {/* User Management */}
        <li>
          <a href="#userManagementSubmenu" data-bs-toggle="collapse"
             className="side-main-link nav-link d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-person-fill me-2 sidebar-icon"></i> User Management
            </div>
            <i className="bi bi-chevron-down toggle-icon"></i>
          </a>
          <div className="collapse" id="userManagementSubmenu" data-bs-parent="#sidebarMenu">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
              <li><Link href="/admin/user-management" className={`nav-link ${isActive('/admin/user-management')}`}>Dashboard</Link></li>
              <li><Link href="#" className="nav-link">Banned Users</Link></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

