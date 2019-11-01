var min=1, max=5;

var imgList = new Array();
imgList[0]="images/self1.png";
imgList[1]="images/self2.png";
imgList[2]="images/self3.png";
imgList[3]="images/www-pre.png";
imgList[4]="images/www-poster.png";

var li_imgList = new Array();
li_imgList[0]="i1";
li_imgList[1]="i2";
li_imgList[2]="i3";
li_imgList[3]="i4";
li_imgList[4]="i5";

var liList = new Array();
liList[0]="p1";
liList[1]="p2";
liList[2]="p3";
liList[3]="p4";
liList[4]="p5";


var int=self.setInterval("loop()",2000);
function loop(){
	var str=document.getElementById("img").src;
	for(var i=0; i<5; i++){
		if(min==5){
			min=0;
		}
		if(i==min){
			document.getElementById("img").src=imgList[i];
			min++;
			if(i==0){
				document.getElementById(li_imgList[i]).src="images/self1.png";
				document.getElementById(li_imgList[4]).src="images/self1.png";
			}else{
				document.getElementById(li_imgList[i]).src="images/self1.png";
				document.getElementById(li_imgList[i-1]).src="images/self1.png";
			}
			break;
		}
	}
}

var a=3;
function point(obj){
	clearInterval(int);
	//alert(obj.id);
	for(var i=0;i<5;i++){
		if(obj.id==liList[i]){
			document.getElementById("img").src=imgList[i];
			min=i+1;
			document.getElementById(li_imgList[i]).src="images/self1.png";
			for(var a=0;a<5;a++){
				if(a!=i){
					document.getElementById(li_imgList[a]).src="images/self1.png";
				}
			}
		}
	}
}

function leave(){
	int = setInterval("loop()",2000);
}
