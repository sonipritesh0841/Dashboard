// src/components/SidebarLink.jsx
import Link from 'next/link';

const SidebarLink = ({ icon: Icon, label, active = false }) => (
  <Link 
    href="#" 
    className={`flex items-center space-x-2 px-4 py-2 rounded ${active ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
  >
    <Icon size={20} />
    <span>{label}</span>
  </Link>
);

export default SidebarLink;
