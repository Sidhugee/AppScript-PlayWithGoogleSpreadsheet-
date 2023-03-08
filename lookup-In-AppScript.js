function updatePrices() {
  // Get the first sheet and range
  var sheet1 = SpreadsheetApp.getActive().getSheetByName("Order Details");
  var range1 = sheet1.getDataRange();
  
  // Get the second sheet and range
  var sheet2 = SpreadsheetApp.getActive().getSheetByName("Product");
  var range2 = sheet2.getDataRange();
  
  // Get the values of the second sheet
  var values2 = range2.getValues();
  
  // Loop through the values of the first sheet
  for (var i = 2; i <= range1.getLastRow(); i++) {
    var foodItem = range1.getCell(i, 2).getValue();
    
    // Find the corresponding price in the second sheet
    for (var j = 0; j < values2.length; j++) {
      if (values2[j][0] == foodItem) {
        var price = values2[j][1];
        range1.getCell(i, 6).setValue(price);
        break;
      }
    }
  }
  
  
}