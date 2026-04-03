import { test } from '@playwright/test';

test.beforeAll(async () => {
  console.log("Before all hooks");
});

test.beforeEach(async ({ page }) => {
  console.log("Before each hooks");
});

test("test1", async ({ page }) => {
  console.log("test1");
});

test("test2", async ({ page }) => {
  console.log("test2");
});