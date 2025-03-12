<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Karel v mřížce</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Karel v mřížce</h1>
    <textarea id="commands" placeholder="Zadej příkazy..."></textarea>
    <button onclick="sendCommands()">Proveď</button>
    <div id="grid">
        <?php include 'script.php'; ?>
    </div>
    <script src="script.js"></script>
</body>
</html>
