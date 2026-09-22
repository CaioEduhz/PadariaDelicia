(function(){
  var input = document.getElementById('sidebar-search');
  var items = document.querySelectorAll('#entity-nav li');
  input.addEventListener('input', function(){
    var q = input.value.trim().toLowerCase();
    items.forEach(function(li){
      var a = li.querySelector('a');
      var text = a.getAttribute('data-search') || '';
      if (!q || text.indexOf(q) !== -1) {
        li.classList.remove('hidden-by-search');
      } else {
        li.classList.add('hidden-by-search');
      }
    });
  });
})();