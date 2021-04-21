
const offers = [
    {
        id: 1,
        sum: 19.99,
        storage: "500 GB Storage",
        users: "2 Users Allowed",
        send: "Send up to 3 GB"
    },
    {
        id: 2,
        sum: 199.99,
        storage: "800 GB Storage",
        users: "3 Users Allowed",
        send: "Send up to 6 GB"
    },
    {
        id: 3,
        sum: 24.99,
        storage: "1 TB Storage",
        users: "7 Users Allowed",
        send: "Send up to 10 GB"
    },
    {
        id: 4,
        sum: 249.99,
        storage: "1.5 TB Storage",
        users: "9 Users Allowed",
        send: "Send up to 15 GB"
    },
    {
        id: 5,
        sum: 39.99,
        storage: "2 TB Storage",
        users: "10 Users Allowed",
        send: "Send up to 20 GB"
    },
    {
        id: 6,
        sum: 399.99,
        storage: "3 TB Storage",
        users: "13 Users Allowed",
        send: "Send up to 35 GB"
    },
];

// toggle animation
$(".header__circle").on("click", function () {
    if ($(".header__circle").hasClass("move")) {
        $(".header__circle").removeClass("move");
    }
    else {
        $(".header__circle").addClass("move");  
    }
});

$(".header__circle").on("click", function () {
    if ($(".header__toggle").hasClass("fade-in")) {
        $(".header__toggle").removeClass("fade-in");
    }
    else {
        $(".header__toggle").addClass("fade-in");  
    }
});  

// toggle text
$(".header__circle").on("click", function () {
    if ($(".header__circle").hasClass("move")) {
        $(".sum-b").fadeOut(400, function() { $(this).html(offers[0].sum).fadeIn(400); });
        $(".sum-p").fadeOut(400, function() { $(this).html(offers[2].sum).fadeIn(400); });
        $(".sum-m").fadeOut(400, function() { $(this).html(offers[4].sum).fadeIn(400); });
        $(".storage-b").fadeOut(400, function() { $(this).html(offers[0].storage).fadeIn(400); }); 
        $(".storage-p").fadeOut(400, function() { $(this).html(offers[2].storage).fadeIn(400); });
        $(".storage-m").fadeOut(400, function() { $(this).html(offers[4].storage).fadeIn(400); }); 
        $(".users-b").fadeOut(400, function() { $(this).html(offers[0].users).fadeIn(400); }); 
        $(".users-p").fadeOut(400, function() { $(this).html(offers[2].users).fadeIn(400); });
        $(".users-m").fadeOut(400, function() { $(this).html(offers[4].users).fadeIn(400); });
        $(".send-b").fadeOut(400, function() { $(this).html(offers[0].send).fadeIn(400); });
        $(".send-p").fadeOut(400, function() { $(this).html(offers[2].send).fadeIn(400); });   
        $(".send-m").fadeOut(400, function() { $(this).html(offers[4].send).fadeIn(400); }); 
        }
        else {
        $(".sum-b").fadeOut(400, function() { $(this).html(offers[1].sum).fadeIn(400); });
        $(".sum-p").fadeOut(400, function() { $(this).html(offers[3].sum).fadeIn(400); }); 
        $(".sum-m").fadeOut(400, function() { $(this).html(offers[5].sum).fadeIn(400); });
        $(".storage-b").fadeOut(400, function() { $(this).html(offers[1].storage).fadeIn(400); });
        $(".storage-p").fadeOut(400, function() { $(this).html(offers[3].storage).fadeIn(400);  });
        $(".storage-m").fadeOut(400, function() { $(this).html(offers[5].storage).fadeIn(400); });
        $(".users-b").fadeOut(400, function() { $(this).html(offers[1].users).fadeIn(400);  });
        $(".users-p").fadeOut(400, function() { $(this).html(offers[3].users).fadeIn(400); });
        $(".users-m").fadeOut(400, function() { $(this).html(offers[5].users).fadeIn(400); });
        $(".send-b").fadeOut(400, function() { $(this).html(offers[1].send).fadeIn(400); });
        $(".send-p").fadeOut(400, function() { $(this).html(offers[3].send).fadeIn(400); });
        $(".send-m").fadeOut(400, function() { $(this).html(offers[5].send).fadeIn(400); });
        }
});

// fade out dollar sign
$(".header__circle").on("click", function () {
    $(".dollar").fadeOut(400);
    $(".dollar").fadeIn(400);
})