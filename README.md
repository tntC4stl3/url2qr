url2qr
======

Chrome插件，作用是将当前Tab页的URL转换为二维码，方便使用手机扫描并分享到微信朋友圈。
初衷是看到Fenng在微博上分享了一个这功能的插件，感觉不难实现，索性自己折腾一个出来玩玩。

源代码在src文件夹，很简单，哈哈。
打包好的crx文件在crx文件夹，打开chrome扩展程序页，将该文件拖入Chrome窗体即可安装插件。

感谢以下资料
-----
1. [Google Extension 开发文档](http://developer.chrome.com/extensions/getstarted.html) : 很直观的描述了如何制作一个简单的插件。
2. [Stackoverflow](http://stackoverflow.com/questions/1979583/how-can-i-get-the-url-for-a-google-chrome-tab) : 没看官方文档，直接在这上边找到了获取当前标签url的方法。
3. [jquery-qrcode](https://github.com/jeromeetienne/jquery-qrcode) : 用来生成二维码的主要js代码就在这里了。

