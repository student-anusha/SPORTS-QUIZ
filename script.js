const questions = {
  1: {q: "ओलम्पिक के व्यक्तिगत स्पर्धा में पदक जितने वाली प्रथम भारतीय महिला कौन है?", a: "कर्णम मल्लेश्वरी (सिडनी 2000 ओलंपिक)"},
  2: {q: "विंबलडन ओपन 2025 पुरुष एकल खिताब किसने जीता?", a: " जैनिक सिनर (इटली) "},
  3: {q: "खेलो इंडिया यूथ गेम-2025 का शुभंकर क्या था?", a: "गजसिंह"},
  4: {q: "फिडे महिला शतरंज विश्व कप 2025 किसने जीता?", a: "दिव्या देशमुख"},
  5: {q: "आई.पी.एल. के इतिहास में दूसरा सबसे तेज शतक बनाने वाला कम उम्र का खिलाड़ी कौन है?", a: "वैभव सूर्यवंशी "},
  6: {q: "कबड्डी विश्व कप 2025 का विजेता कौन सा देश रहा?", a: "भारत।"},
  7: {q: "एकदिवसीय क्रिकेट में सबसे तेज 14000 रन तक पहुंचने वाले बल्लेबाज कौन है?", a: "विराट कोहली (287 पारियां)"},
  8: {q: "कौन-सा देश 2026 फीफा विश्व कप की मेजबानी करेगा?   ", a: "कनाडा, मैक्सिको और अमेरिका।               "},
  9: {q: "सिंगापुर में आयोजित विश्वशतरंज चैंपियनशिप 2024 किसने जीता?  ", a: "डी गुकेश (डिंग लिरेन को हराकर)"},
  10: {q: "स्वतंत्र भारत ने अपना पहला ओलंपिक स्वर्ण पदक किस वर्ष जीता?  ", a: "सन् 1948."},
  11: {q: "आईपीएल की शुरुआत किस वर्ष हुई थी? ", a: "2008"},
  12: {q: " एक ही ओलंपिक में आठ स्वर्ण पदक जीतने वाले पहले एथलीट कौन थे?  ", a: " माइकल फेल्प्स।"},
  13: {q: "भारत में राष्ट्रीय खेल दिवस किस दिन मनाया जाता है? ", a: "29 अगस्त (मेजर ध्यानचंद के जन्मदिन पर)।"},
  14: {q: "भारत का सर्वोच्च खेल सम्मान कौन सा है?    ", a: "मेजर ध्यानचंद खेल रत्न पुरस्कार "},
  15: {q: "सर्वाधिक आइसीसी महिला वर्ल्ड कप खेलने वाली क्रिकेट खिलाड़ी कौन है?    ", a: "मिताली राज (6 वर्ल्ड कप)"},
  16: {q: "पुरुष स्पर्धा में सबसे ज़्यादा ग्रैंड स्लैम एकल खिताब किसने जीते हैं?   ", a: "नोवाक जोकोविच ( 22 खिताबों के साथ)"}
};

let currentCircle = null;

function openQuestion(num) {
  currentCircle = num;
  document.getElementById("home-page").style.display = "none";
  document.getElementById("question-page").style.display = "block";
  document.getElementById("question-text").innerText = questions[num].q;
  document.getElementById("answer-text").innerText = questions[num].a;
  document.getElementById("answer-text").classList.remove("show");
  document.querySelector(".close-btn").style.display = "none";
}

function showAnswer() {
  document.getElementById("answer-text").classList.add("show");
  document.querySelector(".close-btn").style.display = "inline-block";
}

function closeQuestion() {
  document.getElementById("home-page").style.display = "block";
  document.getElementById("question-page").style.display = "none";
  let circles = document.querySelectorAll(".circle");
  circles[currentCircle - 1].classList.add("visited");
}