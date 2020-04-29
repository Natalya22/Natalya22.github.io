
var znach = document.getElementById("text");
var per=document.getElementById("text2");


var div_for_del=document.getElementById("container");


div_for_del.addEventListener("mouseover", ChangeStyle);

div_for_del.addEventListener("click",Del);

function Del(event) {
    let div_del;
    let l;
    if (event.type == "click") {
      div_del=document.getElementById(event.target.id);
      if (div_del!=null){
      if (div_del.style!=""){
        div_del.style="";
      }
      console.log(event.target.id);
    }
    }
}


function getRandom(min, max) {
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function ChangeStyle(event){
    if ((znach.value!="")&&(per.value!="")){
    console.log(znach);
        if (event.target.id==per.value){
            let div=document.getElementById(per.value);
            let rand=getRandom(5,11);
            let col;
            switch(rand){
                case 5: {
                    col = "Salmon"; 
                    break
                }
                case 6: {
                    col = "DeepSkyBlue";  
                    break
                }
                case 7: { 
                    col = "Moccasin"; 
                    break
                }
                case 8: {
                    col = "DeepPink";  
                    break
                }
                case 9: {
                    col = "Lime";  
                    break
                }
                case 10: {
                    col = "RosyBrown"; 
                    break
                }
            }
            let bc="backgroundColor";
            if ((znach.value=="color")||(znach.value==bc))
            {
                div.style[znach.value]=col;
            }
            let ts="textShadow";
            let str="";
            if (znach.value==ts){
                for (let i=0;i<3;i++)
                {
                    let g_r=String(getRandom(5,11)); 
                    str+=g_r;
                    str+="px";
                    str+=' ';
                }
                str+=col;
                div.style[znach.value]=str;
            }
            let t_d;
            let td="textDecoration";
            if (znach.value==td){
                switch(rand){
                    case 5: {
                        t_d="blink"; 
                        break
                    }
                    case 6: {
                        t_d="line-through";  
                        break
                    }
                    case 7: {
                        t_d="overline"; 
                        break
                    }
                    case 8: {
                        t_d="underline"; 
                        break
                    }
                }
                div.style[znach.value]=t_d;
            }
            let fw="fontWeight";
            if (znach.value==fw){
                if (rand!=10)
                {
                    let r_hundr=String(rand*100);
                    div.style[znach.value]=r_hundr;
                }
                else
                {
                    div.style[znach.value]="bolder";
                }
            }
            let fsz="fontSize";
            let bw="borderWidth";
            if (znach.value==bw)
            {
                let bord="";
                for (let i=0;i<4;i++)
                {
                    bord+=String(getRandom(5,11));
                    bord+="px"
                    if (i!=4)
                    {
                        bord+=' ';
                    }
                }
                div.style.borderStyle="dashed";
                div.style[znach.value]=bord;        
            }
            if (znach.value==fsz){
                let font="";
                font+=String(rand);
                font+="pt";
                div.style[znach.value]=font;
            }
            console.log(div.style[znach.value]);
        }
    }
}
