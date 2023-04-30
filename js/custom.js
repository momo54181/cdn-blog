let styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
let styleTitle2 = `
font-size:12px;
color: rgb(244,167,89);
`
let styleContent = `
color: rgb(30,152,255);
`
let title1 = '莫莫逗狗'
let title2 = `
                                                                     
                     .::::.
                   .::::::::.
                  :::::::::::  FUCK YOU
              ..:::::::::::'
            '::::::::::::'
              .::::::::::
         '::::::::::::::..
              ..::::::::::::.
            ..::::::::::::::::
             ::::..:::::::::'        .:::.
            ::::'   ':::::'       .::::::::.
          .::::'      ::::     .:::::::'::::.
         .:::'       :::::  .:::::::::' ':::::.
        .::'        :::::.:::::::::'      ':::::.
       .::'         ::::::::::::::'         ..::::.
   ...:::           ::::::::::::'              ..::.
  .... ':.          ':::::::::'                  ::::..
                     '.:::::'                    ':'......                                       
`
let content = `
版 本 号：0.0.2
更新日期：2023-04-30

主页:  https://blog.mocn.top/
Github:  https://github.com/momo54181
`
console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)

function randomPost() {
    fetch('/baidusitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
        let ls = data.querySelectorAll('url loc');
        while (true) {
            let url = ls[Math.floor(Math.random() * ls.length)].innerHTML;
            if (location.href == url) continue;
            location.href = url;
            return;
        }
    })
}

function pjaxUpdate(type, attribute, value) {
    return new Promise(resolve => {
        const oldEle = document.querySelector(`${type}[${attribute}="${value}]"`)
        if (!oldEle) return resolve(false)
        const newEle = document.createElement(type)
        const content = item.text || item.textContent || item.innerHTML || ""
        Array.from(item.attributes).forEach(attr => newEle.setAttribute(attr.name, attr.value))
        newEle.appendChild(document.createTextNode(content))
        newEle.onload = () => resolve(true)
        oldEle.parentNode.replaceChild(newEle, oldEle)
        resolve(false)
    })
}

/* 禁用F12按键并提醒 */
document.onkeydown = function () {
if (window.event && window.event.keyCode == 123) {
  event.keyCode = 0;
  event.returnValue = false;
    new Vue({
            data:function(){
                this.$notify({
                    title:"嘿！别瞎按",
                    message:"坏孩子！",
                    position: 'bottom-right',
                    offset: 50,
                    showClose: false,
                    type:"error"
                });
                return{visible:false}
            }
        })
  return false;
}
};

/* 复制提醒 */
document.addEventListener("copy",function(e){
    new Vue({
        data:function(){
            this.$notify({
                title:"嘿！复制成功",
                message:"若要转载请务必保留原文链接！爱你呦~",
                position: 'bottom-right',
                offset: 50,
                showClose: false,
                type:"success"
            });
            return{visible:false}
        }
    })
})

/* 禁用右键菜单并提醒 */
document.oncontextmenu = function () {
new Vue({
    data:function(){
        this.$notify({
            title:"嘿！没有右键菜单",
            message:"复制请用键盘快捷键",
            position: 'bottom-right',
            offset: 50,
            showClose: false,
            type:"warning"
        });
        return{visible:false}
    }
})




<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '！！这里这里 ◕ ں ◕ ';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '(ฅ>ω<*ฅ) 喵喵爱你哟~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
