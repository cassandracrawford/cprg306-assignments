"use client";

// Import the useUserAuth hook
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
 
export default function LandingPage() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
    // Sign in to Firebase with GitHub authentication
    const handleLogin = async() => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(`Github login failed: ${error.message}`)
        }
    }

    // Sign out of Firebase
    const handleLogout = async() => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(`Logout failed: ${error.message}`)
        }
    }
    
    return(
        <main className="m-8 mx-auto max-w-5xl px-8 text-center">
            {!user ? (
                <div>
                    <h1 className="text-5xl font-bold mb-6">Shopping List</h1>
                    <button 
                        className="flex-1 bg-[#D87280] px-4 py-2 h-14 text-sm font-bold text-white cursor-pointer hover:bg-[#A80507] rounded-2xl"
                        onClick={handleLogin}>Login with GitHub
                    </button>
                </div>
            ) : (
                <div>
                    <h1 className="text-2xl font-bold mb-6">Welcome, {user.displayName} ({user.email})</h1>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <Link href="/week-10/shopping-list" className="text-xl font-bold text-[#A80507] text-decoration-line: underline hover:text-[#D87280]">Go to Shopping List</Link>
                        <button 
                            className="flex-1 bg-[#D87280] px-4 py-2 h-14 text-sm font-bold text-white cursor-pointer hover:bg-[#A80507] rounded-2xl w-xs"
                            onClick={handleLogout}>Logout
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}