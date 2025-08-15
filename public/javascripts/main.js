
let pstyle = 'border: 1px solid #efefef; padding: 5px'

let w2uiHTML = `<div id="layout" style="width: auto; height: 1024px;"></div>`
let does = []
let bucks = []
let litters = []
let buckList = []
let doeList = []
let gridKits
     let selectedRabbit =""
     let selectedRabbitID = ""

     function getTaskItems(){
        w2ui['taskgrid'].clear();
        $.getJSON('/database/getTasks/'+ selectedRabbit, function(data) {
            console.log(data)
            for (i = 0; i < data.length; i++) {
            
               
                w2ui.taskgrid.add([{
                    Title : data[i].Title,
                    Date_Completed :  moment(data[i].Date_Completed).format('MM-DD-YYYY'),
                    Note : data[i].Note,
                    Completed : data[i].Completed,
                    Due : moment(data[i].Due).format('MM-DD-YYYY'),
                    Rabbit : data[i].Rabbit,
                    recid: i,                                
                     
                }, 
            ])
            }
    
        })
        w2ui.grid.refresh('taskgrid')
    
    
    
    
    }
let tabsHTML = `<div id="tabs" style="width: 100%; height:0px">
                </div>
            <div id="tab1" class='tab' style="width: 100%; height:100%">
                tab1
            </div>   
            <div id="tab2" class='tab' style="padding: 10px 0px">
                <div id='tasksGrid'></div>
            </div> 
            <div id="tab3" class='tab' style="padding: 10px 0px">
            <div id="litterInfo" style="width: 100%; height: 50px;"></div>
               <div id="grid" style="width: 100%; height: 350px;"></div>
               <br>
                <div id='kidNotes'></div>
            </div> 
            <div id="tab4" class='tab' style="padding: 10px 0px">
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <h5 class="card-title">Tasks Today</h5>
                        <div class="card" id='tasksMainGridToday'>
                            
                        </div>

                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <h5 class="card-title">Nothing</h5>
                        <div class="card" id='s'>
                            
                        </div>

                    </div>
                </div>
        <div class="row">
        <div class="col-sm-6">
        <h5 class="card-title">Tasks</h5>
            <div class="card" id='tasksMainGrid'>
            
            </div>
        </div>
</div>
            </div>
            `
var config = {
    toolBar: {
        name: 'toolBar',
        items: [{
                type: 'button',
                id: 'item1',
                text: 'New Rabbit',
                icon: 'w2ui-icon-colors'
            },
            {
                type: 'break'
            },
            {
                type: 'button',
                id: 'item2',
                text: 'New Litter',
                icon: 'w2ui-icon-colors'
            },
            {
                type: 'break'
            },
        ],
        onClick(event) {
            //.log('Target: '+ event.target, event)
            if (event.target == "item1") {
                openPopup()
            }
            if (event.target == "item2") {
                openPopup2()
            }
        }
    },
    layout: {
        name: 'layout',
        panels: [{
                type: 'top',
                size: 50,
                content: `<div id="toolbarTop"></div>`
            },
            {
                type: 'left',
                size: 150,
                style: pstyle,
                content: `<div id="sideBarPic"></div><div id="sideBar"></div>`
            },
            {
                type: 'main',
                style: pstyle,
                content: `<div id="rabbitlayout" style="width: 100%; height: 1024px;"></div>`
            }
        ]
    },
    litterLayout: {
        name: 'litterLayout',
        panels: [{
                type: 'top',
                size: '35%',
                content: `<div id="litterForm"></div>`
            },
            {
                type: 'main',
                style: pstyle,
                content: '<div id="mainForm2" style="position: absolute; left: 2px; right: 2px; top: 0px; bottom: 3px;"></div>'
            }
        ]
    },
    rabbitlayout: {
        name: 'rabbitlayout',
        panels: [{
                type: 'top',
                size: 50,
                content: `<div id="rabbitTitle"></div>`
            },
            {
                type: 'left',
                size: 125,
                style: pstyle,
                html: 'left'
            },
            {
                type: 'main',
                style: pstyle,
                html: ''
            }
        ]
    },
    rabbitInfolayout: {
        name: 'rabbitInfolayout',
        panels: [{
                type: 'top',
                size: 200,
                content: `<div id="rabbitInfoTop" style="width: 100%; height: 100%"></div>`
            },

            {
                type: 'main',
                style: pstyle,
                content: '<div id="rabbitInfoMain" style="width: 100%; height: 100%;"></div>'
            }
        ]
    },
    sidebar: {
        name: 'sidebar',
        levelPadding: 1,
        nodes: [
            {
                id: 'Main',
                text: 'Main',
                datatype: 'main',
                icon: 'fa fa-star-o',
            },{
                id: 'Does',
                text: 'Does',
                expanded: true,
                group: true,
                nodes: []
            },
            {
                id: 'Bucks',
                text: 'Bucks',
                expanded: true,
                group: true,
                nodes: []
            },
            {
                id: 'Babbies',
                text: 'Babbies',
                expanded: true,
                group: true,
                nodes: [{
                        id: 'Growing',
                        text: 'Growing',
                        datatype: 'babbies',
                        icon: 'fa fa-star-o',
                     
                    },
                    {
                        id: 'nesting',
                        text: 'Nesting',
                        datatype: 'babbies',
                        icon: 'fa fa-star-o',
                      
                    },
                ]
            }
        ]
    },
    rabbitsidebar: {
        name: 'rabbitsidebar',
        nodes: [{
                id: 'Info',
                text: 'Info',
                icon: 'fa fa-star-o',
                datatype: 'info'
            },
            {
                id: 'Litters',
                text: 'Litters',
                icon: 'fa fa-star',
                datatype: 'litters',
                nodes: []
            },
            {
                id: 'Tasks',
                text: 'Tasks',
                icon: 'fa fa-star-o',
                datatype: 'tasks',
            }
        ]
    },
    tabs: {
        name: 'tabs',
        active: 'tab1',
        tabs: [{
                id: 'tab1',
                text: 'Tab 1'
            },
            {
                id: 'tab2',
                text: 'Tab 2'
            },
            {
                id: 'tab3',
                text: 'Tab 3'
            },
            {
                id: 'tab4',
                text: 'Tab 4'
            }
        ],
        onClick(event) {
            $('.tab').hide();
            $('#' + event.target).show();
        }
    },
    tasksMainGridToday: {
        name: 'taskmaingridtoday',
        show: {
            toolbar: true,
            footer: true,
            toolbarSave: true
        },
       
        columns: [{
            field: 'recid',
            caption: '#',
            size: '10px',
            hidden: true
        },
        {
            field: 'Completed',
            caption: 'Completed',
            size: '60px',
            editable: {
                type: 'checkbox'
            }
        },{
            field: 'Title', 
            caption: 'Title', 
            size: '100px', 
            style: 'text-align: center',
            editable: { type: 'text', style: 'text-align: center' }
            },


            
            {
                field: 'Rabbit',
                caption: 'Rabbit',
                size: '100px',
                
            },
            {
                field: 'Note',
                caption: 'Note',
                size: '200px',
                editable: {
                    type: 'text'
                }
            },
           
            
        ],
        onClick: function(event) {
          
                
        },
        toolbar: {
            items: [
                {
                    type: 'button',
                    id: 'add',
                    text: 'Add Task'
                }
            ],
            onClick(event) {
                if (event.target == 'add') {
                    w2popup.open({
                        title: 'New Task Form',
                        width: 600,
                        height: 400,
                        showMax: true,
                        body: '<div id="mainForm" style="position: absolute; left: 2px; right: 2px; top: 0px; bottom: 3px;"></div>',
                        actions: {
                            Ok(event) {
                                // do something
                                w2popup.close()
                                w2ui.form.destroy()
                            }
                        }
                    })
                    let noteForm = $('#mainForm').w2form(config.taskform)
                }
            }
        },

    },
    tasksMainGrid: {
        name: 'taskmaingrid',
        show: {
            toolbar: true,
            footer: true,
            toolbarSave: true
        },
       
        columns: [{
            field: 'recid',
            caption: '#',
            size: '10px',
            hidden: true
        },{
            field: 'Title', 
            caption: 'Title', 
            size: '100px', 
            style: 'text-align: center',
            editable: { type: 'text', style: 'text-align: center' }
            },
            
            {
                field: 'Due',
                caption: 'Due',
                size: '80px',
                editable: {
                    type: 'date'
                }
            },
            {
                field: 'Completed',
                caption: 'Completed',
                size: '60px',
                editable: {
                    type: 'checkbox'
                }
            },
            
            {
                field: 'Rabbit',
                caption: 'Rabbit',
                size: '110px',
                
            },
            {
                field: 'Note',
                caption: 'Note',
                size: '200px',
                editable: {
                    type: 'text'
                }
            },
           
            
        ],
        onClick: function(event) {
          
                
        },
        toolbar: {
            items: [
                {
                    type: 'button',
                    id: 'add',
                    text: 'Add Task'
                }
            ],
            onClick(event) {
                if (event.target == 'add') {
                    w2popup.open({
                        title: 'New Task Form',
                        width: 600,
                        height: 400,
                        showMax: true,
                        body: '<div id="mainForm" style="position: absolute; left: 2px; right: 2px; top: 0px; bottom: 3px;"></div>',
                        actions: {
                            Ok(event) {
                                // do something
                                w2popup.close()
                                w2ui.form.destroy()
                            }
                        }
                    })
                    let noteForm = $('#mainForm').w2form(config.taskform)
                }
            }
        },

    },
    tasksGrid: {
        name: 'taskgrid',
        show: {
            toolbar: true,
            footer: true,
            toolbarSave: true
        },
       
        columns: [{
            field: 'recid',
            caption: '#',
            size: '10px',
            hidden: true
        },{
            field: 'Title', 
            caption: 'Title', 
            size: '100px', 
            style: 'text-align: center',
            editable: { type: 'text', style: 'text-align: center' }
            },
            
            {
                field: 'Due',
                caption: 'Due',
                size: '80px',
                editable: {
                    type: 'date'
                }
            },
            {
                field: 'Date_Completed',
                caption: 'Date_Completed',
                size: '80px',
                editable: {
                    type: 'date',
                    
                }
            },
            {
                field: 'Completed',
                caption: 'Completed',
                size: '60px',
                editable: {
                    type: 'checkbox'
                }
            },
            
            {
                field: 'Rabbit',
                caption: 'Rabbit',
                size: '110px',
                
            },
            {
                field: 'Note',
                caption: 'Note',
                size: '200px',
                editable: {
                    type: 'text'
                }
            },
           
            
        ],
        onClick: function(event) {
          
                
        },
        toolbar: {
            items: [
                {
                    type: 'button',
                    id: 'add',
                    text: 'Add Task'
                }
            ],
            onClick(event) {
                if (event.target == 'add') {
                    w2popup.open({
                        title: 'New Task Form',
                        width: 600,
                        height: 400,
                        showMax: true,
                        body: '<div id="mainForm" style="position: absolute; left: 2px; right: 2px; top: 0px; bottom: 3px;"></div>',
                        actions: {
                            Ok(event) {
                                // do something
                                w2popup.close()
                                w2ui.form.destroy()
                            }
                        }
                    })
                    let noteForm = $('#mainForm').w2form(config.taskform)
                }
            }
        },

    },
    grid: {
        name: 'grid',
        show: {
            toolbar: true,
            footer: true,
            toolbarSave: true
        },
        columnGroups: [
            { caption: 'General Information', span: 4 },
            { caption: 'Weights',span: 5 },
        ],
        columns: [{
            field: 'Growing', 
            caption: 'Growing', 
            size: '60px', 
            style: 'text-align: center',
            editable: { type: 'checkbox', style: 'text-align: center' }
            },
            {
                field: 'recid',
                caption: '#',
                size: '10px',
                hidden: true
            },
            {
                field: 'KidID',
                caption: 'kid ID',
                size: '50px',
                editable: {
                    type: 'text'
                }
            },
            {
                field: 'Sex',
                caption: 'Sex',
                size: '40px',
                editable: {
                    type: 'select',
                    items: ['Doe', 'Buck']
                }
            },
            {
                field: 'BirthWeight',
                caption: 'Birth',
                size: '60px',
                editable: {
                    type: 'Number'
                }
            },
            {
                field: 'FinalWeight',
                caption: 'Final',
                size: '50px',
                editable: {
                    type: 'Number'
                }
            },
            {
                field: 'FinalDate',
                caption: 'Final Date',
                size: '80px',
                editable: {
                    type: 'Date'
                }
            },
            
            {
                field: 'itemID',
                caption: 'itemID',
                size: '80px',
                editable: {
                    type: 'False'
                },
                hidden: true
            },
            {
                field: 'rabbitID',
                caption: 'rabbitID',
                size: '80px',
                editable: {
                    type: 'False'
                },
                hidden: true
            },
            {
                field: 'addNote',
                text: 'Actions',
                size: '100px',
                render: function (record, index, col_index) {
                    // Return the HTML for a button
                    return `<button class="w2ui-btn" onclick="newNote('` + record.itemID + `','`+ record.rabbitID+`', 'Kid')">Add Note</button>`;
                }
            },
            {
                field: 'addWeight',
                text: 'Actions',
                size: '100px',
                render: function (record, index, col_index) {
                    // Return the HTML for a button
                    return `<button class="w2ui-btn" onclick="addWeight('` + record.itemID + `','`+ record.rabbitID+`', 'Kid')">Add Weight</button>`;
                }
            }
        ],
        onClick: function(event) {
            let kidNoteCards = ""
            let weightCardsArray = ""
            console.log(event.recid);
            var record = w2ui['grid'].get(event.recid);
                console.log(record.rabbitID);
                $.getJSON(`/database/getLitterKidNotes/`+ record.itemID+`/`+ record.rabbitID, function(data) {
                    console.log(data)
                        if(data.Notes.length>0){
                            data.Notes = data.Notes.reverse()
                            for(n=0;n<data.Notes.length;n++){
                                
                                let noteDate = moment(data.Notes[n].Date).format('MM/DD/YY')
                                kidNoteCards+=`<div class="col"><div class="card noteCard" style="width: 30rem;">

                                <div class="card-body">
                                    <h5 class="card-title">`+noteDate+`</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">` + data.Notes[n].Title  + `</h6>
                                    <h6 class="card-text">` + data.Notes[n].Note + `</h6>
                                </div>
                                </div>
                                </div>`
    
                                
                            }
                       
                        
                        console.log(kidNoteCards)
                            $('#kidNotes').html(`<h5 class="card-title">Kid: `+data.KidID+`</h5>
                            <div class="container text-center">
                                <div class="row row-cols-2">
                                <div class="col">
                                    <div class="card" style="width: 15rem;" id='kidWeightCards'>
                                    <h5 class="card-title">Weights</h5>
                                        <ul class="list-group list-group-flush" id='weightsLIs'>
                                            
                                        </ul>
                                        </div>
                                    </div>
                                    <div class="col">
                                    `+ kidNoteCards +`
                                    </div>
                                   
                                </div>
                                </div>
                            
                            `)
                           
                        }   
                        else{$('#kidNotes').html(`<h5 class="card-title">Kid: `+data.KidID+`</h5>
                            <div class="container text-center">
                                <div class="row row-cols-2">
                                <div class="col">
                                    <div class="card" style="width: 15rem;" id='kidWeightCards'>
                                    <h5 class="card-title">Weights</h5>
                                        <ul class="list-group list-group-flush" id='weightsLIs'>
                                            
                                        </ul>
                                        </div>
                                    </div>
                                    <div class="col">
                                    
                                    </div>
                                   
                                </div>
                                </div>
                            
                            `)}   
                            if(data.CurrentWeight.length>0){
                                data.CurrentWeight = data.CurrentWeight.reverse()
                                for(n=0;n<data.CurrentWeight.length;n++){
                                   $('#weightsLIs').append(`
                                    <h6 class="list-group-item">
                                    Date: `+moment(data.CurrentWeight[n].Date).format('MM/DD') +` <br> Weight: `+ data.CurrentWeight[n].Weight+
                                    `</h6>`)
  
                                    
                                   

                                }
                        }
                        else{

                            $('#weightsLIs').html("")
                        }
                       

                
            })
                
        },
        toolbar: {
            items: [
                {
                    type: 'button',
                    id: 'showChanges',
                    text: 'Show Changes'
                }
            ],
            onClick(event) {
                if (event.target == 'add') {
                    let recid = gridKits.records.length + 1
                    this.owner.add({
                        recid
                    });
                    this.owner.scrollIntoView(recid);
                    this.owner.editField(recid, 1)
                }
                if (event.target == 'showChanges') {
                    //let changes = $(JSON.stringify(grid.getChanges()))
                    let changes = w2ui.grid.getChanges()
                    let rowChanges
                    for(i=0;i<changes.length;i++){
                        var record = w2ui.grid.get(changes[i].recid);
                        console.log(record);
                        let row = changes[i]
                        $.ajax({
                            type: 'POST',
                            data: JSON.stringify(record),
                            contentType: "application/json",
                            url: '/database/updateRabbitKids/',
                            success: function(e) {
                                
        
                            }
                        }); 
                        const keys = Object.keys(row);
                        let changesFull = []
                        rowChanges = {litterID: record.itemID, rabbitID: record.rabbitID }
                        keys.forEach(key => {
                            const value = row[key];
                            rowChanges[key] = value
                            console.log(`Key: ${key}, Value: ${value}, ItemID: ${record.itemID}`);
                        });
                        changesFull.push(rowChanges) 
                    }
                    console.log(changesFull)
                          
                }
            }
        },

    },
    litterGrid: {
        name: 'litterGrid',
        show: {
            toolbar: true,
            footer: true,
            toolbarSave: true
        },
        columns: [{ field: 'Growing', 
            field: 'Growing', 
            size: '60px', 
            style: 'text-align: center',
            editable: { type: 'checkbox', style: 'text-align: center' }
            },
            {
                field: 'KidID',
                caption: 'kid ID',
                size: '30px',
                editable: {
                    type: 'text'
                }
            },
            {
                field: 'Sex',
                caption: 'Sex',
                size: '40px',
                editable: {
                    type: 'select',
                    items: ['Doe', 'Buck']
                }
            },
            {
                field: 'BirthWeight',
                caption: 'Birth Weight',
                size: '80px',
                editable: {
                    type: 'Number'
                }
            },
            {
                field: 'SecondDate',
                caption: '2nd Weight Date',
                size: '100px',
                editable: {
                    type: 'Date'
                }
            },
            {
                field: 'SecondWeight',
                caption: '2nd Weight',
                size: '80px',
                editable: {
                    type: 'Number'
                }
            },
            {
                field: 'FinalDate',
                caption: 'Final Weight Date',
                size: '100px',
                editable: {
                    type: 'Date'
                }
            },
            {
                field: 'FinalWeight',
                caption: 'Final Weight',
                size: '80px',
                editable: {
                    type: 'Number'
                }
            },
            {
                field: 'actions',
                text: 'Actions',
                size: '100px',
                render: function (record, index, col_index) {
                    // Return the HTML for a button
                    return '<button class="w2ui-btn" onclick="newNote(' + record.id + ')">Click</button>';
                }
            }
        ],
        toolbar: {
            items: [{
                    id: 'add',
                    type: 'button',
                    text: 'Add Record',
                    icon: 'w2ui-icon-plus'
                },
                {
                    type: 'break'
                },
                {
                    type: 'button',
                    id: 'showChanges',
                    text: 'Show Changes'
                }
            ],
            onClick(event) {
                if (event.target == 'add') {
                    let recid = gridKits.records.length + 1
                    this.owner.add({
                        recid
                    });
                    this.owner.scrollIntoView(recid);
                    this.owner.editField(recid, 1)
                }
                if (event.target == 'showChanges') {
                    showChanged()
                }
            }
        },

    },
    // growingGRid: {
    //     name: 'grid1',
    //     show: {
    //         header: true
    //     },
    //     columns: [{
    //             field: 'recid',
    //             text: 'ID',
    //             size: '50px',
    //             sortable: true,
    //             attr: 'align=center'
    //         },
    //         {
    //             field: 'mother',
    //             text: 'Mother',
    //             size: '30%',
    //             sortable: true
    //         },
    //         {
    //             field: 'father',
    //             text: 'Father',
    //             size: '30%',
    //             sortable: true
    //         },
    //         {
    //             field: 'dateAdded',
    //             text: 'Date Added',
    //             size: '40%'
    //         },
    //         {
    //             field: 'Weight',
    //             text: 'Weight',
    //             size: '120px'
    //         }
    //     ],
    //     records: [{
    //             recid: 1,
    //             mother: 'John',
    //             father: 'Doe',
    //             Weight: 6,
    //             dateAdded: '4/3/2012'
    //         },
    //         {
    //             recid: 2,
    //             mother: 'Stuart',
    //             father: 'Motzart',
    //             Weight: 6,
    //             dateAdded: '4/3/2012'
    //         },
    //         {
    //             recid: 3,
    //             mother: 'Jin',
    //             father: 'Franson',
    //             Weight: 8,
    //             dateAdded: '4/3/2012'
    //         },
    //         {
    //             recid: 4,
    //             mother: 'Susan',
    //             father: 'Ottie',
    //             Weight: 7,
    //             dateAdded: '4/3/2012'
    //         },
    //         {
    //             recid: 5,
    //             mother: 'Kelly',
    //             father: 'Silver',
    //             Weight: 5,
    //             dateAdded: '4/3/2012'
    //         },
    //         {
    //             recid: 6,
    //             mother: 'Francis',
    //             father: 'Gatos',
    //             Weight: 7,
    //             dateAdded: '4/3/2012'
    //         }
    //     ],
    //     onClick(event) {
    //         let record = this.get(event.detail.recid)
    //         grid2.clear()
    //         grid2.add([{
    //                 recid: 0,
    //                 name: 'ID:',
    //                 value: record.recid
    //             },
    //             {
    //                 recid: 1,
    //                 name: 'First Name:',
    //                 value: record.mother
    //             },
    //             {
    //                 recid: 2,
    //                 name: 'Last Name:',
    //                 value: record.father
    //             },
    //             {
    //                 recid: 3,
    //                 name: 'Email:',
    //                 value: record.Weight
    //             },
    //             {
    //                 recid: 4,
    //                 name: 'Date:',
    //                 value: record.dateAdded
    //             }
    //         ])
    //     }
    // },
    kidGrowingGridInfo: {
        name: 'kidGrowingGridInfo',
        show: {
            toolbar: true,
            footer: true,
            toolbarSave: true
        },
        columnGroups: [
            
            { caption: 'Kids', span: 2 },
            { caption: 'Weights',span: 7 },
            { caption: '', span: 1 },
            { caption: 'Litter', span: 5 },
        ],
        columns: [
            {
                field: 'KidID',
                caption: 'ID',
                size: '30px',
                style: "background-color: rgb(224, 241, 147)"

            },
            {
                field: 'Sex',
                caption: 'Sex',
                size: '40px',
                style: "background-color: rgb(224, 241, 147)"

            },
            {
                field: 'BirthWeight',
                caption: 'Birth',
                size: '50px',
                style: "background-color: rgb(224, 241, 147)"

            },
            {
                field: 'CurrentWeight',
                caption: 'Current',
                size: '60px',
                style: "background-color: rgb(224, 241, 147)"

            },        
            {
                field: 'WeightDate',
                caption: ' Date',
                size: '55px',
                style: "background-color: rgb(224, 241, 147)"

            },
            {
                field: 'Processed',
                caption: 'Processes',
                size: '55px',
                
                editable: { type: 'checkbox', style: 'text-align: center' }

            },
            {
                field: 'Litter',
                caption: 'Litter',
                size: '50px',
                style: "background-color: #C2F5B4"
            },
            {
                field: 'Born',
                caption: 'Born',
                size: '55px',
                style: "background-color: #C2F5B4",

            },
            {
                field: 'Bred',
                caption: 'Bred',
                size: '55px',
                style: "background-color: #C2F5B4"

            },
            {
                field: 'Father',
                caption: 'Father',
                size: '80px',
                style: "background-color: #C2F5B4"

            },
            {
                field: 'Mother',
                caption: 'Mother',
                size: '80px',
                style: "background-color: #C2F5B4"

            },        
        ],


    },
    taskform: {
        name: 'taskform',
        style: 'border: 1px solid #efefef',
        record: {
            Completed: false,
            
        },
        fields: [{ 
            field: 'Title', 
            type: 'text',
           
        },
            { 
            field: 'Note', type: 'textarea',
            html: { label: 'Text Area', attr: 'style="width: 400px; height: 60px; resize: none"' }
        },
        { 
            field: 'Due', 
            type: 'date',
           
            
        },
        { 
            field: 'Date_Completed', 
            type: 'date',
            
            
        },
        { 
            field: 'Completed', 
            type: 'checkbox',

            
        },
        
       
        ],
        actions: {
            Reset() {
                this.clear()
            },
            Save() {
                console.log(this.record)
                let Doc = {}
                Doc.Title = this.record.Title
                Doc.Date_Completed = this.record.Date_Completed
                Doc.Note = this.record.Note
                Doc.Completed = this.record.Completed
                Doc.Due = this.record.Due
                Doc.Rabbit = selectedRabbit
                Doc = JSON.stringify(Doc)
                console.log(Doc)

                $.ajax({
                    type: 'POST',
                    contentType: "application/json",
                    data: Doc,
                    url: '/database/newtask',
                    success: function(e) {
                        w2ui.taskform.clear()
                        w2popup.close();
                        getTaskItems()
                        w2ui.tabs.click('tab2')
                    }
                });
                
               
            }
        }
    },
    weightform:{
        name: 'weightform',
        style: 'border: 1px solid #efefef',
        fields: [{ 
            field: 'Weight', 
            type: 'number',
           
        },{ 
            field: 'Date', 
            type: 'date',
            disabled: true
           
        },{ 
            field: 'Rabbit', 
            type: 'text',
            disabled: true
           
        },{ 
            field: 'Litter', 
            type: 'text',
            disabled: true
           
        }],
        actions: {
            Reset() {
                this.clear()
            },
            Save() {
                console.log(this.record)
                let Doc = {}
                Doc.Weight = this.record.Weight
                Doc.Date = this.record.Date
                Doc.Rabbit = this.record.Rabbit
                Doc.Litter = this.record.Litter
                Doc = JSON.stringify(Doc)
                console.log(Doc)

                $.ajax({
                    type: 'POST',
                    contentType: "application/json",
                    data: Doc,
                    url: '/database/newweight/',
                    success: function(e) {
                        w2ui.form.clear()

                    }
                });
               
            }
        }
    },
    noteform: {
        name: 'noteform',
        style: 'border: 1px solid #efefef',
        fields: [{ 
            field: 'Title', 
            type: 'text',
           
        },
            { 
            field: 'Note', type: 'textarea',
            html: { label: 'Text Area', attr: 'style="width: 400px; height: 60px; resize: none"' }
        },
        { 
            field: 'Rabbit', 
            type: 'text',
            disabled: true,
            
        },
        { 
            field: 'Date', 
            type: 'date',
            disabled: true,
            
        },
        { 
            field: 'ID', 
            type: 'string',
            disabled: true,
            
        },
        
        { 
            field: 'KidID', 
            type: 'string',
            disabled: true,
            
        },
        { 
            field: 'litterID', 
            type: 'string',
            disabled: true,
            
        },
        { 
            field: 'Type', 
            type: 'string',
            disabled: true,
            
        },
        ],
        actions: {
            Reset() {
                this.clear()
            },
            Save() {
                console.log(this.record)
                let Doc = {}
                Doc.Title = this.record.Title
                Doc.Date = this.record.Date
                Doc.Note = this.record.Note
                Doc.Rabbit = this.record.Rabbit
                Doc.ID = this.record.ID
                Doc.LitterID = this.record.litterID
                Doc.KidID = this.record.KidID
                Doc.Type = this.record.Type
                Doc = JSON.stringify(Doc)
                console.log(Doc)

                $.ajax({
                    type: 'POST',
                    contentType: "application/json",
                    data: Doc,
                    url: '/database/newnote/'+this.record.Type,
                    success: function(e) {
                        w2ui.form.clear()

                    }
                });
               
            }
        }
    },
    form: {
        name: 'form',
        style: 'border: 1px solid #efefef',
        fields: [{
                field: 'recid',
                type: 'text',
                html: {
                    label: 'ID',
                    attr: 'size="10" readonly'
                }
            },
            {
                field: 'Name',
                type: 'text',
                required: true,
                html: {
                    label: 'Name',
                    attr: 'size="40" maxlength="40"'
                }
            },
            {
                field: 'Breed',
                type: 'text',
                required: true,
                html: {
                    label: 'Breed',
                    attr: 'size="40" maxlength="40"'
                }
            },
            {
                field: 'Father',
                type: 'select',
                required: false,
                html: {
                    label: 'Father',
                    text: ' <-- choose Dad'
                },
                options: {
                    items: buckList
                }
            },
            {
                field: 'Mother',
                type: 'select',
                required: false,
                html: {
                    label: 'Father',
                    text: ' <-- choose Dad'
                },
                options: {
                    items: doeList
                }
            },
            {
                field: 'Date_Born',
                type: 'date',
                html: {
                    label: 'Date_Born',
                    attr: 'size="10"'
                }
            },
            {
                field: 'Sex',
                type: 'select',
                required: false,
                html: {
                    label: 'Sex',
                    text: ' <-- choose sex'
                },
                options: {
                    items: ['Doe', 'Buck']
                }
            },
        ],
        actions: {
            Reset() {
                this.clear()
            },
            Save() {
                //console.log(this.record)
                // doc.Name= requested.Name;
                // doc.Breed= requested.Breed;
                // doc.Father= requested.Father;
                // doc.Mother= requested.Mother;
                // doc.Date_Born= requested.Date_Born;
                // doc.Sex= requested.Sex;
                $.ajax({
                    type: 'POST',
                    data: this.record,
                    url: '/database/newRabbit/',
                    success: function(e) {
                        w2ui.form.clear()

                    }
                });
                let errors = this.validate()
                if (errors.length > 0) return
                if (this.recid == 0) {
                    grid.add(w2utils.extend({
                        recid: grid.records.length + 1
                    }, this.record))
                    grid.selectNone()
                    this.clear()
                } else {
                    grid.set(this.recid, this.record)
                    grid.selectNone()
                    this.clear()
                }
            }
        }
    },
    litterform: {
        name: 'litterform',
        style: 'border: 1px solid #efefef',
        fields: [{
                field: 'recid',
                type: 'text',
                html: {
                    label: 'ID',
                    attr: 'size="10" readonly'
                }
            },
            {
                field: 'LitterID',
                type: 'text',
                required: true,
                html: {
                    label: 'Litter ID',
                    attr: 'size="40" maxlength="40"'
                }
            },
            {
                field: 'Father',
                type: 'select',
                required: false,
                html: {
                    label: 'Father',
                    text: ' <-- choose Dad'
                },
                options: {
                    items: buckList
                }
            },
            {
                field: 'Mother',
                type: 'select',
                required: false,
                html: {
                    label: 'Father',
                    text: ' <-- choose Dad'
                },
                options: {
                    items: doeList
                }
            },
            {
                field: 'Born',
                type: 'date',
                html: {
                    label: 'Date_Born',
                    attr: 'size="10"'
                }
            },
            {
                field: 'Bred',
                type: 'date',
                html: {
                    label: 'Date_Bred',
                    attr: 'size="10"'
                }
            },

        ],
        actions: {
            Reset() {
                this.clear()
            }

        }
    },
}
let sidebar;
let rabbitsidebar
async function getRabbits(){
    await $.getJSON('/database/getRabbits', function(data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].Sex == "Doe") {
                let doe = {
                    name: data[i].Name,
                    info: data[i]
                }
                //console.log(doe)
                does.push(doe)
                doeList.push(data[i].Name)
                sidebar.insert('Does', null, [
                    {id: data[i]._id,text: data[i].Name,icon: 'fa fa-star'}
                ])
            }
            if (data[i].Sex === "Buck") {
                let buck = {
                    name: data[i].Name,
                    info: data[i]
                }
                //console.log(buck)
                bucks.push(buck)
                buckList.push(data[i].Name)
                sidebar.insert('Bucks', null, [
                    {id: data[i]._id,text: data[i].Name,icon: 'fa fa-star'}
                ])
            }
        }

    })




}

async function getLitter(litterID){
    await $.getJSON('/database/getLitter/'+litterID, function(data) {
        //console.log(data)

    })
}
async function getTasksMain(){
    await $.getJSON('/database/getTasksDue/', function(data) {
        console.log(data)
        let recNum = 0
        for(i=0;i<data.length;i++){
            var CurrentDate = moment();
            console.log()
            if(moment(data[i].Due).isSameOrBefore(CurrentDate, 'day') == true){
            recNum = recNum + 1
                        w2ui['taskmaingridtoday'].add([{
                            recid: i,
                            Title: data[i].Title,
                            Note: data[i].Note,
                            Rabbit: data[i].Rabbit,
                            Due:moment(data[i].Due).format('MM-DD-YYYY'),
                           
                             
                        }]) 
                    }
        }

    })



}
let mainHTML = `<div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <h5 class="card-title">Tasks Today</h5>
                        <div class="card" id='tasksMainGridToday'>
                            
                        </div>

                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <h5 class="card-title">Nothing</h5>
                        <div class="card" id='s'>
                            
                        </div>

                    </div>
                </div>
        <div class="row">
        <div class="col-sm-6">
        <h5 class="card-title">Tasks</h5>
            <div class="card" id='tasksMainGrid'>
            
            </div>
        </div>
</div>`
let tasksMainGrid
let tasksMainGridToday
async function startMainPage(){
    $('#mainDIV').html(w2uiHTML)
    $('#layout').w2layout(config.layout)
    $('#toolbarTop').w2toolbar(config.toolBar)
    $('#rabbitlayout').w2layout(config.rabbitlayout)
     sidebar = $('#sideBar').w2sidebar(config.sidebar);
     rabbitsidebar = $().w2sidebar(config.rabbitsidebar)
    $('#tabs').w2tabs(config.tabs);
    //$('.tab').hide();
    
    $('#tab4').show();
    w2ui.rabbitlayout.content('main', mainHTML);
    tasksMainGrid = $("#tasksMainGrid").w2grid(config.tasksMainGrid);
    tasksMainGridToday = $("#tasksMainGridToday").w2grid(config.tasksMainGridToday);


}
$(function() {
    startMainPage()

    getRabbits()

     let rabbit


    sidebar.on('*', function(event) {
        if (event.type == "click") {
            console.log(event.node.id)
           
            if (event.node.id == "Main"){
                try {
                    tasksMainGrid.destroy();
                    tasksMainGridToday.destroy();
                    
                    w2ui.taskgrid.destroy();
                    w2ui.rabbitInfolayout.destroy()
                    w2ui.rabbitsidebar.destroy()
                    w2ui.rabbitlayout.destroy('left')
                } catch (error) {
                    console.log(error)
                }
                //rabbitsidebar = $().w2sidebar(config.rabbitsidebar)
                
                 $('#rabbitlayout').w2layout(config.rabbitlayout)
                 w2ui.rabbitlayout.content('left', w2ui.rabbitsidebar);
                w2ui.rabbitlayout.content('main', mainHTML);
                $("#tasksMainGrid").w2grid(config.tasksMainGrid);
                $("#tasksMainGridToday").w2grid(config.tasksMainGridToday);
                getTasksMain()
                w2ui.tabs.click('tab4')

            }
            else if (event.node.id == "Growing") { 
                try {
                    w2ui.kidGrowingGridInfo.destroy();
                    w2ui.grid.destroy();
                    w2ui.taskgrid.destroy();
                    w2ui.rabbitlayout.destroy()
                    w2ui.rabbitInfolayout.destroy()
                    w2ui.rabbitsidebar.destroy()
                } catch (error) {

                }
                

                $('#rabbitlayout').w2layout(config.rabbitlayout)
                w2ui.rabbitlayout.content('main', tabsHTML);
                w2ui.rabbitlayout.destroy('left')
                $('#rabbitlayout').html(`<div id="kidGrowingGridInfo"></div>`)
                $("#kidGrowingGridInfo").w2grid(config.kidGrowingGridInfo);

                $.getJSON('/database/getGrowing/', function(data) {  
                    console.log(data)
                     let currentWeight
                     let currentWeightDate
                     let recid = 0
                    for(i=0; i<data.length;i++){
                        let childrenItems = [];
                        
                        //w2ui['kidGrowingGridInfo'+i].refresh();
                       
                        for(k=0;k<data[i].Kids.length;k++){
                            try {
                                const lastItem = data[i].Kids[k].CurrentWeight[data[i].Kids[k].CurrentWeight.length - 1];
                                currentWeight = lastItem.Weight
                                currentWeightDate = moment(lastItem.Date).format('M/DD/YY')
                                
                            } catch (error) {
                                currentWeight = data[i].Kids[k].FinalWeight
                                currentWeightDate =  moment(data[i].Kids[k].FinalDate).format('M/DD/YY')
                            }
                            
                            
                            w2ui['kidGrowingGridInfo'].add([{ recid: recid, Litter: data[i].LitterID, Born: moment(data[i].Born).format('M/DD/YY'),
                                Bred: moment(data[i].Bred).format('M/DD/YY') ,Father: data[i].Father, Mother: data[i].Mother,
                                KidID: data[i].Kids[k].KidID, Sex: data[i].Kids[k].Sex,BirthWeight: data[i].Kids[k].BirthWeight,  
                                              
                                             CurrentWeight: currentWeight, 
                                             WeightDate: currentWeightDate
                                }
                               
                            ])
                            recid = recid +1;
                            

                        }
                        
                            

                    }
                    w2ui.tabs.click('tab4')
                         
                })

                
            }
            else {
                try {
                     w2ui.grid.destroy();
                     w2ui.taskgrid.destroy();
                     w2ui.rabbitlayout.destroy()
                     w2ui.rabbitInfolayout.destroy()
                    w2ui.rabbitsidebar.destrpy()
                    
                    
                } catch (error) {
                    console.log(error)
                }
                
               console.log(event)
               rabbitsidebar = $().w2sidebar(config.rabbitsidebar)
               selectedRabbit = event.node.text
               selectedRabbitID = event.node.id
                $('#rabbitlayout').w2layout(config.rabbitlayout)
                w2ui.rabbitlayout.content('left', w2ui.rabbitsidebar);
                w2ui.rabbitlayout.content('main', tabsHTML);
                $('#rabbitTitle').html(`<h4>` + event.node.text + `</h4>`)
                $('#sideBarPic').html(`<img src="images/bunny1.jpg"   width="100" height="100" style="float:right" alt="..."/>`);
                    w2ui.rabbitsidebar.click('Info');
                    $('.tab').hide();
                $('#tab1').show();
                
                $("#grid").w2grid(config.grid);
                $("#tasksGrid").w2grid(config.tasksGrid);

                
                        for(i=0;i< w2ui.rabbitsidebar.nodes[1].nodes.length;i++){
                            w2ui.rabbitsidebar.remove(w2ui.rabbitsidebar.nodes[1].nodes[i].id)

                        }
                $.getJSON('/database/getRabbitLitters/'+event.node.text, function(data) {
                    
                     
                    for (var i = 0; i < data.length; i++) {
                        console.log(data[i])
                        w2ui.rabbitsidebar.insert('Litters', null, [
                            {id: data[i]._id,text: data[i].LitterID, datatype:'litter', icon: 'fa fa-star'}
                        ])
                        
                           
                    }
                    console.log( w2ui.rabbitsidebar.nodes[1].nodes)
                })
                
                
                
                

            }
            
        }
    })
    rabbitsidebar.on('*', function(event) {
    
        if(event.type == 'click'){
            console.log(event)
            console.log(event.node.datatype)
            w2ui.tabs.click('tab1')
    
        }
            try {
                
                let recNum = 0;
               
                //w2ui.grid.refresh('grid')
                if (event.node.datatype == 'litter') {
                    
                    console.log(event.target)
                    w2ui.rabbitInfolayout.destroy()
                    $.getJSON('/database/getRabbitLitter/'+event.target, function(data) {
                        console.log(data)
                        
                    $('#litterInfo').html(`<h3>Born: ` +moment(data.Born).format('MMMM Do YYYY') + `    Sire: ` +data.Father + `</h3>`)
                    w2ui['grid'].clear();
                    let kidNoteCards = "";
                    for (i = 0; i < data.Kids.length; i++) {
                        
                        recNum = recNum + 1
                        w2ui['grid'].add([{
                            recid: i,
                            KidID: data.Kids[i].KidID,
                            Sex: data.Kids[i].Sex,
                            BirthWeight: data.Kids[i].BirthWeight,
                            SecondDate: moment(data.Kids[i].SecondDate).format('MM-DD-YYYY'),
                            SecondWeight: data.Kids[i].SecondWeight,
                            rabbitID: data.Kids[i]._id,
                            itemID: data._id,
                            Growing: data.Kids[i].Growing,
                            FinalDate:moment(data.Kids[i].FinalDate).format('MM-DD-YYYY'),
                            FinalWeight: data.Kids[i].FinalWeight
                             
                        }, 
                    ])
                    }
                    })
    
                    w2ui.tabs.click('tab3')
                    w2ui.grid.refresh('grid')
                    w2ui.grid.on('save', function(event) {
                        console.log(event)
                            //let changes = $(JSON.stringify(grid.getChanges()))
                            let changes = w2ui.grid.getChanges()
                            let rowChanges
                            for(i=0;i<changes.length;i++){
                                var record = w2ui.grid.get(changes[i].recid);
                                console.log(record);
                                let row = changes[i]
                                $.ajax({
                                    type: 'POST',
                                    data: JSON.stringify(record),
                                    contentType: "application/json",
                                    url: '/database/updateRabbitKids/',
                                    success: function(e) {
                                        
                
                                    }
                                }); 
                                const keys = Object.keys(row);
                                let changesFull = []
                                rowChanges = {litterID: record.itemID, rabbitID: record.rabbitID }
                                keys.forEach(key => {
                                    const value = row[key];
                                    rowChanges[key] = value
                                    console.log(`Key: ${key}, Value: ${value}, ItemID: ${record.itemID}`);
                                });
                                changesFull.push(rowChanges) 
                            }
                            
                        
                
                    })
                }
               
                if (event.node.datatype == 'info') {
                    w2ui.rabbitlayout.content('left', w2ui.rabbitsidebar);
                    $('#tab1').w2layout(config.rabbitInfolayout);
                    console.log(selectedRabbit);
                    let taskToolBar = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                         <button class="btn btn-primary" type="new" onclick="newNote(1,1,'Rabbit')">Add Note</button>
                    </div>
                    </nav>`
                    $('#rabbitInfoMain').html(taskToolBar)
                    $.getJSON('/database/getRabbit/'+ selectedRabbit, function(data) {
                       console.log(data)
                      
                        $('#rabbitInfoTop').html(` 
                            <ul class="list-group" id='rabbitInfoUL'>
                                <li class="list-group-item">Born: `+moment(data[0].Date_Born).format('MM-DD-YY') +`</li>
                            <li class="list-group-item">Sex: `+data[0].Sex+`</li>
                            <li class="list-group-item">Mother: `+data[0].Mother+`</li>
                            <li class="list-group-item">Father: `+data[0].Father+`</li>
                                </ul>
                            `)
        
                            console.log(data)
                            let Notes = ""
                            
                            data[0].Notes = data[0].Notes.reverse()
                            for(i=0;i<data[0].Notes.length;i++){
                                let noteDate = 
                                Notes+=`<div class="col"><div class="card noteCard" style="width: 20rem;">
                                <div class="card-body">
                                    <h5 class="card-title">`+moment(data[0].Notes[i].Date).format('MM/DD/YYYY')+`</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">` + data[0].Notes[i].Title  + `</h6>
                                    <h6 class="card-text">` + data[0].Notes[i].Note + `</h6>
                                </div>
                                </div>
                                </div>`
                                
                            
                            }
                        $('#rabbitInfoMain').append( `
                            <div class="container text-center">
                                <div class="row row-cols-2">`
                                   + Notes +
                                `</div>
                                </div>
                            
                            `)
    
                    })
                    
                   
                    
                    w2ui.tabs.click('tab1')
                    
                    
                    
                    
                }
                if (event.object.datatype == 'tasks') {
                    // //console.log(event.target);
                    w2ui.tabs.click('tab2')
                    //w2ui.rabbitInfolayout.destroy()
                    
                    
                    
                    
                    
                    getTaskItems()


                    w2ui.tabs.click('tab2')
                    
                }
            } catch (error) {
                //console.log(error)
            }
        })

    window.openPopup = function() {
        try {
            w2ui.form.destroy()
        } catch (error) {
        }

        w2popup.open({
            title: 'New Rabbit Form',
            width: 900,
            height: 600,
            showMax: true,
            body: '<div id="mainForm" style="position: absolute; left: 2px; right: 2px; top: 0px; bottom: 3px;"></div>',
            actions: {
                Ok(event) {
                    // do something
                    w2popup.close()
                    w2ui.form.destroy()
                }
            }
        })
        $('#mainForm').w2form(config.form)
    }
    window.openPopup2 = function() {
        try {
            w2ui.form2.destroy()
        } catch (error) {
        }
        w2popup.open({
            title: 'New Litter Form',
            width: 1200,
            height: 600,
            showMax: true,
            body: '<div id="litterlayout" style="width: 900px; height: 800px;"></div>',
            actions: {
                Ok(event) {
                    // do something
                    w2popup.close()
                    w2ui.form2.destroy()
                }
            }
        })
        $('#litterlayout').w2layout(config.litterLayout)
        let kids = []
        let litterForm = $('#litterForm').w2form(config.litterform)
        gridKits = $('#mainForm2').w2grid(config.litterGrid)
        w2ui.litterGrid.refresh()
        w2ui.litterGrid.on('save', async function(event) {
            //console.log(event.changes);
            let formData = w2ui.litterform.record;
            //console.log(formData)
            let newLitter = {
                LitterID: formData.LitterID,
                Father: formData.Father,
                Mother: formData.Mother,
                Bred: formData.Bred,
                Born: formData.Born,
                Kids: []
            }
            event.changes.forEach(item => {
                //console.log(item)
                newLitter.Kids.push(item)
            })

            newLitter = JSON.stringify(newLitter)
            $.ajax({
                type: 'POST',
                data: newLitter,
                url: '/database/newLitter/',
                contentType: "application/json",
                success: function(e) {
                    w2ui.litterform.clear()
                }
            });
            //console.log(newLitter)
        });
        
    }


    window.addWeight= function(selectedLitterID,selectedKidID){
        console.log(selectedLitterID)
        console.log(selectedKidID)
        w2popup.open({
            title: 'Add Weight to Kid',
            width: 600,
            height: 400,
            showMax: true,
            body: '<div id="mainForm" style="position: absolute; left: 2px; right: 2px; top: 0px; bottom: 3px;"></div>',
            actions: {
                Ok(event) {
                    // do something
                    w2popup.close()
                    w2ui.weightform.destroy()
                }
            }
        })
        
        let noteForm = $('#mainForm').w2form(config.weightform)
        w2ui.weightform.record['Rabbit'] = selectedKidID;
        w2ui.weightform.record['Date'] = moment().format('MM/DD/YYYY');
        w2ui.weightform.record['Litter'] = selectedLitterID;
        w2ui.weightform.record['Type'] = 'Kid';
        w2ui.weightform.refresh()
    }
    window.newNote = function(selectedLitterID,selectedKidID, type){
        console.log(type)
        console.log(selectedLitterID)
        console.log(selectedKidID)
        if(type=='Kid'){
            console.log("NewNote Kid")
            w2popup.open({
                title: 'New Note Form',
                width: 600,
                height: 400,
                showMax: true,
                body: '<div id="mainForm" style="position: absolute; left: 2px; right: 2px; top: 0px; bottom: 3px;"></div>',
                actions: {
                    Ok(event) {
                        // do something
                        w2popup.close()
                        w2ui.form.destroy()
                    }
                }
            })
            let noteForm = $('#mainForm').w2form(config.noteform)
    
      
            w2ui.noteform.record['KidID'] = selectedKidID;
            w2ui.noteform.record['Date'] =moment().format('MM/DD/YYYY');
            w2ui.noteform.record['litterID'] = selectedLitterID;
            w2ui.noteform.record['Type'] = 'Kid';
            w2ui.noteform.refresh()
          

        }
        else{
        console.log("NewNote")
        w2popup.open({
            title: 'New Note Form',
            width: 600,
            height: 400,
            showMax: true,
            body: '<div id="mainForm" style="position: absolute; left: 2px; right: 2px; top: 0px; bottom: 3px;"></div>',
            actions: {
                Ok(event) {
                    // do something
                    w2popup.close()
                    w2ui.form.destroy()
                }
            }
        })
        let noteForm = $('#mainForm').w2form(config.noteform)

  
        w2ui.noteform.record['Rabbit'] = selectedRabbit;
        w2ui.noteform.record['Date'] = moment().format('MM/DD/YYYY');
        w2ui.noteform.record['ID'] = selectedRabbitID;
        w2ui.noteform.record['Type'] = 'rabbit';
        w2ui.noteform.refresh()
      };
    }
     
})