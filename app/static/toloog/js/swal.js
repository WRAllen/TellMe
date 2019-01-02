function swalsucc(txt){
        if (txt==undefined){
            txt = "更新成功!";
        }
        swal({   
            title: txt,   
            type: "success", 
            timer: 1000,
            showConfirmButton: false    
        });
            return false;
    }
    function swalreload(){
        swal({   
            title: "更新成功!",   
            type: "success", 
            timer: 1000,
            showConfirmButton: false    
        },function(){
            window.location.reload();
        });
            return false;
    }
    function swalhref(txt,url){
        swal({   
            title: txt,   
            type: "success", 
            timer: 1000,
            showConfirmButton: false    
        },function(){
            window.location.href=url;
        });
            return false;
    }

    function swalerro(txt){
        swal({   
            title: txt, 
            type:"error",
            timer: 1000,
            showConfirmButton: false   
        });
        return false;
    }

    function swalErr(tit,txt){
        swal({   
            title: tit, 
            text:txt,
            type:"error",
            timer: 1000,
            showConfirmButton: false   
        });
        return false;
    }