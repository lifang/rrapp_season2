function show_result() {
    var result_url = "/questions/result";
    if ($("#share").attr("checked") == "checked") {
        result_url += "?share=1";
    }
    window.location.href = result_url;
}
