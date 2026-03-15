import {test} from "@playwright/test";
import path from "path"
import fs from "fs"

// path.join(__dirname, ""../../testdata/data.json")
let datafile = fs.readFileSync(path.join(__dirname, "../../testdata/data.json"))
let data = JSON.parse(datafile)


test("JSON data", async({page})=>{
    // console.log(data.greet);

    data.forEach(d=>{
        console.log(d.greet);
    });

})