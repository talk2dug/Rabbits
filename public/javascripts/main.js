
let pstyle = 'border: 1px solid #efefef; padding: 5px'
var config = {
    name: 'layout',
    panels: [
        { type: 'top', size: 50, style: pstyle, content: 'top' },
        { type: 'left', size: 200, style: pstyle, content: 'left' },
        { type: 'main', style: pstyle, content: 'main' }
    ]
}


$(function() {

$('#mainDIV').w2layout(config);
})
//layout.html('left', sidebar)