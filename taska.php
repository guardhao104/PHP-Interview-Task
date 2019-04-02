<?php
include('./class.uploader.php');

if (isset($_POST['submit'])) {
    $n = 0;
    $file = "file$n";
    $name = "name$n";
    while (!empty($_FILES[$file])) {
        if ($_FILES[$file]['size'] == 0) {
            break;
        }
        $title = $_REQUEST[$name];
        if ($_FILES[$file]['size'] < 1000) {
            echo $title;
            echo " is less than 1 KB and refused to upload.<br>";
            $n++;
            $file = "file$n";
            $name = "name$n";
            continue;
        }
        $uploader = new Uploader();
        $data = $uploader->upload($_FILES[$file], array(
            'limit' => null,
            'maxSize' => 1,
            'extensions' => array('php', 'css', 'js', 'html'),
            'required' => true,
            'uploadDir' => '../uploads/',
            'title' => $title,
            'removeFiles' => false,
            'replace' => true,
            'perms' => null,
            'onCheck' => null, //A callback function name to be called by checking a file for errors (must return an array) | ($file) | Callback
            'onError' => null, //A callback function name to be called if an error occured (must return an array) | ($errors, $file) | Callback
            'onSuccess' => null, //A callback function name to be called if all files were successfully uploaded | ($files, $metas) | Callback
            'onUpload' => null, //A callback function name to be called if all files were successfully uploaded (must return an array) | ($file) | Callback
            'onComplete' => null, //A callback function name to be called when upload is complete | ($file) | Callback
            'onRemove' => 'onFilesRemoveCallback' //A callback function name to be called by removing files (must return an array) | ($removed_files) | Callback
        ));
        if ($data['isSuccess']) {
            $files = $data['data'];
            $name = $files['metas'][0]['name'];
            $old_name = $files['metas'][0]['old_name'];
            echo $name;
            echo " has been uploaded.<br>";
            setcookie($name, $old_name);
        }
        
        if ($data['hasErrors']) {
            $errors = $data['errors'];
            echo $title;
            echo " is refused to upload. ";
            echo $errors[0][0];
            echo "<br>";
        }
        $n++;
        $file = "file$n";
        $name = "name$n";
    }

    echo '<br><input type="button" value="Back" onClick="javascript:history.go(-1)" />'; 
    
    // Print source code.
    echo '<br><br><br><h3>Source code for this PHP file</h3><br>';   
    $code = file_get_contents( __FILE__ );
    echo htmlspecialchars($code);
}
?>