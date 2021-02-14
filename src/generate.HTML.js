function generateHtml(manager,engineer,intern) {
    return ` 
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger text-white">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center card-deck">
                ` + addManager(manager) + addEngineer(engineer) + addIntern(intern)+`
                
            </div>
        </div>
    </div>
</body>

</html>
  `;
  }

function addManager(manager){
    var htmlToReturn = "";
    for(var idx=0; idx<manager.length; idx++){
        htmlToReturn += `<div class="card employee-card">
        <div class="card-header text-white bg-primary">
            <h2 class="card-title">${manager[idx].name}</h2>
            <h3 class="card-title"><i class="fab fa-black-tie mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID:${manager[idx].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager[idx].email}">${manager[idx].email}</a></li>
                <li class="list-group-item">Office number:${manager[idx].office} </li>
            </ul>
        </div>
    </div>`
    }
    return htmlToReturn;
}

function addEngineer(engineer){
    var htmlToReturn = "";
       for(var idx=0; idx<engineer.length; idx++){
        htmlToReturn += `<div class="card employee-card ">
        <div class="card-header text-white bg-primary">
            <h2 class="card-title">${engineer[idx].name}</h2>
            <h3 class="card-title"><i class="fas fa-laptop-code mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID${engineer[idx].id} </li>
                <li class="list-group-item">Email: <a href="mailto:${engineer[idx].email}">${engineer[idx].email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer[idx].github}" target="_blank"
                        rel="noopener noreferrer">${engineer[idx].github}</a></li>
            </ul>
        </div>
    </div>`
    }
    return htmlToReturn;
}

function addIntern(intern){
    var htmlToReturn = "";
       for(var idx=0; idx<intern.length; idx++){
        htmlToReturn +=`<div class="card employee-card">
        <div class="card-header text-white bg-primary">
            <h2 class="card-title">${intern[idx].name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern[idx].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern[idx].email}">${intern[idx].email}</a></li>
                <li class="list-group-item">School:${intern[idx].school}</li>
            </ul>
        </div>
    </div>` 
    }
    return htmlToReturn;
}



module.exports = generateHtml;
