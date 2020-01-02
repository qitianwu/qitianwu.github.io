function yanse() {
    isClick = true;
   //  获取容器内容并且切换样式
   $('.itemb').mouseover(function() {
           $(this).addClass('itemb-active');
           var yance1 = $("#color").text();
           var yance2 = $("#chicun").text();
           color = yance1;
           chicun = yance2;
       }).mouseout(function() {
           $(this).removeClass('itemb-active');
       })
       // chicunname = shu.innerText;
       // 切换图片
       var img = document.getElementById("img0")
                   //                img.setAttribute("src","../image/cpxq/qiehuan/xing@3x.png");
           img.src = "../image/cpxq/qiehuan/xing@3x.png";
}

<script>
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?f38d019abe6aa72687acdcf683ca0515";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
</script>
