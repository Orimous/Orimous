const sortBtns = document.querySelectorAll('.tab-button-tools');
const projectList = document.querySelector('.tab-content');

function openTab(event, tabName) {
    // Hide all tab content
    var tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove active class from all tab buttons
    var tabButtons = document.getElementsByClassName("tab-button-tools");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    // Show the selected tab content and add active class to the button
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Open the default tab on page load
document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tab-button-tools")[0].className += " active";
