import { getIDs } from "./crawler/getIds"

//getIDs();

import get from "axios"


async function test() {
    //const html = await get("https://www.studentenwerk-dresden.de/mensen/speiseplan/w0-d3.html")
    const res = await Promise.all([get("https://www.studentenwerk-dresden.de/mensen/speiseplan/w0-d3.html"), get("https://www.studentenwerk-dresden.de/mensen/speiseplan/w0-d4.html")])
    console.log(res);


}

test()



