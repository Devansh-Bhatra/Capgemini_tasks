import {test} from "@playwright/test";
test("Mouse actions", async ({ page }) => {
//   await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0");
//   await page.locator("#btn").click({button : "right", clickCount: 2,force: true});
// await page.locator("#btn").dblclick();
// await page.locator("#btn").hover();
// await page.mouse.down();
// await page.mouse.up();
// await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToMultiple?sublist=3");
// await page.locator("//div[@id='dragElement1']").hover();
// await page.mouse.down()
await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
// await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded();
// await page.locator('//input[@type="checkbox"]').check();
// await page.waitForTimeout(2000);
// await page.mouse.move(100,100)


// const circle = page.locator("//div[@class='zoom-button']");

// await circle.hover();   // mouse element par move
// await page.mouse.down(); // hold
// await page.waitForTimeout(2000);
// await page.mouse.up(); 

await page.getByPlaceholder("Enter your name").hover();
await page.getByPlaceholder("Enter your name").press("Enter");
await page.getByPlaceholder("Enter your name").fill("student");

await page.getByPlaceholder("Enter your Email").hover();
await page.getByPlaceholder("Enter your Email").press("Enter");
await page.getByPlaceholder("Enter your Email").fill("student@gmail.com");

await page.getByPlaceholder("Enter your password").press("Control+A");
await page.getByPlaceholder("Enter your password").press("Control+C");

await page.getByPlaceholder("Enter your password").hover();
await page.getByPlaceholder("Enter your password").press("Enter");
await page.getByPlaceholder("Enter your password").press("Control+V");

const registerButton = page.getByRole("button", { name: "Register" });
const box = await registerButton.boundingBox();

await page.mouse.move(box.x + box.width/2, box.y + box.height/2);
await page.mouse.down();
await page.mouse.up();

})