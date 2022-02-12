function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
var x=copyText.value;
    document.getElementById("demo").innerHTML = x;

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}
function check() {
    var ele = document.getElementsByName('leng');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            var x = ele[i].value;
            if (x === "js") {
                window.open("js.html")
            } else {
                window.open("css.html")
            }
        }
    }
}

//


    function css() {
        var ele = document.getElementsByName('css');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
                var x = ele[i].value;
                if (x === "center") {
                    var copyText = ".center { display: flex; justify-content: center; align-items: center; }"

                    document.getElementById("demo").innerHTML = copyText;

                }
                if (x === "Overflowhiden") {
                    var copyText = ".overflow { overflow: hidden; }"

                    document.getElementById("demo").innerHTML = copyText;
                }
                if (x === "Topnavwithlogin") {
                    var copyText = ".topnav { overflow: hidden; background-color: #333; } .topnav a { float: left; color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 17px; } .topnav a:hover { background-color: #ddd; color: black; } .topnav a.active { background-color: #04AA6D; color: white; } .topnav-right { float: right; } .topnav .login-container { float: right; } .topnav input[type=text] { padding: 6px; margin-top: 8px; font-size: 17px; border: none; width:120px; } .topnav input[type=password] { padding: 6px; margin-top: 8px; font-size: 17px; border: none; width:120px; } .topnav .login-container button { float: right; padding: 6px 10px; margin-top: 8px; margin-right: 16px; background-color: #555; color: white; font-size: 17px; border: none; cursor: pointer; } .topnav .login-container button:hover { background-color: green; } @media screen and (max-width: 600px) { .topnav .login-container { float: none; } .topnav a, .topnav input[type=text], .topnav .login-container button { float: none; display: block; text-align: left; width: 100%; margin: 0; padding: 14px; } .topnav input[type=text] { border: 1px solid #ccc; }"

                    document.getElementById("demo").innerHTML = copyText;
                }
                if (x === "Sidenav") {
                    var copyText = "header{ position: fixed; top:0; left:0; z-index: 1000; height:100%; width:35rem; background:#1a1a1a; display: flex; align-items: center; justify-content: center; flex-flow: column; text-align: center; } header .user img{ height:17rem; width:17rem; border-radius: 50%; object-fit: cover; margin-bottom: 1rem; border:.7rem solid var(--yellow); } header .user .name{ font-size: 3.5rem; color:#fff; } header .user .post{ font-size: 2rem; color:#eee; } header .navbar{ width:100%; } header .navbar ul{ list-style: none; padding:1rem 3rem; } header .navbar ul li a{ display: block; padding:1rem; margin:1.5rem 0; background:#333; color:#fff; font-size: 2rem; border-radius: 5rem; } header .navbar ul li a:hover{ background:var(--yellow); } */ /*footernav bi https://liad07.github.io/scorehub/home https://github.com/liad07/scorehub .navbar { width: 100%; background-color: #555; overflow: auto; } .navbar a { float: left; padding: 12px; color: white; text-decoration: none; font-size: 17px; width: 25%; text-align: center; } .navbar a:hover { background-color: #000; } .navbar a.active { background-color: #04AA6D; }"

                    document.getElementById("demo").innerHTML = copyText;
                }
                if (x === "Undernav") {
                    var copyText = ".navbar { width: 100%; background-color: #555; overflow: auto; } .navbar a { float: left; padding: 12px; color: white; text-decoration: none; font-size: 17px; width: 25%; text-align: center; } .navbar a:hover { background-color: #000; } .navbar a.active { background-color: #04AA6D; }"

                    document.getElementById("demo").innerHTML = copyText;
                }
                if (x === "Basictopnav") {
                    var copyText = ".topnav { overflow: hidden; background-color: #000000; height: 53.5px; } .topnav a { float: left; color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 17px; } .popup{ background-color: #79b46e !important; } .topnav a:hover { background-color: #ddd; color: black; } .topnav a.active { background-color: #04AA6D; color: white; } .topnav-right { float: right; }"

                    document.getElementById("demo").innerHTML = copyText;
                }
                if (x === "shaddow") {
                    var copyText = ".shaddow { filter: drop-shadow(2px 4px 8px #000); }"

                    document.getElementById("demo").innerHTML = copyText;
                }
                if (x === "!important") {
                    var copyText = "!important"

                    document.getElementById("demo").innerHTML = copyText;
                }
            }
        }
    }
function js(){
    var ele = document.getElementsByName('js');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            var x = ele[i].value;
            if (x==="serchfonts"){
                var copyText = "function styleInPage(css, verbose){ if(typeof getComputedStyle== \"undefined\") getComputedStyle= function(elem){ return elem.currentStyle; } var who, hoo, values= [], val, nodes= document.body.getElementsByTagName('*'), L= nodes.length; for(var i= 0; i<L; i++){ who= nodes[i]; if(who.style){ hoo= '#'+(who.id || who.nodeName+'('+i+')'); val= who.style.fontFamily || getComputedStyle(who, '')[css]; if(val){ if(verbose) values.push([hoo, val]); else if(values.indexOf(val)== -1) values.push(val); } val_before = getComputedStyle(who, ':before')[css]; if(val_before){ if(verbose) values.push([hoo, val_before]); else if(values.indexOf(val_before)== -1) values.push(val_before); } val_after= getComputedStyle(who, ':after')[css]; if(val_after){ if(verbose) values.push([hoo, val_after]); else if(values.indexOf(val_after)== -1) values.push(val_after); } } } return values; } // var downloading =styleInPage('fontFamily'); // downloading // console.log(styleInPage('fontFamily'));// returns array: var x=styleInPage('fonts'); console.log(x)"

                document.getElementById("demo").innerHTML = copyText;
            }
            if (x === "blackmode") {
                var copyText = "let prevBgColor = getBodyColor(), darkClassList = ['theme-dark', 'theme--dark', 'theme-black', 'theme--black']; document.body.classList.add(...darkClassList); if (prevBgColor === getBodyColor()) { let style = document.createElement('style'); style.type = \"text/css\"; document.head.appendChild(style); style.sheet.insertRule(\"* { color: #FFFFFF !important; background-color: #000000 !important; border-color: currentColor !important; }\"); } function getBodyColor() { return window.getComputedStyle(document.body).backgroundColor; } console.log(true);"

                document.getElementById("demo").innerHTML = copyText;
            }
            if (x === "serchlinks") {
                var copyText = "var result = []; // קבל את כל הקישורים מהעמוד var elements = document.querySelectorAll(\"a\"); for (let element of elements) { result.push({ \"url\": element.href, \"text\": element.innerText }); } // בצע קריאת השלמה לסיום console.log(result);"

                document.getElementById("demo").innerHTML = copyText;
            }
            }
        }
}
