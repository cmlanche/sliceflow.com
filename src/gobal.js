export function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

export function requestAuth(http){
    let path = document.location.origin + document.location.pathname;
    console.log(path);
    http.get(`/login/github/` + encodeURIComponent(path)).then(res=>{
        console.log(res.data);
        window.location.href = res.data;
    });
}