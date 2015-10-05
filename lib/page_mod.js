var pageMod = require('sdk/page-mod');
pageMod.PageMod({
        include: 'http://music.163.com/*',
        contentScriptWhen: 'end',
        contentScriptFile: self.data.url('content/music.163.js'),
    attachTo: ["existing", "top", "frame"]
});
pageMod.PageMod({
        include: 'http://www.tudou.com/*',
        contentScriptWhen: 'ready',
        contentScriptFile: self.data.url('content/tudou.js')
});
pageMod.PageMod({
        include: 'http://play.baidu.com/*',
        contentStyleFile: self.data.url('content/play.baidu.css')
});
