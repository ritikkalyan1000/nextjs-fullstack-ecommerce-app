
import React from 'react'
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
import connecttodb from '@/utils/connect'

import User from '@/model/UserModel'
import bcrypt from "bcryptjs"

const AuthOpt = {
    providers: [
        CredentialsProvider({ // this is a function call 
            name: "Credentails",
            id: "credentials"

            , async authorize(credentials) {  // this is same as defining authorize : async function(credentails) - this is anonoymous function without name but it has key therefore it is okay
                // we ahve everything in credentials


                try {

                    await connecttodb();

                    // checek user

                    const email_check = await User.findOne({ email: credentials.email });

                    if (!email_check) {
                        throw new Error("User not found try again - wrong email")
                    }

                    // means user is stored in our db

                    // check password
                    const pass_check = await bcrypt.compare(credentials.password, email_check.password)

                    if (!pass_check) {
                        throw new Error("User not found try again - Wrong password")
                    }

                    // Verified User
                    // console.log(email_check);

                    return { id: email_check._id.toString(),email:email_check.email } // we call this return user-> { id: email_check._id.toString()}  // we return id of the user to next methods like session callback-> jwt ,session,pages,secret


                } catch (error) {
                    throw new Error("internal error")
                }



            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.email = user.email
            }
            return token
        },
        async session({ token, session }) {
            session.user.id = token.id
            session.user.email = token.email;
            return session
        }
    },
    pages: {
        signIn: "/Login",
        error: "/Login"

    },
    secret: process.env.NEXTAUTH_SECRETKEY,

}

export default AuthOpt

