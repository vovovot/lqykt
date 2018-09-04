$(function () {
    chenginput();
    chenginput2();
    chenginput3();
    formopen();
    logins();
    form2();
    denglu();
    cancel();
})
function chenginput() {
    $("input[name='phone']").focus(function () {
        $(".regedit-user").css("border","1px solid #49AF4F");
    });
    $("input[name='phone']").blur(function () {
        $(".regedit-user").css("border","1px solid lavender");
    })
}
function chenginput2() {
    $("input[name='pwd']").focus(function () {
        $(".regedit-user1").css("border","1px solid #49AF4F")
    });
    $("input[name='pwd']").blur(function () {
        $(".regedit-user1").css("border","1px solid lavender");
    })
}
function chenginput3() {
    $("input[name='yanzheng']").focus(function () {
        $(".regedit_yanzheng").css("border","1px solid #49AF4F");
    });
    $("input[name='yanzheng']").blur(function () {
        $(".regedit_yanzheng").css("border","1px solid lavender");
    })
}
//单击登录弹出表单
function formopen() {
    $("span[name='login']").click(function () {
        layer.open(
            {
                type:2,
                closeBtn:false,
                title:false,
                area:['441px','457px'],
                shadeClose:true,
                content:['login.html','no'],
            }
        )
    });
}
//单击小标题使用短信验证登录弹出短信验证表单
function form2() {
  $("span[name='ideas']").click(function () {
      layer.open(
          {
              type:2,
              closeBtn:false,
              title:false,
              area:['441px','620px'],
              shadeClose:true,
              content:['login1.html','no']
          }
      )
  })
}
//点击去登录返回登录界面
function logins() {
  $("span[name='regedits']").click(function () {
      layer.open(
          {
              type:2,
              closeBtn:false,
              title:false,
              area:['441px','457px'],
              shadeClose:true,
              content:['head&foot.html','no'],
          }
      );
  })
}
//点击注销
function cancel() {
    $("#calcel").click(function () {
        var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i=keys.length; i--;)
                document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString()
        }
        $("#weidenglu").text('登录/注册');
        $("#weidenglu").attr("title",'登录/注册');
    })
}
//登录状态设置
function denglu() {
    $("input[type='button']").click(function () {
        $.ajax(
            {
                url:"/CheckUser",
                type:"post",
                data:{"phone":$("input[name='phone']").val(),"pwd":$("input[name='pwd']").val()},
                dataType:"json",
                success:function (result) {
                    if(result.length>0) {
                        layer.msg('欢迎进入蓝桥云课堂',{time:2000});
                        var pho=result[0].user_phone;
                        document.cookie="user_phone="+pho;
                        document.cookie="user_id="+result[0].user_id;
                        var name = result[0].user_name;
                        document.cookie="user_name="+result[0].user_name;
                        var time=new Date();
                        time.setTime(time.getDate()+1);
                        document.cookie="expires="+time.toGMTString();
                        $("#weidenglu").text(name);
                        $("#weidenglu").attr("title",name);

                    }
                    else{
                        layer.msg('登录失败',{time:1000});
                    }
                }
            }
        )
    })
}