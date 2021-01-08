function getStudent() {
    $.ajax({
        type: "get",
        url:"http://localhost:9090/student/get",
        success:function(result) {
            $("#name").val(result.name);
            $("#lastName").val(result.lastName);
        }
    })
}

function clearStudent() {
    $("#name").val("");
    $("#lastName").val("");
}

function save() {
    let entity = {
        id : '-1',
        name : $("#name").val(),
        lastName : $("#lastName").val()
    }
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(entity),
        url: "http://localhost:9090/student/save",
        success:function (result) {
            if (result === -1) {
                alert("successful save!!!")
            }
        }
    })
}