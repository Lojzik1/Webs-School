<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Karel v mřížce</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="nadpis">KAREL</div>
    <textarea id="commands" placeholder="Zadej příkazy..."></textarea>
    <button onclick="sendCommands()">Proveď</button>
    <div class="container">
        <div id="grid">
            <?php include 'script.php'; ?>
        </div>
        <div class="info">
            <h1>Příkazy</h1>
            <h3>dolu</h3>
            <h3>vpravo</h3>
            <h3>vlevo</h3>
            <h3>nahoru</h3>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
