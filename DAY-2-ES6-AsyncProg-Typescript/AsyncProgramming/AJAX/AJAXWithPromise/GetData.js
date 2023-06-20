function GetData() {
  return new Promise(function (resolve, reject) {
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts"); // establish a connection
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
        resolve(xmlHttpReq.responseText);
      } else if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 404) {
        reject("Error ! " + xmlHttpReq.status);
      }
    };
    xmlHttpReq.send(); // places the async call
  });
}
