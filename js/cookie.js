
setCookie = (name, value, days) => {
    let d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
getCookie = (name) => {
    name += "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

checkIfCookieExist = () => {
    let username = getCookie("username");
    let password = getCookie("password");
    if (username.length > 0 && password.length > 0)
        console.log(true)
    else
        console.log(false)
}

deleteCookie = (name, path) => {
    setCookie(name, '', -1, "=/")
}

