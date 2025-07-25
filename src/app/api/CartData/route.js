import connecttodb from "@/utils/connect";
import Cart from "@/model/CartModel";
import { NextResponse } from "next/server";


export async function POST(req) {

    const body = await req.json();

    try {
        await connecttodb();

        const cart_item = await Cart.create({
            userid: body.userid,
            productid: body.productid
        })


        return NextResponse.json({
            msg: "added to your cart successfully"
        })
    } catch (error) {
        return NextResponse.json({
            msg: "Internal server error in cart route.js in creating data"
        })
    }


}

export async function GET(req) {

    const { searchParams } = new URL(req.url);

    const userids = searchParams.get("userid")
    // console.log(userids); //correct till now



    try {
        await connecttodb();

        const send_data = await Cart.find({ userid: userids }).populate("productid");
        // console.log(send_data)
        // it give usan array



        return NextResponse.json({
            arr: send_data
        })
    } catch (error) {
        return NextResponse.json({
            msg: "Internal server error in cart route.js in getting data"
        })
    }


}


export async function DELETE(req) {

    const { searchParams } = new URL(req.url);
    const userids = searchParams.get("userid")
    const prodid = searchParams.get("prodid")


    try {
        await connecttodb();

        const del_cart_item = await Cart.findOneAndDelete({ userid: userids, productid: prodid })

        return NextResponse.json({
            msg: "item is removed successfully"
        }, { status: 200 })


    } catch (error) {
        return NextResponse.json({
            msg: "internal error in delete"
        }, { status: 500 })
    }
}