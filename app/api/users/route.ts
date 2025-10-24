import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoDB";
import User from "@/lib/models/User";

export const GET = async () => {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }
        await connectToDB();
        let user = await User.findOne({ clerkId: userId });
        if (!user) {
            user = await User.create({ clerkId: userId });
            await user.save();
        }
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.log("[users_GET]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}