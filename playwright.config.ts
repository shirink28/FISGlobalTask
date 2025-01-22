import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
/**
 * Read environment variables from file.
 */
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  /* Opt out of parallel tests. */
  workers:1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
 

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], 
        headless:false,
        channel: 'chrome',
        deviceScaleFactor:undefined,
        viewport:null,
      launchOptions:{
        args:['--start-maximized'],
      } },
    },
  ],

 
});
