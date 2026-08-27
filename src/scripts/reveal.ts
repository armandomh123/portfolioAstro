(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(document.documentElement.classList.contains('js') && !reduce){
    var els = document.querySelectorAll('.reveal');
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, {threshold: .12, rootMargin: '0px 0px -8% 0px'});
    els.forEach(function(el){ io.observe(el); });
  } else if(document.documentElement.classList.contains('js')){
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-in'); });
  }
})();