'use client';

import { useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import {
  UserIcon,
  ArrowRightOnRectangleIcon,
  ChevronLeftIcon
} from '@heroicons/react/24/outline';
import { removeToken } from '@/app/utils/cookies';
import { cardcontext } from '@/app/context/scrollcardcontext';
import BlogPostForm from '../BlogPostComponent/BlogPostForm';

const Sidebar = () => {
  const { showTable, setShowTable } = useContext(cardcontext);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('dashboard');
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = Cookies.get('role');
    setRole(storedRole || '');
  }, []);

  const allMenuItems = [
   
    { id: 1, name: 'Blog Posts', icon: UserIcon },

  ];

  const filteredMenuItems = allMenuItems.filter((item) => {
    if (!role) return true;
    if (role === 'admin') return true;
    if (role === 'hr') return item.name !== 'Blog Posts';
    if (role === 'seo') return item.name === 'Blog Posts';
    return false;
  });

  const renderComponent = () => {
    switch (activeItem) {

      case 'blog posts':
        return <BlogPostForm />;

      default:
        return <div className="text-secondary small">Select a section</div>;
    }
  };

  const handleLogout = async () => {
    await removeToken();
    Cookies.remove('role');
    window.location.reload();
  };

  return (
    <div className="d-flex vh-100 bg-light">
      {/* Sidebar */}
      <div
        className={`d-flex flex-column border-end bg-white shadow-sm position-fixed h-100 transition-sidebar ${
          isSidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'
        }`}
      >
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between p-3 border-bottom ">
          {isSidebarOpen && (
            <h5 className="fw-bold text-danger mb-0">Dashboard</h5>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="btn btn-sm btn-outline-danger rounded-circle text-danger"
          >
            <ChevronLeftIcon
              className={`icon ${isSidebarOpen ? '' : 'rotated'}`}
              style={{ width: '20px', height: '20px' }}
            />
          </button>
        </div>

        {/* Menu */}
        <nav className="nav flex-column mt-2 text-danger">
          {filteredMenuItems?.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name.toLowerCase();
            return (
              <button
                key={item.id}
                className={`btn text-start d-flex align-items-center text-dark px-3 py-2 border-0 rounded-0 w-100 ${
                  isActive
                    ? 'bg-danger-subtle text-danger fw-semibold border-start border-4 border-danger'
                    : 'text-danger'
                }`}
                onClick={() => {
                  setActiveItem(item.name.toLowerCase());
                  if (item.name.toLowerCase() === 'receipts') {
                    setShowTable(false);
                  }
                }}
              >
                <Icon
                  className="me-2"
                  style={{
                    width: '18px',
                    height: '18px',
                    color: isActive ? 'red' : '#6c757d',
                  }}
                />
                {isSidebarOpen && item.name}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="mt-auto border-top">
          <button
            onClick={handleLogout}
            className="btn text-start d-flex align-items-center px-3 py-2 border-0 w-100 text-secondary hover-bg-warning"
          >
            <ArrowRightOnRectangleIcon
              className="me-2"
              style={{ width: '18px', height: '18px', color: '#6c757d' }}
            />
            {isSidebarOpen && 'Logout'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main
        className={`flex-grow-1 p-4 transition-main ${
          isSidebarOpen ? 'ms-sidebar-open' : 'ms-sidebar-collapsed'
        } overflow-auto`}
      >
        {/* Mobile Toggle */}
        <div className="d-md-none mb-3">
          <button
            className="btn btn-warning text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
        </div>
        {renderComponent()}
      </main>

      {/* Custom Styles */}
      <style jsx>{`
        .transition-sidebar {
          width: 260px;
          transition: all 0.3s ease;
        }
        .sidebar-collapsed {
          width: 80px;
        }
        .icon.rotated {
          transform: rotate(180deg);
          transition: transform 0.3s ease;
        }
        .hover-bg-warning:hover {
          background-color: #fff3cd;
        }
        .transition-main {
          transition: margin-left 0.3s ease;
        }
        .ms-sidebar-open {
          margin-left: 260px;
        }
        .ms-sidebar-collapsed {
          margin-left: 80px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
