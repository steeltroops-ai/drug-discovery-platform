'use client'
import React, {useState, useLayoutEffect} from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import {useSession} from 'next-auth/react';
import {useRouter, usePathname} from 'next/navigation';

export default function DefualtLayout({children,}:{
    children: React.ReactNode;
}){
    const [sideBarOpen, setSidebarOpen] = useState(false);
    const {data: session, status} = useSession();
    const router = useRouter();
    const pathname = usePathname();

    const publicRoutes = [
        "/auth-pages/signin",
        "/auth-pages/signup",
        "/verify-email",
        "/reset-password",
    ];

    useLayoutEffect(() => {
        if (status === "unauthenticated" && !publicRoutes.includes(pathname)) {
            router.push("/auth-pages/signin");
        }
    }, [status, pathname, router]);

    return(
        <>
        <div className='flex'>
            <Sidebar open={sideBarOpen} setOpen={setSidebarOpen} />
            <div className='relative flex flex-1 felx-col lg:ml-72.5'>
                <main>
                    <div className='mx-auto max-w-screen-2xl p-4 dark:bg[#121212] md:p-6 2xl:p-10'>
                        {children}
                    </div>
                </main>
            </div>

        </div>
        </>
    )

} 
