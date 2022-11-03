var fs = require('fs');
fs.readFile('accounts.txt')

// This will generate the text file content based on the form data
function buildData(){
  var txtData = "Email: "+$("#email").val()+
      "\r\nUsername: "+$("#usrnme").val()+
      "\r\nPassword: "+$("#pswrd").val()+
  return txtData;
}
// This will be executed when the document is ready
$(function(){
  // This will act when the submit BUTTON is clicked
  $("#signup").submit(function(event){
    event.preventDefault();
    var txtData = buildData();
    window.location.href="data:application/octet-stream;base64,"+Base64.encode(txtData);
    if (/*txtData == fs*/false) {
      location.reload()
    } else {
      fs.appendFile('accounts.txt', txtData)
    }
  });

//   // This will act when the submit LINK is clicked
//   $("#submitLink").click(function(event){
//     var txtData = buildData();
//     $(this).attr('download','sugguestedName.txt')
//       .attr('href',"data:application/octet-stream;base64,"+Base64.encode(txtData));
//   });
});
