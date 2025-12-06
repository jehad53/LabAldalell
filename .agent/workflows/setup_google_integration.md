---
description: Step-by-step guide to setting up Google Sheets Integration
---

# Setting Up Google Sheets & Email Notifications

This guide explains how to create the database for your bookings and set up email alerts.

## Step 1: Open Google Sheets
1.  Open your web browser.
2.  Go to: [https://sheets.google.com](https://sheets.google.com)
3.  **Log in** with your Gmail account (`jehad.eljrocih@gmail.com` would be best since you want emails there).

## Step 2: Create a New Sheet
1.  Click the big **Blank (+)** button to start a new spreadsheet.
2.  Name the spreadsheet (top left corner) something like **"Clinic Bookings"**.

## Step 3: Open the Script Editor (This is "It")
You asked "Where can I find it?". Here it is:
1.  Look at the top menu bar of the Google Sheet.
2.  Click on **Extensions** (الإضافات).
3.  Click on **Apps Script** (برمجة تطبيقات Google).
    *   *A new tab will open with a code editor.*

## Step 4: Paste the Code
1.  In the new code editor tab, delete any code you see (usually `function myFunction() {...}`).
2.  Copy the code I gave you in your project file `src/data/google_sheets_script.js`.
    *   *(If you can't find it, ask me to print it here).*
3.  Paste it into the editor.
4.  Click the **Save** icon (floppy disk).

## Step 5: Deploy (The Most Important Step)
1.  Click the blue **Deploy** button (top right).
2.  Select **New deployment**.
3.  Click the gear icon next to "Select type" and choose **Web app**.
4.  **Configuration**:
    *   **Description**: "Booking API"
    *   **Execute as**: **Me** (your email).
    *   **Who has access**: **Anyone** (Anyone with the link).
        *   *Note: This is safe because only your specific website code will send data to it, but "Anyone" allows the website to talk to the sheet without asking every patient to login.*
5.  Click **Deploy**.

## Step 6: Connect to Website
1.  Copy the **Web app URL** provided.
2.  Go back to your project code.
3.  Open `src/pages/Book.jsx`.
4.  Paste the URL into the code where it says `const SCRIPT_URL = '...';`.
5.  Save the file.
