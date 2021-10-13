var url = "https://calico333.github.io/AverysBlog/";
var body = document.getElementById("body");

const http = new XMLHttpRequest();
http.open("POST", url);

http.setRequestHeader("Accept", "application/json");
http.setRequestHeader("Content-Type", "application/json");

http.onreadystatechange = function() 
{
    const obj = JSON.parse(http.responseText);
    const count = obj.data[0].count;

    for(var i = 1; i < count; i + 2)
    {
        var centered = document.createElement("center");
        body.appendChild(centered);

        var newElement = document.createElement("p");
        newElement.innerHTML = obj.data[i].header;
        newElement.setAttribute("class", "font1");
        centered.appendChild(newElement);

        newElement = document.createElement("hr /");
        body.appendChild(newElement);

        centered = document.createElement("center");
        body.appendChild(centered);

        newElement = document.createElement("p");
        newElement.innerHTML = obj.data[i + 1].header;
        newElement.setAttribute("class", "font1");
        centered.appendChild(newElement);

        newElement = document.createElement("hr /");
        body.appendChild(newElement);
    }
}

var data = '{ "data" : [ ' +
'{ "connected":"true"} ]}';

http.send(JSON.parse(data));