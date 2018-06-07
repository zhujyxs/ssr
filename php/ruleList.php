<?php
    header("Access-Control-Allow-Origin: *");
    $con=mysql_connect('localhost','root','as107128');
    if(!$con)
    {
        die('Could not connect: ' . mysql_error());
    }
    mysql_select_db("ssr", $con);
    mysql_query("SET NAMES 'utf8'");
    $sql="SELECT * FROM ruleList ORDER BY date DESC";
    $result = mysql_query($sql);
    $i=0;
    while($row = mysql_fetch_array($result,MYSQL_ASSOC))
    {
        $users[$i]=$row;
        $i++;
    }
    echo json_encode($users);
    mysql_close($con);
?>