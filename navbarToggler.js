const navbarToggle=$(".navbar-toggler")
const navbarBrand=$(".navbar-brand");
const mar = navbarBrand.css("margin-bottom");
export default function navbarToggler(){
    navbarToggle.fadeOut({ duration: 200 });
    if (navbarToggle.hasClass("puttoend")) {
        navbarBrand.animate(
            {
                "margin-bottom": mar,
            },
            {
                duration: 200,
            }
        );
        navbarToggle.removeClass("puttoend", 0);
        navbarToggle.fadeIn({ duration: 600 });
    } else {
        navbarToggle.addClass("puttoend", 0);
        navbarBrand.animate(
            {
                "margin-bottom": "-2px",
            },
            {
                duration: 200,
            }
        );
    }
    navbarToggle.fadeIn({ duration: 400 });
}