<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>MANAGIS WEBSITE</title>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <!-- Bootstrap core CSS -->
    <link href="CSS/bootstrap.min.css" rel="stylesheet">
    <!-- Material Design Bootstrap -->
    <link href="CSS/mdb.min.css" rel="stylesheet">
    <!-- Your custom styles (optional) -->
    <link href="CSS/style.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="IMG/favicon.png" />
    <!-- SCRIPTS -->
    <!-- JQuery -->
    <script type="text/javascript" src="JS/jquery-3.4.1.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="JS/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="JS/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="JS/mdb.min.js"></script>
    <script type="text/javascript" src="JS/main.js"></script>
</head>

<body class="bg-img">
<br>
<div class="container-fluid ">
    <div class="row text-center">

        <div class="col-md-6 ">
            <div class="card mb-3 transparent" style="max-width: 110rem;">
                <div class="card-header">Détails de l'événement</div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th style="width: 5%" scope="col" class="taillePolice">#</th>
                                <th style="width: 25%" scope="col" class="taillePolice">Nom de l'événement</th>
                                <th style="width: 25%" scope="col" class="taillePolice">Nom de l'hôte</th>
                                <th style="width: 20%" scope="col" class="taillePolice">Date de l'événement</th>
                                <th style="width: 25%" scope="col" class="taillePolice">Adresse</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td class="taillePolice">Soirée PHP</td>
                                <td class="taillePolice">DOMINIK Delvigne</td>
                                <td class="taillePolice">19/02/1996</td>
                                <td class="taillePolice">Av du ciseau</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card transparent mb-3" style="max-width: 110rem;">
                <div class="card-header">Listes des invités</div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th style="width: 5%" scope="col" class="taillePolice">#</th>
                                <th style="width: 95%" scope="col" class="taillePolice">Nom de l'invité</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td class="taillePolice">DOMINIK Delvigne</td>
                            </tr>
                            </tbody>
                        </table>
                        <h5 class="card-title">Ajouter des invités !</h5>
                        <div class="form-group">
                            <input type="" id="" name="*" class="form-control input-sm" placeholder="Nom invité">
                        </div>
                        <button type="button" id="*" class="btn btn-primary boutonEvent">Ajouter un invité</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row text-center">
    <div class="col-md-6 text-center">
        <div class="card mb-3 transparent" style="max-width: 60rem;">
            <div class="card-header">Liste commentaires</div>
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th style="width: 5%" scope="col" class="taillePolice">#</th>
                        <th style="width: 95%" scope="col" class="taillePolice">Commentaire</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td class="taillePolice">J'ai soif</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
<div class="col-md-6 text-center">
    <div class="card mb-3 transparent" style="max-width: 60rem;">
        <div class="card-header">Conseils</div>
        <div class="card-body">
            <h5 class="card-title">Ajoutez un commentaire pour l'hôte</h5>
            <br>
            <input type="text" id="pseudo" name="pseudo" class="form-control input-sm"
                   placeholder="Commentaire...">
            <br>
            <button type="button" id="changerMDP" class="btn btn-primary boutonEvent">Ajoutez</button>
        </div>
    </div>
</div>



</div>
<div class="row text-center">

    <div class="col-md-6 text-center">
        <div class="card mb-3 transparent" style="max-width: 60rem;">
            <div class="card-header">Liste fournitures</div>
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th style="width: 10%" scope="col" class="taillePolice">#</th>
                        <th style="width: 45%" scope="col" class="taillePolice">Fournitures</th>
                        <th style="width: 15%"scope="col" class="taillePolice">Ajouter 1</th>
                        <th style="width: 15%"scope="col" class="taillePolice">Retirer 1</th>
                        <th style="width: 15%"scope="col" class="taillePolice">Quantité</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td class="taillePolice">Vodka</td>
                        <td>
                            <button type="button" id="apporte" class="btn btn-primary boutonEvent">+</button>
                        </td>
                        <td>
                            <button type="button" id="retire" class="btn btn-primary boutonEvent">-</button>
                        </td>
                        <td class="taillePolice">35</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td class="taillePolice">Doritos sel</td>
                        <td>
                            <button type="button" id="apporte" class="btn btn-primary boutonEvent">+</button>
                        </td>
                        <td>
                            <button type="button" id="apporte" class="btn btn-primary boutonEvent">-</button>
                        </td>
                        <td class="taillePolice">3</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="col-md-6  text-center">
        <div class="card mb-3 transparent" style="max-width: 60rem;">
            <div class="card-header">Fournitures nécessaires : </div>
            <div class="card-body">
                <h5 class="card-title">Ajouter des fournitures !</h5>
                <br>
                <input type="text" id="pseudo" name="pseudo" class="form-control input-sm"
                       placeholder="Fourniture pour l'événement">
                <br>
                <button type="button" id="changerMDP" class="btn btn-primary boutonEvent">Ajouter la fourniture à la
                    liste</button>
            </div>
        </div>
    </div>

</div>
</div>
</div>
</body>

</html>
