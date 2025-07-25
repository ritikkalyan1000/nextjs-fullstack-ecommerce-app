
import User from "@/model/UserModel";
import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import connecttodb from "@/utils/connect";

export  async function POST(req) {

    const body = await req.json();


    try {

        await connecttodb();

        // in body we have name, email,password
        //find({}) - always return array
        // findById(direct write id in this) 

        const check_user = await User.findOne({ email: body.email });

        if (check_user) {
            return NextResponse.json({
                msg: "Error: Email must be unique"
            },
                { status: 400 })
        }

        const getsalt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(body.password, getsalt);

        const create_user = await User.create({
            name: body.name,
            email: body.email,
            password: secpass
        })

        return NextResponse.json({
            msg: "User has been successfully created👍"
        })



    } catch (error) {
        return NextResponse.json({
            msg: "internal error in the user creation in signin try again later"
        }, { status: 500 })
    }


}