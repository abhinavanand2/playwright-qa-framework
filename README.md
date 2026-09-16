# 🎭 Playwright QA Automation Framework

[![Playwright Tests](https://github.com/abhinavanand2/playwright-qa-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/abhinavanand2/playwright-qa-framework/actions/workflows/playwright.yml)

A production-style **Playwright + TypeScript E2E automation framework**
demonstrating scalable UI test automation using Page Object Model,
custom fixtures, test-data separation, cross-browser execution and CI/CD.


## 🚀 Framework Highlights

- Playwright + TypeScript
- Page Object Model (POM)
- Custom Playwright Fixtures
- Test Data Separation
- Positive & Negative Testing
- Smoke & Regression Tags
- Parallel Test Execution
- Cross-Browser Testing
- Screenshots on Failure
- Video on Failure
- Playwright Trace on Failure
- HTML Reporting
- GitHub Actions CI/CD

## 🌐 Cross-Browser Coverage

Tests execute across:

| Browser | Status |
|---|---|
| Chromium | ✅ Automated |
| Firefox | ✅ Automated |
| WebKit | ✅ Automated |

## 🧪 Current Test Coverage

| Area | Scenario | Tags |
|---|---|---|
| Login | Valid user login | `@smoke` `@regression` |
| Login | Invalid credentials validation | `@regression` |
| Cart | Add product and validate cart | `@smoke` `@regression` |
| Checkout | Complete end-to-end purchase | `@smoke` `@regression` |

**Current cross-browser execution: 12 automated test executions**

## 🏗️ Framework Architecture

```text
playwright-qa-framework/
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── fixtures/
│   └── testFixtures.ts
│
├── test-data/
│   ├── users.ts
│   └── checkoutData.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── playwright.config.ts
├── package.json
└── README.md
```

## ▶️ Running the Tests

Install dependencies:

```bash
npm ci
npx playwright install
```

Run the complete cross-browser suite:

```bash
npx playwright test
```

Run Chromium only:

```bash
npx playwright test --project=chromium
```

Run Smoke tests:

```bash
npx playwright test --grep @smoke
```

Run Regression tests:

```bash
npx playwright test --grep @regression
```

Open the HTML report:

```bash
npx playwright show-report
```

## 🔍 Failure Diagnostics

The framework automatically captures debugging evidence when tests fail:

- 📸 Screenshot
- 🎥 Video recording
- 🔎 Playwright Trace

Trace files can be inspected using Playwright Trace Viewer.

## 🔄 CI/CD

GitHub Actions automatically executes the Playwright test suite on pushes
and pull requests to `main`.

The CI pipeline performs:

**Checkout → Node Setup → Dependency Installation → Browser Installation → Cross-Browser Tests → HTML Report**

Playwright HTML reports are uploaded as GitHub Actions artifacts after execution.

## 🛒 Test Scenario

The framework automates an e-commerce customer journey using SauceDemo:

**Login → Products → Add to Cart → Cart Validation → Checkout → Order Confirmation**

It includes both positive and negative scenarios and demonstrates reusable,
maintainable automation framework design.

## 👨‍💻 Author

**Abhinav Anand**

QA Lead | Senior QA Engineer | SDET

Specializing in **Test Automation, Selenium, Playwright, API Testing,
FinTech and Payments**.
