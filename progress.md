# Project Progress

## Current Status

The SauceDemo Playwright project is in the early framework implementation stage.

The login, inventory, add to cart, remove from cart, and checkout flows are implemented and passing across all configured browsers.

## Recent Progress

- Migrated the project from nopCommerce to SauceDemo.
- Implemented and validated the login flow.
- Added LoginPage, InventoryPage, CartPage, and CheckoutPage.
- Implemented and validated adding products to the shopping cart (`tests/add-to-cart.spec.ts`).
- Implemented and validated removing products from the shopping cart (`tests/remove-from-cart.spec.ts`).
- Implemented and validated checkout flow (`tests/checkout.spec.ts`).
- Extended `CartPage` with `checkoutButton` and `proceedToCheckout()`.
- Created `CheckoutPage` with inputs, buttons, and checkout actions.
- Verified all 12 tests passing across Chromium, Firefox, and WebKit.
- Updated `feature_list.json` marking checkout as passed.

## Issues / Findings

- nopCommerce was abandoned because Cloudflare protection made automated execution unreliable.
- SauceDemo provides a stable environment for Playwright practice.
- Playwright's `getByRole('button', { name: 'Remove' })` locator cleanly targets the cart item remove button.
- All 5 planned features in `feature_list.json` are now passing.

## Next Session

- Review completed features or define additional test scenarios in `feature_list.json` (e.g. negative login scenarios, empty cart checkout validations, sorting).