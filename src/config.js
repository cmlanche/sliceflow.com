var sf_product = true;
var sf_user = {
    isLogin: false
};

export function getServerUrl(){
    if(sf_product){
        return "http://119.23.204.101:9000"
    }else{
        return "http://localhost:9000";
    }
}

export function getUser(){
    return sf_user;
}

export function getAppId(){
    if(sf_product){
        return "dkfjhsdkfjhskjfheiuwryi237y23928r9";
    }else{
        return "dkfjhsdkfjhskjfheiuwryi237y23928r9";
    }
}