var min=1, max=5;
//设置切换的图片
var imgList = new Array();
imgList[0]="../素材/photo01.jpg";
imgList[1]="../素材/photo02.jpg";
imgList[2]="../素材/photo03.jpg";
imgList[3]="../素材/photo04.jpg";
imgList[4]="../素材/photo05.jpg";
//自动变化“小圆点”
var li_imgList = new Array();
li_imgList[0]="i1";
li_imgList[1]="i2";
li_imgList[2]="i3";
li_imgList[3]="i4";
li_imgList[4]="i5";
//鼠标触碰修改（这里感觉重复了，懒得改了。。）
var liList = new Array();
liList[0]="p1";
liList[1]="p2";
liList[2]="p3";
liList[3]="p4";
liList[4]="p5";

//自动循环
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
				document.getElementById(li_imgList[i]).src="../素材/ok01.png";
				document.getElementById(li_imgList[4]).src="../素材/ok02.png";
			}else{
				document.getElementById(li_imgList[i]).src="../素材/ok01.png";
				document.getElementById(li_imgList[i-1]).src="../素材/ok02.png";
			}
			break;
		}
	}
}
//鼠标触碰显示图片+暂停循环显示
var a=3;
function point(obj){
	clearInterval(int);
	//alert(obj.id);
	for(var i=0;i<5;i++){
		if(obj.id==liList[i]){
			document.getElementById("img").src=imgList[i];
			min=i+1;
			document.getElementById(li_imgList[i]).src="../素材/ok01.png";
			for(var a=0;a<5;a++){
				if(a!=i){
					document.getElementById(li_imgList[a]).src="../素材/ok02.png";
				}
			}
		}
	}
}
//鼠标离开继续循环
function leave(){
	int = setInterval("loop()",2000);
}
