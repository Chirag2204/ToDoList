
exports.getDate = function (){
  let getdate = new Date();
  let options = {
    weekday : "long",
    day : "numeric",
    month : "long"
  };
  return  getdate.toLocaleDateString("en-US",options);
}

exports.getDay = function (){
  let getday = new Date();
  let options = {
    weekday : "long",
  };
  return  getday.toLocaleDateString("en-US",options);
}
