window.onload=function(){
           	var typingText="自然是我们的家，在这里，我要跟你讲个人与自然相处的故事。";
	      	var count=0;
	      	//获取div元素的引用
	      	var oBlock=document.getElementById('story');
	      	oBlock.onclick=function(){
	      		// alert("fdfd");
	      	}
	      	function type(){
	      		if(count<=typingText.length){
	      			oBlock.innerHTML=typingText.substring(0,count);/*substring指定的两个索引值之间字符组成的字符串*/
	      			count++;
	      		}else{
	      			window.clearInterval(intervalID);
	      		}
	      	}
	      	var intervalID=window.setInterval(type,200);
	      	    zy_init();
        window.uexOnload = function(type){
            if (!type) {
                zy_con("content", "page5_content.html", 0, $("header").offsetHeight);
            }
                        window.onorientationchange=window.onresize=function()
                        {
                                zy_resize("content",0,$("header").offsetHeight);                                
                        }
        }       
};