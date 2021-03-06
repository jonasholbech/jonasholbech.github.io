var Ajax = {
    getJSON:function loadJSON(path, callback) {   
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', path, true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);  
    },
    dataReceived:function(data){
        var j = JSON.parse(data)
        var rows = j.feed.entry;
        DOM.setData(rows);
        DOM.display();
    }
}
var DOM = {
    rows:null,
    setData:function(rows){
        this.rows=rows;
    },
    getContainer:function(){
        return document.querySelector("section.projects"); 
    },
    getTemplate:function(){
        return document.querySelector("article.item"); 
    },
    display:function(){
        var container = this.getContainer();
        var template = this.getTemplate();
        for(var i=0; i<this.rows.length; i++){
            var c = template.cloneNode(true)
            c.firstElementChild.innerHTML=this.rows[i].gsx$header.$t;
            c.firstElementChild.nextElementSibling.innerHTML=this.rows[i].gsx$price.$t;
            c.firstElementChild.nextElementSibling.nextElementSibling.innerHTML=this.rows[i].gsx$body.$t;
            c.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.setAttribute('src',this.rows[i].gsx$img.$t);
            container.appendChild(c);
        }
        container.removeChild(template);
    }
}

Ajax.getJSON('https://spreadsheets.google.com/feeds/list/1POwYekndHckpMTTbPQccqtJhvQ3pgjPTjaLhDfumr9Y/od6/public/values?alt=json', Ajax.dataReceived)