// ==UserScript==
// @id          yunpan.360.cn
// @name        yunpan.360.cn
// @version     0.0.5
// @namespace   https://github.com/LordMerlin/en.yunpan.360.cn/
// @updateURL   https://raw.github.com/LordMerlin/en.yunpan.360.cn/master/en.yunpan.360.cn.meta.js
// @downloadURL https://raw.github.com/LordMerlin/e.yunpan.360.cn/master/en.yunpan.360.cn.user.js
// @description English translation of the site yunpan.360.cn
// @include     http://yunpan.360.cn/*
// @include     http://*.yunpan.360.cn/*
// @include     https://qita.yun.360.cn/*
// @include     http://yunpan.cn/*
// @include     http://*.yunpan.cn/*
// @match       http://yunpan.360.cn/*
// @match       https://qita.yun.360.cn/*
// @match       http://*.yunpan.360.cn/*
// @match       http://yunpan.cn/*
// @match       http://*.yunpan.cn/*
// @grant       none
// ==/UserScript==

(function () {

    function findAndReplace(searchText, replacement, searchNode) {
        if (!searchText || typeof replacement === 'undefined') {
            // Throw error here if you want...
            return;
        }
        var regex = typeof searchText === 'string' ? new RegExp(searchText, 'g') : searchText,
            childNodes = (searchNode || document.body).childNodes,
            cnLength = childNodes.length;
	    excludes = 'html,head,style,title,link,meta,script,object,iframe';
        while (cnLength--) {
            var currentNode = childNodes[cnLength];
            if (currentNode.nodeType === 1 && (',' + excludes + ',').indexOf(',' + currentNode.nodeName.toLowerCase() + ',') === -1) {
                arguments.callee(searchText, replacement, currentNode);
            }
            if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
                continue;
            }
            var parent = currentNode.parentNode,
                frag = (function(){
                    var html = currentNode.data.replace(regex, replacement),
                        wrap = document.createElement('div'),
                        frag = document.createDocumentFragment();
                    wrap.innerHTML = html;
                    while (wrap.firstChild) {
                        frag.appendChild(wrap.firstChild);
                    }
                    return frag;
                })();
            parent.insertBefore(frag, currentNode);
            parent.removeChild(currentNode);
        }
    }

    function translate() {
        var ts = {
        	// Errors //
        	"请求超时":"Request timed out",
        	// Others //
        	"当前页文件搜索":"This page file search",
        	"标记为已读":"Mark as Read",
        	"Delete所选":"Delete Selected",
        	"全部消息":"All news",
        	"消息内容":"Message content",
        	"消息时间":"Message time",
        	"暂无消息":"No news",
        	// Recycle page //
        	"清空Recycle":"Empty the Recycle",
        	"对Recycle启用云盘安全密码":"Recycle cloud-enabled disk for secure password",
        	"温馨提示":"Tips",
        	// Share page //
        	"查看详情":"View details",
        	"复制Share链接":"Copy Share link",
        	"复制":"Copy",
        	"提取码":"Extraction code",
        	"Download次数":"Download times",
        	"查看Share链接":"View Share Link",
        	"CopyShare链接":"CopyShare Link",
        	"为配合有关部门的“扫黄打非”净网行动，云盘分享功能临时调整.":"In line with the relevant departments of the antipornography net net action, cloud disk sharing temporary adjustments.",
        	"我Share的文件":"I Share Files",
        	"Extraction code已Copy到剪贴板":"Extraction code has been copy to clipboard",
        	// Safe page //
        	"文件Safe在安全密码保护下，请输入安全密码":"File Safe in secure password protected, enter the security code",
        	"进入Safe":"Enter Safe",
        	"忘记安全密码":"Forget security code",
        	// Level page //
        	"我的等级":"My grade",
        	"等级规则":"Level Rules",
        	"等级：":"Rating: ",
        	"经验值：":"Experience: ",
        	"距离下一级还需":"From the next level needed",
        	"今日还有":"Today, there are",
        	"经验值未领取,可做今日任务领取":"unclaimed experience, do the task to receive today",
        	"今日任务 （今日还可再获取 70 经验值）":"Today the task (today also get 70 experience again)",
        	"（查看等级规则）":"(See Level Rules)",
        	"今日任务":"Today, the task",
        	"可获经验值":"Entitled Experience",
        	"每日上限次数":"Limit the number of times per day",
        	"完成状态":"Completion status",
			"等级特权":"Level privileges",
        	"数值":"Value",
        	"说明":"Explanation",
        	"无限":"Unlimited",
        	"通过电脑客户端登录":"By PC client login",
        	"通过Move端登录(手机或iPad)":"By Android or iPad login",
			"通过网页版登录":"By Web version Login",
        	"成功Upload文件":"Successful Upload file",
        	"成功Share文件":"Successful Share Files",
        	"Daily draw额外增加经验":"Daily draw additional experience",
        	"PC打开云盘目录":"PC open cloud disk directory",
		    "More任务，Stay tuned":"More tasks, Stay tuned",
        	"离任务上限还有1次（20经验值）":"There is a time limit from the task (20 Experience)",
        	"离任务上限还有1次（10经验值）":"There is a time limit from the task (10 Experience)",
        	"完成任务（获5经验值）":"Complete the task (for 5 Experience)",
        	"截止至当前，Total获等级空间奖励1G，即总空间增加1G":"As of current, Total grade space was rewarded 1G, 1G that increase the total space",
        	"通过客户端Upload 单个文件的限制为10G":"By limiting the client Upload a single file is 10G",
			"Share文件的Download总流量已升级为无限":"Download Total Flow Share file has been upgraded to unlimited",
        	"累积等级空间奖励":"Cumulative grade space award",
        	"客户端Upload 文件限制":"Client Upload file limit",
        	"Share流量特权":"Share flows privilege",
        	// Expansion Records page //
        	"以下是您Free expansion的记录":"Here is your Free expansion",
        	"合计：":"Total: ",
        	"详情":"Detail",
        	"通过Android手机抽奖":"Android version by lottery",
        	"通过网页版抽奖":"Web version by lottery",
        	"36T升级包":"36T upgrade package",
        	"关注云盘新浪微博":"Concerned about the cloud disk Weibo",
        	"成功升级到第5级":"Successfully upgraded to level 5",
        	"首次Upload 文件奖励":"Upload files first award",
        	"首次通过360安全浏览器手机版使用云盘服务":"360 for the first time by using a secure browser mobile version cloud disk services",
        	"参与 爱Share活动 活动抽奖获free space":"Participation Love Share activity was the draw of free space",
        	"加载文件列表中":"Load the file list",
        	"通过安卓版云盘查看浏览器收藏":"View by Android version cloud disk browser Favorites",
			"首次使用手机或iPad登录云盘奖励":"Login using your phone or iPad first cloud disk awards",
        	"Ithink合作":"Ithink cooperation",
			"下一页":"Next",
        	"上一页":"Prev",
			"全部记录":"All records",
        	"Daily draw记录":"Daily draw record",
			"以下是您Daily draw的记录":"Here is your Daily draw record",
        	"活动记录":"Active Record",
			"以下是您任务活动的记录":"The following is a record of your mission activities",
        	"人气PK活动":"Popular PK activity",
			"查看已邀请的前4位好友，请到 任务升级记录":"View has invited former four friends, go to the task of upgrading Record",
        	"您暂无此种记录":"You no such records",
			"任务升级记录":"Task upgrade log",
        	"购买记录":"Purchase records",
        	"其它记录":"Other records",
        	// More page //
        	"电脑收藏夹":"Computer favorites",
        	"手机收藏夹":"Mobile favorites",
        	"联系人":"Contact",
        	"短信":"SMS",
        	"条":" item(s)",
        	"通话记录":"Call records",
        	"浏览器扩展":"Browser extension",
        	"敬请期待":"Stay tuned",
        	"网盘":"Network disk",
        	"相册":"Album",
        	"云收藏":"Cloud collection",
        	"更多":"More",
        	// Browser page //
        	"全部内容":"All contents",
        	"图片":"Picture",
        	"视频":"Video",
        	"文本":"Text",
                “书籍”:”Books”, 
        	"其他文件":"Other",
        	"您一共保存了":"You save a total of ",
        	"个内容":" content",
        	"Offline Download列表":"Offline Download List",
        	// Download page //
        	"不占本地空间，好用的网络U盘":"Does not account for local space, easy to use network Yunpan disk",
        	"适用系统：":"System: ",
        	"更新：":"Update: ",
        	"自动备份照片，随时查看文档，在线看视频":"Automatic backup photos, keep track of documents, watch online video",
        	"您的随身U盘，珍藏每个精彩瞬间":"Your portable disk, treasure every wonderful moment",
        	"正式版":"Official ",
        	"越狱":"Jailbreak ",
        	"以上":" and above",
        	"立即":" ",
        	"Android版":"Android",
        	"iPhone版":"iPhone",
        	"iPad版":"iPad",
        	"含Cloud":"Included Cloud",
        	"文档随身带，办公更轻松":"Carry documents, office more easily",
        	"便捷、安全、快速、自动同步":"Convenient, safe, fast, automatic synchronization",
        	"全新出发，自动同步，安全无忧":"The new departure, automatic synchronization, security worries",
        	// Login page //
        	"360云盘 - 安全免费 无限空间":"360 Yunpan - free unlimited space security",
        	"360云盘":"360 Yunpan",
        	"36T免费空间":"36TB Free Space",
        	"首页":"Home",
        	"下载":"Download",
        	"论坛":"Forum",
        	"下载客户端":"Download the client",
        	"点击播放视频":"Click to play video",
        	"360云盘":" ",
        	"欢迎使用":"Welcome",
        	"您当前正在使用的云盘帐号是：":"Cloud disk account you are currently using is:",
        	"下次自动登录":"Remember me",
        	"忘记密码":"Forgot password",
        	"验证码":"Captcha",
        	"点击更换图片":"Click to change image",
        	"换一张":"Change a",
        	"请输入图中的字母或数字，不区分Size写":"Please enter the letters or numbers, no distinction size write",
        	"注册新帐号":"Create new account",
        	"其他帐号登录：":"Other account login:",
        	"新浪微博登录":"Sina Weibo login",
        	"人人登录":"RenRen Login",
        	"Msn登录":"Msn Login",
        	"飞信":"Fetion Login",
        	"天翼登录":"Tianyi Login",
        	"注册360帐号":"Registration",
        	"进入我的云盘":"Disk into my cloud",
        	"更换帐号":"Replacing Account",
        	"同步版下载":"Sync Download",
        	"版下载":"Download",
        	"同步版":"Sync",
        	"手机扫描":"Mobile Scanning",
        	"直接":"Direct",
        	"根据你的手机系统选择":"Depending on your phone system selection",
        	"安卓手机版":"Android Mobile",
        	"安卓正式版":"Android official version",
        	"版本":"Version",
        	"更新时间":"Update",
        	"二维码":"Two-dimensional code",
        	"尝鲜版":" Beta",
        	"苹果手机版":"Apple Mobile version",
        	"苹果正式版":"Apple's official version ",
        	"越狱体验版":"Jailbreak trial version ",
        	"软件升级中,稍后提供下载":"Software upgrade, provided later download",
        	"使用协议":"User Agreement",
        	"隐私保护":"Privacy",
        	"更新日志":"Update log",
        	"帮助中心":"Help Center",
        	"问题反馈":"Feedback",
        	"360安全中心 京ICP证080047号 京公网安备110000000006号":"360 Security Center, Beijing Beijing ICP Certificate No. 080 047 110 000 000 006 Number of public network security equipment",
        	"抱歉":"Sorry",
        	"360云盘iPhone正式版":"360 Yunpan iPhone official version",
        	"目前正在升级维护中， 很快即将提供下载。":"Maintenance is currently being upgraded, will soon be available for download soon.",
        	// Disk main page //
        	"360云盘 - 我的云盘":"360 Yunpan - My cloud drive",
        	"云盘首页":"Cloud disk Home",
        	"最安全的网络U盘":"The most secure network cloud disk",
        	"网盘":"Disk",
        	"相册":"Album",
        	"从浏览器保存的内容":"Saved content from a browser",
        	"云收藏":"Cloud",
        	"更多云服务":"More cloud services",
        	"更多":"More",
        	"点击抽奖领取免费空间":"Click on the draw to receive free space",
        	"每日抽奖":"Daily draw",
        	"已经抽奖":"Already draw",
        	"全选":"Select",
        	"Disk的全部图片":"Disk full picture",
        	"共":"Total",
        	"查看原图":"View full size",
        	"Download原图":"Download original",
        	"张":" file(s)",
        	"账号安全中心":"Security center",
        	"全部图片":"All Photos",
        	"文件时光机":"File Time Machine",
        	"重命名":"Rename",
        	"转出文件":"Transfer file",
        	"转入文件Safe":"Transfer to safe",
        	"移动":"Move",
        	"恭喜您，本次抽奖获得了":"Congratulations, you won this lottery",
        	"永久免费空间":"free space",
        	"幸运指数：":"Fortunately: ",
        	"转发到新浪微博":"Share to SWeibo",
        	"转发到腾讯微博":"Share to Tencent",
        	"查看抽奖记录":"View lottery record",
        	"帐号安全中心":"Account Security Center",
        	"云盘消息":"Cloud disk message",
        	"云盘等级":"Cloud disk level",
        	"扩容记录":"Expansion Records",
        	"空间升级卡":"Space upgrade card",
        	"邀请好友":"Invite a friend",
        	"意见反馈":"Feedback",
        	"退出云盘":"Exit cloud disk",
        	"全部文件":"All files",
        	"保险箱":"Safe",
        	"我的分享":"Share",
        	"我的共享群":"I shared group",
        	"回收站":"Recycle",
        	"免费扩容":"Free expansion",
        	"android安卓版下载":"Android Download",
        	"iphone苹果版下载":"Apple iphone Download",
        	"PC客户端下载":"PC client download",
        	"PC客户端":"PC client",
        	"Mac客户端下载":"Mac client download",
        	"Mac客户端":"Mac client",
        	"桌面快捷版下载":"Download Desktop Shortcut",
        	"桌面快捷版":"Express Edition",
        	"当前页文件搜索":"This page file search",
        	"新！支持云加速上传啦！支持极速秒传、大文件上传、断点续传哦~":"New! Support cloud acceleration upload it! Support speed second pass, large file upload, HTTP oh ~",
        	"安装云加速控件":"Installation cloud acceleration control",
        	"上传控件安装成功，快来体验吧！":"Upload control the installation is successful, come experience it!",
        	"返回上级目录":"Return to parent directory",
        	"返回":"Return",
        	"上传":"Upload ",
        	"文件到":"Files to ",
        	"新建文件夹":"New Folder",
        	"离线":"Offline ",
        	"删除":"Delete",
        	"分享":"Share",
        	"转出文件保险箱":"Transfer files safe",
        	"立即锁上保险箱":"Immediately locked safes",
        	"查看分享链接":"View share links",
        	"取消分享":"Cancel share",
        	"复制分享链接":"Copy link to share",
        	"启用提取码":"Enable extraction code",
        	"取消提取码":"Cancel extraction code",
        	"还原文件":"Restore files",
        	"清空回收站":"Empty the Recycle Bin",
        	"对回收站启用云盘安全密码":"Recycle Bin is enabled for cloud disk security password",
        	"回收站云盘安全密码启用中":"Recycle Bin is enabled in the cloud disk security password",
        	"还原到选中版本":"Restore to the selected version",
        	"穿越到选中时光号":"Road crossing to the selected time",
        	"在线查看":"View Online",
        	"上传文件":"Upload file",
        	"切换到列表视图":"Switch to the list view",
        	"列表视图":"List view",
        	"切换到大图视图":"Switch to the big picture view",
        	"大图标视图":"Large icon view",
        	"排序":"Sort",
        	"名称":"Name",
        	"最近上传":"Recent uploads",
        	"修改日期":"Modified",
        	"删除日期":"Delete date",
        	"日期":"Date",
        	"时光号":"No. Time",
        	"大小":"Size",
        	"请输入要下载的文件链接地址":"Please enter the link address to download the file",
        	"支持HTTP、FTP链接下载":"Supports HTTP, FTP download",
        	"离线下载的文件统一保存到【来自-离线下载的文件】文件夹里":"Offline files downloaded from the unified saved to [-] off the downloaded file folder",
        	"取消":"Cancel",
        	"开始下载":"To start the download",
        	"最近":"Recently",
        	"离线下载任务记录":"Offline download task records",
        	"新建普通下载":"New ordinary downloads",
        	"任务名":"Task name",
        	"下载状态":"Download Status",
        	"操作":"Operating",
        	"后台运行":"Background",
        	"清空历史记录":"Empty History",
        	"文件名":"File name",
        	"删除下载记录":"Deleted download history",
        	"取消下载":"Cancel download",
        	"重试下载":"Retry download",
        	"打开文件所在文件夹":"Open the folder where the file"
        };
        for(var t in ts) {
            findAndReplace(t,ts[t]);
        };
        setTimeout(translate, 1000);
    };

    setTimeout(translate, 1000);

})();
