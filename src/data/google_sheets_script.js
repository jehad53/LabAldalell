// This script allows you to save booking data from your website to a Google Sheet.
// Follow the setup instructions provided.

function doPost(e) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

        // Parse the JSON data sent from the website
        const data = JSON.parse(e.postData.contents);

        // Create a timestamp
        const timestamp = new Date();

        // Append the row to the sheet
        // Columns: Timestamp, Name, Phone, Email, Service, Date, Time, Notes
        sheet.appendRow([
            timestamp,
            data.name,
            data.phone,
            data.email,
            data.service,
            data.date,
            data.time,
            data.notes
        ]);

        // Return a success JSON response
        return ContentService.createTextOutput(JSON.stringify({ 'result': 'success', 'row': sheet.getLastRow() }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Return an error JSON response
        return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// Initial setup helper (run this once manually if you want generic headers)
function setupSheet() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow(['Timestamp', 'Name', 'Phone', 'Email', 'Service', 'Date', 'Time', 'Notes']);
}
