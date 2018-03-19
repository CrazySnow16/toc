 (function(){
 var footer = $('.footer');
    if (footer) {
        var content = '<footer>';
        content += '<a href="home.html"><div>';
        content += '<img src="../image/footer_time.png"/>';
        content += '<span>TOC</span>';
        content += '</div></a>';
        content += '<a href="time/home.html"><div><img src="../image/footer_time.png"/><span>时间</span></div></a>';
        content += '<a><div><img src="../image/footer_broadcast.png"/><span>直播</span></div></a>';
        content += '<a><div><img src="../image/footer_city .png"/><span>商城</span></div></a>';
        content += '<a><div><img src="../image/footer_my.png"/><span>我的</span></div></a>';
        content += '</footer>';

        footer.html(content);
    }
}());