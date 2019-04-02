$(document).ready(function(){
    $("#btn-require").click(function(){
        cancel_active();
        $("#btn-require").addClass("active");
        clean_main_div();
        add_task_a_require();
        add_task_b_require();
        add_bonus_task_require();
    });

    $("#btn-task-a").click(function(){
        cancel_active();
        $("#btn-task-a").addClass("active");
        clean_main_div();
        add_task_a_function();
        add_task_a_download_area();
        add_task_a_require();
    });

    $("#btn-task-b").click(function(){
        cancel_active();
        $("#btn-task-b").addClass("active");
        clean_main_div();
        add_task_b_function();
        add_task_b_require();
    });

    $("#btn-bonus-task").click(function(){
        cancel_active();
        $("#btn-bonus-task").addClass("active");
        clean_main_div();
        add_bonus_task_function();
        add_bonus_task_require();
    });
});