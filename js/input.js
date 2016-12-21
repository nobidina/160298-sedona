(function() {
  function onResize() {
    var phone = document.querySelector('#phone'),
        placeholder = '';

    if (window.innerWidth >= 1200)
      placeholder = 'Введите номер';
    else
      placeholder = 'Введите телефон';

    phone.placeholder = placeholder;
  }

  onResize();
  
  window.addEventListener('resize', onResize);
})();