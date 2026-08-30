import { db } from "@/app";
import { list } from "@/app/db/schema";
export async function getLists() {
    try {
    const data = await db.select().from(list);
    return data;
    }
    catch(e) {
        console.log(e)
    }
}
export const fetchCache = 'force-no-store'