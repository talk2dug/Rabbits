let modal1 = `<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <ul class="nav nav-tabs">
            <li class="active"><a href="#history"  class="nav-link">History</a></li>
            <li><a href="#tasks"  class="nav-link">Tasks</a></li>
            <li><a href="#notes"  class="nav-link">Notes</a></li>
            <li><a href="#litters"  class="nav-link">Litters</a></li>
        </ul>
       <div class="tab-content">
            
            <div id="history" class="tab-pane fade in active" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
             <h4>History <span class="badge text-bg-secondary"></span></h4>

                <div class="list-group">
                    <li class="list-group-item " >
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Bought PB from Rabbits R Us</h5>
                        <small>5/12/25</small>
                        </div>
                        <p class="mb-1">Brought her home got her iinto her cage and fed her</p>
                        
                    </li>
                    <li class="list-group-item " >
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Just weighed her</h5>
                        <small class="text-body-secondary">5/25/25</small>
                        </div>
                        <p class="mb-1">She just weighed in at 6 lb. She is 3 months old and ready to breed</p>
                        
                    </li>
                    
                    <li class="list-group-item " >
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Task Completed </h5>
                        <small class="text-body-secondary">6/1/25</small>
                        </div>
                        <p class="mb-1">Bred with Fred</p>
                        <p class="mb-1">She was receptive to Fred, they did their thing and she is back in her cage</p>
                        
                    </li>
                    <li class="list-group-item " >
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Task Completed </h5>
                        <small class="text-body-secondary">6/15/25</small>
                        </div>
                        <p class="mb-1">Palpated PB</p>
                        
                    </li>
                    <li class="list-group-item " >
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Task Completed </h5>
                        <small class="text-body-secondary">6/28/25</small>
                        </div>
                        <p class="mb-1">Added Nesting Box</p>
                        
                    </li>
                </div>
            </div>

            <div id="tasks" class="tab-pane fade" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
            <h4>Tasks <span class="badge text-bg-secondary"></span></h4>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">Due Date</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Breed</td>
                    <td>10/10/25</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Palate</td>
                    <td>10/25/25</td>
                   
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Move to nesting box</td>
                    <td>11/25/25</td>
                    
                    </tr>
                </tbody>
            </table>
            </div>
            <div class="tab-pane fade" id="notes" role="tabpanel" aria-labelledby="contact-tab" tabindex="0" >
                <h4>Notes <span class="badge text-bg-secondary"></span></h4>
                <div class="list-group">
                    <li class="list-group-item">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Low eating</h5>
                        <small>9/2/25</small>
                        </div>
                        <p class="mb-1">She wasnt eating all her food. Gave her more vitamins and she seems to be dooing better</p>
                    </li>
                </div>
            </div>
            <div class="tab-pane fade" id="litters" role="tabpanel" aria-labelledby="contact-tab" tabindex="0" >
                <h4>Litters <span class="badge text-bg-secondary"></span></h4>
                
                    <div class="col-md-10 col-md-offset-3">
                    <div id="accordion">
                        <div class="panel list-group">
                        <!-- panel class must be in -->
                        <li href="#web_dev" data-parent="#accordion" data-toggle="collapse" class="list-group-item">
                        <div class="d-flex w-100 justify-content-between">
                                    <h4>001</h4>
                                    <span class=" rounded-pill">14</span>
                                </div>
                            
                            
                        </li>
                        
                        <div class="collapse" id="web_dev">
                            
                            <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@social</td>
                                </tr>
                            </tbody>
                            </table>
                                                        
                        </div>

                        <a href="#desktop" data-parent="#accordion" data-toggle="collapse" class="list-group-item" >
                            <h4>Desktop App.</h4>
                        </a>
                        <div class="collapse" id="desktop">
                            <ul class="list-group-item-text">
                            <li>C#</li>
                            <li>Java</li>
                            <li>Python</li>
                            </ul>
                        </div>


                        <a href="#mobile" data-parent="#accordion" data-toggle="collapse" class="list-group-item">
                            <h4>Mobile App.</h4>
                        </a>
                        <div class="collapse" id="mobile">
                            <ul class="list-group-item-text">
                            <li>Android</li>
                            <li>IOS</li>
                            <li>Windows</li>
                            <li>Linux</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-default" data-dismiss="modal" id="clodeModal">Close</button>
        <button type="button" class="btn btn-primary btn-sm">Save changes</button>
      </div>
    </div>
  </div>
</div>`

let html = `

<div class="container">

    <div class="row">
        <div class="col">
            <div class="card" style="width: 10rem;">
                <img src="images/bunny1.jpg" class="card-img-top" alt="..."/>
                <div class="card-body list-group-flush">
                    <h5 class="card-title">Peanut Butter</h5>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">10/10/25</li>
                        <li class="list-group-item">Sex: F</li>
                        <li class="list-group-item">Mother: CupCake</li>
                        <li class="list-group-item">Father: Kid Maker</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style="width: 10rem;">
                <img src="images/bunny1.jpg" class="card-img-top" alt="..."/>
                <div class="card-body list-group-flush">
                    <h5 class="card-title">Peanut Butter</h5>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">10/10/25</li>
                        <li class="list-group-item">Sex: F</li>
                        <li class="list-group-item">Mother: CupCake</li>
                        <li class="list-group-item">Father: Kid Maker</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style="width: 10rem;">
                <img src="images/bunny1.jpg" class="card-img-top" alt="..."/>
                <div class="card-body list-group-flush">
                    <h5 class="card-title">Peanut Butter</h5>
                    <button type="button" class="btn btn-primary btn-sm" id="myBtn">
                    info
                    </button>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">10/10/25</li>
                        <li class="list-group-item">Sex: F</li>
                        <li class="list-group-item">Mother: CupCake</li>
                        <li class="list-group-item">Father: Kid Maker</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>




`

let carasoel = `
  <div id="carouselExampleIndicators" class="carousel slide" data-interval="false">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>

    <div class="carousel-inner">
    
            <div class="carousel-item active">
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div class="card rabbitCardGirl" style="width: 10rem;">
                            <img src="images/bunny1.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body list-group-flush">
                                <h5 class="card-title">Peanut Butter</h5>
                                <button type="button" class="btn btn-primary btn-sm" id="myBtn">
                                info
                                </button>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">10/10/25</li>
                                </ul>
                            </div>
                        </div>                    
                    </div>
                    <div class="col">
                        <div class="card rabbitCardGirl" style="width: 10rem;">
                            <img src="images/bunny1.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body list-group-flush">
                                <h5 class="card-title">Peanut Butter</h5>
                                <button type="button" class="btn btn-primary btn-sm" id="myBtn">
                                info
                                </button>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">10/10/25</li>
                                </ul>
                            </div>
                        </div>                    
                    </div>
                    <div class="col">
                        <div class="card rabbitCardGirl" style="width: 10rem;">
                            <img src="images/bunny1.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body list-group-flush">
                                <h5 class="card-title">Peanut Butter</h5>
                                <button type="button" class="btn btn-primary btn-sm" id="myBtn">
                                info
                                </button>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">10/10/25</li>
                                </ul>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>    
            </div>
            <div class="carousel-item">
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div class="card rabbitCardGirl" style="width: 10rem;">
                            <img src="images/bunny1.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body list-group-flush">
                                <h5 class="card-title">Peanut Butter</h5>
                                <button type="button" class="btn btn-primary btn-sm" id="myBtn">
                                info
                                </button>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">10/10/25</li>
                                </ul>
                            </div>
                        </div>                    
                    </div>
                    <div class="col">
                        <div class="card rabbitCardGirl" style="width: 10rem;">
                            <img src="images/bunny1.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body list-group-flush">
                                <h5 class="card-title">Peanut Butter</h5>
                                <button type="button" class="btn btn-primary btn-sm" id="myBtn">
                                info
                                </button>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">10/10/25</li>
                                </ul>
                            </div>
                        </div>                    
                    </div>
                    <div class="col">
                        <div class="card rabbitCardGirl" style="width: 10rem;">
                            <img src="images/bunny1.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body list-group-flush">
                                <h5 class="card-title">Peanut Butter</h5>
                                <button type="button" class="btn btn-primary btn-sm" id="myBtn">
                                info
                                </button>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">10/10/25</li>
                                </ul>
                            </div>
                        </div>                    
                    </div>
                </div>        
            </div>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>`
let carasoel2 = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  <div id="carouselExampleIndicators2" class="carousel slide" data-interval="false">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
    </ol>

    <div class="carousel-inner">
    
        <div class="carousel-item active">
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div class="card rabbitCardBoy" style="width: 10rem;">
                            <img src="images/bunny1.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body list-group-flush">
                                <h5 class="card-title">Peanut Butter</h5>
                                <button type="button" class="btn btn-primary btn-sm" id="myBtn">
                                info
                                </button>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">10/10/25</li>
                                </ul>
                            </div>
                        </div>                    
                    </div>
                    <div class="col">
                        <div class="card rabbitCardBoy" style="width: 10rem;">
                            <img src="images/bunny1.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body list-group-flush">
                                <h5 class="card-title">Peanut Butter</h5>
                                <button type="button" class="btn btn-primary btn-sm" id="myBtn">
                                info
                                </button>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">10/10/25</li>
                                </ul>
                            </div>
                        </div>                    
                    </div>
                    <div class="col">
                        <div class="card rabbitCardBoy" style="width: 10rem;">
                            <img src="images/bunny1.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body list-group-flush">
                                <h5 class="card-title">Peanut Butter</h5>
                                <button type="button" class="btn btn-primary btn-sm" id="myBtn">
                                info
                                </button>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">10/10/25</li>
                                </ul>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>    
        </div>
        <div class="carousel-item">
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div class="card rabbitCardBoy" style="width: 10rem;">
                            <img src="images/bunny1.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body list-group-flush">
                                <h5 class="card-title">Peanut Butter</h5>
                                <button type="button" class="btn btn-primary btn-sm" id="myBtn">
                                info
                                </button>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">10/10/25</li>
                                </ul>
                            </div>
                        </div>                    
                    </div>
                    <div class="col">
                        <div class="card rabbitCardBoy" style="width: 10rem;">
                            <img src="images/bunny1.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body list-group-flush">
                                <h5 class="card-title">Peanut Butter</h5>
                                <button type="button" class="btn btn-primary btn-sm" id="myBtn">
                                info
                                </button>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">10/10/25</li>
                                </ul>
                            </div>
                        </div>                    
                    </div>
                    <div class="col">
                        <div class="card rabbitCardBoy" style="width: 10rem;">
                            <img src="images/bunny1.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body list-group-flush">
                                <h5 class="card-title">Peanut Butter</h5>
                                <button type="button" class="btn btn-primary btn-sm" id="myBtn">
                                info
                                </button>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">10/10/25</li>
                                </ul>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>    
        </div>

    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>`
let html2 = `
<div class="list-group list-group-numbered">
  <li class="list-group-item">A list item <span class="badge text-bg-primary rounded-pill">14</span></li>
  <li class="list-group-item">A list item <span class="badge text-bg-primary rounded-pill">14</span></li>
  <li class="list-group-item">A list item <span class="badge text-bg-primary rounded-pill">14</span></li>
</div>
<div class="container text-center">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>
<div class="container text-center">
  <div class="row">
    <div class="col-7">
      `+  carasoel  +`
    </div>
    <div class="col">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>
    </div>
    <div class="col">
      
    </div>
  </div>
</div>

<br/>
<div class="container text-center">
  <div class="row">
    <div class="col-7">
      `+  carasoel2  +`
    </div>
    <div class="col">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>
    </div>
    <div class="col">
      
    </div>
  </div>


</div>







`+modal1
let pstyle = 'border: 1px solid #efefef; padding: 5px'

let w2uiHTML = `<div id="layout" style="width: 900px; height: 1024px;"></div>`


let tabsHTML = `<div id="tabs" style="width: 100%; height:0px">
                </div>
            <div id="tab1" class='tab' style="width: 100%; height:100%">
                tab1
            </div>   
            <div id="tab2" class='tab' style="padding: 10px 0px">
                tab2
            </div> 
            <div id="tab3" class='tab' style="padding: 10px 0px">
            <div id="litterInfo" style="width: 100%; height: 50px;"></div>
               <div id="grid" style="width: 100%; height: 350px;"></div>
               <br>
                <div style="float: left">
                    <label style="position: relative; top: 3px; left: 10px">
                        <input type="checkbox" id="singleOrMulti" style="position: relative; top: 1px; left: -2px;" onclick="setMulti(this)">
                        Multi Field Search
                    </label>
                </div>
                <div style="float: left; margin-left: 30px; margin-top: 1px;">
                    Operator:
                    <select class="w2ui-input" onchange="setOperator(this.value)">
                        <option value="is">is</option>
                        <option value="begins">begins</option>
                        <option value="contains" selected>contains</option>
                        <option value="ends">ends</option>
                    </select>
                </div>
                <div style="clear:both; height: 10px;"></div>
            </div> 
            <div id="tab4" class='tab' style="padding: 10px 0px">
                tab4
            </div>
            `
var config = {
    toolBar:{    
        name: 'toolBar',
        items: [
            { type: 'button', id: 'item1', text: 'New Rabbit', icon: 'w2ui-icon-colors' },
            { type: 'break' },
            { type: 'button', id: 'item2', text: 'New Litter', icon: 'w2ui-icon-colors' },
            { type: 'break' },
        ],
        onClick(event) {
            console.log('Target: '+ event.target, event)
            if(event.target == "item1"){
                openPopup()
            }
        }
    },
    layout: {
        name: 'layout',
        panels: [
            { type: 'top', size: 50, content: `<div id="toolbarTop"></div>`},
            { type: 'left', size: 150, style: pstyle, content: `<div id="sideBarPic"></div><div id="sideBar"></div>`},
            { type: 'main', style: pstyle, content: '<div id="rabbitlayout" style="width: 100%; height: 1024px;"></div>' }
        ]
    },
    rabbitlayout: {
        name: 'rabbitlayout',
        panels: [
            { type: 'top', size: 50, content: `<div id="rabbitTitle"></div>`},
            { type: 'left', size:150, style: pstyle, html: 'left' },
            { type: 'main', style: pstyle, html: '' }
        ]
    },
    rabbitInfolayout: {
        name: 'rabbitInfolayout',
        panels: [
            { type: 'top', size: 200, content: `<div id="rabbitInfoTop" style="width: 100%; height: 100%"></div>`},
            
            { type: 'main', style: pstyle, content: '<div id="rabbitInfoMain" style="width: 100%; height: 100%;"></div>' }
        ]
    },
    sidebar:{ 
        name: 'sidebar',
        nodes: [
            { id: 'does', text: 'Does', expanded: true, group: true,
                nodes: [
                    { id: 'peanutButter', text: 'Peanut Butter', icon: 'fa fa-star'},
                    { id: 'butterCup', text: 'Butter Cup', icon: 'fa fa-star'},
                    { id: 'butterChip', text: 'Butter Chip', icon: 'fa fa-star'}
                ]
            },
            { id: 'Bucks', text: 'Bucks', expanded: true, group: true,
                nodes: [
                    { id: 'masterSGNT', text: 'Master SGNT', icon: 'fa fa-star'},
                    { id: 'drillSGNT', text: 'Drill SGNT', icon: 'fa fa-star'}
                ]
            },
            { id: 'Babbies', text: 'Babbies', expanded: true, group: true,
                nodes:[
                    { id: 'growing', text: 'Growing', datatype: 'babbies', icon: 'fa fa-star-o', count: 14},
                    { id: 'nesting', text: 'Nesting', datatype: 'babbies', icon: 'fa fa-star-o', count: 12 },
                    

                ]
            }
        ]
    },
    rabbitsidebar:{ 
        name: 'rabbitsidebar',

            nodes: [
                { id: 'Info', text: 'Info', icon: 'fa fa-star-o',datatype: 'info' },
                { id: 'Litters', text: 'Litters', icon: 'fa fa-star', count: 3,
                        nodes: [
                        { id: 'litter001-d', text: '001', datatype: 'litter', icon: 'fa fa-star-o', count: 6},
                        { id: 'litter002-d', text: '002', datatype: 'litter', icon: 'fa fa-star-o', count: 5 },
                        { id: 'litter003-d', text: '003', datatype: 'litter', icon: 'fa fa-star-o', count: 6}
                    ]},
                { id: 'Tasks', text: 'Tasks', icon: 'fa fa-star-o',datatype: 'tasks' }
            ]                   
                
            
        
    },
    tabs:{    
        name: 'tabs',
        active: 'tab1',
        tabs: [
            { id: 'tab1', text: 'Tab 1' },
            { id: 'tab2', text: 'Tab 2' },
            { id: 'tab3', text: 'Tab 3' },
            { id: 'tab4', text: 'Tab 4' }
        ],
        onClick(event) {
            $('.tab').hide();
            $('#' + event.target).show();
        }
    },
    litterGrid:{
        name: 'grid',
        box: '#grid',
        columns: [
            { field: 'recid', caption: '#', size: '10px'  },
            { field: 'kitID', caption: 'ID', size: '30px'},
            { field: 'sex', caption: 'Sex', size: '40px' },
            { field: 'BirthWeight', caption: 'Birth Weight',  size: '80px' },
            { field: 'seconddate', caption: '2nd Weight Date', size: '100px' },
            { field: 'SecondWeight', caption: '2nd Weight',  size: '80px' },
            { field: 'finaldate', caption: 'Final Weight Date', size: '100px' },
            { field: 'finalWeight', caption: 'Final Weight',  size: '80px' },
        ]
    },
    growingGRid:{name: 'grid1',
        show: { header: true },
        columns: [
            { field: 'recid', text: 'ID', size: '50px', sortable: true, attr: 'align=center' },
            { field: 'mother', text: 'MNother', size: '30%', sortable: true },
            { field: 'father', text: 'Father', size: '30%', sortable: true },
            { field: 'dateAdded', text: 'Date Added', size: '40%' },
            { field: 'Weight', text: 'Weight', size: '120px' }
        ],
        records: [
            { recid: 1, mother: 'John', father: 'Doe', Weight: 6, dateAdded: '4/3/2012' },
            { recid: 2, mother: 'Stuart', father: 'Motzart', Weight: 6, dateAdded: '4/3/2012' },
            { recid: 3, mother: 'Jin', father: 'Franson', Weight: 8, dateAdded: '4/3/2012' },
            { recid: 4, mother: 'Susan', father: 'Ottie', Weight: 7, dateAdded: '4/3/2012' },
            { recid: 5, mother: 'Kelly', father: 'Silver', Weight: 5, dateAdded: '4/3/2012' },
            { recid: 6, mother: 'Francis', father: 'Gatos', Weight: 7, dateAdded: '4/3/2012' }
        ],
        onClick(event) {
            let record = this.get(event.detail.recid)
            grid2.clear()
            grid2.add([
                { recid: 0, name: 'ID:', value: record.recid },
                { recid: 1, name: 'First Name:', value: record.mother },
                { recid: 2, name: 'Last Name:', value: record.father },
                { recid: 3, name: 'Email:', value: record.Weight },
                { recid: 4, name: 'Date:', value: record.dateAdded }
            ])
        }},
    growingGridDetails:{
        name: 'growingGridDetails',
        show: { header: false, columnHeaders: false },
        columns: [
            { field: 'name', text: 'Name', size: '50px', attr: "align=right" },
            { field: 'value', text: 'Value', size: '100%' }
        ],
        records:[
            { recid: 0, name: 'ID:', value: 123 },
            { recid: 1, name: 'First Name:', value: 'Fred' },
            { recid: 2, name: 'Last Name:', value: 'John' },
            { recid: 0, name: 'Mom:', value: 'jilia' },
            { recid: 1, name: 'father:', value: 'Fred2' },

        ]


    },
    form: {
        name: 'form',
        style: 'border: 1px solid #efefef',
        fields: [
            { field: 'recid', type: 'text', html: { label: 'ID', attr: 'size="10" readonly' } },
            { field: 'fname', type: 'text', required: true, html: { label: 'First Name', attr: 'size="40" maxlength="40"' } },
            { field: 'lname', type: 'text', required: true, html: { label: 'Last Name', attr: 'size="40" maxlength="40"' } },
            { field: 'email', type: 'email', html: { label: 'Email', attr: 'size="30"' } },
            { field: 'sdate', type: 'date', html: { label: 'Date', attr: 'size="10"' } }
        ],
        actions: {
            Reset() {
                this.clear()
            },
            Save() {
                let errors = this.validate()
                if (errors.length > 0) return
                if (this.recid == 0) {
                    grid.add(w2utils.extend({ recid: grid.records.length + 1 }, this.record))
                    grid.selectNone()
                    this.clear()
                } else {
                    grid.set(this.recid, this.record)
                    grid.selectNone()
                    this.clear()
                }
            }
        }
    }
    }
$(function() {
    $('#mainDIV').html(w2uiHTML)
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
    $("#clodeModal").click(function(){
        $("#myModal").modal('hide');
    });
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
// Activate Carousel
$("#myCacarouselExampleIndicatorsousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#carouselExampleIndicators").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#carouselExampleIndicators").carousel("prev");
});

$(".item2").click(function(){
    $("#carouselExampleIndicators").carousel(1);
  });
  
  // Enable Carousel Controls
  $(".left2").click(function(){
    $("#carouselExampleIndicators").carousel("prev");
  });

  $('#layout').w2layout(config.layout)
  $('#toolbarTop').w2toolbar(config.toolBar)

  $('#rabbitlayout').w2layout(config.rabbitlayout)
  

  let sidebar = $('#sideBar').w2sidebar(config.sidebar);
  let rabbitsidebar = $().w2sidebar(config.rabbitsidebar)
  


 // w2ui.layout.content('main', tabsHTML)

 
   


   
    $('#tabs').w2tabs(config.tabs);
    $('.tab').hide();
  $('#tab1').show();
  
  sidebar.on('*', function (event) {
    if(event.type == "click"){
       
        
        
        if(event.node.id=="growing"){
            
            w2ui.rabbitlayout.destroy()
            w2ui.grid.destroy();
            $('#rabbitlayout').html(`
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="card" style="width: 10rem;">
                              <div class="card-header">
                                <h4 class="card-title">001</h4>
                            </div>
                              
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Born:</li>
                                <li class="list-group-item flex-fill">10/25/25</li>
                                
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Born:</li>
                                <li class="list-group-item flex-fill">10/25/25</li>
                                
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Born:</li>
                                <li class="list-group-item flex-fill">10/25/25</li>
                                
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Born:</li>
                                <li class="list-group-item flex-fill">10/25/25</li>
                                
                                </ul>                            
                              
                                </div>                        
                        </div>
                        <div class="col">
                            <div class="card" style="width: 10rem;">
                              <div class="card-header">
                                <h4 class="card-title">001</h4>
                            </div>
                              
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Born:</li>
                                <li class="list-group-item flex-fill">10/25/25</li>
                                
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Born:</li>
                                <li class="list-group-item flex-fill">10/25/25</li>
                                
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Born:</li>
                                <li class="list-group-item flex-fill">10/25/25</li>
                                
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Born:</li>
                                <li class="list-group-item flex-fill">10/25/25</li>
                                
                                </ul>                            
                              
                                </div>                        
                        </div>
                        <div class="col">
                            <div class="card" style="width: 10rem;">
                              <div class="card-header">
                                <h4 class="card-title">001</h4>
                            </div>
                              
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Born:</li>
                                <li class="list-group-item flex-fill">10/25/25</li>
                                
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Born:</li>
                                <li class="list-group-item flex-fill">10/25/25</li>
                                
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Born:</li>
                                <li class="list-group-item flex-fill">10/25/25</li>
                                
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Born:</li>
                                <li class="list-group-item flex-fill">10/25/25</li>
                                
                                </ul>                            
                              
                                </div>                        
                        </div>                        
                        <div class="col">
                            <div class="card" style="width: 10rem;">
                              <div class="card-header">
                                <h4 class="card-title">004</h4>
                            </div>
                              
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Born:</li>
                                <li class="list-group-item flex-fill">10/25/25</li>
                                
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Weight:</li>
                                <li class="list-group-item flex-fill">6</li>
                                
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Mom</li>
                                <li class="list-group-item flex-fill">PeanutButter</li>
                                
                                </ul>
                                <ul class="list-group list-group-horizontal">
                                <li class="list-group-item flex-fill">Father:</li>
                                <li class="list-group-item flex-fill">Sir Mic</li>
                                
                                </ul>                            
                              
                                </div>                        
                        </div>                        
                        
                        </div>
                    <div class="row">
                        <div class="col">
                <div class="card" style="width: 10rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>                        </div>
                        <div class="col">
                <div class="card" style="width: 10rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>                        </div>
                        <div class="col">
                <div class="card" style="width: 10rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                <div class="card" style="width: 10rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>                        </div>
                        <div class="col">
                <div class="card" style="width: 10rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>                        </div>
                        <div class="col">
                <div class="card" style="width: 10rem;">
                    
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>                        </div>
                    </div>                    

                </div>

                
                
                
                
                
                `)
                $("#growingGridDetails").w2grid(config.growingGridDetails);
                w2ui['growingGridDetails'].refresh();
                

        }
        if(event.node.id!="growing"){
           try {
            w2ui.grid.destroy();
           } catch (error) {
            
           }
            $('#rabbitlayout').w2layout(config.rabbitlayout)
            w2ui.rabbitlayout.content('main', tabsHTML);
            $("#grid").w2grid(config.litterGrid);
            $('#tabs').w2tabs(config.tabs);
            $('.tab').hide();
          $('#tab1').show();
          
          w2ui.rabbitlayout.content('left', w2ui.rabbitsidebar);
          $('#rabbitTitle').html(`<h4>` + event.node.text +  `</h4>`)
          $('#sideBarPic').html(`<img src="images/bunny1.jpg"   width="100" height="100" style="float:right" alt="..."/>`);
           
        }
    }
    console.log(event)

    
  })
  rabbitsidebar.on('*', function (event) {
    console.log(event)
    w2ui.grid.refresh('grid')
    try {
        let recNum = 0;
        if(event.object.datatype == 'litter'){
            console.log(event.target);
            $('#litterInfo').html(`<h3>Born: 10/10/25  Sire: Master SGNT</h3>`)
            w2ui['grid'].clear();
            for(i=0; i<5; i++){
            recNum = recNum + 1
                        w2ui['grid'].add([
                        	{recid: recNum,kitID: 9+i ,sex:'D',BirthWeight:9, seconddate:'11/01/25', SecondWeight:12, finaldate: '11/14/25', finalWeight:18},
                        ])
                    }
                    
            w2ui.tabs.click('tab3')
            w2ui.grid.refresh('grid')
            
        }
        if(event.object.datatype == 'info'){
            console.log(event.target);
            w2ui['grid'].clear();
            $('#tab1').w2layout(config.rabbitInfolayout);
            w2ui.sidebar.refresh('rabbitsidebar')
            $('#rabbitInfoTop').html(` 
                <ul class="list-group">
                    <li class="list-group-item">Born: 10/10/25</li>
                    <li class="list-group-item">Sex: Doe</li>
                    <li class="list-group-item">Mother: Bunny Hill</li>
                    <li class="list-group-item">Father: Little Man</li>
                    </ul>
             `)   
                
             $('#rabbitInfoMain').html(`<div class="card" style="width: 30rem;">
                                            <div class="card-body">
                                                <h5 class="card-title">10/25/25</h5>
                                                <h6 class="card-subtitle mb-2 text-body-secondary">Feeding issues</h6>
                                                <p class="card-text">I havenoticed she isnt eating as much as usual. I am going to try
                                                and give her some fresh veggies to see if its the food she isnt enjoying.</p>
                                                
                                            </div>
                                            </div> `
                                    )
            w2ui.tabs.click('tab1')
            w2ui.grid.refresh('grid')
            
        }
        if(event.object.datatype == 'tasks'){
            console.log(event.target);
            w2ui['grid'].clear();
            
            w2ui.tabs.click('tab2')
            w2ui.grid.refresh('grid')
            
        }
    } catch (error) {
        
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
        body: '<div id="main" style="position: absolute; left: 2px; right: 2px; top: 0px; bottom: 3px;"></div>',
        actions: {
            Ok(event) {
            // do something
            w2popup.close()
            w2ui.form.destroy()
        }
    }
    })
    $('#main').w2form(config.form)
}
})
