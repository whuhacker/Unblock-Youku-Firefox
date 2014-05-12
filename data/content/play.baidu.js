var i, list = document.getElementsByTagName('script');
for (i = 0; i < list.length; i++) {
    list[i].innerHTML = list[i].innerHTML.replace(/isForeign[^;]*/gi, 'isForeign = ""');
}
mbox.isForeign = '';
document.body.classList.remove('foreignIP');