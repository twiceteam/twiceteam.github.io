let editor;
window.onload = function(){
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");
}

document.getElementById("myfile").addEventListener("change", function() {
    var media = URL.createObjectURL(this.files[0]);
    var video = document.getElementById("video");
    video.src = media;
    video.style.display = "block";
    video.play();
    document.getElementById("video-back").style.width="0%";
    
  });

document.getElementById("mojtaba").addEventListener("click", displayDate);
function displayDate() {

}

window.onbeforeunload = function (e) {
    e = e || window.event;

    // For IE and Firefox prior to version 4
    if (e) {
        e.returnValue = 'Sure?';
    }

    // For Safari
    return 'Sure?';
};


function changeLanguage(){
    let language = $("#languages").val();
    if(language=='c' || language=='cpp')editor.session.setMode("ace/mode/c_cpp");
    else if(language == 'php')editor.session.setMode("ace/mode/php");
    else if(language == 'python')editor.session.setMode("ace/mode/python");
    else if(language == 'node')editor.session.setMode("ace/mode/javascript");
}

$(document).ready(function () {
        
    $('#mojtaba').click(function(){
      
      $.ajax('https://pooriya007.pythonanywhere.com/', {
        type: 'POST',  // http method
        data: {         code: editor.getValue(),
                        lang: document.getElementById("languages").value,
                        inpt: document.getElementsByClassName("myinput")[0,1].value },  // data to submit
        success: function (data, status, xhr) {
          document.getElementsByClassName("myoutput")[0].innerHTML = xhr.responseText;
          document.getElementsByClassName("myoutput")[1].innerHTML = xhr.responseText;
          

        },
        error: function (jqXhr, textStatus, errorMessage) {
                    document.getElementsByClassName("myoutput")[0,1].value = "SERVER ERROR";
        }
      });
    });
    });




















