function upTime() {  
  
  var sheetNames = ['Nomoresheet', 'Erikmartinjordan'];
  var uptimeURLs = ['https://nomoresheet.es', 'https://erikmartinjordan.com'];
  var yourEmail  = 'elon@musk.com';
  
  for(var i = 0; i < uptimeURLs.length; i ++){
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetNames[i]);
    
    var lastRow = sheet.getLastRow();
    var lastCol = sheet.getLastColumn();
      
    var date = Utilities.formatDate(new Date(), SpreadsheetApp.getActive().getSpreadsheetTimeZone(), "dd/MM/yyyy HH:mm");
    
    sheet.getRange(lastRow + 1, 2).setValue(date);
    
    try{
      
      var response = UrlFetchApp.fetch(uptimeURLs[i]);
      
      sheet.getRange(lastRow + 1, 3).setValue(1);
      
    }
    catch(e){
    
      sheet.getRange(lastRow + 1, 3).setValue(0);
      
      if(sheet.getRange(lastRow - 1, 3).getValue() === 0 && sheet.getRange(lastRow, 3).getValue() === 0){

        MailApp.sendEmail(yourEmail, 'Multiple 404 errors at ' + uptimeURLs[i], 'The website is getting 404 errors. Take a look.');

      }
      
    }
  
  }
  
}
