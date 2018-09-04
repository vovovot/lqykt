$(function () {
    click();
    //biaodanyanzheng1();
    //biaodanyanzheng2();
    tjkc();
    tjks();
    layui.use('form', function(){
        var form = layui.form;

        //各种基于事件的操作，下面会有进一步介绍
    });
})
// jQuery.validator.addMethod("regex", //addMethod第1个参数:方法名称
//     function (value, element, params) {//addMethod第2个参数:验证方法，
//         //验证方法参数（被验证元素的值，被验证元素，参数）
//         var exp = new RegExp(params);//实例化正则对象，参数为用户传入的正则表达式
//         return exp.test(value);//测试是否匹配
//     }, "格式错误");
function click() {
    $(".no").hide();
    $(".bodydetails").hide();
    $(".active:eq(0)").click(function () {
        $(".no1").toggle(300);
        $(".no2").hide(300);
        $(".no3").hide(300);
        $(".no4").hide(300);
        $("#kind2 a").text("用户管理");
        $("#kind3 a").text("————");
    })

    $(".active:eq(1)").click(function () {
        $(".no2").toggle(300);
        $(".no1").hide(300);
        $(".no3").hide(300);
        $(".no4").hide(300);
        $("#kind2 a").text("课程管理");
        $("#kind3 a").text("————");
    })

    $(".active:eq(2)").click(function () {
        $(".no3").toggle(300);
        $(".no1").hide(300);
        $(".no2").hide(300);
        $(".no4").hide(300);
        $("#kind2 a").text("统计分析");
        $("#kind3 a").text("————");
    })

    $(".active:eq(3)").click(function () {
        $(".no4").toggle(300);
        $(".no1").hide(300);
        $(".no2").hide(300);
        $(".no3").hide(300);
        $("#kind2 a").text("订单管理");
        $("#kind3 a").text("————");
    })

    $(".no1:eq(0)").click(function () {
        $("#kind2 a").text("用户管理");
        $("#kind3 a").text("删除用户");
        $("#details1").siblings().hide();
        $("#details1").show();
    })

    $(".no2:eq(0)").click(function () {
        $("#kind2 a").text("课程管理");
        $("#kind3 a").text("添加课程");
        $("#details2").siblings().hide();
        $("#details2").show();

    })
    $(".no2:eq(1)").click(function () {
        $("#kind2 a").text("课程管理");
        $("#kind3 a").text("删除课程");
        $("#details3").siblings().hide();
        $("#details3").show();

    })
    $(".no2:eq(2)").click(function () {
        $("#kind2 a").text("课程管理");
        $("#kind3 a").text("添加课时");
        $("#details4").siblings().hide();
        $("#details4").show();

    })
    $(".no2:eq(3)").click(function () {
        $("#kind2 a").text("课程管理");
        $("#kind3 a").text("删除课时");
        $("#details5").siblings().hide();
        $("#details5").show();

    })

    $(".no3:eq(0)").click(function () {
        $("#kind2 a").text("统计分析");
        $("#kind3 a").text("用户喜好");
        $("#details6").siblings().hide();
        $("#details6").show();

    })
    $(".no3:eq(1)").click(function () {
        $("#kind2 a").text("统计分析");
        $("#kind3 a").text("订单分析");
        $("#details7").siblings().hide();
        $("#details7").show();

    })

    $(".no4:eq(0)").click(function () {
        $("#kind2 a").text("订单管理");
        $("#kind3 a").text("查看订单");
        $("#details8").siblings().hide();
        $("#details8").show();
    })

}

var kindid;
function biaodanyanzheng1() {
    $("#tjkcform").validate(
        {
            onsubmit:true,// 是否在提交是验证
            onfocusout:false,// 是否在获取焦点时验证
            onkeyup :false,// 是否在敲击键盘时验证

            rules: {　　　　//规则
                coursename: {　　//要对应相对应的input中的name属性
                    required: true
                },
                company: {
                    required: true
                },
                price: {
                    required: true,
                    digits:true
                },
                cmbProvince: {
                    required: true
                },
                cmbCity: {
                    required: true
                },
                cmbArea: {
                    required: true
                }
            },
            messages:{
                coursename:{
                    required:"请输入课程名"
                },
                company:{
                    required:"请输入机构名"
                },
                price:{
                    required:"请输入价格",
                    digits:"只能输入整数"
                },
                cmbProvince:{
                    required:"请选择一级分类"
                },
                cmbCity:{
                    required:"请选择二级分类"
                },
                cmbArea:{
                    required:"请选择三级分类"
                },
                submitHandler:function(form){
                    alert("1111")
                    $.ajax(
                        {
                            url:"/CheckKindIdServlet",
                            type:"post",
                            dataType:"json",
                            async:false,
                            data:{"kindname":$("select[name='cmbArea'] option:selected").text()},
                            success:function (result) {
                                kindid = result[0].kind_id;
                            }
                        }
                    )

                    $.ajax(
                        {
                            url:"/AddCourseServlet",
                            type:"post",
                            dataType:"text",
                            async:false,
                            data:{"coursename":$("input[name='coursename']").val(),
                                "company":$("input[name='company']").val(),
                                "price":$("input[name='price']").val(),
                                "kindid":kindid,
                            },
                            success:function (ret) {
                                if (ret == 1){
                                    layer.alert("添加课时成功！")
                                } else {
                                    layer.alert("添加课时失败！")
                                }
                            }
                        }
                    )
                    var ii = 1;
                    $.ajax(
                        {
                            url:"/AddNewsServlet",
                            type:"post",
                            dataType:"text",
                            async:false,
                            data:{"userid":ii,
                                "courseid":ii,
                                "newsinfo":"【工作型PPT应该这样做】课程更新了！"},
                            success:function () {

                            }
                        }
                    )
                },
                invalidHandler:function (form,validator) {
                    return false;
                }
            }
        }
    )
}
function tjkc() {
    $("#test2").click(function () {
        $.ajax(
            {
                url:"/CheckKindIdServlet",
                type:"post",
                dataType:"json",
                async:false,
                data:{"kindname":$("select[name='cmbArea'] option:selected").text()},
                success:function (result) {
                    kindid = result[0].kind_id;
                }
            }
        )
        var kid =40;
        $.ajax(
            {
                url:"/AddCourseServlet",
                type:"post",
                dataType:"text",
                async:false,
                data:{"coursename":$("input[name='coursename']").val(),
                    "company":$("input[name='company']").val(),
                    "price":$("input[name='price']").val(),
                    "kindid":kid,
                },
                success:function (ret) {
                    if (ret == 1){
                        layer.alert("添加课时成功！")
                    } else {
                        layer.alert("添加课时失败！")
                    }
                }
            }
        )
        var ui = 38;
        var ci =1;
        $.ajax(
            {
                url:"/AddNewsServlet",
                type:"post",
                dataType:"text",
                async:false,
                data:{"userid":ui,
                    "courseid":ci,
                    "newsinfo":"【工作型PPT应该这样做】课程更新了！"},
                success:function () {

                }
            }
        )
    })
}

function biaodanyanzheng2() {
    $("#tjksform").validate(
        {
            onsubmit:true,// 是否在提交是验证
            onfocusout:false,// 是否在获取焦点时验证
            onkeyup :false,// 是否在敲击键盘时验证

            rules:{
                coursename:{
                    required:true,
                },
                periodid:{
                    required:true,
                },
                periodname:{
                    required:true,
                },
            },
            messages:{
                courseid:{
                    required:"请输入课程名",
                },
                periodid:{
                    required:"请输入课时名",
                },
                periodname:{
                    required:"请输入价格",
                },
                submitHandler:function(form){
                    $.ajax(
                        {
                            url:"/AddPeriodServlet",
                            type:"post",
                            dataType:"text",
                            data:{"courseid":$("input[name='courseid']").val(),
                                "periodid":$("input[name='periodid']").val(),
                                "periodname":$("input[name='periodname']").val(),
                            },
                            success:function (ret) {
                                if (ret == 1){
                                    layer.alert("添加课时成功！")
                                } else {
                                    layer.alert("添加课时失败！")
                                }
                            }
                        }
                    )
                },
                invalidHandler:function (form,validator) {
                    return false;
                }
            }
        }
    )
}

function tjks() {
    $("#test3").click(function () {
        $.ajax(
            {
                url:"/AddPeriodServlet",
                type:"post",
                dataType:"text",
                data:{"courseid":$("input[name='courseid']").val(),
                    "periodid":$("input[name='periodid']").val(),
                    "periodname":$("input[name='periodname']").val(),
                },
                success:function (ret) {
                    if (ret == 1){
                        layer.alert("添加课时成功！")
                    } else {
                        layer.alert("添加课时失败！")
                    }
                }
            }
        )
    })
}
