// Make sure it is public or set to Anyone with link can view
var url = "https://spreadsheets.google.com/feeds/list/1POwYekndHckpMTTbPQccqtJhvQ3pgjPTjaLhDfumr9Y/od6/public/values?alt=json";

$.getJSON(url, function(data) {
    console.log(data)
    var entry = data.feed.entry;

    $(entry).each(function(){
        // Column names are the first column in the spreadsheet.
        //if the column title is "age" we reference it's content with this.gsx$age.$t
        $('section.projects').prepend('<article class="item"><h1>'+this.gsx$header.$t+'</h1><span>'+this.gsx$price.$t+'</span><p>'+this.gsx$body.$t+'</p><img src="'+this.gsx$img.$t+'" alt=""></article>');
    });

});