(function() {
  var menu = {
    elem: document.querySelector('.main-menu__list'),
    button: document.querySelector('.main-menu__toggle'),
    isOpened: false,

    open: function() {
      var btnClasses = this.button.classList;
      btnClasses.add('main-menu__toggle_close');

      this.elem.style.display = 'flex';
      this.isOpened = true;
    },

    close: function() {
      var btnClasses = this.button.classList;
      btnClasses.remove('main-menu__toggle_close');

      this.elem.style.display = 'none';
      this.isOpened = false;
    },

    init: function() {
      var self = this;

      this.elem.style.display = 'none';
      this.button.style.top = '16px';

      this.button.onclick = function() {
        if (!self.isOpened)
          self.open();
        else
          self.close();
      };
    },

    off: function() {
      this.elem.style.display = 'flex';

      this.button.onclick = null;
    }
  };

  function onResize() {
    if (window.innerWidth < 768)
      menu.init();
    else
      menu.off();
  }

  onResize();

  window.addEventListener('resize', onResize);
})();
