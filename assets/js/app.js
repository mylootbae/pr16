const tabs = () => {
  const tab = document.querySelectorAll(".tab-btn");

  if (!tab.length) return false;

  const header = document.querySelector(".header-tabs");
  const tabContent = document.querySelectorAll(".tab");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }

  header.addEventListener("click", function (event) {
    let target = event.target;
    console.log(123);
    if (target && target.classList.contains("tab-btn")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
};

const init = () => {
  tabs();
}

document.addEventListener("DOMContentLoaded", init);
