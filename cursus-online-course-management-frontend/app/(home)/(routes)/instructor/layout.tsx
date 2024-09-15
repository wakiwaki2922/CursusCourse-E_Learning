"use client"

import { isAdmin } from "@/lib/admin";
import { isInstructor } from "@/lib/instructor";
import { isLoggedIn } from "@/lib/login-check";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const InstructorLayout = ({
    children
}: {
    children: ReactNode
}) => {

    isLoggedIn();

    const router = useRouter();

    // useEffect(() => {
    //     if (isAdmin()) {
    //         router.push('/admin/dashboard');
    //     }
    // }, [router]);

    useEffect(() => {
        if (!isInstructor()) {
            router.push('/authenticate/login');
        }
    }, [router]);

    return (
        <>
            {children}
        </>
    );
}

export default InstructorLayout;