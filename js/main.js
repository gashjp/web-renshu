$(function() {
    $("#TestButton").on({
        'click': function() {
            console.log("button clicked!")
            updateQueryParam()
            getQueryParam()
        }
    });

    function getQueryParam() {
        let paramList = new Object;
        let param = location.search.substring(1).split('&');
        let paramSplit;
        for (let i = 0; param[i]; i++) {
            paramSplit = param[i].split('=');
            paramList[paramSplit[0]] = paramSplit[1];
            console.log(`${paramSplit[0]}=${paramSplit[1]}`)
        }
    }

    function updateQueryParam() {
        let setParam = '?aaa=bbb';
        history.pushState(null, null, setParam);
        // location.search = setParam;
    }
});