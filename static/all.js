function search(event) {
    window.open('https://cn.bing.com/search?q=' + document.querySelector('header form input[name=q]').value + ' site:deshengstudents.com');
    event.preventDefault();
}

function share() {
    if (navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1) {
        alert('请点击右上角 ⋯ 分享 ↗');
    } else if (navigator.share) {
        navigator.share({ url: location.href })
    } else {
        var text = window.location.href;
        var textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.style.position = 'fixed';
        textarea.style.clip = 'rect(0 0 0 0)';
        textarea.style.top = '10px';
        textarea.value = text;
        textarea.select();
        document.execCommand('copy', true);
        document.body.removeChild(textarea);
        if (confirm('链接已复制到剪切板，是否打开微信分享？')) {
            window.location.href = 'weixin://';
        }
    }
}

function openOrCloseAll(button) {
    var details = document.getElementsByTagName('details');
    if (button.innerHTML == '<span class="material-symbols-outlined">collapse_all</span>全部收起') {
        for (var i = 0; i < details.length; i++) {
            details[i].removeAttribute('open', 0);
        }
        button.innerHTML = '<span class="material-symbols-outlined">expand_all</span>全部展开';
    } else {
        for (var i = 0; i < details.length; i++) {
            details[i].setAttribute('open', 0);
        }
        button.innerHTML = '<span class="material-symbols-outlined">collapse_all</span>全部收起';
    }
}