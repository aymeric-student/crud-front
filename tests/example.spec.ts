// tests/example.spec.ts
import { expect, test } from '@playwright/test'

test('homepage has title', async ({ page }) => {
    await page.goto('http://localhost:5173')
    await expect(page).toHaveTitle(/My Awesome App/)
})
