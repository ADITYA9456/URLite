// app/api/support/route.js
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return Response.json({
                success: false,
                error: true,
                message: "All fields are required",
            });
        }

        const client = await clientPromise;
        const db = client.db("URLite"); // Apna database name yahan bhi same rakhna
        const collection = db.collection("supportMessages"); // Collection name: supportMessages

        await collection.insertOne({
            name,
            email,
            message,
            createdAt: new Date(),
        });

        return Response.json({
            success: true,
            error: false,
            message: "Support request stored successfully",
        });
    } catch (err) {
        console.error("Error in /api/support:", err);
        return Response.json({
            success: false,
            error: true,
            message: "Internal Server Error",
        }, { status: 500 });
    }
}
