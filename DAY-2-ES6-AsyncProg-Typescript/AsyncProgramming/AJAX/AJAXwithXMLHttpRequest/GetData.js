function GetData(callback) {
  //1. create an XMLHttpRequest instance
  //2. open a connection
  //3. know if the request is completed
  //4. make the request

  var xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/postsss"); // establish a connection
  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
      callback(null, xmlHttpReq.responseText);
    } else if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 404) {
      callback("Error ! " + xmlHttpReq.status, null);
    }
  };
  xmlHttpReq.send(); // places the async call
}
