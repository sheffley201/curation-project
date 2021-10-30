$( document ).ready(function() {

    $('.button-button').on("click", function() {
        $(".modal-title").text("A comprehensive guide to designing UX buttons");
        $(".modal-text").text("In this article, Will Fanguy gives his readers tips and tricks on 5 different types of buttons we see on websites- text, ghost, raised, toggle, and floating action buttons. While users may not notice it, a good button can help them to see it better and be more likely to interact with it. Based on this article, I'm sure we can all make prettier and more eye-catching buttons.")
    })

    $('.type-button').on("click", function() {
        $(".modal-title").text("Why Typography Is So Important To Your Website Design");
        $(".modal-text").text("In this article, Awebco explains the importance of font choices in our websites. It covers various topics such as how to choose the right font for your brand, and how to pair different fonts together nicely. This is a great article to help to to choose the fonts that are right for you. Font choice is very important, as it will be reflecting your brand as it sits on your website.")
    })

    $('.color-button').on("click", function() {
        $(".modal-title").text("How Important is Color in Website Design?");
        $(".modal-text").text("In this article, Studio 1 Designs shows why color choice is so important when designing a website. They not only show how to design a color scheme, but also how different colors can invoke different emotions a responses from your visitors. It can be easy to use a random color scheme generator online and call it a day. I've done it many times. But these random color schemes don't have the intentional emotion-invoking aspect that it so important in our websites.")
    })

    $('.pwidth-button').on("click", function() {
        $(".modal-title").text("Optimum Web Readability — Max and min width for page text");
        $(".modal-text").text("Ben Shoemate demonstrates the importance of paragraph width to improve readability on your website. He shows many good examples as well as some bad examples to give helpful perspective. I can't think of how many times I've lost my place or started reading the same line again when paragraphs are too wide. This article is sure to help you improve readability on your website.")
    })
})