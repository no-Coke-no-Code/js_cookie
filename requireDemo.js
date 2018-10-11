define(function(){
    return {
        cookieToObj:function(){
            var arr = [];
            var obj = {};
            arr = document.cookie.split(";");
            if(arr[0] == "" || undefined)
            {
                return ;
            }
            else
            {
                for(let x =0;x<arr.length;x++)
                {
                    obj[arr[x].split("=")[0]] = arr[x].split("=")[1];
                }
                return obj;
            }
        },
        setCookie:function(name,value,day){
            if(day)
            {
                var date = new Date();
                date.setTime(date.getTime() + (day*24*60*60*1000));
                // name = name.replace(/(^\s*)|(\s*$)$/g,"g");
                document.cookie = name + "=" + value + ";expires=" + date.toUTCString();
            }
            else
            {
                document.cookie = name + "=" + encodeURI(value) + ";";
            }
        },
        getCookie:function(name){
            var obj = this.cookieToObj();
            for(var x in obj)
            {
                if(x == name || x == " "+name)
                {
                    return obj[x];
                }
            }
            return ;
        },
        checkCookie:function(name){
            var obj = this.cookieToObj();
            if(obj == undefined || obj == "")
            {
                return false;
            }
            else
            {
                for(var x in obj)
                {
                    if(x == name)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
        },
        deleteCookie:function(name){
            var cookieObj = this.cookieToObj();
            for(var i in cookieObj)
            {
                if(i == name || i == " " + name)
                {
                    document.cookie = name+"=;expires=Thu, 01-Jan-70 00:00:01 GMT";
                }
            }
        },
        clearCookie:function(){
            var arr = document.cookie.split(";");
            if(arr.length == 0)
            {
                return;
            }
            else
            {
                arr.forEach((cookie) => {
                    let key = cookie.split("=")[0];
                    this.deleteCookie(key);
                });
            }
        }
    }
});