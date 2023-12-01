"use client";

import {useUserAuth} from "./_utils/auth-context";
import Link from "next/link";

export default function Page()
{

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    return(

        <main>
            <header>

                <h1>Login Page</h1>
            </header>
            <section>
                {user ? (
                    <div>
                        <p>Welcome, {user.displayName}</p>
                        <img src={user.photoURL} className="w-8 h-8"/>
                        <Link href="week8/shopping-list">Click to go to shopping list</Link>
                        <button
                        className="text-lg m-2 hover:underline"
                        onClick={handleSignOut}>Sign Out</button>
                    </div>

                ) : (
                    <button
                    className="text-lg m-2 hover:underline"
                    onClick={handleSignIn}>Sign in</button>
                )}
            </section>


        </main>

    )
}