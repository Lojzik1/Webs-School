<?php
session_start();

if (!isset($_SESSION['x'])) {
    $_SESSION['x'] = 0;
    $_SESSION['y'] = 0;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $commands = explode("\n", trim($_POST['commands']));

    foreach ($commands as $command) {
        $command = strtolower(trim($command));

        if ($command === 'dolu') {
            $_SESSION['x'] = min($_SESSION['x'] + 1, 9);
        } elseif ($command === 'vlevo') {
            $_SESSION['y'] = max($_SESSION['y'] - 1, 0);
        } elseif ($command === 'vpravo') {
            $_SESSION['y'] = min($_SESSION['y'] + 1, 9);
        } elseif ($command === 'nahoru') {
            $_SESSION['x'] = max($_SESSION['x'] - 1, 0);
    }
}
}

echo '<table class="board">';
for ($row = 0; $row < 10; $row++) {
    echo '<tr>';
    for ($col = 0; $col < 10; $col++) {
        if ($row == $_SESSION['x'] && $col == $_SESSION['y']) {
            echo '<td class="karel"></td>';
        } else {
            echo '<td></td>';
        }
    }
    echo '</tr>';
}
echo '</table>';
?>
