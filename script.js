function openTab(tabId) {
  const tabs = document.getElementsByClassName("tab-content");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  document.getElementById(tabId).style.display = "block";
}
