import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const url = req.url;
  const newUrl = new URL(url);
  const type = newUrl.searchParams.get("type");
	const secret = newUrl.searchParams.get('secret');

  let path = '';

  if(type === 'acf-field') {
  		path = '/' ; 
  }

  if (secret !== process.env.REVALIDATION_SECRET) {
		return new Response("Invalid token", {
			status: 401,
		});
  }

  try {
  		revalidatePath(path, 'layout');
  		return new Response("Success revalidate", {
				status: 200,
			});
  }
  catch (error: any) {
		return new Response("error in src/app/api/revalidatePost/route", {
			status: 500,
		});
  }

 
}
