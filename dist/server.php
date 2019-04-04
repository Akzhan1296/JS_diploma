<?php
sleep(5);

$obj = json_decode(implode("", file('php://input')));
foreach($obj as $key=>$val) {
    echo $key . ': ' . $val . '<br>';
}
