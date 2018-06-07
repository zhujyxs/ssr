<?php
	header("Access-Control-Allow-Origin: *");
	$name=$_GET["name"];
	$date=$_GET["date"];
	$people=$_GET["people"];
	$id=$_GET["id"];
	$progress= rand(0, 100);
	$con=mysql_connect('localhost','root','as107128');
	if(!$con)
	{
		die('Could not connect: ' . mysql_error());
	}
	mysql_select_db("ssr", $con);
	mysql_query("SET NAMES 'utf8'");
	$result = mysql_query("SELECT name FROM ruleList");
	$index = 0;
    while($row = mysql_fetch_array($result,MYSQL_ASSOC))
    {
        $index ++;
	}
	$index ++;
	$sql="INSERT INTO ruleList VALUES ('".$index."','".$name."','".$date."','".$people."','".$id."','".$progress."')";
	$result = mysql_query($sql);
	$result = mysql_affected_rows();
	if($result > 0){
		echo "success";
	}
	else echo $sql;
?>