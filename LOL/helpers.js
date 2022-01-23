<<<<<<< HEAD
function $g(selector) {
    //判斷是否為id selector
    if (selector.includes('#') && !selector.includes(' ')) {
        //回傳Element
        return document.querySelector(selector);
    }

    //回傳NodeList集合
    let nodelist = document.querySelectorAll(selector);

    return nodelist.length == 1 ? nodelist[0] : nodelist;
}

function $gg(selector){
    // nodeLit至少包含一個 node - Element object
    // 如果沒有符合的，則會是一個 empty NodeList
    let nodeList = document.querySelectorAll(selector);

    if(nodeList.length == 0){
        return null;
    }

    return nodeList.length == 1 ? nodeList[0] : nodeList;
}

function $ce(element, text){
    let el = document.createElement(element);

    if (typeof(text)!=="undefined" && typeof(text)!=="" && typeof(text)!==null){
        el.innerText = text;
    }

    return el;
}

=======
function $g(selector) {
    //判斷是否為id selector
    if (selector.includes('#') && !selector.includes(' ')) {
        //回傳Element
        return document.querySelector(selector);
    }

    //回傳NodeList集合
    let nodelist = document.querySelectorAll(selector);

    return nodelist.length == 1 ? nodelist[0] : nodelist;
}

function $gg(selector){
    // nodeLit至少包含一個 node - Element object
    // 如果沒有符合的，則會是一個 empty NodeList
    let nodeList = document.querySelectorAll(selector);

    if(nodeList.length == 0){
        return null;
    }

    return nodeList.length == 1 ? nodeList[0] : nodeList;
}

function $ce(element, text){
    let el = document.createElement(element);

    if (typeof(text)!=="undefined" && typeof(text)!=="" && typeof(text)!==null){
        el.innerText = text;
    }

    return el;
}

>>>>>>> e1b0601af48aa89dbefa5ef512319a71fd7cbea6
export { $g, $gg, $ce}