var Ajax = {
    getJSON:function loadJSON(path, callback) {   
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', path, true);
        xobj.onreadystatechange = function () {
            //console.log(xobj)
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
        var container = this.getCotainer();
        var template = this.getTemplate();
        
       
    }
}
Ajax.getJSON('https://spreadsheets.google.com/feeds/list/1POwYekndHckpMTTbPQccqtJhvQ3pgjPTjaLhDfumr9Y/od6/public/values?alt=json', Ajax.dataReceived)