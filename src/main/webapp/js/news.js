$(function () {
    qiehuan();
    changenewsstatus();
    shownewsinfo();
    $(".layui-btn-sm:eq(0)").click(function () {
        num = num > 1 ? --num :num;
        $("#yema1").text(num);
        $(".news-details").remove();
        shownewsinfo();
    })
    $(".layui-btn-sm:eq(1)").click(function () {
        //计算最大页数
        maxPage = Math.ceil(rsCount/pageSize);
        num = num < maxPage? ++num :maxPage;
        $("#yema1").text(num)
        $(".news-details").remove();
        shownewsinfo();
    })
})

function qiehuan() {
    $("#news-kind a").click(function () {
        $(this).children().attr("class","news-kind-choose");
        $(this).siblings().children().attr("class","news-kind-unchoose");
        var i = $(this).index();
        $("#news-show").children().eq(i).show();
        $("#news-show").children().eq(i).siblings().hide();
    })
}

var num = 1;
var preList;
var rsCount = 0;
var pageSize = 5;
var maxPage = 0;
function shownewsinfo() {
    var userid = 1;
    $.ajax(
        {
            url:"/ShowNewsInfoServlet",
            type:"post",
            data:{"userid":userid,"num":num},
            dataType:"json",
            success:function (result) {
                if (result.length == 0){
                    result = preList;
                    num--;
                } else{
                    preList = result;
                }
                for (var t=0;t<result.length-1;t++){
                    $(".cheng:eq(0)").before('<div class="news-details">\n' +
                        '                        <a href="goods.html?booksId='+result[t].course_id+'" class="news-details-a'+result[t].news_status+'" name="'+result[t].news_id+'">'+result[t].news_info+'</a>\n' +
                        '                        <span>'+result[t].news_time+'</span>\n' +
                        '                    </div>')
                }
                rsCount = result[result.length-1];
            }
        }
    )
}

function changenewsstatus() {
    $("body").on("click",".news-details-a0",function () {
        $.ajax(
            {
                url:"/ChangeNewsStatusServlet",
                type:"post",
                data:{"newsid":$(this).attr("name")},
                dataType:"text",
                success:function () {
                }
            }
        )
        
    })
}