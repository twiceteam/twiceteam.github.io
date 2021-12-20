let editor;
var javatxt ='/*************************************************************************\n                          Online free Java Compiler.\n               Code, Compile, Run and Debug java program online.\n     Write your code in this editor and press "Run" button to execute it.\n\n     TWICE is aware of time value, and will not pup up any advertisement.\n**************************************************************************/\n\npublic class Main{\n  public static void main(String[] args) {\n\n    System.out.println("Hello World");\n\n    }\n}';
var ctxt ='/**************************************************************************\nWelcome to TWICE Online Compiler.\nTWICE Compiler is an online free compiler for C, C++, Python and Java.\nCode, Compile and Run online from anywhere in world.\n\nTWICE is aware of time value, and will not pup up any advertisement.\n***************************************************************************/\n\n#include <stdio.h>\nint main()\n{\n   printf("Hello World");\n\n    return 0;\n}';
var pytxt ='#/************************************************************************\n#Welcome to TWICE Online Compiler.\n#TWICE Compiler is an online free compiler for C, C++, Python and Java.\n#Code, Compile and Run online from anywhere in world.\n\n#TWICE is aware of time value, and will not pup up any advertisement.\n#*************************************************************************/\n\nprint("Hello World")';

window.onload = function(){
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp"); 
    editor.setValue(ctxt);
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
  document.getElementsByClassName("myoutput")[1].innerText = 'Waiting...';
  document.getElementsByClassName("myoutput")[0].innerText = 'Waiting...';
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
    if(language=='c' || language=='cpp'){
      editor.session.setMode("ace/mode/c_cpp");
      editor.setValue(ctxt);
    }else if(language == 'java'){
      editor.session.setMode("ace/mode/java");
      editor.setValue(javatxt);
    }else if(language == 'py'){
      editor.session.setMode("ace/mode/python");
      editor.setValue(pytxt);
    }else if(language == 'node'){
      editor.session.setMode("ace/mode/javascript");
      editor.setValue("node");
    }
}

$(document).ready(function () {
        
    $('#mojtaba').click(function(){
      
      $.ajax('https://pooriya007.pythonanywhere.com/', {
        type: 'POST',  // http method
        data: {         code: editor.getValue(),
                        lang: document.getElementById("languages").value,
                        inpt: document.getElementsByClassName("myinput")[0].value + document.getElementsByClassName("myinput")[1].value},  // data to submit
        success: function (data, status, xhr) {
          document.getElementsByClassName("myoutput")[0].innerText = xhr.responseText;
          document.getElementsByClassName("myoutput")[1].innerText = xhr.responseText;
          

        },
        error: function (jqXhr, textStatus, errorMessage) {
                    document.getElementsByClassName("myoutput")[0,1].value = "SERVER ERROR";
        }
      });
    });
    });




















