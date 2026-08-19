import { users } from "@/app/data/users";

export async function GET() {
  return  Response.json(users)
}

