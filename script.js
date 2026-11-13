const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const glow = $('.cursor-glow');
document.addEventListener('mousemove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const musicBtn = $('#musicBtn');
musicBtn?.addEventListener('click', () => {
  musicBtn.classList.toggle('playing');
  musicBtn.textContent = musicBtn.classList.contains('playing') ? '♫' : '♪';
});

const birthdayDate = new Date('2027-05-24T00:00:00').getTime();
function updateCountdown() {
  const countdown = $('#countdown');
  if (!countdown) return;

  const difference = Math.max(birthdayDate - Date.now(), 0);
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  $('#days').textContent = String(days).padStart(2, '0');
  $('#hours').textContent = String(hours).padStart(2, '0');
  $('#mins').textContent = String(minutes).padStart(2, '0');
  $('#secs').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const reasons = [
  'Your unforgettable eyes.',
  'The way you keep calling me so many adorable nicknames.',
  'The way your hair smells and how soft it is.',
  'You care deeply.',
  'Your big backness.',
  'Your adorable nose.',
  'Your gentleness.',
  'Your silliness.',
  'Your voice.',
  'Your comfortable hugs.',
  'The way you listen.',
  'How you accept me.',
  'How you peck my whole face.',
  'I love your honesty.',
  'I love your kissable lips.',
  "I love when you yap about tools even though I have no idea what you're talking about.",
  'How you explain things to me.',
  'Your presence calms me.',
  'The way you love me.',
  'The way you look at me.',
  "How you don't mind doing stupid things with me.",
  'I love it when you call me Laly.',
  'How you act like yourself around me.',
  'When you ask me if you can lie on me.',
  'Your height.',
  'I love how you take care of me.',
  'I love and extremely appreciate your support.',
  'I love it when you mock me.',
  'I love how clingy you are.',
  'I love how you pinky promise with me.',
  'I love the way you bring out my inner child.',
  'I love your cute outfits like no way you thought this would look good on me SOO CUTEE OMG.',
  'I love how lovey dovey you are.',
  'I love your kisses.',
  'How you still see my flaws and still love me.',
  'I love how you still stayed by my side when I was down.',
  'You make me laugh at random times.',
  'Your BICEPSSS.',
  'Your back.',
  'Your big hands.',
  'How warm you are.',
  'Your reassurance.',
  'Your adorable cheeks.',
  'How you arrange your hair.',
  'How your hair looks after you shower.',
  'Your handsomeness.',
  'Your cuteness.',
  'How you wash the dishes.',
  'How you grab me by my waist.',
  'How you cook for me.',
  'How you think.',
  'How strong you are.',
  "How you'd watch anything with me.",
  'How thoughtful you are.',
  'You bring light to my day by just being there.',
  'You are my favorite kind of person.',
  'You make memories worth saving.',
  'Your patience with me.',
  'You make everything feel meaningful.',
  "You're not judgemental.",
  'How you say the cutest things ever.',
  'You are cute without even trying.',
  'Your little heart AWWWW.',
  'You make me feel noticed.',
  'Your goodmornings.',
  'Your goodnights.',
  'Your scent.',
  'How you keep your hand out so I grab it.',
  'Your silly smirk.',
  'When you support my shopping addiction.',
  'When you send me cute messages.',
  'How your heart beats when I lie my head down on your chest.',
  'The way you make my heart jump.',
  'Your honesty.',
  'You make small surprises feel huge.',
  'You always show your love to me.',
  'Your knowledge.',
  'Your cute canines.',
  'How you melt into my arms.',
  'How you let yourself be vulnerable around me.',
  'You cuddle with me.',
  'How much you miss me.',
  'How you tickle me.',
  'How your mind works.',
  'How you talk about your day.',
  'Your little jokes.',
  'How you become dominant sometimes.',
  'How CUTE YOUR LAUGH ISSSS WHEN I TICKLE YOU.',
  'You make me feel safe.',
  'Your happiness when Im around.',
  'How you act when youre sleepy.',
  'The sweet things you say when youre half asleep.',
  'How you also squeeze my hand 3 times.',
  'How you notice when something is bothering me.',
  'How ticklish you are.',
  'How good you smell after you shower.',
  'How manly you are but also childish.',
  'The way you get excited to tell me something.',
  'How you become big back with me.',
  'How you came all the way here for me.',
  'You are more loved than 100 reasons can say.',
];
const reasonGrid = $('#reasonGrid');
if (reasonGrid) {
  const imageFolder = reasonGrid.dataset.imageFolder || 'assets';
  const reasonImages = Array.from({ length: 100 }, (_, index) => `${imageFolder}/${index + 1}.jpg`);

  reasonGrid.innerHTML = reasons
    .map((reason, index) => {
      const image = reasonImages[index % reasonImages.length];
      return `
      <article class="reason-card reveal" tabindex="0">
        <div class="reason-inner">
          <div class="reason-front">
            <h3>${index + 1}</h3>
            <p>tap love note</p>
          </div>
          <div class="reason-back" style="background-image: linear-gradient(to bottom, rgba(62,50,50,.08), rgba(62,50,50,.18) 45%, rgba(62,50,50,.78)), url('${image}');">
            <p>${reason}</p>
          </div>
        </div>
      </article>`;
    })
    .join('');
}

$('#randomReasonBtn')?.addEventListener('click', () => {
  $('#randomReason').textContent = reasons[Math.floor(Math.random() * reasons.length)];
});

const envelope = $('#envelope');
const letterText = `HAPPY BIRTHDAY BABYYYY Today is your special day where you deserve all the love, I just wanna say how incredibly grateful I am for meeting you, I'd give everything to Sarah for making us talk and even though we've been talking and also dating for so little, it feels like we've been talking for way longer than we have. I've always been considering myself unlucky but meeting you has been such a blessing and I'm so thankful for the bond we have. I love you so much you deserve every good thing that comes your way this year and I'll always stay by your side and be there for you in good times and bad times. I'll always be your biggest fan and supporter. I want to thank you so much for being there for me when I wasn't feeling good even though you have your own problems. Thank you so much for listening to me when I needed it. You make me feel so cherished and it's so weird because I've never had this and I thank you sosossoosososo much for offering me so much love and making me feel seen, I hope you also feel the same way as I do. All the moments we've spent together were very special to me, from the first time we met until you left, to when we met once again until I had to leave. You're so genuinely so sweet, loving, caring and so many other things its scary, you're making me feel things I've never ever felt before. You're sosososo handsome and it makes me so sad when you ask me how am I dating you and other things like that, I wish you could see yourself how I see you like actually your adorable nose, your mesmerizing eyes, your cute soft hair, just everything about you, you are handsome in personality too you're just UGHHHHHHHHHHHHHHHHHHHHHHH TE MANANC IUBIREA MEA doamne ce drag imi e de tine n-ai nici-o idee. 
I love how lovey dovey you are with me but it's also weird to me because it's something new and I'm sorry for not being so good with showing my love to you, I try my best though oki? You must've done something to me because I used to be so independent and now I feel so attached to you and I need you in every moment doamne sa vezi ce bataie iti dau. You've become my safe space and I hope that will never change. I feel so lucky to have you because I got everything I wanted and I'm sososososoososos happy. I hope you like what I did for your birthday it ain't much but I tried oki? I LOVE YOU SOOSOSOSOOSOOSSO MUCH MY SWEET BOYYYYYY`;
let hasTypedLetter = false;

envelope?.addEventListener('click', () => {
  envelope.classList.add('open');
  if (hasTypedLetter) return;

  hasTypedLetter = true;
  let index = 0;
  const typedLetter = $('#typedLetter');
  const typing = setInterval(() => {
    typedLetter.textContent += letterText[index] || '';
    index += 1;
    if (index > letterText.length) clearInterval(typing);
  }, 35);
});

const cake = $('#birthdayCake') || $('.cake');
const cutCakeBtn = $('.cut-cake-btn');
const cakeStageText = $('#cakeStageText');
let cakeAnimationStarted = false;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

cutCakeBtn?.addEventListener('click', async () => {
  if (!cake || cakeAnimationStarted) return;

  cakeAnimationStarted = true;
  cutCakeBtn.disabled = true;

  cakeStageText.textContent = 'blowing the candles... 🌬️';
  cutCakeBtn.textContent = 'Blowing Candles...';
  cake.classList.add('blow');
  await wait(1500);

  cakeStageText.textContent = ' cake is cutting 🔪';
  cutCakeBtn.textContent = '';
  cake.classList.add('knife-in');
  await wait(1200);

  cakeStageText.textContent = ' into a slice... 🍰';
  cutCakeBtn.textContent = 'Cutting Slice...';
  cake.classList.add('sliced');
  await wait(900);

  cakeStageText.textContent = 'first slice for my big back 🎀';
  cutCakeBtn.textContent = 'Cake Cut 🎉';

  if (typeof confetti === 'function') {
    confetti({ particleCount: 280, spread: 115, origin: { y: 0.62 } });
  }
});
