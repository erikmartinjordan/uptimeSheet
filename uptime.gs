function upTime() {  
  
  // Sheet names
  var sheetNames = ['Sheet1'];
  
  // Defining the URL's to look uptime
  var uptimeURLs = ['URL1'];
  
  // Getting responses
  var responses = UrlFetchApp.fetchAll(uptimeURLs);
  
  // Iterating through responses
  for(var i = 0; i < responses.length; i ++){
    
    // Getting response code
    var response = responses[i].getResponseCode();
    
    // Getting sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetNames[i]);
    
    // Getting last column and row
    var lastRow = sheet.getLastRow();
    var lastCol = sheet.getLastColumn();
    
    // Setting time of execution
    var date = Utilities.formatDate(new Date(), SpreadsheetApp.getActive().getSpreadsheetTimeZone(), "dd/MM/yyyy HH:mm");
    
    // Writting day and time in sheet
    sheet.getRange(lastRow + 1, 2).setValue(date);
    
    // If response is ok, write it in Excel
    response === 200 
    ? sheet.getRange(lastRow + 1, 3).setValue(1)
    : sheet.getRange(lastRow + 1, 3).setValue(0);
  
  }
  
}