$( document ).ready(function() {

    $('.button-button').on("click", function() {
        $(".modal-title").text("A comprehensive guide to designing UX buttons");
        $(".modal-text").text("In this article, Will Fanguy gives his readers tips and tricks on 5 different types of buttons we see on websites- text, ghost, raised, toggle, and floating action buttons. While users may not notice it, a good button can help them to see it better and be more likely to interact with it. Based on this article, I'm sure we can all make prettier and more eye-catching buttons.")
    })

    $('.type-button').on("click", function() {
        $(".modal-title").text("Why Typography Is So Important To Your Website Design");
        $(".modal-text").text("In this article, Awebco explains the importance of font choices in our websites. It covers various topics such as how to choose the right font for your brand, and how to pair different fonts together nicely.")
    })

    $('.color-button').on("click", function() {
        $(".modal-title").text("A Comprehensive Guide to Designing Color");
    })

})