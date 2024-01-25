import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

export async function GET(request: Request) {
  const session = await getServerSession();
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email?.toString(),
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.error(error, "FETCH_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
