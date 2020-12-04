$(document).ready(function () {
    // show dropdown checkbox
    $(document).on("click", ".btn-select--checkbox .btn", function () {
        $(this).toggleClass("active");
        $(".dropdown-menu").toggle();
    });

    // dropdown select all
    $(document).on("change", ".btn-select--checkbox .select_all", function () {
        if ($(this).prop("checked")) {
            $(this)
                .parents(".dropdown-menu")
                .find("input")
                .prop("checked", true);
        } else {
            $(this)
                .parents(".dropdown-menu")
                .find("input")
                .prop("checked", false);
        }
    });

    // dropdown change input
    $(document).on("change", ".btn-select--checkbox input", function () {
        const element = $(this).parents(".btn-select--checkbox");

        if (element.find("input:checked").length === 0) {
            element.find(".btn").text("Выберите элементы");
        } else {
            element.find(".btn").text(getAndPushValueToSelect(element));
        }
    });

    // get and push value to btn-select-checkbox
    const getAndPushValueToSelect = (element) => {
        let valuesList = [];

        element.find("li").each(function () {
            if ($(this).find("input").prop("checked")) {
                const text = $(this).find(".input_main_text").text();
                valuesList.push(text);
            }
        });

        return valuesList.join(" ");
    };

    // put initial text in checkbox button
    $(".btn-select--checkbox").each(function () {
        if ($(this).find("input:checked").length === 0) {
            $(this).find(".btn").text("Выберите элементы");
        } else {
            $(this)
                .find(".btn")
                .text(getAndPushValueToSelect($(this)));
        }
    });

    $(document).on("click touchstart", function (e) {
        if (!$(e.target).closest(".btn-select--checkbox").length) {
            $(".dropdown-menu").hide();
            $(".btn-select--checkbox .btn").removeClass("active");
        }

        e.stopPropagation();
    });

    // price range
    var priceSlider = document.getElementById("price_range");

    noUiSlider.create(priceSlider, {
        start: [20, 100],
        tooltips: [
            wNumb({ suffix: " млн.", decimals: 0 }),
            wNumb({ suffix: " млн.", decimals: 0 }),
        ],
        connect: true,
        range: {
            min: 0,
            max: 200,
        },
    });

    // price range test (remove)
    var priceSlider = document.getElementById("price_range1");

    noUiSlider.create(priceSlider, {
        start: [20, 100],
        tooltips: [
            wNumb({ suffix: " млн.", decimals: 0 }),
            wNumb({ suffix: " млн.", decimals: 0 }),
        ],
        connect: true,
        range: {
            min: 0,
            max: 200,
        },
    });

    // floor range
    var floorSlider = document.getElementById("floor_range");

    noUiSlider.create(floorSlider, {
        start: [2, 8],
        step: 1,
        tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
        connect: true,
        range: {
            min: 0,
            max: 16,
        },
    });

    // square range
    var squareSlider = document.getElementById("square_range");

    noUiSlider.create(squareSlider, {
        start: [20, 170],
        tooltips: [
            wNumb({ suffix: " м2", decimals: 1 }),
            wNumb({ suffix: " м2", decimals: 1 }),
        ],
        connect: true,
        range: {
            min: 0,
            max: 250,
        },
    });

    // change state type item
    $(document).on("click", ".type__item", function () {
        $(this).addClass("active").siblings().removeClass("active");

        if ($(this).data("type") === "list") {
            $(".flats__inner").addClass("list");
        } else {
            $(".flats__inner").removeClass("list");
        }
    });

    // change filter control
    $(document).on("click", ".controls__item", function () {
        $(this).addClass("active").siblings().removeClass("active increase");

        if($(this).hasClass('active')) {
            if($(this).hasClass('increase')) {
                $(this).removeClass('increase')
            } else {
                $(this).addClass('increase')
            }
            
        } 
    });

    // show filter on mobile
    $(document).on("click", ".filter_btn_mobile", function () {
        $(".filter").slideToggle("fast");
    });
});
