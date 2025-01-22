# Playwright with TypeScript

This repository contains automated tests written in [Playwright](https://playwright.dev/) using [TypeScript](https://www.typescriptlang.org/).

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- npm (comes with Node.js)

## Setup Instructions

1. **Clone the Repository**  
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**  
   Run the following command to install the required dependencies:  
   ```bash
   npm install
   ```

3. **Install Playwright Browsers**  
   Playwright requires specific browser binaries. Install them using:  
   ```bash
   npx playwright install
   ```

## Project Structure

- `tests/`: Contains all test files written in TypeScript.
- `playwright.config.ts`: Configuration file for Playwright.
- `package.json`: Lists project dependencies and scripts.

## Running Tests

1. **Run All Tests**  
   To execute all tests, use:  
   ```bash
   npx playwright test
   ```

## Configuration

The `playwright.config.ts` file contains settings such as:

- Test directory
- Browser configurations
- Reporters
