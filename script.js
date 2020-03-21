const nav_href = document.querySelectorAll('.navigation>li)
const nav = document.querySelectorAll('.navigation')

window.addEventListener('scroll', function() {
    const cur_pos = window.scrollY
    nav.forEach((item) => {
        if (cur_pos >= (item.offsetTop - 95) && (item.offsetTop + item.offsetHeight - 95) > cur_pos) {
            nav_href.forEach((link) => {
                link.classList.remove('navigation>li a:active')
                if (item.getAttribute('id') === link.getAttribute('href')) {
                    link.classList.add('navigation>li a:active')
                }
            })
        }
    })
    if(cur_pos+window.screen.availHeight >= document.body.clientHeight){
        nav_href.forEach((link) => { link.classList.remove('navigation>li a:active')})
        contact_link.classList.add('navigation>li a:active')
    }
  });

document.body.onclick = function(e) {
    let p = e.target
    if (p.className.indexOf('navigation>li') !=-1) {
        event.preventDefault();
        let href = p.getAttribute('href');

        window.scrollTo({
            top:document.getElementById(href).offsetTop - 95,
            behavior: 'smooth'
        })
    }

    if (p.className.indexOf('tags__item ') !=-1) {
        event.preventDefault();
        document.querySelectorAll('.tags__item:focus').forEach( (item) => { item.classList.remove('tags__item:focus') });
        p.classList.add('tags__item:focus');
        let portfolio__item  = document.querySelectorAll('.portfolio__item');
        shuffle(portfolio__item).forEach( (item) => { porfolio.append(item) });
    }

    if (p.className.indexOf('portfolio__item>img') !=-1) {
        if (p.className.indexOf('portfolio__item>img:active') != -1){
            p.classList.remove('portfolio__item>img:active')
        } else {
            document.querySelectorAll('.portfolio__item>img:active').forEach( (item) => { item.classList.remove('portfolio__item>img:active') });
            p.classList.add('portfolio__item>img:active');
        }
    }

   
}


