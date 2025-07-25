import Product from "@/model/Product";
import connecttodb from "@/utils/connect";
import { NextResponse } from "next/server";


export async function POST(req) {

    const body = await req.json();

    try {
        await connecttodb()


        const check_id = await Product.findOne({ id: body.id })

        // if (!id || !title || !description || !price || !category || !image || !count || !rate) {
        //     return NextResponse.json(
        //         { msg: "All fields are required" },
        //         { status: 400 }
        //     );
        // }

        // if (isNaN(price) || isNaN(rate) || isNaN(count)) {
        //     return NextResponse.json(
        //         { msg: "Price, rate, and count must be valid numbers" },
        //         { status: 400 }
        //     );
        // }

        if (check_id) {
            return NextResponse.json({
                msg: "id must be unique"
            }, { status: 400 })
        }

        const create_product = await Product.create({
            id: Number(body.id),
            title: body.title,
            description: body.description,
            price: Number(body.price),
            category: body.category,
            image: body.image,
            count: Number(body.count),
            rate: Number(body.rate),

        })

        return NextResponse.json({
            msg: "Product added successfully"
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            msg: "internal error - product is not added"
        },
            { status: 500 })
    }

}


export async function GET() {

    try {
        await connecttodb();

        const send_data = await Product.find();




        return NextResponse.json({
            arr: send_data
        })


    } catch (error) {
        return NextResponse.json({ msg: "internal error in GET" })
    }

}