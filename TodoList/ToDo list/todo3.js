let newtask = $('#newtask');
let addbtn = $('#addtask');
let ultask = $('#ultask');
let clearinput = $('#clearinput');
let cleartask= $('#cleartask');
let sorttask= $('#sorttask');


function addItem(){
    let listitem = $('<li>',{
        class : "list-group-item",
        text : newtask.val()
    })
    ultask.append(listitem);
    listitem.click(() => {
        listitem.toggleClass('done');
    })
}

addbtn.click(() =>{
    addItem();
})

clearinput.click(() => {
    newtask.val("");
    addbtn.prop('disabled',true);
    clearinput.prop('disabled',true);
})
// use enter for add item
newtask.keypress((e) => {
    if(e.which==13){
        addItem();
    }
})
cleartask.click(() => {
    /*let t= $('#ultask > li.done');
    t.remove();*/
    let t= $('.done')
    t.remove();
})

sorttask.click(()=>{
    let t=$('.done')
    t.appendTo(ultask);
})

newtask.on('input',()=>{
    if(newtask.val()!="")
    {
        addbtn.prop('disabled',false);
        clearinput.prop('disabled',false);
    }
    else{
        addbtn.prop('disabled',true);
        clearinput.prop('disabled',true);
    }
})
