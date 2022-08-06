import type { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { nanoid } from 'nanoid'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    if (req.cookies["userCookie"]) return ;
    console.log("req",  req)

    const random = nanoid();

    const res =  NextResponse.next()

    res.cookie("userCookie", random, { sameSite: "strict"})

    return res;

 }





