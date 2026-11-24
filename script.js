/* ==========================================
   FOR YOU ♡ — COMPLETE WEBSITE SCRIPT
   Story + Photo Gallery + Final Proposal
   Flower Bouquets + YES Celebration
========================================== */

const app = document.getElementById("app");
const starsContainer = document.getElementById("stars");
const chapterNumber = document.getElementById("chapterNumber");
const chapterTotal = document.getElementById("chapterTotal");
const progressFill = document.getElementById("progressFill");

let currentChapter = 0;
let isTransitioning = false;
let toastTimer;

/* ==========================================
   STORY
========================================== */

const chapters = [
    {
        eyebrow: "A LITTLE SOMETHING FOR YOU ✦",
        title: "Hey, <span>Baby...</span>",
        description: `No special occasion. No particular reason.<br><br>
        Just a little corner of the internet dedicated to my favourite person.<br><br>
        And yes, I made an entire website for you. That's how down bad I am. ❤️`,
        icon: "♡",
        button: "Open your surprise",
        footer: "MADE WITH WAY TOO MUCH LOVE",
        notes: [
            ["PSST...", "This is all yours. ♡"],
            ["REMINDER", "You're very loved."]
        ]
    },
    {
        eyebrow: "CHAPTER 01 · THE BEGINNING",
        title: "Something about <span>you.</span>",
        description: `Funny how some of the most beautiful things begin without us even realising it.<br><br>
        About a month before everything began, I started paying attention to you, Baby. Your smile, your little habits, the way you seemed different around me.<br><br>
        And somewhere along the way, I started feeling something I couldn't explain.`,
        icon: "✧",
        button: "Tell me more ♡",
        footer: "SOMETIMES, THE LITTLE THINGS MEAN EVERYTHING",
        notes: [
            ["LITTLE THINGS", "Your smile. Always."],
            ["FUN FACT", "I noticed you first. 🥺"]
        ]
    },
    {
        eyebrow: "CHAPTER 02 · MY FAVOURITE EXCEPTION",
        title: "You let me into <span>your world.</span>",
        description: `I know you're not someone who enjoys too much social interaction.<br><br>
        You have your own little world, your own comfort zone, and your own way of doing things.<br><br>
        But with me, I noticed something different. You smiled more. You seemed happy. You enjoyed spending time together.<br><br>
        Seeing you comfortable and happy around me became one of my favourite feelings.`,
        icon: "♡",
        button: "Remember our first date? ☕",
        footer: "MY FAVOURITE PERSON",
        notes: [
            ["MY THEORY", "You make ordinary days special."],
            ["SECRET", "Your smile is my weakness."]
        ]
    },
    {
        eyebrow: "CHAPTER 03 · THE SECRET DATE",
        title: "Coffee, Vada Pav & <span>butterflies.</span>",
        description: `Remember when we went out for coffee and vada pav?<br><br>
        Well, there's something you should know.<br><br>
        <strong>THAT WAS A DATE, BABY.</strong> 😭<br><br>
        You genuinely thought it was just a normal hangout with friends, while I was secretly trying to act like the most normal human being on the planet.<br><br>
        I was so shy that I couldn't even tell you it was a date.<br><br>
        Bro really organised a date and forgot to inform the girl. 💀`,
        icon: "☕",
        button: "I'm still laughing 😂",
        footer: "BOYFRIEND SKILLS: UNDER DEVELOPMENT",
        notes: [
            ["DATE STATUS", "She didn't even know. 💀"],
            ["MENU", "Coffee + Vada Pav + Butterflies."]
        ]
    },
    {
        eyebrow: "AN IMPORTANT PUBLIC ANNOUNCEMENT",
        title: "Your name is <span>Baby.</span>",
        description: `Dear Baby,<br><br>
        I would like to officially announce that from this moment onwards, you shall be addressed as BABY.<br><br>
        Because if I ever accidentally call you by your actual name, I already know I'm in BIG trouble. 😭<br><br>
        I choose life. I choose Baby. ❤️<br><br>
        <strong>Signed: Your extremely obedient boyfriend.</strong>`,
        icon: "🐻",
        button: "Okay, now the serious part...",
        footer: "PLEASE DON'T HIT YOUR BOYFRIEND",
        notes: [
            ["OFFICIAL RULE", "BABY. Not negotiable."],
            ["BOYFRIEND TIP", "Choose your words wisely. 💀"]
        ]
    },
    {
        eyebrow: "CHAPTER 04 · THAT DIWALI NIGHT",
        title: "One random message. <span>One big feeling.</span>",
        description: `Then came Diwali.<br><br>
        We were both at our homes, talking on WhatsApp, just like any other day.<br><br>
        And then I randomly said something that changed everything for me.<br><br>
        <strong>"All you do is hate me and here I am... I just love you."</strong><br><br>
        I was joking around when I typed it, but the feeling behind those words was anything but a joke.`,
        icon: "🪔",
        button: "What happened next? 🥺",
        footer: "A DIWALI I'LL ALWAYS REMEMBER",
        notes: [
            ["THAT NIGHT", "A little confession. A big feeling."],
            ["MEMORY", "My favourite Diwali. ❤️"]
        ]
    },
    {
        eyebrow: "CHAPTER 05 · THE WORDS THAT MATTERED",
        title: "And then you <span>asked me...</span>",
        description: `You were shocked.<br><br>
        You asked me if I was sure. If I really meant the words I had chosen. If I actually loved you.<br><br>
        And I told you that yes, I did.<br><br>
        That I wasn't joking around. That I meant every word.<br><br>
        And Baby, I really, really did.`,
        icon: "💌",
        button: "There's something I need you to know...",
        footer: "SOME WORDS CHANGE EVERYTHING",
        notes: [
            ["MY ANSWER", "Yes. I really meant it."],
            ["FOREVER MEMORY", "That one conversation."]
        ]
    },
    {
        eyebrow: "CHAPTER 06 · MY FAVOURITE FEELING",
        title: "You feel like <span>home.</span>",
        description: `Baby, I don't think I can properly explain what your presence means to me.<br><br>
        The way you love me now feels like a warmth I had never experienced before.<br><br>
        Having you around makes my days better. Even ordinary moments become something I want to hold onto.<br><br>
        You make me smile without trying. You make me feel loved, wanted and complete.<br><br>
        I'm so grateful that I get to experience it.`,
        icon: "♡",
        button: "Look at our memories 📸",
        footer: "MY FAVOURITE PLACE IS WITH YOU",
        notes: [
            ["A LITTLE TRUTH", "You feel like sunshine."],
            ["MY HAPPY PLACE", "Anywhere with you. ♡"]
        ]
    },

    /* PHOTO SCRAPBOOK */

    {
        type: "gallery",
        eyebrow: "A LITTLE SCRAPBOOK OF US ✦",
        title: "Little moments, <span>big feelings.</span>",
        description: `No matter where we are or what we're doing, somehow my favourite part is still being with you, Baby. ♡<br><br>Tap any picture to see it a little closer.`,
        icon: "📸",
        button: "One last thing, Baby... 💌",
        footer: "MY CAMERA ROLL'S FAVOURITE PEOPLE: US",
        notes: [
            ["PHOTO ALBUM", "A few of my favourite memories."],
            ["IMPORTANT", "More dates. More pictures. More us. ♡"]
        ],
        photos: [
            ["photo-01-closeup.jpg", "The close-up chaos", "A face I could never get tired of."],
            ["photo-02-mirror-hug.jpg", "Mirror cuddles", "Personal space? Never heard of it."],
            ["photo-03-full-mirror.jpg", "A little closer", "My favourite place is right there."],
            ["photo-04-orange-hoodie.jpg", "Caught being cute", "The camera roll understood the assignment."],
            ["photo-05-funny-goggles.jpg", "Fashion icon", "Those glasses deserve their own chapter. 😭"],
            ["photo-06-kiss-mirror-1.jpg", "Our mirror moment", "One mirror, two clingy people."],
            ["photo-07-kiss-mirror-2.jpg", "A kiss to remember", "Some moments don't need captions."],
            ["photo-08-mall-selfie.jpg", "Mall memories", "Just us, out making another memory."],
            ["photo-09-baby-solo.jpg", "Pretty girl alert", "Obviously, my favourite view."],
            ["photo-10-punishment-corner.jpg", "The elevator incident", "Crime: unknown. Sentence: corner time. 😭"]
        ]
    },

    /* FINAL RE-PROPOSAL */

    {
        type: "proposal",
        eyebrow: "ONE LAST THING, BABY ♡",
        title: "Will you <span>keep choosing me?</span>",
        description: `We've had our little beginnings, our silly moments, our dates, and all these memories.<br><br>
        I know we're already together, but if I could choose all over again, I'd still choose you. Every single time.<br><br>
        I want more coffee dates, more vada pav, more shopping trips, more silly arguments, more hugs, more kisses, and a lifetime of making memories with you.<br><br>
        <strong>So, Baby... will you keep choosing me, too?</strong>`,
        icon: "💌",
        button: "YES, ALWAYS! ❤️",
        footer: "A LITTLE QUESTION FROM YOUR BOYFRIEND",
        notes: [
            ["MY PROMISE", "I'll keep finding new ways to make you smile."],
            ["P.S.", "The bear is emotionally invested. 🐻"]
        ]
    }
];


/* ==========================================
   PROPOSAL AND CELEBRATION STYLES
========================================== */

const proposalStyles = document.createElement("style");

proposalStyles.textContent = `
.proposal-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 18px;
    margin: 25px auto 15px;
    min-height: 65px;
    position: relative;
}

.proposal-yes,
.proposal-no {
    border: none;
    border-radius: 30px;
    padding: 14px 25px;
    font-family: inherit;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: transform .2s ease, box-shadow .2s ease;
}

.proposal-yes {
    background: #b96f68;
    color: #fff8ed;
    box-shadow: 0 5px 15px #8c4c4533;
}

.proposal-yes:hover {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 8px 20px #8c4c4555;
}

.proposal-no {
    background: #f0dfc9;
    color: #68434a;
    border: 1px solid #d8b9a0;
}

.proposal-note {
    font-size: 12px;
    opacity: .75;
    margin-top: 12px;
}

.love-letter {
    text-align: center;
    padding: 18px 8px;
    animation: letterAppear .8s ease both;
}

.love-letter h2 {
    color: #a65e58;
    font-family: Georgia, serif;
    font-size: clamp(26px, 5vw, 38px);
    margin-bottom: 18px;
}

.love-letter p {
    line-height: 1.9;
    color: #68434a;
}

.love-letter .letter-heart {
    font-size: 38px;
    display: block;
    margin: 12px auto;
    animation: letterHeart 1.3s ease-in-out infinite;
}

@keyframes letterAppear {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes letterHeart {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.16); }
}

.love-firework {
    position: fixed;
    z-index: 9999;
    pointer-events: none;
    font-size: 22px;
    animation: fireworkRise 1.8s ease-out forwards;
}

@keyframes fireworkRise {
    0% { opacity: 0; transform: translateY(15px) scale(.5) rotate(0deg); }
    20% { opacity: 1; }
    100% { opacity: 0; transform: translateY(-160px) scale(1.5) rotate(35deg); }
}

/* FLOWER AND CHOCOLATE BOUQUET */

.gift-bouquets {
    width: 100%;
    max-width: 440px;
    margin: 15px auto 5px;
    border-radius: 18px;
    overflow: hidden;
    transform: rotate(-1deg);
    box-shadow: 0 8px 22px #68434a25;
}

.gift-bouquets img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
}

.gift-caption {
    text-align: center;
    color: #a65e58;
    font-family: Georgia, serif;
    font-style: italic;
    margin: 12px 0;
}

.celebration-picture {
    display: block;
    width: 100%;
    max-width: 460px;
    max-height: 260px;
    object-fit: contain;
    margin: 18px auto;
    border-radius: 18px;
    box-shadow: 0 8px 25px #68434a30;
}

.happy-float {
    position: fixed;
    z-index: 10000;
    pointer-events: none;
    font-size: 25px;
    animation: happyFloat 3.2s ease-out forwards;
}

@keyframes happyFloat {
    0% {
        opacity: 0;
        transform: translateY(20px) rotate(-15deg) scale(.6);
    }
    20% { opacity: 1; }
    100% {
        opacity: 0;
        transform: translateY(-180px) rotate(25deg) scale(1.4);
    }
}

@media (max-width: 600px) {
    .proposal-actions {
        gap: 12px;
    }

    .proposal-yes,
    .proposal-no {
        padding: 12px 19px;
        font-size: 14px;
    }
}
`;

document.head.appendChild(proposalStyles);


/* ==========================================
   BACKGROUND STARS
========================================== */

function createStars() {
    for (let i = 0; i < 25; i++) {
        const star = document.createElement("span");
        star.className = "star";
        star.textContent = Math.random() > 0.5 ? "✦" : "·";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.fontSize = (Math.random() * 8 + 7) + "px";
        starsContainer.appendChild(star);
    }
}


/* ==========================================
   FLOATING DOODLES
========================================== */

const doodles = ["♡", "✿", "✧", "♥", "❀"];

function createDoodle() {
    if (document.hidden) return;

    const doodle = document.createElement("div");
    doodle.className = "particle";
    doodle.textContent = doodles[Math.floor(Math.random() * doodles.length)];
    doodle.style.left = (10 + Math.random() * 80) + "%";
    doodle.style.top = (35 + Math.random() * 50) + "%";
    doodle.style.color = "#e7b2a0";

    document.body.appendChild(doodle);
    setTimeout(() => doodle.remove(), 4500);
}

function scheduleDoodle() {
    setTimeout(() => {
        createDoodle();
        scheduleDoodle();
    }, 8000 + Math.random() * 5000);
}


/* ==========================================
   HEART EFFECT
========================================== */

function createHeartEffect(x, y) {
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement("div");
        heart.className = "particle";
        heart.textContent = i % 2 === 0 ? "♡" : "✿";
        heart.style.left = (x + Math.random() * 50 - 25) + "px";
        heart.style.top = (y + Math.random() * 30 - 15) + "px";
        heart.style.fontSize = "17px";
        heart.style.color = "#cf887b";

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4500);
    }
}


/* ==========================================
   BEAR MASCOT AND TOAST
========================================== */

const surpriseMessages = [
    "Psst... your boyfriend loves you. ❤️",
    "You are someone's favourite person.",
    "Sending you a thousand virtual hugs. 🫂",
    "Your smile is my favourite thing.",
    "One more vada pav date, please?",
    "Your boyfriend is ridiculously lucky.",
    "Just a reminder that you're loved. ♡",
    "Officially the cutest human alive. 🐻"
];

function showToast(message) {
    const toast = document.getElementById("surpriseToast");
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

function createMascot() {
    const mascot = document.createElement("button");
    mascot.className = "mascot";
    mascot.textContent = "🐻";
    mascot.setAttribute("aria-label", "Open a little surprise");

    mascot.addEventListener("click", () => {
        const rect = mascot.getBoundingClientRect();

        createHeartEffect(
            rect.left + rect.width / 2,
            rect.top + rect.height / 2
        );

        const message = surpriseMessages[
            Math.floor(Math.random() * surpriseMessages.length)
        ];

        showToast(message);
    });

    document.body.appendChild(mascot);
}


/* ==========================================
   SIDE NOTES
========================================== */

function createDecorNote(note, side) {
    const element = document.createElement("div");
    element.className = `decor-note ${side}`;

    const icon = side === "left" ? "♡" : "✿";

    element.innerHTML = `
        <span class="note-icon">${icon}</span>
        ${note[0]}<br><br>${note[1]}
    `;

    return element;
}


/* ==========================================
   PHOTO LIGHTBOX
========================================== */

function openPhotoLightbox(photo) {
    const overlay = document.createElement("div");
    overlay.className = "photo-lightbox";

    const frame = document.createElement("div");
    frame.className = "lightbox-frame";

    const closeButton = document.createElement("button");
    closeButton.className = "lightbox-close";
    closeButton.type = "button";
    closeButton.textContent = "×";
    closeButton.setAttribute("aria-label", "Close photo");

    const image = document.createElement("img");
    image.src = `assets/photos/${photo[0]}`;
    image.alt = photo[1];

    const title = document.createElement("p");
    title.textContent = photo[1];

    const caption = document.createElement("span");
    caption.textContent = photo[2];

    frame.append(closeButton, image, title, caption);
    overlay.appendChild(frame);

    function close() {
        overlay.remove();
        document.removeEventListener("keydown", onKeyDown);
    }

    function onKeyDown(event) {
        if (event.key === "Escape") close();
    }

    closeButton.addEventListener("click", close);

    overlay.addEventListener("click", event => {
        if (event.target === overlay) close();
    });

    document.addEventListener("keydown", onKeyDown);
    document.body.appendChild(overlay);
}


/* ==========================================
   PROPOSAL CELEBRATION
========================================== */

function launchCelebration() {
    const symbols = ["❤️", "💗", "💕", "✨", "♡", "💖", "🌸"];

    for (let i = 0; i < 45; i++) {
        setTimeout(() => {
            const particle = document.createElement("div");
            particle.className = "love-firework";
            particle.textContent = symbols[
                Math.floor(Math.random() * symbols.length)
            ];

            particle.style.left = Math.random() * 100 + "vw";
            particle.style.top = (45 + Math.random() * 45) + "vh";
            particle.style.fontSize = (16 + Math.random() * 22) + "px";

            document.body.appendChild(particle);

            setTimeout(() => particle.remove(), 1900);
        }, i * 45);
    }
}


/* ==========================================
   FINAL PROPOSAL INTERACTION
========================================== */

function setupProposal(section) {
    const yesButton = section.querySelector("#proposalYes");
    const noButton = section.querySelector("#proposalNo");
    const actions = section.querySelector(".proposal-actions");
    const content = section.querySelector(".chapter-content");

    let noAttempts = 0;

    function moveNoButton() {
        noAttempts++;

        const messages = [
            "Nope? 👀",
            "Are you sure? 🥺",
            "Nice try, Baby 😂",
            "You can't escape love!",
            "The bear says YES! 🐻"
        ];

        noButton.textContent = messages[
            Math.min(noAttempts - 1, messages.length - 1)
        ];

        const maxX = Math.max(30, window.innerWidth - 170);
        const maxY = Math.max(80, window.innerHeight - 100);

        noButton.style.position = "fixed";
        noButton.style.left = Math.random() * maxX + "px";
        noButton.style.top = Math.random() * maxY + "px";
        noButton.style.zIndex = "9999";
    }

    noButton.addEventListener("mouseenter", moveNoButton);

    noButton.addEventListener("touchstart", event => {
        event.preventDefault();
        moveNoButton();
    }, { passive: false });

    noButton.addEventListener("click", event => {
        event.preventDefault();
        moveNoButton();
    });

    yesButton.addEventListener("click", () => {
        launchCelebration();

        createHeartEffect(
            window.innerWidth / 2,
            window.innerHeight / 2
        );

        actions.remove();

        const oldDescription = content.querySelector(".description");
        if (oldDescription) oldDescription.remove();

        const oldIcon = content.querySelector(".heart-icon");
        if (oldIcon) oldIcon.textContent = "❤️";

        const oldTitle = content.querySelector("h1");
        if (oldTitle) {
            oldTitle.innerHTML = "You just made me <span>the happiest.</span>";
        }

        const letter = document.createElement("div");
        letter.className = "love-letter";

        letter.innerHTML = `
            <span class="letter-heart">❤️</span>

            <h2>My dearest Baby,</h2>

            <p>
                I know I already have you, and I get to call you mine.
                But I never want to stop reminding you how much you mean to me.
                <br><br>

                Thank you for loving me, for being patient with me,
                for laughing with me, and for making even the most ordinary
                days feel special.
                <br><br>

                I want to keep growing with you, annoying you,
                making you laugh, stealing hugs, and creating memories
                that we'll look back on someday.
                <br><br>

                I can't promise that every day will be perfect,
                but I promise I'll keep choosing you, keep trying,
                and keep loving you with everything I've got.
                <br><br>

                Here's to more dates, more photographs, more adventures,
                more silly moments, and more of <strong>US.</strong>
            </p>

            <span class="letter-heart">💗</span>

            <h2>I love you, Baby.</h2>

            <p>Always your slightly dramatic, extremely lucky boyfriend. ♡</p>
        `;

        content.appendChild(letter);

        /* Add the happy celebration illustration */

        const celebrationImage = document.createElement("img");

        celebrationImage.src = "assets/photos/yes-celebration.png";
        celebrationImage.alt = "A joyful celebration for Baby with flowers and cute bears";
        celebrationImage.className = "celebration-picture";

        letter.appendChild(celebrationImage);

        /* Random happy floating decorations */

        const happyThings = [
            "💗", "🌻", "🌹", "🌸", "✨",
            "💕", "🎀", "🥰", "💖", "🧸",
            "🎉", "💐", "🍫", "❤️", "🐻"
        ];

        let happyCount = 0;

        const happyInterval = setInterval(() => {
            for (let i = 0; i < 3; i++) {
                const happy = document.createElement("div");

                happy.className = "happy-float";
                happy.textContent = happyThings[
                    Math.floor(Math.random() * happyThings.length)
                ];

                happy.style.left = Math.random() * 95 + "vw";
                happy.style.top = (55 + Math.random() * 35) + "vh";

                document.body.appendChild(happy);

                setTimeout(() => happy.remove(), 3300);
            }

            happyCount++;

            if (happyCount >= 12) {
                clearInterval(happyInterval);
            }
        }, 900);

        const footer = content.querySelector(".bottom-note");

        if (footer) {
            footer.textContent = "AND I'LL KEEP CHOOSING YOU. ALWAYS. ❤️";
        }

        showToast("SHE SAID YES! THE BOYFRIEND IS WINNING! ❤️");
    });
}


/* ==========================================
   RENDER CHAPTER
========================================== */

function renderChapter(index) {
    const chapter = chapters[index];

    const section = document.createElement("section");
    section.className = "chapter";

    const content = document.createElement("div");
    content.className = "chapter-content";

    let galleryHTML = "";

    if (chapter.type === "gallery") {
        galleryHTML = `
            <div class="photo-gallery">
                ${chapter.photos.map((photo, photoIndex) => `
                    <button class="polaroid"
                        type="button"
                        data-photo-index="${photoIndex}">

                        <span class="polaroid-image-wrap">
                            <img
                                src="assets/photos/${photo[0]}"
                                alt="${photo[1]}"
                                loading="lazy">
                        </span>

                        <span class="polaroid-caption">
                            ${photo[1]}
                        </span>

                        <span class="polaroid-subcaption">
                            ${photo[2]}
                        </span>

                    </button>
                `).join("")}
            </div>
        `;
    }

    let proposalHTML = "";

    if (chapter.type === "proposal") {
        proposalHTML = `
            <div class="gift-bouquets">
                <img
                    src="assets/photos/gift-bouquets.png"
                    alt="Sunflower, rose, lily and KitKat chocolate bouquets">
            </div>

            <p class="gift-caption">
                A little something for my favourite girl. 🌻🌹🍫
            </p>

            <div class="proposal-actions">

                <button
                    class="proposal-yes"
                    id="proposalYes"
                    type="button">
                    YES, ALWAYS! ❤️
                </button>

                <button
                    class="proposal-no"
                    id="proposalNo"
                    type="button">
                    NO 🙈
                </button>

            </div>

            <p class="proposal-note">
                Choose wisely, Baby. The teddy is watching. 🐻
            </p>
        `;
    }

    content.innerHTML = `
        <div class="top-label">${chapter.eyebrow}</div>

        <div class="heart-icon">${chapter.icon}</div>

        <h1>${chapter.title}</h1>

        <p class="description">${chapter.description}</p>

        ${galleryHTML}

        ${proposalHTML}

        ${chapter.type === "proposal" ? "" : `
            <button class="next-button" id="nextBtn">
                ${chapter.button}<span>♡</span>
            </button>
        `}

        <p class="bottom-note">${chapter.footer}</p>
    `;

    section.appendChild(content);

    section.appendChild(
        createDecorNote(chapter.notes[0], "left")
    );

    section.appendChild(
        createDecorNote(chapter.notes[1], "right")
    );

    app.appendChild(section);

    if (chapter.type === "gallery") {
        section.querySelectorAll(".polaroid").forEach(card => {
            card.addEventListener("click", () => {
                const photo = chapter.photos[
                    Number(card.dataset.photoIndex)
                ];

                openPhotoLightbox(photo);
            });
        });
    }

    if (chapter.type === "proposal") {
        setupProposal(section);
    }

    requestAnimationFrame(() => {
        section.classList.add("active");
    });

    chapterNumber.textContent = String(index + 1).padStart(2, "0");

    chapterTotal.textContent = String(chapters.length).padStart(2, "0");

    progressFill.style.width =
        `${((index + 1) / chapters.length) * 100}%`;

    const nextButton = section.querySelector("#nextBtn");

    if (nextButton) {
        nextButton.addEventListener("click", nextChapter);
    }
}


/* ==========================================
   NAVIGATION
========================================== */

function nextChapter(event) {
    if (isTransitioning) return;

    if (currentChapter >= chapters.length - 1) {
        showToast("That's all our memories for now, Baby. ❤️");
        return;
    }

    isTransitioning = true;

    const rect = event.currentTarget.getBoundingClientRect();

    createHeartEffect(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2
    );

    const oldChapter = app.querySelector(".chapter");

    oldChapter.classList.add("exit");
    oldChapter.classList.remove("active");

    setTimeout(() => {
        currentChapter++;

        oldChapter.remove();

        renderChapter(currentChapter);

        isTransitioning = false;
    }, 500);
}


/* ==========================================
   START WEBSITE
========================================== */

const toast = document.createElement("div");

toast.className = "surprise-toast";
toast.id = "surpriseToast";

document.body.appendChild(toast);

createStars();
createMascot();
renderChapter(0);
scheduleDoodle(); 
