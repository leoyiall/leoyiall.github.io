window.onload=function(){
	var oSpring=document.getElementById("spring");
	var oSun=document.getElementById("sun");
	var oAutumn=document.getElementById("autumn");
	var oWinter=document.getElementById("winter");
	var aP_1=document.getElementsByClassName("p_1");
	var aImgShow=document.getElementsByClassName("img_show")[0];
	oSpring.onmouseover=function(){
		aImgShow.style.backgroundImage="url(../images/hua3.png)";
		for(var i=0;i<aP_1.length;i++){
			aP_1[i].style.color="#fff";
		}
		oSpring.style.color="red";

	}
   oSun.onmouseover=function(){
   	   aImgShow.style.backgroundImage="url(../images/hua4.png)";
   	   for(var i=0;i<aP_1.length;i++){
			aP_1[i].style.color="#fff";
		}
		oSun.style.color="red";
   }
    oAutumn.onmouseover=function(){
   	   aImgShow.style.backgroundImage="url(../images/qiu1.png)";
   	   for(var i=0;i<aP_1.length;i++){
			aP_1[i].style.color="#fff";
		}
		oAutumn.style.color="red";
   }
    oWinter.onmouseover=function(){
   	   aImgShow.style.backgroundImage="url(../images/dong1.png)";
   	   for(var i=0;i<aP_1.length;i++){
			aP_1[i].style.color="#fff";
		}
		 oWinter.style.color="red";
   }
}