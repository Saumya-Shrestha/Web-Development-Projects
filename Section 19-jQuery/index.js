$("h1").addClass("big-title");

$("button").text("Goodbye");
$("button").html("<em>Goodbye</em>");

$("a").attr("href", "www.yahoo.com");

$("h1").on("click", function () {
  $("h1").css("color", "purple");
});

$("button").on("click", function () {
  $("h1").css("color", "green");
});

$(document).on("keypress", function (e) {
  $("h1").text(e.key);
  console.log(e.key);
});

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

// $("button").on("click", function () {
//   $("h1").fadeToggle();
// });

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
