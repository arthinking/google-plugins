$(document).ready(function(){
    var query = "SELECT * FROM feed WHERE url='http://i.maocan.com/feed' LIMIT 2";//使用博客源地址，数字表示显示的文章数
    var now = (new Date()).getTime()/1000;
    if(!localStorage.cache || now - parseInt(localStorage.time) > 1*60*60)
    {
        $.get("http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent(query)+"&format=json&callback=?",function(msg){
            var items = msg.query.results.item;
            var htmlString = "";
            for(var i=0;i<items.length;i++)
            {
                var tut = items[i];
                htmlString += '<div class="italk">\
                                <h2>'+tut.title+'</h2>\
                                <p>'+tut.description+'</p>\
                                <a href="'+tut.link+'" target="_blank">全文阅读</a>\
                                </div>';
            }
            localStorage.cache  = htmlString;
            localStorage.time   = now;
            $('#content').html(htmlString);
        },'json');
    }
    else{
        $('#content').html(localStorage.cache);
    }
});