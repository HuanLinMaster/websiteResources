window.addEventListener('DOMContentLoaded',()=>{
    //歌曲列表
    var musicList = [
        "https://m10.music.126.net/20220816221304/a1835c77bb609a5e3f7e753df67c38fd/yyaac/obj/wonDkMOGw6XDiTHCmMOi/14056378203/d4a0/3984/bd5c/0b6d50b2f51405adbd7024b6864377b8.m4a",
        "https://m10.music.126.net/20220816221324/6d17c824245a6163ccf6427982d13da1/yyaac/obj/wonDkMOGw6XDiTHCmMOi/14053901467/dc76/2d8b/22b7/7cdb6e2096e2702e2ea21d25efc89a64.m4a",
        "https://m701.music.126.net/20220816221331/9bc31d83cc34b6f13923b3803d0bab0e/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/11830685487/6b76/d2d8/38d9/b53fed8c791b924f1abae42672d854a2.m4a",
        "https://m701.music.126.net/20220816221339/b0d34d2c872224cf791881ce357961d5/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/17046221294/9a59/cdf5/7db2/b711260c9a5d5acf1a1cd94516937a21.m4a",
        "https://m10.music.126.net/20220816221347/68984d8864893d10a82ec32648801b5a/yyaac/obj/wonDkMOGw6XDiTHCmMOi/14054235928/33d3/48c3/c751/025d721877bd1e34a9b7a8c8a2e5ff66.m4a"
    ]
    var musicDom = document.createElement("audio");
    musicDom.src = musicList[Math.floor(Math.random()*100)%(musicList.length+1)];
    musicDom.play();
})