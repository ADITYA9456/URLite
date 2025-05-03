
import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function  Page ({params}) {

    const short = params.short;
    const client = await clientPromise;
    const db = client.db("URLite");
    const collection = db.collection("url");
    
    const doc = await collection.findOne({shorturl: short})
    if (doc){
     redirect(`${doc.url}`)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    return <div> My post: {short}</div>
}