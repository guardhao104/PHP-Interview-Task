function cancel_active() {
    $("#btn-require").removeClass("active");
    $("#btn-task-a").removeClass("active");
    $("#btn-task-b").removeClass("active");
    $("#btn-bonus-task").removeClass("active");
}

function clean_main_div() {
    $(".main").empty();
}

function add_task_a_require() {
    const task_a_require = "<div class='container card task taskA'>" +
        "<div class='card-body'>" +
        "<h2>Task A: Uploading multiple files</h2>" +
        "<p>Create a file upload / download application with the requirements specified below.</p>" +
        "<ul>" +
        "    <li>Please use <a href='https://github.com/CreativeDream/php-uploader'>https://github.com/CreativeDream/php-uploader</a> as an upload class to complete it. Do not modify any code in class.uploader.php. If you want to make any changes, extend the upload class and override the function.</li>" +
        "    <li>Make the UI look nice and user friendly. You can use any framework, library, or write your own code.</li>" +
        "    <li>Users can only upload PHP, CSS, JavaScript and HTML file. <b>File size must be between 1 KB and 1MB</b> and can be verified before or after uploading.</li>" +
        "    <li>The user must to be able to <b>edit file names for each file before uploading</b>. The physical name of the uploaded file on the server should be the edited name.</li>" +
        "    <li>The user must be able to <b>see the original and edited file names</b> after submitting. The user can download these files. The downloaded file name should be <b>original file name + underscore + edited file name +underscore + downloaded date and time + extension</b>. (You can use cookies, sessions, files or variables for storing original file name)</li>" +
        "</ul>" +
        "</div>" +
    "</div>";
    $(".main").append(task_a_require);
}

function add_task_b_require() {
    const task_b_require = "<div class='container card task taskB'>" +
    "<div class='card-body'>" +
    "<h2>Task B: Write a PHP function to achieve the following requirements</h2>" +
    "<p>The function can accept a numeric parameter N. Then start calculating N, N*2, N*3, and so on. Keep track of which digits (0, 1, 2, 3, 4, 5, 6, 7, 8, and 9) have appeared in the calculation. Once each of the ten digits has been calculated at least once, the function will return the last calculated number. If it has not been obtained all digits after 100 calculations, return False.</p>" +
    "<br>" +
    "<p>For example:</p>" +
    "<br>" +
    "<p>N	 = 12345, now you have 1 2 3 4 5</p>" +
    "<p>N*2	 = 24690, now you have 0 1 2 3 4 5 6 9</p>" +
    "<p>N*3	 = 37035, now you have 0 1 2 3 4 5 6 7 9</p>" +
    "<p>N*4	 = 49380, now you have 0 1 2 3 4 5 6 7 8 9</p>" +
    "<p>Then return 49380</p>" +
    "</div>" +
    "</div>";
    $(".main").append(task_b_require);
}

function add_bonus_task_require() {
    const bonus_task_require = "<div class='container card task taskALGO'>" +
    "<div class='card-body'>" +
    "<h2>Bonus Task:</h2>" +
    "<p>You work in a zoo and your job is feeding monkeys with Bananas and Apples. The zoo has an unlimited number of identical Monkeys, and each monkey can eat any number of Bananas and Apples at a time. You are given Bananas and Apples and need to distribute them among the monkeys. You want to feed as many monkeys as possible. However, <b>NO two monkeys can eat the same amount of Bananas and Apples at a time. ALL bananas and apples should be distributed</b>.</p>" +
    "<p>What is the largest number of monkeys that you can feed by given number of Bananas and Apples?</p>" +
    "<br>" +
    "<p>For example, </p>" +
    "<p>If you have 2 Bananas and 0 Apples, the only possible strategy is to give both Bananas to one monkey. </p>" +
    "<p>If you have 4 Bananas and 5 Apples, one optimal strategy is to have:</p>" +
    "<p>	   One monkey with 1 Banana</p>" +
    "<p>    One monkey with 2 Bananas</p>" +
    "<p>    One monkey with 1 Apple</p>" +
    "<p>    One monkey with 3 Apples</p>" +
    "<p>    One monkey with 1 Banana and 1 Apple</p>" +
    "<p>You need to write a function that takes two parameters, number of Bananas and Apples, and returns the largest number of monkeys that can be fed.</p>" +
    "<br>" +
    "<p>Limits:</p>" +
    "<p>Banana + Apple > 1;</p>" +
    "<p>0 <= Banana <= 20</p>" +
    "<p>0 <= Apple <= 20</p>" +
    "</div>" +
    "</div>";
    $(".main").append(bonus_task_require);
}

function add_task_a_function() {
    const task_a_function = "<div class='container card task' id='task_a_test_zone'>" +
    "<div class='card-body'>" +
    "<h1 style='text-align: center'>Task A Test Zone</h1>" +
    "<div class='container' id='task_a_input_zone' style='text-align: center; margin: auto;'>" +
    "   <form action='taska.php' method='post' enctype='multipart/form-data'>" +
    "   <div class='container' id='file_upload_area'>" +
    "   <input type='file' name='file0' id='file0' onchange='add_more_files(1)'>" +
    "   <input type='text' name='name0' id='name0' placeholder='Upload name'> *<br>" +
    "   </div>" +
    "   <br><input type='submit' name='submit' value='Submit'>" +
    "   </form>" +
    "</div>" +
    "</div>" +
    "</div>";
    $(".main").append(task_a_function);
}

function add_more_files(n) {
    if ($("#file"+n).length > 0) { return false; }
    const upload_file_area = 
    "   <input type='file' name='file"+n+"' id='file"+n+"' onchange='add_more_files("+(n+1)+")'>" +
    "   <input type='text' name='name"+n+"' id='name"+n+"' placeholder='Upload name'> *<br>";
    $("#file_upload_area").append(upload_file_area);
}

function add_task_a_download_area() {
    const task_a_download = "<div class='container card task' id='task_a_download_area'>" +
    "<div class='card-body'>" +
    "<h1 style='text-align: center'>Task A Download List</h1>" +
    "<div class='container' id='task_a_download' style='text-align: center; margin: auto;'>" +
    "<button type='button' class='btn btn-primary' id='btn-storage'>Storage</button>" +
    "</div>" +
    "</div>" +
    "</div>";
    $(".main").append(task_a_download);
    $("#btn-storage").click( () => {
        var cookie = document.cookie;
        list_storage(cookie);
    });
}

function list_storage(cookie) {
    $("#task_a_download").empty();
    var i = 0;
    var storage_list = "<form action='taska_download.php' method='post'>";
    $.each(cookie.split(/; */), function() {
        var splitCookie = this.split('=');
        storage_list += "<div class='form-check'>" +
            "<input class='form-check-input' type='checkbox' name='check[]' value='"+splitCookie[0]+"'>"+splitCookie[0]+" ("+splitCookie[1]+")" +
            "</div>";
    });
    storage_list += "<br><input type='submit' name='submit' value='Download'></form>";
    $("#task_a_download").append(storage_list);
}

function add_task_b_function() {
    const task_b_function = "<div class='container card task'>" +
    "<div class='card-body'>" +
    "<h1 style='text-align: center'>Task B Test Zone</h1>" +
    "<div class='container' id='task_b_input_zone' style='text-align: center; margin: auto;'>" +
    "   <form action='taskb.php' method='post'>" +
    "   <input type='number' name='task_b_input' id='task_b_input' placeholder='Enter a number'>" +
    "   <input type='submit' name='submit' value='Submit'>" +
    "   </form>" +
    "</div>" +
    "</div>" +
    "</div>";
    $(".main").append(task_b_function);
}

function add_bonus_task_function() {
    const bonus_task_function = "<div class='container card task'>" +
    "<div class='card-body'>" +
    "<h1 style='text-align: center'>Bonus Task Test Zone</h1><br>" +
    "<div class='container' id='bonus_task_input_zone' style='text-align: center; margin: auto;'>" +
    "   <form action='bounstask.php' method='post'>" +
    "   Apple: <input type='number' name='apple_input' id='apple_input' placeholder='number of apples'><br><br>" +
    "   Banana: <input type='number' name='banana_input' id='banana_input' placeholder='number of bananas'><br><br>" +
    "   <input type='submit' name='submit' value='Submit'>" +
    "   </form>" +
    "</div>" +
    "</div>" +
    "</div>";
    $(".main").append(bonus_task_function);
}
