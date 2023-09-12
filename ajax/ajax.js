function ajax({ url, method: method = "get", params, data, callback }) {
  var xml = new XMLHttpRequest();
  if (Object.keys(params).length > 0) {
    if (url.indexOf("?") == -1) {
      url += "?";
    } else {
      url += "&";
    }
    for (var key in params) {
      url += "&" + key + "=" + params[key] + "&";
    }
    url = url.slice(0, -1);
  }
  xml.open(method, url, true);
  xml.responseType = "json";
  if (method == "POST") {
    xml.setRequestHeader("Content-Type", "application/json");
    data = JSON.stringify(data);
    xml.send(data);
  } else {
    xml.send();
  }
  xml.onload = function () {
    if (xml.status == 200) {
      callback(xml.response);
    }
  };
}
