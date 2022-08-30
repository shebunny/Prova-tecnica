function openHeight(c){
    var panel = document.getElementById(c);
    if(panel.style.height) {
        //panel.style.minHeight = null;
        panel.style.height = null;
    } else {
        //panel.style.height = 'auto';
        panel.style.height = panel.scrollHeight + "px";
    } 
}


function btn_show(el,el_btns=''){
    var content = document.getElementById(el);
    if(el_btns != ''){
    var btns = document.getElementsByClassName(el_btns);
        for(var b=0 ;b < btns.length;b++){
            if(btns[b].id != el){
                btns[b].style.display = 'none';
            }
        }
    }
    if(el != ''){
        //setTimeout(function(){
            if(content.style.display == 'none'){
                content.style.display = 'block';
            }else if(content.style.display == 'block'){
                content.style.display = 'none';
            }
       // },150);
        
    }
}

function btnActive(ref,active){
    setTimeout(function(){
        var btns = document.getElementsByClassName(ref);

        for(var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName(ref);
            
            for(var a=0; a < current.length;a ++){
                current[a].className = current[a].className.replace(" "+active, "");
            }
            
            this.className += " "+active;
            
          });
        } 
    },1000);
}

function cpf_complete(e,cpf_num){ 
    if(e.which != 8){
              if(cpf_num.value.length == 3)
                cpf_num.value = cpf_num.value + '.';
               if(cpf_num.value.length == 7)
                cpf_num.value = cpf_num.value + '.';
               
               if(cpf_num.value.length == 11)
                cpf_num.value = cpf_num.value + '-';
    }
}

