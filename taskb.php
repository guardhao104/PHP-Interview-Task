<?php
// This function will solve Task B question.
// $n   The input number
function task_b($n)
{
	$arr = array();
	$multiple = 0;
	while (count($arr) != 10)
	{
		if ($multiple++ > 100)
		{
			return false;
		}
		$num = $n * $multiple;
		while ((int) $num / 10 != 0)
		{
			array_push($arr, $num % 10);
			$num = (int) $num / 10;
		}
		$arr = array_unique($arr);
	}
	return $n * $multiple;
}

// Get form submition.
if (isset($_POST['submit'])) {
    $number = $_REQUEST['task_b_input'];
    $result = task_b($number);
    if ($result == false) 
    {
        echo "FALSE! The number of calculations is out of 100!";
    } else {
        echo "<h1>The final result is <b>";
        echo $result;
        echo "</b>!</h1>";
    }
    echo '<br><input type="button" value="Back" onClick="javascript:history.go(-1)" />'; 
    
    // Print source code.
    echo '<br><br><br><h3>Source code for this PHP file</h3><br>';   
    $code = file_get_contents( __FILE__ );
    echo htmlspecialchars($code);
}
?>