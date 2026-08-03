const filterButtons=document.querySelectorAll(".filter");
filterButtons.forEach(button=> {
    button.addEventListener("click",()=> {
        filterButtons.forEach(btn=> {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});

const cards=document.querySelectorAll(".card");
cards.forEach(card=> {
    card.addEventListener("mouseenter",()=> {
        card.style.transform="translateY(-10px) scale(1.03)";
    });
    card.addEventListener("mouseleave",()=> {
        card.style.transform="translateY(0) scale(1)";
    });
});

document.querySelectorAll("a[href='#']").forEach(link=> {
    link.addEventListener("click",function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

const chatButtons=document.querySelectorAll(".chat-btn");
chatButtons.forEach(button=> {
    button.addEventListener("click",()=> {
        alert("Welcome to Sara Gallery");
    });
});

const observer=new IntersectionObserver(entries=> {
    entries.forEach(entry=> {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card=> {
    observer.observe(card);
});

console.log("Sara Gallery Loaded Successfullly");
