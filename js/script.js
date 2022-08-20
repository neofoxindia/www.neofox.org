function toggleMenu() {
  document.getElementById('isToggle').classList.toggle('open');
  const isOpen = document.getElementById('navigation');
  if (isOpen.style.display === "block") {
    isOpen.style.display = "none";
  } else {
    isOpen.style.display = "block";
  }
}

//Menu Active
function getClosest(elem, selector) {

  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (s) {
        let matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {
        }
        return i > -1;
      };
  }

  // Get the closest matching element
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }
  return null;

}

function activateMenu() {
  let parentOfParent;
  const menuItems = document.getElementsByClassName("sub-menu-item");
  if (menuItems) {

    let matchingMenuItem = null;
    for (let idx = 0; idx < menuItems.length; idx++) {
      if (menuItems[idx].href === window.location.href) {
        matchingMenuItem = menuItems[idx];
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add('active');
      const immediateParent = getClosest(matchingMenuItem, 'li');
      if (immediateParent) {
        immediateParent.classList.add('active');
      }

      const parent = getClosest(matchingMenuItem, '.parent-menu-item');
      if (parent) {
        parent.classList.add('active');
        const parentMenuitem = parent.querySelector('.menu-item');
        if (parentMenuitem) {
          parentMenuitem.classList.add('active');
        }
        parentOfParent = getClosest(parent, '.parent-parent-menu-item');
        if (parentOfParent) {
          parentOfParent.classList.add('active');
        }
      } else {
        parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
        if (parentOfParent) {
          parentOfParent.classList.add('active');
        }
      }
    }
  }
}

// Clickable Menu
if (document.getElementById("navigation")) {
  const elements = document.getElementById("navigation").getElementsByTagName("a");
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].onclick = function (elem) {
      const submenu = elem.target.nextElementSibling.nextElementSibling;
      submenu.classList.toggle('open');
    }
  }
}

// Menu sticky
function windowScroll() {
  const navbar = document.getElementById("top-nav");
  if (navbar != null) {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  }
}

window.addEventListener('scroll', (ev) => {
  ev.preventDefault();
  windowScroll();
})
