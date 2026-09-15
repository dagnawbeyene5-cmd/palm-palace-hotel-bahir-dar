(function(){
var dict = {
  en: {
    nav_stay:"Stay", nav_dining:"Dining", nav_events:"Events", nav_gallery:"Gallery",
    nav_book:'Book a room <span>↗</span>',
    hero_eyebrow:"BAHIR DAR · ETHIOPIA",
    hero_h1:'A calm stay.<br><em>A warmer welcome.</em>',
    hero_lead:"A contemporary 3-star hotel experience shaped around comfort, dining and memorable gatherings.",
    hero_cta:'Reserve your stay <span>→</span>',
    scroll:'SCROLL <span>↓</span>',
    intro_eyebrow:"PALM PALACE HOTEL",
    intro_h2:"Simple luxury, thoughtfully delivered.",
    intro_p:"Come for the stay. Stay for the atmosphere. From a quiet room to a table shared with friends, Palm Palace is designed to make every part of your visit feel easy.",
    rooms_eyebrow:"THE ROOMS", rooms_h2:"Choose your room.",
    rooms_p:"51 rooms across five floors, with breakfast and a hot drink included with every room booking.",
    room1_span:"01 · SINGLE", room1_h3:"Single Room",
    room2_span:"02 · KING", room2_h3:"King Room",
    room3_span:"03 · DOUBLE", room3_h3:"Double Room",
    room4_span:"04 · FAMILY", room4_h3:"Family Room",
    per_night:"/ night",
    book_eyebrow:"DIRECT BOOKING",
    book_h2:"Your room,<br>reserved simply.",
    book_p:"Select your dates, room type and exact available room number. The system calculates the stay total on the server.",
    whatsapp_link:"Prefer WhatsApp? Message us to book →",
    label_checkin:'Check-in<input type="date" id="checkIn" required>',
    label_checkout:'Check-out<input type="date" id="checkOut" required>',
    label_roomtype:'Room type<select id="roomType"><option>Single</option><option>King</option><option>Double</option><option>Family</option></select>',
    check_btn:'Check available rooms <span>→</span>',
    label_fullname:'Full name<input id="fullName" required>',
    label_phone:'Phone<input id="phone" required>',
    label_email:'Email (optional)<input id="email" type="email">',
    label_notes:'Notes<textarea id="notes" rows="3" placeholder="Optional request"></textarea>',
    total_default:"Select a room to continue.",
    pay_btn:'Continue to secure payment <span>↗</span>',
    dining_eyebrow:"DINING",
    dining_h2:"Good food belongs to every good stay.",
    dining_p:"Restaurant dining, bar service and in-room restaurant orders for hotel guests. For programs and gatherings, the hotel also provides buffet and refreshment catering.",
    events_eyebrow:"GATHERINGS", events_h2:"Meet. Celebrate. Share.",
    event1_h3:"Conference Hall", event1_p:"For meetings, presentations and organized programs.",
    event2_h3:"Terrace", event2_p:"An open setting for events and special occasions.",
    event3_h3:"Catering", event3_p:"Buffet, refreshments and food service for events.",
    gallery_eyebrow:"THE HOTEL", gallery_h2:"See Palm Palace.",
    staff_link:"Staff access"
  },
  am: {
    nav_stay:"ማረፊያ", nav_dining:"ምግብ ቤት", nav_events:"ዝግጅቶች", nav_gallery:"ፎቶዎች",
    nav_book:'ክፍል ያስይዙ <span>↗</span>',
    hero_eyebrow:"ባህር ዳር · ኢትዮጵያ",
    hero_h1:'ፀጥ ያለ ማረፊያ።<br><em>ሞቅ ያለ አቀባበል።</em>',
    hero_lead:"ምቾት፣ ምግብ እና ትዝታ የሚፈጥሩ ስብሰባዎች ላይ ያተኮረ ዘመናዊ የ3 ኮከብ ሆቴል ተሞክሮ።",
    hero_cta:'ማረፊያዎን ያስይዙ <span>→</span>',
    scroll:'ይሸብልሉ <span>↓</span>',
    intro_eyebrow:"ፓልም ፓላስ ሆቴል",
    intro_h2:"ቀላል የቅንጦት ኑሮ፣ በጥንቃቄ የቀረበ።",
    intro_p:"ለማረፊያ ይምጡ፣ ለከባቢው ይቆዩ። ከፀጥ ያለ ክፍል እስከ ከጓደኞች ጋር የሚጋሩት ጠረጴዛ ድረስ፣ ፓልም ፓላስ የጉብኝትዎን እያንዳንዱ ክፍል ቀላል እንዲሆን ተደርጎ የተሰራ ነው።",
    rooms_eyebrow:"ክፍሎቹ", rooms_h2:"ክፍልዎን ይምረጡ።",
    rooms_p:"51 ክፍሎች በአምስት ፎቅ ውስጥ፣ ቁርስ እና ትኩስ መጠጥ ከእያንዳንዱ ክፍል ማስያዝ ጋር ይካተታል።",
    room1_span:"01 · ነጠላ", room1_h3:"ነጠላ ክፍል",
    room2_span:"02 · ኪንግ", room2_h3:"ኪንግ ክፍል",
    room3_span:"03 · ድርብ", room3_h3:"ድርብ ክፍል",
    room4_span:"04 · የቤተሰብ", room4_h3:"የቤተሰብ ክፍል",
    per_night:"/ ሌሊት",
    book_eyebrow:"ቀጥታ ማስያዣ",
    book_h2:"ክፍልዎ፣<br>በቀላሉ ተይዟል።",
    book_p:"ቀኖችዎን፣ የክፍል አይነት እና ትክክለኛ ያለ ክፍል ቁጥር ይምረጡ። ስርዓቱ አጠቃላይ ክፍያውን በሰርቨር ላይ ያሰላል።",
    whatsapp_link:"WhatsApp ይመርጣሉ? ለማስያዝ መልእክት ይላኩልን →",
    label_checkin:'መግቢያ ቀን<input type="date" id="checkIn" required>',
    label_checkout:'መውጫ ቀን<input type="date" id="checkOut" required>',
    label_roomtype:'የክፍል አይነት<select id="roomType"><option>Single</option><option>King</option><option>Double</option><option>Family</option></select>',
    check_btn:'ያለ ክፍል ይመልከቱ <span>→</span>',
    label_fullname:'ሙሉ ስም<input id="fullName" required>',
    label_phone:'ስልክ ቁጥር<input id="phone" required>',
    label_email:'ኢሜይል (አማራጭ)<input id="email" type="email">',
    label_notes:'ማስታወሻ<textarea id="notes" rows="3" placeholder="አማራጭ ጥያቄ"></textarea>',
    total_default:"ለመቀጠል ክፍል ይምረጡ።",
    pay_btn:'ወደ ደህንነቱ የተጠበቀ ክፍያ ይቀጥሉ <span>↗</span>',
    dining_eyebrow:"ምግብ ቤት",
    dining_h2:"ጥሩ ምግብ የእያንዳንዱ ጥሩ ማረፊያ አካል ነው።",
    dining_p:"ለእንግዶች የምግብ ቤት አገልግሎት፣ ባር እና በክፍል ውስጥ የምግብ ትዕዛዝ። ለፕሮግራሞችና ስብሰባዎች፣ ሆቴሉ የቡፌ እና የመጠጥ አገልግሎትም ይሰጣል።",
    events_eyebrow:"ስብሰባዎች", events_h2:"ይገናኙ። ያክብሩ። ይጋሩ።",
    event1_h3:"የስብሰባ አዳራሽ", event1_p:"ለስብሰባዎች፣ ገለጻዎች እና የተደራጁ ፕሮግራሞች።",
    event2_h3:"እርከን", event2_p:"ለዝግጅቶች እና ልዩ ዝግጅቶች ክፍት ቦታ።",
    event3_h3:"ኬተሪንግ", event3_p:"ለዝግጅቶች ቡፌ፣ መጠጥ እና የምግብ አገልግሎት።",
    gallery_eyebrow:"ሆቴሉ", gallery_h2:"ፓልም ፓላስን ይመልከቱ።",
    staff_link:"የሰራተኞች መግቢያ"
  }
};

var current = "en";

function applyLang(lang){
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    var key = el.getAttribute("data-i18n");
    var val = dict[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.documentElement.lang = lang;
  current = lang;
}

document.addEventListener("DOMContentLoaded", function(){
  var btn = document.getElementById("langToggle");
  if (btn) btn.addEventListener("click", function(){
    applyLang(current === "en" ? "am" : "en");
  });
});
})();
