import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            {/* Mobile hamburger */}
                            <div className="flex items-center lg:hidden">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                                    onClick={toggleSidebar}
                                >
                                    <span className="sr-only">Abrir menu</span>
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Logo */}
                            <div className="flex-shrink-0 flex items-center">
                                <Link href="/dashboard" className="text-xl font-semibold text-blue-600">
                                    Sistema de Tickets
                                </Link>
                            </div>
                        </div>

                        {/* User menu */}
                        <div className="flex items-center">
                            <div className="ml-3 relative">
                                <div>
                                    <button
                                        type="button"
                                        className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        id="user-menu-button"
                                    >
                                        <span className="sr-only">Abrir menu do usuário</span>
                                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                            U
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <aside
                    className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        } lg:translate-x-0 fixed lg:relative inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:flex lg:flex-col`}
                >
                    <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <nav className="mt-5 px-2 space-y-1">
                            <Link
                                href="/dashboard"
                                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                            >
                                <svg
                                    className="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                Dashboard
                            </Link>

                            <Link
                                href="/tickets"
                                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                            >
                                <svg
                                    className="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                    />
                                </svg>
                                Tickets
                            </Link>

                            <Link
                                href="/tickets/new"
                                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                            >
                                <svg
                                    className="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                Novo Ticket
                            </Link>

                            <Link
                                href="/categorias"
                                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                            >
                                <svg
                                    className="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                    />
                                </svg>
                                Categorias
                            </Link>

                            <Link
                                href="/usuarios"
                                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                            >
                                <svg
                                    className="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                                Usuários
                            </Link>

                            <Link
                                href="/login"
                                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                            >
                                <svg
                                    className="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    />
                                </svg>
                                Sair
                            </Link>
                        </nav>
                    </div>
                </aside>

                {/* Mobile sidebar backdrop */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 z-30 bg-gray-600 bg-opacity-50 lg:hidden"
                        onClick={toggleSidebar}
                    ></div>
                )}

                {/* Main content */}
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout; 