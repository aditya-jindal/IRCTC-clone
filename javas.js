function toggleList(listId) {
    var list = document.getElementById(listId);
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }
  function displayFormattedTime() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.toLocaleString('default', { month: 'short' });
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
    var seconds = currentDate.getSeconds().toString().padStart(2, '0');
    var formattedTime = day + '-' + month + '-' + year + ' [' + hours + ':' + minutes + ':' + seconds + ']';
    var timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.innerHTML = formattedTime;
  }
