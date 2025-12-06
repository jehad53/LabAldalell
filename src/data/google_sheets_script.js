// This script allows you to save booking data to Google Sheets AND send email notifications.
// Follow the setup instructions provided in the Walkthrough.

function doPost(e) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

        // Parse the JSON data sent from the website
        const data = JSON.parse(e.postData.contents);

        // Create a timestamp
        const timestamp = new Date();

        // 1. Append the row to the sheet
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

        // 2. Send Email Notification
        const emailAddress = "jehad.eljrocih@gmail.com";
        const subject = "حجز موعد جديد - " + data.name;
        const message =
            "السلام عليكم،\n\n" +
            "تم استلام حجز موعد جديد عبر الموقع. التفاصيل أدناه:\n\n" +
            "👤 الاسم: " + data.name + "\n" +
            "📱 الهاتف: " + data.phone + "\n" +
            "🧪 الخدمة: " + data.service + "\n" +
            "📅 التاريخ: " + data.date + "\n" +
            "⏰ الوقت: " + data.time + "\n" +
            "📝 ملاحظات: " + (data.notes || "لا يوجد") + "\n\n" +
            "تحياتي،\n" +
            "نظام الحجز الآلي";

        MailApp.sendEmail(emailAddress, subject, message);

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
