"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const OverallAppSession = ({ children }) => {

    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {

        if (status === "unauthenticated") {
            router.push("/Signin")
        }



    }, [status])

    if (status === "loading") {
        return (
            <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
                <div className="text-xl font-semibold text-blue-600 animate-pulse">
                    Loading your Site...
                </div>
            </div>
        );
    }
    if (status === "authenticated") {
        return children 
    }



}






export default OverallAppSession;
