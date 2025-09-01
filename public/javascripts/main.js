var Server = io("//192.168.196.4:3000");
let liItems = "";
let matedArray = "";
let notesHTML = "";
let taskssHTML = "";
let litterListViewHTML = "";
let tasksPastHTML = "";
let tasksFutureHTML = "";
let newLitterForm = "";
let growingsHTML = "";
let licageItems = "";
let weightsArray = [];
let growingRabbitData = [];
let SelectedRabbit = {};
let litterData = [];
let RabbitData = [];
let Bucks = [];
let Does = [];
let Rabbits = [];
let rabbitCageItems = {};

let listview = `<ul data-role="listview" data-inset="true" data-divider-theme="a">
<li data-role="list-divider">Rabbits</li>
<li><a href="#two">Litters</a></li>
<li><a href="#">Growing</a></li>
<li><a href="#">Rabbits</a></li>
<li data-role="list-divider">Actions</li>
<li><a href="#">Tasks</a></li>
<li><a href="#" id='addTask'>Add Task</a></li>
<li><a href="#">Weights</a></li>
</ul>`;
let page1 = `

	<div data-role="header">
		<h1>Page Title</h1>
	</div><!-- /header -->
	<div role="main" class="ui-content" id='MainContent'>
		<p>Page content goes here.</p>
	</div><!-- /content -->
    

	<div data-role="footer">
  
		<h4>Page Footer</h4>
	</div><!-- /footer -->
  `;

let rabbitTable = `<table data-role="table" id="table-column-toggle"  class="ui-responsive table-stroke">
<thead>
<tr>
<th data-priority="2">Rank</th>
<th>Movie Title</th>
<th data-priority="3">Year</th>
<th data-priority="1"><abbr title="Rotten Tomato Rating">Rating</abbr></th>
<th data-priority="5">Reviews</th>
</tr>
</thead>
<tbody>
<tr>
<th>1</th>
<td><a href="https://en.wikipedia.org/wiki/Citizen_Kane" data-rel="external">Citizen Kane</a></td>
<td>1941</td>
<td>100%</td>
<td>74</td>
</tr>
<tr>
<th>2</th>
<td><a href="https://en.wikipedia.org/wiki/Casablanca_(film)" data-rel="external">Casablanca</a></td>
<td>1942</td>
<td>97%</td>
<td>64</td>
</tr>
<tr>
<th>3</th>
<td><a href="https://en.wikipedia.org/wiki/The_Godfather" data-rel="external">The Godfather</a></td>
<td>1972</td>
<td>97%</td>
<td>87</td>
</tr>
<tr>
<th>4</th>
<td><a href="https://en.wikipedia.org/wiki/Gone_with_the_Wind_(film)" data-rel="external">Gone with the Wind</a></td>
<td>1939</td>
<td>96%</td>
<td>87</td>
</tr>
<tr>
<th>5</th>
<td><a href="https://en.wikipedia.org/wiki/Lawrence_of_Arabia_(film)" data-rel="external">Lawrence of Arabia</a></td>
<td>1962</td>
<td>94%</td>
<td>87</td>
</tr>
<tr>
<th>6</th>
<td><a href="https://en.wikipedia.org/wiki/Dr._Strangelove" data-rel="external">Dr. Strangelove Or How I Learned to Stop Worrying and Love the Bomb</a></td>
<td>1964</td>
<td>92%</td>
<td>74</td>
</tr>
<tr>
<th>7</th>
<td><a href="https://en.wikipedia.org/wiki/The_Graduate" data-rel="external">The Graduate</a></td>
<td>1967</td>
<td>91%</td>
<td>122</td>
</tr>
<tr>
<th>8</th>
<td><a href="https://en.wikipedia.org/wiki/The_Wizard_of_Oz_(1939_film)" data-rel="external">The Wizard of Oz</a></td>
<td>1939</td>
<td>90%</td>
<td>72</td>
</tr>

</tbody>
</table>
`;

function getTasks() {
  $.getJSON("/database/getTasks/", function (tasks) {
    tasks.sort((a, b) => moment(a.Due).valueOf() - moment(b.Due).valueOf());
    console.log(tasks);
    taskssHTML = "";
    $.map(tasks, function (task) {
      try {
        let momentObj = moment(task.Due);
        let duePast = momentObj.isBefore(moment(), "day");
        let dueFuture = momentObj.isAfter(moment(), "day");
        let today = moment(momentObj).isSame(moment(), "day");
        let title = task.Title;

        today;
        if (today) {
          taskssHTML +=
            `<tr>
            <th>` +
            title +
            `</th>
            <td>` +
            task.Rabbit +
            `</td>
            <td>` +
            moment(task.Due).format("MM/DD/YY") +
            `</td>
            <td>` +
            task.Note +
            `</td>
          <td><a href="#" class="ui-btn ui-icon-edit ui-btn-icon-notext ui-corner-all">No text</a></td>
            
          </tr>`;
        }
        if (dueFuture) {
          tasksFutureHTML +=
            `<tr>
                    <th>` +
            title +
            `</th>
                    <td>` +
            task.Rabbit +
            `</td>
                    <td>` +
            moment(task.Due).format("MM/DD/YY") +
            `</td>
                    <td>` +
            task.Note +
            `</td>
                  <td><a href="#" class="ui-btn ui-icon-edit ui-btn-icon-notext ui-corner-all">No text</a></td>
                    
                  </tr>`;
        }
        if (duePast) {
          tasksPastHTML +=
            `<tr>
                    <th>` +
            title +
            `</th>
                    <td>` +
            task.Rabbit +
            `</td>
                    <td>` +
            moment(task.Due).format("MM/DD/YY") +
            `</td>
                    <td>` +
            task.Note +
            `</td>
                  <td><a href="#" class="ui-btn ui-icon-edit ui-btn-icon-notext ui-corner-all">No text</a></td>
                    
                  </tr>`;
        }
      } catch (error) {}
    });
    $("#TasksContentPast").html(
      `
      <table data-role="table" id="table-column-toggle"  class="tasksTable ui-responsive table-stroke">
        <thead>
          <tr>
            <th >Title</th>
            <th>Rabbit</th>
            <th >Due</th>
            <th style="width:40%">Note</th>
            
          </tr>
        </thead>
        <tbody>
          ` +
        tasksPastHTML +
        `
        </tbody>
      </table>
      `
    );
    $("#TasksContentFuture").html(
      `
      <table data-role="table" id="table-column-toggle"  class="tasksTable ui-responsive table-stroke">
        <thead>
          <tr>
            <th >Title</th>
            <th>Rabbit</th>
            <th >Due</th>
            <th style="width:40%">Note</th>
            
          </tr>
        </thead>
        <tbody>
          ` +
        tasksFutureHTML +
        `
        </tbody>
      </table>
      `
    );
    $("#TasksContentToday").html(
      `
      <table data-role="table" id="table-column-toggle"  class="tasksTable ui-responsive table-stroke">
        <thead>
          <tr>
            <th >Title</th>
            <th>Rabbit</th>
            <th >Due</th>
            <th style="width:40%">Note</th>
            
          </tr>
        </thead>
        <tbody>
          ` +
        taskssHTML +
        `
        </tbody>
      </table>
      `
    );
    // $("#tasksHeader").html(`<h1> Tasks </h1>
    //   <a href="#home" class='ui-btn ui-shadow ui-corner-all'>Home</a>
    //   <div id='taskButtons' data-role="navbar" data-iconpos="bottom">

    //   <ul class="ui-grid-b">
    //       <li class="ui-block-a"><a id='openPopupButton' data-icon="plus"  data-rel="popup" data-position-to="window"  data-transition="pop" class="ui-button  ui-link ui-btn ui-icon-plus ui-btn-icon-bottom">Add Task</a></li>
    //       <li class="ui-block-b"><a href="#" data-icon="plus" class="ui-button ui-link ui-btn ui-icon-plus ui-btn-icon-bottom">Two</a></li>
    //       <li class="ui-block-c"><a href="#" data-icon="plus" class="ui-button ui-link ui-btn ui-icon-plus ui-btn-icon-bottom">Three</a></li>
    //     </ul>
    //       </div>`);
  });
}
let getRbbitDetails = function (id) {
  $.getJSON("/database/getRabbitbtid/" + id, function (data) {
    $("#AddWeightContent").html();
    matedArray = "";
    notesHTML = "";
    $.map(data[0].Mated, function (mated) {
      matedArray +=
        `<li>
      <h2>Mated with: ` +
        mated.Buck +
        `</h2>
      <p>` +
        mated.Note +
        `</p>
      <p class="ui-li-aside"><strong>` +
        moment(mated.Date).format("MM/DD/YY") +
        `</strong>
        </p>
      </li>`;
    });
    $.map(data[0].Notes, function (values) {
      notesHTML +=
        `<li>
      <h2>` +
        values.Title +
        `</h2>
      <p>` +
        values.Note +
        `</p>
      <p class="ui-li-aside"><strong>` +
        moment(values.Date).format("MM/DD") +
        `</strong>
        </p>
      </li>`;
    });
    let latestWeight;
    let latestWeightDate;
    SelectedRabbit = data[0];
    let detailedRabbitInfo = data[0];
    console.log(detailedRabbitInfo);
    console.log(detailedRabbitInfo.CurrentWeight.length);
    let numberOfWeights = detailedRabbitInfo.CurrentWeight.length;
    console.log(detailedRabbitInfo.CurrentWeight[0].Weight);
    console.log(detailedRabbitInfo.CurrentWeight[numberOfWeights - 1].Weight);
    if (detailedRabbitInfo.CurrentWeight.length == 1) {
      latestWeight = detailedRabbitInfo.CurrentWeight[0].Weight;
      latestWeightDate = moment(
        detailedRabbitInfo.CurrentWeight[0].Date
      ).format("MM/DD");
    }
    if (detailedRabbitInfo.CurrentWeight.length == 0) {
      latestWeight = 0;
    }
    if (detailedRabbitInfo.CurrentWeight.length > 1) {
      latestWeight =
        detailedRabbitInfo.CurrentWeight[numberOfWeights - 1].Weight;

      latestWeightDate = moment(
        detailedRabbitInfo.CurrentWeight[numberOfWeights - 1].Date
      ).format("MM/DD");
    }

    rabbitCageItems =
      `<div class="ui-grid-c ui-responsive">
<div class="ui-block-a"><a href="#" id="addMatted" class="ui-btn ui-shadow ui-corner-all">Matted</a></div>
<div class="ui-block-b"><a href="#" class="ui-btn ui-shadow ui-corner-all" id="addRabbitWeight">Add Weight</a></div>
<div class="ui-block-c"><a href="#" class="ui-btn ui-shadow ui-corner-all" id="addRabbitNote">Add Note</a></div>
<div class="ui-block-c"><a href="#" class="ui-btn ui-shadow ui-corner-all" id="edditRabbits">Edit Rabbit</a></div>

</div>
      
      
      <div class="ui-grid-a">
      <div class="ui-block-a">
        <div class="ui-bar ui-bar-b" >
          <ul id='listview' data-role='listview' data-inset='true'>
            <li ">Name: ` +
      detailedRabbitInfo.Name +
      `</li>
                        <li >Sex: ` +
      detailedRabbitInfo.Sex +
      `</li>
                      <li >Date_Born: ` +
      moment(detailedRabbitInfo.Date_Born).format("MM/DD") +
      `</li>
                        <li >ReadyToBreed: ` +
      detailedRabbitInfo.ReadyToBreed +
      `</li>
                        <li >DateReadyToBreed: ` +
      moment(detailedRabbitInfo.DateReadyToBreed).format("MM/DD") +
      `</li>
              <li>Last Weight: ` +
      latestWeight +
      `</li>
          </ul>
        </div>
      </div>
      <div class="ui-block-b">
        <div class="ui-bar ui-bar-b" >
        
          <ul id='listview' data-role='listview' data-inset='true'>
              <li >Mother: ` +
      detailedRabbitInfo.Mother +
      `</li>
                          <li >Father: ` +
      detailedRabbitInfo.Father +
      `</li> 
                          <li >Bought: ` +
      detailedRabbitInfo.Bought +
      `</li> 
                          <li >Breeder: ` +
      detailedRabbitInfo.Breeder +
      `</li>
                          <li >Breed: ` +
      detailedRabbitInfo.Breed +
      `</li>
                    <li>Weight Date: ` +
      latestWeightDate +
      `</li>

          </ul> 
        </div>
      </div>
    </div>

    
        <br/>
       <div class="ui-body ui-body-b ui-corner-all" id='scrollingMatedNotes'>    
      <div class="ui-body ui-body-b ui-corner-all" id='Mated'>
        <div class="ui-bar ui-bar-b">
          <h3>Mated History</h3>
        </div><ul data-role="listview" data-inset="true">
        
` +
      matedArray +
      `</ul></div>
          
      <div class="ui-body ui-body-b ui-corner-all" id='Notes'>
        <div class="ui-bar ui-bar-b">
          <h3>Notes</h3>
        </div><ul data-role="listview" data-inset="true">` +
      notesHTML +
      `</ul></div>
      </div>`;

    $("#RabbitInfo").html(rabbitCageItems);
    $("#RabbitInfo").enhanceWithin();
    $("#popup-outside-page").popup("open");
    return rabbitCageItems;
  });
};
function getGrowingRabbits() {
  $.getJSON("/database/getGrowing/", function (data) {
    growingRabbitData = data;
  });
}
function getGrowingRabbitsPage() {
  $("#GrowingRabbits").html("");
  $("#LitterInfo").html("");
  let GrowingGridHTML = "";
  let growingRabbits;
  let growingDataSorted = [];
  console.log(growingRabbitData);
  $.map(growingRabbitData, function (data) {
    let litterID = data.LitterID;
    console.log(litterID);

    console.log(growingDataSorted.length);
    if (growingDataSorted.length === 0) {
      growingDataSorted.push({ ID: litterID, Rabbits: [data] });
      console.log(growingDataSorted);
    }
    const index = growingDataSorted.findIndex((obj) => obj.ID === litterID);
    console.log(index);
    if (index === -1) {
      console.log("Not in array");
      growingDataSorted.push({ ID: litterID, Rabbits: [data] });
      console.log(growingDataSorted);
    } else {
      console.log("its in array");
      growingDataSorted[index]["Rabbits"].push(data);
      console.log(growingDataSorted);
    }
  });
  let lis = "";
  let lis2 = "";
  let itemLIHEader;
  let itemLIHEader2;
  $.map(growingDataSorted, function (data, index) {
    console.log(data.Rabbits.length);

    $.map(data.Rabbits, function (rabbit) {
      itemLI =
        `<li>
              <h2>Kid: ` +
        rabbit.KidID +
        `</h2>
              <p>
              <strong>
              Born: ` +
        moment(rabbit.Born).format("MM/DD") +
        `
              </strong>
              
              <p>Last Weight: ` +
        rabbit.CurrentWeight[rabbit.CurrentWeight.length - 1].Weight +
        ` Pounds</p>
        <p>Weighed Last: ` +
        moment(
          rabbit.CurrentWeight[rabbit.CurrentWeight.length - 1].Date
        ).format("MM/DD") +
        `</p>
              <p class="ui-li-aside">
                <strong>Sex: ` +
        rabbit.Sex +
        `</strong>
                
              </p>
            </li>`;

      if (index % 2 === 0 || index === 0) {
        // This is an even-indexed element
        itemLIHEader =
          `<li data-role="list-divider" data-theme="c"><strong>Litter ` +
          data.ID +
          ` </span>
              <span class="ui-li-count">` +
          data.Rabbits.length +
          `</span>
            </li>`;
        lis += itemLI;
      } else {
        // This is an odd-indexed element
        itemLIHEader2 =
          `<li data-role="list-divider" data-theme="c"><strong>Litter ` +
          data.ID +
          ` </span>
              <span class="ui-li-count">` +
          data.Rabbits.length +
          `</span>
            </li>`;
        lis2 += itemLI;
      }
    });

    if (index % 2 !== 0 || index !== 0) {
      GrowingGridHTML +=
        `
   <div class="ui-grid-a" data-theme="c">
    <div class="ui-block-a" data-theme="c">
      <div class="ui-bar ui-bar-c gridGrowing" >
        <ul data-role="listview" data-inset="true" data-theme="c">` +
        itemLIHEader +
        lis +
        `</ul>
      </div>
    </div>
    <div class="ui-block-b " style="width:50%">
      <div class="ui-bar ui-bar-c " >
        <ul data-role="listview" data-inset="true" data-theme="c">` +
        itemLIHEader2 +
        lis2 +
        `</ul>
      </div>
    </div>
</div>`;
      lis = "";
      lis2 = "";
    }
  });

  $("#GrowingRabbits").html(GrowingGridHTML);
  $("#GrowingRabbits").enhanceWithin();
}
function getGrowingWeights() {
  growingsHTML = "";
  $.map(growingRabbitData, function (data) {
    growingArray = "";
    console.log(data);

    let growingName = data.KidID;
    growingsHTML +=
      `<label for="number-pattern">` +
      growingName +
      ` Weight:</label>
         
        <input type="number" name="number"  litterID=` +
      data.LitterIDDB +
      ` id=` +
      data.KidItemID +
      ` value=""></input>`;
  });

  //liItems = "";

  $("#AddWeightContent").html(
    growingsHTML + `<button id="addGrowingWeight">Button</button>`
  );
  $("#popupheader").html("Add Weights");
  $("#RabbitInfo").html("");
  $("#AddWeightContent").enhanceWithin();
  $("#popup-outside-page").popup("open");
}
function getBunnies() {
  $.getJSON("/database/getBunnies/", function (data) {
    RabbitData = "";
    $("#cagesMain").html("");
    Rabbits.length = 0;
    licageItems = "";
    RabbitData = data;
    $.map(data, function (data) {
      let readyToBreeb = `<div class="ui-body ui-body-a ui-corner-all ">
           Can't Breed
          </div>`;
      if (data.ReadyToBreed === true) {
        readyToBreeb = `<div class="ui-body ui-body-a ui-corner-all ">
            Can Breed
          </div>`;
      }
      licageItems =
        `<li id="popupRabbitDetailsShow" data-rabbit=` +
        data.id +
        `>
        <a data-rel="popup" data-position-to="window" class="ui-btn ui-corner-all ui-shadow  ui-btn-a" data-transition="pop">
          <img src=` +
        data.Pic +
        ` class="ui-li-thumb">
          <h2>` +
        data.Name +
        `</h2>
          <p>Ready To Breed: ` +
        data.ReadyToBreed +
        `<br/> Can Breed: ` +
        moment(data.DateReadyToBreed).format("MM/DD") +
        `</p>
          <p class="ui-li-aside">Cage: ` +
        data.Cage +
        `</p>
        </a>
      </li>`;
      $("#cagesMain").append(licageItems);
      $("#cagesMain").enhanceWithin();

      Rabbits.push(
        `<option value=` + data.Name + `>` + data.Name + `</option>`
      );
      if (data.Sex === "Doe") {
        Does.push(`<option value=` + data.Name + `>` + data.Name + `</option>`);
      }
      if (data.Sex === "Buck") {
        Bucks.push(
          `<option value=` + data.Name + `>` + data.Name + `</option>`
        );
      }
      console.log(data);

      let Breeder = "";
      notesHTML = "";
      Breeder = data.Breeder;
      console.log(Breeder);
    });

    getTasks();
    $("#cagesMain").enhanceWithin();
  });
}
function getLitters() {
  let litterListLIs = "";

  $.getJSON("/database/getRabbitLitters/", function (litters) {
    litterData = litters;
    console.log(litters);
    $.map(litters, function (litter) {
      try {
        litterListLIs +=
          `<li class='litterItem' data-litter=` +
          litter.LitterID +
          `><a href="#">
        <img src=""http://192.168.0.156:3000/images/bunny1.jpg">
        <h2>` +
          litter.Mother +
          ` & ` +
          litter.Father +
          `</h2>
       
        <p>` +
          moment(litter.Born).fromNow(true) +
          ` old<br/>
        ` +
          litter.Kids[0].Status +
          `</br>` +
          moment(litter.MovedToGrow).format("MM/DD/YY") +
          `</p>
        
        <p class="ui-li-aside">` +
          litter.LitterID +
          `</p>
        <p class="ui-li-aside2">` +
          litter.Kids.length +
          ` Kids</p>
        </a></li>`;
      } catch (error) {}
    });
    litterListViewHTML =
      `<fieldset class="ui-grid-a">
<div class="ui-block-a"><button  data-theme="c" id='addLitter' >Add Litter</button></div>
<div class="ui-block-b"><button data-theme="b">Del Litter</button></div>
</fieldset>

<div role="main" class="ui-content">
    <ul data-role="listview" data-inset="true">` +
      litterListLIs +
      `</ul>
    </div>`;
  });
}
function getLitterDetails(litterID) {
  const LitterById = litterData.find((litter) => litter.LitterID === litterID);
  console.log(LitterById);

  let kidsListViewItems = "";
  console.log(LitterById.Kids);
  $.map(LitterById.Kids, function (kid) {
    console.log(kid);
    kidsListViewItems +=
      `
    
      <li data-role="collapsible" data-iconpos="right" data-inset="false">
        <h2>` +
      kid.KidID +
      `</h2>
        <ul data-role="listview" data-theme="b">
        
          <li><a href="#">
            <h2>` +
      kid.Status +
      `</h2>
              <p><strong>Sex: ` +
      kid.Sex +
      `</strong></p>
              <p></p>
              <p class="ui-li-aside"><strong>Current Weight: ` +
      kid.CurrentWeight[0].Weight +
      `</strong></p>
          
          
          </a></li>
        </ul>
      </li>`;
  });

  let kidsHTML =
    `
<div class="ui-corner-all custom-corners">
  <div class="ui-bar ui-bar-b">
    <h3>Kids</h3>
  </div>
    <div class="ui-body ui-body-b">
    <ul data-role="listview">` +
    kidsListViewItems +
    `</ul>
    </div>
    </div>`;
  let LitterDetailedHTML =
    `
<div class="ui-corner-all custom-corners">
  <div class="ui-bar ui-bar-b">
    <h3>` +
    LitterById.LitterID +
    `</h3>
  </div>
    <div class="ui-body ui-body-b">

      <div class="ui-grid-a">
        <div class="ui-block-a"><button type="submit" data-theme="c">Moved Growing</button></div>
        <div class="ui-block-b"><button type="submit" data-theme="b">Processed</button></div>
      </div>
      <div class="ui-bar ui-bar-b" >
        <ul id='listview' data-role='listview' data-inset='true'>
          <li ">Name: ` +
    LitterById.LitterID +
    `</li>
          <li >Cage: ` +
    LitterById.Cage +
    `</li>
          <li >Date_Born: ` +
    moment(LitterById.Born).format("MM/DD") +
    `</li>
          <li >Mother: ` +
    LitterById.Mother +
    `</li>
          <li >Father: ` +
    LitterById.Father +
    `</li>
            
        </ul>
      </div>
    </div>
</div>` +
    kidsHTML;
  $("#LitterInfo").html("");
  $("#AddWeightContent").html("");
  $("#RabbitInfo").html("");
  $("#LitterInfo").html(LitterDetailedHTML);
  $("#LitterInfo").enhanceWithin();

  $("#popup-outside-page").popup("open");
}

function createNewLitterForm() {
  console.log("hhh!");
  let count = 0;
  let popUpForm =
    `<form id='newLitter'>
    <label for="LitterID">Litter ID:</label>
    <input type="text" name="LitterID" id="LitterID" placeholder="Text input" value="">

      <label for="textarea-2">Textarea:</label>
      <textarea cols="40" rows="8" name="Note" id="Note"></textarea>
      
      <label for="Father" class="select">Father:</label>
      <select name="Father" id="Father" data-native-menu="false">
        <option>Choose</option>` +
    Bucks +
    `</select>
      <label for="Mother" class="select">Mother:</label>
      <select name="Mother" id="Mother" data-native-menu="false">
        <option>Choose</option>` +
    Does +
    `</select>
      <label for="Bred">Bred:</label>
      <input type="date" name="Bred" id="Bred" value="">

      <label for="Born">Born:</label>
      <input type="date" name="Born" id="Born" value="">
      
      <label for="NumOfKids">How Many Kids:</label>
      <input type="number" name="NumOfKids" id="NumOfKids" value="">

      </form>
      <button class="ui-btn ui-btn-inline" id='saveLitter' >Button</button>

    `;

  $("#LitterInfo").html("");
  $("#AddWeightContent").html("");
  $("#RabbitInfo").html("");
  $("#LitterInfo").html(popUpForm);
  $("#LitterInfo").enhanceWithin();
  $("#popup-outside-page").popup("open");
}
$(function () {
  //Seetting up UI
  $("#MainPage").html(page1);
  $("#MainPage").enhanceWithin();
  $("#MainContent").html(listview);
  $("#MainContent").enhanceWithin();
  $("#taskButtons").enhanceWithin();
  $("#popup-outside-page").enhanceWithin().popup();

  //Gettign required data
  getBunnies();
  getGrowingRabbits();
  getLitters();
  //Clicks
  $("button").on("click", function () {
    // Code to execute when the element is clicked
    console.log("CLICKED");
  });
  $("li#growing").click(function () {
    console.log("CLICKED");
    getGrowingRabbitsPage();

    $.mobile.changePage("#Growing", {
      transition: "slideup",
      changeHash: false,
    });
  });
  $("li#addWeight").click(function () {
    console.log("CLICKED");
    getGrowingWeights();
  });
  $("li#litters").click(function () {
    console.log("CLICKED");
    $("#LitterItems").html(litterListViewHTML);
    $("#LitterItems").enhanceWithin();
    $.mobile.changePage("#Litters", {
      transition: "slideup",
      changeHash: false,
    });
  });
  $("li#tasks").click(function () {
    console.log("CLICKED");
    $.mobile.changePage("#Tasks", {
      transition: "slideup",
      changeHash: false,
    });
  });
  $("li#rabbits").click(function () {
    console.log("CLICKED");
    $.mobile.changePage("#Rabbits", {
      transition: "slideup",
      changeHash: true,
    });
  });
  //Watching for Socket connection calls
  Server.on("newTask", function (value) {
    console.log(value);
    $("#openNewTaskPopUp").popup("close");
  });
});
//end of $(function () {

//Watching for onClick for Dynamically added elements
$(document).on("click", "#cages", function () {
  console.log("CLICKED");
  $.mobile.changePage("#Cages", {
    transition: "slideup",
    changeHash: true,
  });
});
$(document).on("change", ":input", function () {
  // Code to execute when the input value changes and the field loses focus
  console.log("Input value changed to: " + $(this).val());
  var inputValue = $(this).val(); // Get the value of the current input
  var LitterIDDB = $(this).attr("litterid"); // Get the name attribute
  var KidID = $(this).attr("id");
  let date = moment().format("MM/DD/YYYY");
  weightsArray.push({
    Litter: LitterIDDB,
    Rabbit: KidID,
    Weight: inputValue,
    Date: date,
  });

  console.log(inputValue + " " + LitterIDDB + " " + KidID + " " + date);
});
$(document).on("click", "#addTask", function () {
  // Code to execute when a dynamically added button with class 'dynamicButton' is clicked
  console.log("zdfgdfgd!");
  let count = 0;
  let popUpForm =
    `<form id='newTask'><label for="Title">Title:</label>
    <input type="text" name="Title" id="Title" placeholder="Text input" value="">

      <label for="textarea-2">Textarea:</label>
      <textarea cols="40" rows="8" name="Note" id="Note"></textarea>

      <label for="date">Date:</label>
      <input type="date" name="Due" id="Due" value="">

      <label for="Rabbit" class="select">Rabbit:</label>
      <select name="Rabbit" id="select-choice-a" data-native-menu="false">
        <option>Choose</option>` +
    Rabbits +
    `</select>
      </form>
      <button class="ui-btn ui-btn-inline" id='saveTask' >Button</button>

    `;
  $("#LitterInfo").html("");
  $("#popupAddTask").html(popUpForm);
  $("#popupAddTask").enhanceWithin();
  $("#openNewTaskPopUp").popup("open");
});
$(document).on("click", ".litterItem", function () {
  $("#RabbitInfo").html("");
  $("#AddWeightContent").html("");
  $("#LitterInfo").html("");

  getLitterDetails($(this).attr("data-litter"));
  $("#popupheader").html("Litter Details");
  // $("#RabbitInfo").html(rabbitCageItems);
  // $("#RabbitInfo").enhanceWithin();
  // $("#popup-outside-page").popup("open");
});
$(document).on("click", "#addGrowingWeight", function () {
  // Code to execute when a dynamically added button with class 'dynamicButton' is clicked
  console.log("Dynamically added button clicked!");
  let count = 0;
  Server.emit("kidsWeight", weightsArray);
  getLitters();
});
$(document).on("click", "#submitRabbitNote", function (event) {
  event.preventDefault();
  // Code to execute when a dynamically added button with class 'dynamicButton' is clicked
  console.log("Dynamically added button clicked!");
  let count = 0;
  let sendThis = {
    rabbitID: SelectedRabbit.id,
    note: $("#rabbitNote").val(),
    title: $("#rabbitTitle").val(),
  };
  console.log(sendThis);
  Server.emit("rabbitNote", sendThis);

  $.mobile.changePage("#Cages", {
    transition: "slideup",
    changeHash: true,
  });
  getBunnies();
});
$(document).on("click", "#submitRabbitDet", function (event) {
  event.preventDefault();
  // Code to execute when a dynamically added button with class 'dynamicButton' is clicked
  console.log("Dynamically added button clicked!");
  let count = 0;
  let sendThis = {
    rabbitID: SelectedRabbit.id,
    weight: $("#rabbitWeight").val(),
  };
  console.log(sendThis);
  Server.emit("rabbitWeight", sendThis);

  getBunnies();

  $.mobile.changePage("#Cages", {
    transition: "slideup",
    changeHash: true,
  });
});
$(document).on("click", "#addLitter", function () {
  $("#RabbitInfo").html("");
  $("#AddWeightContent").html("");
  $("#LitterInfo").html("");
  createNewLitterForm();
  $("#popupheader").html("New Litter");
  // $("#RabbitInfo").html(rabbitCageItems);
  // $("#RabbitInfo").enhanceWithin();
  // $("#popup-outside-page").popup("open");
  getLitters();
});
$(document).on("click", "#popupRabbitDetailsShow", function () {
  $("#RabbitInfo").html("");
  $("#AddWeightContent").html("");
  $("#LitterInfo").html("");
  getRbbitDetails($(this).attr("data-rabbit"));
  $("#popupheader").html("Rabbit Details");
  // $("#RabbitInfo").html(rabbitCageItems);
  // $("#RabbitInfo").enhanceWithin();
  // $("#popup-outside-page").popup("open");
});
$(document).on("click", "#openPopupNewTask", function () {
  let popUpForm =
    `<form id='newTask'><label for="Title">Title:</label>
<input type="text" name="Title" id="Title" placeholder="Text input" value="">

<label for="textarea-2">Textarea:</label>
<textarea cols="40" rows="8" name="Note" id="Note"></textarea>

<label for="date">Date:</label>
<input type="date" name="Due" id="Due" value="">

<label for="Rabbit" class="select">Rabbit:</label>
<select name="Rabbit" id="select-choice-a" data-native-menu="false">
  <option>Choose</option>` +
    Rabbits +
    `</select>
</form>
<button class="ui-btn ui-btn-inline" id='saveTask' >Button</button>

`;
  $("#popupAddTask").html(popUpForm);
  $("#popupAddTask").enhanceWithin();
  $("#openNewTaskPopUp").popup("open");
});
$(document).on("popupafterclose", "#popup-outside-page", function (event, ui) {
  // Your code to execute after the popup closes
  $("#RabbitInfo").html("");
  $("#AddWeightContent").html("");
  $("#LitterInfo").html("");

  console.log("Popup #myPopup has closed!");
});
$(document).on("click", "#addMatted", function () {
  $("#RabbitInfo").html("");
  $("#AddWeightContent").html("");
  $("#LitterInfo").html("");
  let mattingForm =
    `
  <h3 class="ui-bar ui-bar-a">Heading</h3>
    <div class="ui-body">
    <form>
    <div class="ui-field-contain">

  <label for="select-choice-a" class="select">Custom select menu:</label>
    <select name="select-choice-a" id="select-choice-a" data-native-menu="false">
      <option>` +
    SelectedRabbit.Name +
    `</option>` +
    Rabbits +
    `
    </select>
    </div>
    <div class="ui-field-contain">
      <label for="textarea-1">Note:</label>
      <textarea cols="40" rows="8" name="textarea-1" id="textarea-1">Textarea</textarea>
    </div>
    <div class="ui-field-contain">
      <label for="textarea-1">Date:</label>
      <input  name="date-1" id="mattedDate-1" type="date"></textarea>
    </div>  </form>
</div>

  
  `;
  $("#popupheader").html("New Matting History");
  $("#RabbitInfo").html(mattingForm);
  $("#RabbitInfo").enhanceWithin();
  $("#popup-outside-page").popup("open");
  getBunnies();
});
$(document).on("click", "#addRabbitNote", function () {
  $("#RabbitInfo").html("");
  $("#AddWeightContent").html("");
  $("#LitterInfo").html("");
  let mattingForm = `
  <h3 class="ui-bar ui-bar-a">New Note</h3>
<div class="ui-body">
<form data-history="false">
   
<div class="ui-field-contain">
      <label for="rabbitTitle">Title:</label>
      <input type="text" name="rabbitTitle" id="rabbitTitle" value="">
    </div>
    <div class="ui-field-contain">
      <label for="rabbitNote">Note:</label>
      <textarea cols="40" rows="8" name="rabbitNote" id="rabbitNote"></textarea>
    </div>  
    <div class="ui-field-contain">
      
      <button  name="submit" id="submitRabbitNote" type="button">Submit</button>
    </div> 
  </form>
</div>

  
  `;
  $("#popupheader").html(SelectedRabbit.Name);
  $("#RabbitInfo").html(mattingForm);
  $("#RabbitInfo").enhanceWithin();
  $("#popup-outside-page").popup("open");
  //getBunnies();
});
$(document).on("click", "#addRabbitWeight", function () {
  $("#RabbitInfo").html("");
  $("#AddWeightContent").html("");
  $("#LitterInfo").html("");
  let rabbitWeight = `
  <h3 class="ui-bar ui-bar-a">New Weight</h3>
  <div class="ui-body">
    <form  data-history="false">
   

    <div class="ui-field-contain">
      <label for="textarea-1">Weight:</label>
      <input  name="Weight" id="rabbitWeight" type="number" value=""></input>
    </div>  
    <div class="ui-field-contain">
      <button  name="submit" id="submitRabbitDet" type="button">Submit</button>
    </div> 
  </form>
</div>

  
  `;
  $("#popupheader").html(SelectedRabbit.Name);
  $("#RabbitInfo").html(rabbitWeight);
  $("#RabbitInfo").enhanceWithin();
  $("#popup-outside-page").popup("open");
});
$(document).on("click", "#saveTask", function () {
  // Code to execute when a dynamically added button with class 'dynamicButton' is clicked
  let count = 0;
  var formData = $("#newTask").serializeArray();
  getTasks();
  Server.emit("newTask", formData);
});
$(document).on("click", "#saveLitter", function () {
  // Code to execute when a dynamically added button with class 'dynamicButton' is clicked
  let count = 0;
  var formData = $("#newLitter").serializeArray();
  getLitters();
  Server.emit("newLitter", formData);
});
$(document).on("click", "#ClosePopUp", function () {
  // Code to execute when a dynamically added button with class 'dynamicButton' is clicked
  $("#popup-outside-page").popup("close");
});
