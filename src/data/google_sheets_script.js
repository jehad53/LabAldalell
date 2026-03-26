// --------------------------------------------------------------------------
// GOOGLE SHEETS API FOR LAB CLINIC (READ & WRITE)
// --------------------------------------------------------------------------

function doGet(e) {
    // 1. Get the sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // 2. Read all data
    // Get data range (skip header row 1)
    const rows = sheet.getDataRange().getValues();
    const headers = rows[0]; // First row is header
    const data = rows.slice(1); // Rest is data

    // 3. Convert to JSON Objects
    // Map rows to objects based on column order
    // Columns: Timestamp[0], Name[1], Phone[2], Email[3], Service[4], Date[5], Time[6], Notes[7], Status[8]
    const bookings = data.map((row, index) => ({
        id: index + 1, // Simple ID based on row index
        createdAt: row[0],
        name: row[1],
        phone: row[2],
        email: row[3],
        service: row[4],
        date: row[5],
        time: row[6],
        notes: row[7],
        status: row[8] || 'pending' // Default to pending if empty
    })).reverse(); // Show newest first

    // 4. Return JSON
    return ContentService.createTextOutput(JSON.stringify(bookings))
        .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        const data = JSON.parse(e.postData.contents);
        const timestamp = new Date();

        // Check if we are updating status OR creating new
        if (data.action === 'update_status') {
            // Find the row and update status
            // This is complex in Sheets without IDs, so for now we stick to simple append for safety
            // A proper implementation would need Row IDs.
            // For this MVP, we only support Creating via POST.
            return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'message': 'Update not supported yet' }))
                .setMimeType(ContentService.MimeType.JSON);
        }

        // Append Row
        sheet.appendRow([
            timestamp,
            data.name,
            data.phone,
            data.email,
            data.service,
            data.date,
            data.time,
            data.notes,
            'pending' // Initial Status
        ]);

        // Send Email
        const emailAddress = "jehad.eljrocih@gmail.com";
        const subject = "حجز موعد جديد - " + data.name;
        const message =
            "السلام عليكم،\n\n" +
            "تم استلام حجز موعد جديد عبر الموقع:\n" +
            "👤 " + data.name + "\n" +
            "📱 " + data.phone + "\n" +
            "🧪 " + data.service + "\n\n" +
            "تحياتي، نظام الحجز";

        MailApp.sendEmail(emailAddress, subject, message);

        return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

function setupSheet() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow(['Timestamp', 'Name', 'Phone', 'Email', 'Service', 'Date', 'Time', 'Notes', 'Status']);
}
