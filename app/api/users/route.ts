import { getPagination } from "./../../../lib/utils";
import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";

import * as userService from "./service";

connectDB();

export async function GET(request: Request) {
  const pagination = getPagination(request.url);

  const result = await userService.getList(pagination);

  return NextResponse.json(result);
}

export async function POST(request: Request) {}
