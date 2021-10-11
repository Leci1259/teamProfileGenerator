function starterMarkdown(answers) {
return `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="../dist/index.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;700&display=swap" rel="stylesheet">

    <title>Team Profile Generator</title>
</head>

<body>

    <header>
        <h1> My Team</h1>
    </header>

    <main>
    <section class="card" style="width: 18rem;">

            <div class="card-body">
                <h5 class="card-title">${answers.manName}</h5>
                <p class="card-text">Team Manager</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${answers.manId}</li>
                <li class="list-group-item">Email: <a href="mailto: ${answers.manEmail}" target="_blank">${answers.manEmail}</a></li>
                <li class="list-group-item">Office Number: ${answers.manOffNum}</li>
            </ul>

        </section>`
};

function endingMarkdown () {
    return `</main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>

</html>`
};


function engMarkdown (answers) {
return `<section class="card" style="width: 18rem;">

<div class="card-body">
    <h5 class="card-title">${answers.tmName}</h5>
    <p class="card-text">Engineer</p>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item"> ID: ${answers.tmId}</li>
    <li class="list-group-item">
        Email:
        <a href="mailto: ${answers.tmEmail}" target="_blank">${answers.tmEmail}</a>
    </li>
    </li>
    <li class="list-group-item">
        Github:
        <a href="https://github.com/${githubUser}" target="_blank"> ${githubUser}</a>
    </li>

</ul>

</section>`
}

function intMarkdown (answers) {
    return  `<section class="card" style="width: 18rem;">

    <div class="card-body">
        <h5 class="card-title">${answers.tmName}</h5>
        <p class="card-text">Intern</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"> ID: ${answers.tmId}</li>
        <li class="list-group-item">
            Email:
            <a href="mailto: ${answers.tmEmail}" target="_blank"> ${answers.tmEmail}</a>
        </li>
        <li class="list-group-item">School: ${schoolName}}</li>
    </ul>

</section>`

}
module.exports = {
    starterMarkdown,
    endingMarkdown,
    engMarkdown,
    intMarkdown
 }