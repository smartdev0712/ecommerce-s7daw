export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

export const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".header-navigation");
  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];
    if (sticky) {
      if (offset > 60) {
        sticky.classList.add("sticky");
      } else {
        sticky.classList.remove("sticky");
      }
    }
  }
};

export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

export const niceSelect = () => {
  const select = document.querySelectorAll("select");
  select.forEach((element) => {
    let option = element.querySelectorAll("option");

    function insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    element.style.display = "none";
    var el = document.createElement("div");
    insertAfter(element, el);
    el.className = "nice-select wide";
    let ul = document.createElement("ul"),
      span = document.createElement("span");
    ul.classList.add("list");
    span.classList.add("current");
    el.appendChild(ul);
    el.appendChild(span);
    el.addEventListener("click", () => {
      el.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!el.contains(e.target)) {
        el.classList.remove("open");
      }
    });
    option.forEach((opt) => {
      var li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = opt.innerText;
      li.className = "option";
      let defultValue = opt.getAttribute("data-dsplay");
      let selected = opt.getAttribute("selected");
      let disabled = opt.getAttribute("disabled");
      if (defultValue || selected !== null || disabled !== null) {
        li.className = "option focus";
        span.innerText = opt.innerText;
      } else {
        span.innerText = option[0].innerText;
      }
      li.addEventListener("click", () => {
        if (disabled == null) {
          span.innerHTML = opt.innerText;
        }
      });
    });
  });
};

export const activeNavMenu = (path) => {
  const navItem = document.querySelectorAll(".main-menu li a");
  navItem.forEach((nav) => {
    if (nav.pathname === window.location.pathname) {
      if (!nav.href.includes("#")) {
        if (
          nav.pathname === "/" ||
          nav.pathname === "/blog/blog-category" ||
          nav.pathname === "/brand"
        ) {
          nav.className = "active";
        } else {
          let navContainer = nav.parentElement.parentElement.parentElement;
          nav.parentElement.parentElement.parentElement.classList.add("active");
        }
      }
    }
  });
};

export const toCamelCase = (str) => {
  const strItems = str.split("-");
  var result = ""
  for (let i = 0; i < strItems.length; i++) {
    result += strItems[i]
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toUpperCase() : word.toLowerCase();
      })
      .replace(/\s+/g, "") + " ";
  }
  return result;
};

export const getSlug = (str) => {
  const newStr = str.toLowerCase();
  return newStr.replaceAll(" ", "-");
};

export const getLocation = () => {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };
  navigator.geolocation.getCurrentPosition(showPosition, error, options);

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://us1.locationiq.com/v1/reverse.php?key=pk.208fe6b58f412dc962ed45ca46ee8a61&lat=" +
        lat +
        "&lon=" +
        lng +
        "&format=json",
      true
    );
    xhr.send();
    xhr.onreadystatechange = processRequest;
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        var city = response.address.city;
        console.log(city);
        return;
      }
    }
  }
};
