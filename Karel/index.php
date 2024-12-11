<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Karel</title>
</head>
<body>
    <div class="container">
        <div class="commands">
            <h2>Příkazy</h2>
            <form action="script.php" method="post">
                <textarea name="commands" placeholder="Zadej příkazy..."></textarea>
                <button type="submit">Proveď</button>
            </form>
        </div>
        <div class="grid">
            <h2>Karel</h2>
            <table class="board">
                <?php
                for ($row = 0; $row < 10; $row++) {
                    echo "<tr>";
                    for ($col = 0; $col < 10; $col++) {
                        echo "<td></td>";
                    }
                    echo "</tr>";
                }
                ?>
        </div>
    </div>
</body>
</html>