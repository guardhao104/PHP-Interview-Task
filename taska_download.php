<?php
include('class.uploader.php');

if (isset($_POST['submit'])) {
    if (!empty($_POST['check'])) {
        foreach ($_POST['check'] as $file_name) {
            $uploader = new Uploader();
            $key = $_COOKIE[str_replace(".", "_", $file_name)];
            $original_name = str_replace(strrchr($key, "."),"",$key);
            $edit_name = str_replace(strrchr($file_name, "."),"",$file_name);
            $time = date("Y-m-d_H:i:s");
            $extension = substr(strrchr($file_name, '.'), 1);
            $download_name = $original_name . "_" . $edit_name . "_" . $time . "." . $extension;

            header('Content-type: application/' . $extension);

            // It will be called downloaded.pdf
            header('Content-Disposition: attachment; filename=' . $download_name);

            // The PDF source is in original.pdf
            readfile('uploads/' . $file_name);
        }
    }

    echo '<br><input type="button" value="Back" onClick="javascript:history.go(-1)" />'; 
    
    // Print source code.
    echo '<br><br><br><h3>Source code for this PHP file</h3><br>';   
    $code = file_get_contents( __FILE__ );
    echo htmlspecialchars($code);
}
?>