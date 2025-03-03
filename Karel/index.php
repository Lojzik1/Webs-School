<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Karel</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="commands">
            <h2>Příkazy</h2>
            <form action="script.php" method="post">
                <textarea name="commands" placeholder="Zadej příkazy..."></textarea>
                <button type="submit">Proveď</button>
            </form>

            <div class="table">
                <?php include "script.php"; ?>
            </div>
        </div>
    </div>
</body>
</html>