<?php
// If have only one kind fruit, use this function.
// $num     The number of this kind fruit
// $gen     The generation of this iteration
function feed_one_fruit($num, $gen)
{
    if ($num < $gen) { return 0; }
    return feed_one_fruit($num - $gen, $gen + 1) + 1;
}

// This function simulates the best method to feed with two kinds of fruits.
// $num_a   The number of less fruit
// $num_b   The number of more fruit
// $gen     The generation of this iteration
// $pos     The position of this generation
// LIMIT    $num_a <= $num_b
function feed_two_fruits($num_a, $num_b, $gen, $pos)
{
    if ($num_a + $num_b < $gen) { return 0; }
    if ($num_a == 0) { return feed_one_fruit($num_b, $gen + 1); }
    if ($num_b == 0) { return feed_one_fruit($num_a, $gen); }
    if ($pos > $gen) { ++$gen; $pos = 0; }
    if ($num_a < $pos) { ++$gen; $pos = 0; }
    if ($num_b < $gen - $pos) 
    { 
        return feed_two_fruits($num_a, $num_b, $gen, $pos + 1);
    }
    return feed_two_fruits($num_a - $pos, $num_b - $gen + $pos, $gen, $pos + 1) + 1;
}

// This function will solve the feed monkeys function.
// $apple   The number of apples
// $banana  The number of bananas
function feed_monkeys($apple, $banana)
{
    if ($apple >= $banana) { return feed_two_fruits($banana, $apple, 1, 0); }
    return feed_two_fruits($apple, $banana, 1, 0);
}

// Get form submition.
if (isset($_POST['submit'])) {
    $apple = $_REQUEST['apple_input'];
    $banana = $_REQUEST['banana_input'];
    $result = feed_monkeys($apple, $banana);
    if ($result == false) 
    {
        echo "INPUT ERROR";
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