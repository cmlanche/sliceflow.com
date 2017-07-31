var sf_product = false;
var sf_user = {
    isLogin: false
};

export function getServerUrl(){
    if(sf_product){
        return "http://sliceflow.com"
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