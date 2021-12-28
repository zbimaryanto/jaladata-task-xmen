function function-task1() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('input-task1');
    filter = input.value.toUpperCase();
    table = document.getElementById("table-task1");
    tr = ul.getElementsByTagName('tr');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }