
function openWin(url) { 
   var url='change/'+ url;          
   var name='add';            
   var iWidth=500;            
   var iHeight=400;
   var iTop = (window.screen.availHeight - 30 - iHeight) / 2; 
   var iLeft = (window.screen.availWidth - 10 - iWidth) / 2; 
   window.open(url, name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=yes,titlebar=no');
    }
