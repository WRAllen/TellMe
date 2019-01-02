$(document).ready(function(){
	$("label:contains(CSRF Token)").css("color", "#ffffff");
    $("a:contains(Next)").text("下一步");
    $("a:contains(Previous)").text("上一步");
    $("a:contains(place order)").text("提交");
});



// 验证中文名称 
function nameCheck()
{
if (!$("#name").val().match(/^[\u4E00-\u9FA5]{2,4}$/)) {
			
            alert("姓名格式不正确！");
    }
}
// 验证手机号
function phoneCheck()
{
if (!$("#phone").val().match(/^(((13[0-9]{1})|159|153|180)+\d{8})$/)) {
			
            alert("手机号码格式不正确！");
    }
}


$(document).ready(function() {  
  
var now = new Date();var day = ("0" + now.getDate()).slice(-2);var month = ("0" + (now.getMonth() + 1)).slice(-2);var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
var InputsWrapper   = $("#e_add");  
var AddButton       = $("#e_addrow1");  
  
var i=1;   
  
$("body").on("click","#e_addrow1",function (e)  
{  

            i++;   
            $(InputsWrapper).append('<div><input type="hidden" name="edu" value="edu'+i+'"><div class="col-sm-2" >时间：<input type="date" id="e_start" name="edu'+i+'" class="form-control" onblur="check($(this).val(),$(this).parent().next().children().val())"/></div>\
<div class="col-sm-2">至<input type="date" id="e_end" name="edu'+i+'" class="form-control" value="'+today+'" onblur="check($(this).parent().prev().children().val(),$(this).val())"/>\
</div><div class="col-sm-2" >毕业于：<input type="text" id="school" name="edu'+i+'" class="form-control" />\
</div><div class="col-sm-3" >专业：<input type="text" id="speciality" name="edu'+i+'" class="form-control" />\
</div><div class="col-sm-2" >学历：<input type="text" id="nationality" name="edu'+i+'" class="form-control" /></div>\
<div class="col-sm-1 fa fa-plus-circle" id="e_addrow1" style="font-size: 15px;margin: 50px 0 0 -30px;color: #878787;"></div></div><script>function check(start,end){if(end<start){alert("结束时间不得早于开始时间！");} }</script>');  
            
            $(this).attr('class','col-sm-1 fa fa-minus-circle');
            $(this).attr('id','e_derow1')

         
return false;  
});  

$("body").on("click","#e_derow1", function(e){  
         
                $(this).parent().remove();  
                 
          
return false;  
})   
  
});










$(document).ready(function() {  
  
var now = new Date();var day = ("0" + now.getDate()).slice(-2);var month = ("0" + (now.getMonth() + 1)).slice(-2);var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
var InputsWrapper   = $("#t_add");  
var AddButton       = $("#t_addrow1");  
  
var j=1;   
  
$("body").on("click","#t_addrow1",function (e)  
{  

            j++;   
            $(InputsWrapper).append('<div><input type="hidden" name="tra" value="tra'+j+'"><div class="col-sm-2" >时间：<input type="date" id="t_start" name="tra'+j+'" class="form-control" onblur="check($(this).val(),$(this).parent().next().children().val())"/></div>\
<div class="col-sm-2">至<input type="date" id="t_end" name="tra'+j+'" class="form-control" value="'+today+'" onblur="check($(this).parent().prev().children().val(),$(this).val())"/></div>\
<div class="col-sm-3" >培训单位：<input type="text" id="t_state" name="tra'+j+'" class="form-control" /></div>\
<div class="col-sm-4" >培训内容：<input type="text" id="t_content" name="tra'+j+'" class="form-control" /></div>\
<div class="col-sm-1 fa fa-plus-circle" id="t_addrow1" style="font-size: 15px;margin: 50px 0 0 -45px;color: #878787;"></div></div><script>function check(start,end){if(end<start){alert("结束时间不得早于开始时间！");} }</script>');  
            
            $(this).attr('class','col-sm-1 fa fa-minus-circle');
            $(this).attr('id','t_derow1')
         
return false;  
});  

$("body").on("click","#t_derow1", function(e){  
         
                $(this).parent().remove();  
                 
          
return false;  
})   
  
});







$(document).ready(function() {  
  
var now = new Date();var day = ("0" + now.getDate()).slice(-2);var month = ("0" + (now.getMonth() + 1)).slice(-2);var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
var InputsWrapper   = $("#p_add");  
var AddButton       = $("#p_addrow1");  
  
var k=1;   
  
$("body").on("click","#p_addrow1",function (e)  
{  

            k++;   
            $(InputsWrapper).append('<div><input type="hidden" name="exp" value="exp'+k+'"><div class="col-sm-2" >时间：<input type="date" id="p_start" name="exp'+k+'" class="form-control" onblur="check($(this).val(),$(this).parent().next().children().val())"/></div>\
<div class="col-sm-2">至<input type="date" id="p_end" name="exp'+k+'" class="form-control" value="'+today+'" onblur="check($(this).parent().prev().children().val(),$(this).val())"/></div>\
<div class="col-sm-3" >公司：<input type="text" id="p_company" name="exp'+k+'" class="form-control" /></div>\
<div class="col-sm-2" >职位：<input type="text" id="p_job" name="exp'+k+'" class="form-control" /></div>\
<div class="col-sm-2" >薪资：<input type="text" id="p_wage" name="exp'+k+'" class="form-control" /></div>\
<div class="col-sm-1 fa fa-plus-circle" id="p_addrow1" style="font-size: 15px;margin: 50px 0 0 -30px;color: #878787;"></div></div><script>function check(start,end){if(end<start){alert("结束时间不得早于开始时间！");} }</script>'); 
            
            $(this).attr('class','col-sm-1 fa fa-minus-circle');
            $(this).attr('id','p_derow1')
         
return false;  
});  

$("body").on("click","#p_derow1", function(e){  
         
                $(this).parent().remove();  
                 
          
return false;  
})   
  
});




function check(start,end){if(end<start){alert("结束时间不得早于开始时间！");} }
$(document).ready(function(){
    var now = new Date();var day = ("0" + now.getDate()).slice(-2);var month = ("0" + (now.getMonth() + 1)).slice(-2);var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

    $("#e_end").val(today);
    $("#t_end").val(today);
    $("#p_end").val(today);

});



