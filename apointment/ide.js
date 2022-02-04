function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('input');
    filter = input.value.toUpperCase();

    ul = document.getElementById("doc");
    li = ul.getElementsByTagName('div');
    var doc = document.getElementsByClassName("doc");
  
    // Loop through all list items, and hide those who don't match the search query
    for (j = 0; j < 20; j++) {
        for (i = 0; i < li.length; i++) {
            a = doc[j].getElementsByTagName("span")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                //li[j].style.display = "";
                doc[j].style.display = "";
                console.log("here 1");
            } else {
                //li[j].style.display = "none";
                doc[j].style.display = "none";
                console.log("here 2");
                
            }
        }
    }
}


function reply_click(clicked_id)
{
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('input');
    filter = input.value.toUpperCase();

    ul = document.getElementById("doc");
    li = ul.getElementsByTagName('div');
    var doc = document.getElementsByClassName("doc");
    
    if(clicked_id == 'myBtn'){
        //enter the proffesion here (in upper case)
        filter = 'DR';
        for (j = 0; j < 20; j++) {
            for (i = 0; i < li.length; i++) {
                a = doc[j].getElementsByTagName("span")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    
                    doc[j].style.display = "";
                    console.log("here 1");
                } else {
                    
                    doc[j].style.display = "none";
                    console.log("here 2");
                    
                }
            }
        }
    }else if(clicked_id == 'myBtn1'){
        //enter the proffesion here (in upper case)
        filter = 'DENTIST';
        for (j = 0; j < 20; j++) {
            for (i = 0; i < li.length; i++) {
                a = doc[j].getElementsByTagName("span")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    
                    doc[j].style.display = "";
                    console.log("here 1");
                } else {
                    
                    doc[j].style.display = "none";
                    console.log("here 2");
                    
                }
            }
        }

    }else if(clicked_id == 'myBtn2'){
        //enter the proffesion here (in upper case)
        filter = 'DOCTOR';
        for (j = 0; j < 20; j++) {
            for (i = 0; i < li.length; i++) {
                a = doc[j].getElementsByTagName("span")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    
                    doc[j].style.display = "";
                    console.log("here 1");
                } else {
                    
                    doc[j].style.display = "none";
                    console.log("here 2");
                    
                }
            }
        }

    }else if(clicked_id == 'myBtn3'){

    }else if(clicked_id == 'myBtn4'){

    }else if(clicked_id == 'myBtn5'){

    }
}


