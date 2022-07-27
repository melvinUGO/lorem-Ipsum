const hipsterIpsum = [
    "Actually beard street art, palo santo fingerstache tacos bicycle rights adaptogen single-origin coffee live-edge shoreditch. Flexitarian next level enamel pin austin thundercats. Pop-up cardigan green juice helvetica, pork belly fashion axe brunch squid cold-pressed raclette forage banjo. Umami pabst authentic, banjo cold-pressed brunch messenger bag woke chillwave paleo.",
    "Polaroid green juice intelligentsia man braid cronut, flannel austin kinfolk. 90's vape kogi letterpress. Try-hard DIY XOXO seitan. Crucifix selvage ramps, iceland meh franzen dreamcatcher organic meggings enamel pin. Air plant kinfolk man braid thundercats, shoreditch vegan hashtag narwhal. Pickled blue bottle occupy, gochujang microdosing shabby chic tonx enamel pin.",
    "Activated charcoal next level ennui, live-edge air plant pug roof party everyday carry seitan stumptown. Messenger bag banjo snackwave knausgaard bushwick typewriter copper mug subway tile 90's skateboard slow-carb trust fund. Humblebrag letterpress fanny pack, four loko PBR&B green juice cornhole fingerstache pitchfork hashtag freegan banh mi flannel meditation. Twee chillwave normcore viral. Neutra art party bicycle rights church-key keytar kale chips master cleanse live-edge tousled.",
    "Four loko viral neutra, man bun whatever selfies bitters skateboard waistcoat tumeric VHS hell of raw denim cardigan try-hard. Skateboard live-edge wolf, microdosing typewriter readymade yuccie hashtag flannel schlitz. Enamel pin raw denim unicorn adaptogen. Listicle craft beer migas chia, brooklyn pitchfork tote bag seitan normcore hammock YOLO vegan bicycle rights.",
    "Put a bird on it tbh pop-up DSA, tilde cloud bread heirloom chambray vice la croix migas ethical intelligentsia cred microdosing. Hashtag palo santo synth, deep v wayfarers shabby chic semiotics +1 marfa. VHS tofu praxis hoodie, lyft lomo portland DSA. Vinyl heirloom street art yr art party +1 tumeric iPhone. Prism artisan drinking vinegar cornhole. Actually migas microdosing lomo chia vexillologist intelligentsia sartorial small batch offal slow-carb. Ethical hot chicken mustache thundercats williamsburg before they sold out normcore cronut cornhole authentic kogi heirloom direct trade salvia."
    
];

const godFatherIpsum = [
    "Godfather ipsum dolor sit amet. I don't trust a doctor who can hardly speak English. Don't you know that I would use all of my power to prevent something like that from happening? It's a Sicilian message. It means Luca Brasi sleeps with the fishes. I don't like violence, Tom. I'm a businessman; blood is a big expense. If anything in this life is certain, if history has taught us anything, it is that you can kill anyone.",
    "Very well. You want to do business with me. I will do business with you. Michael, you never told me you knew Johnny Fontane! Friends and money - oil and water. Leave the gun. Take the cannoli. My father taught me many things here - he taught me in this room. He taught me: keep your friends close, but your enemies closer.",
    "Your enemies always get strong on what you leave behind. I don't feel I have to wipe everybody out, Tom. Just my enemies. I know it was you, Fredo. You broke my heart. You broke my heart! You talk about vengeance. Is vengeance going to bring your son back to you? Or my boy to me? I am sorry. What happened to your father was business. I have much respect for your father. But your father, his thinking is old-fashioned. You must understand why I had to do that. Now let's work through where we go from here.",
    "What's the matter with you, huh? What am I going to do? Am I going to make that baby an orphan before he's born? Never let anyone know what you are thinking. Te salut, Don Corleone. When they come... they come at what you love. I see you took the name of the town. What was your father's name?",
    "Sonny, please don't do anything. Please don't do anything. Don Corleone, I am honored and grateful that you have invited me to your home on the wedding day of your daughter. And may their first child be a masculine child. Why do you hurt me, Michael? I've always been loyal to you. In Sicily, women are more dangerous than shotguns."
];

const litIpsum = [
    'The crowd melted away, after the bustling fashion common to arrival platforms; and I was beginning to feel uneasy, lest I might miss my guest, when a sweet-faced, dainty-looking girl stepped up to me, and, after a quick glance, said: "Dr. Seward, is it not?"',
    '"And you are Mrs. Harker!" I answered at once; whereupon she held out her hand.',
    '"I knew you from the description of poor dear Lucy; but----" She stopped suddenly, and a quick blush overspread her face.',
    'The blush that rose to my own cheeks somehow set us both at ease, for it was a tacit answer to her own. I got her luggage, which included a typewriter, and we took the Underground to Fenchurch Street, after I had sent a wire to my housekeeper to have a sitting-room and bedroom prepared at once for Mrs. Harker.',
    'In due time we arrived. She knew, of course, that the place was a lunatic asylum, but I could see that she was unable to repress a shudder when we entered.'
];

const officeIpsum = [
    "They have downloaded gmail and seems to be working for now we need to have a Come to Jesus meeting with Phil about his attitude, nor mobile friendly, organic growth hire the best. Bells and whistles teams were able to drive adoption and awareness. Good optics effort made was a lot yet a loss a day will keep you focus that is a good problem to have currying favour. Great plan! let me diarize this, and we can synchronise ourselves at a later",
    "Deploy cross pollination across our domains, nor baseline nor vertical integration get buy-in. After I ran into Helen at a restaurant, I realized she was just office pretty. Timeframe make it look like digital or reinvent the wheel gain traction zoom meeting at 2:30 today or it is all exactly as i said, but i don't like it. Drink the Kool-aid we need to think big start small and scale fast to energize our clients so I have zero cycles for this.",
    "Run it up the flag pole diversify kpis globalize net net we don't need to boil the ocean here and but what's the real problem we're trying to solve here?. Close the loop strategic staircase. Horsehead offer granularity let's not solutionize this right now parking lot it drill down big data but feed the algorithm the last person we talked to said this would be ready. Rock Star/Ninja tread it daily, or marginalised key performance indicators.",
    "Increase the pipelines weaponize the data digital literacy punter or drill down ramp up optics. Not a hill to die on feature creep, or we need to dialog around your choice of work attire. Pull in ten extra bodies to help roll the tortoise meeting assassin run it up the flagpole. Exposing new ways to evolve our design language donuts in the break room hit the ground running, and note for the previous submit: the devil should be on the left shoulder.",
    "We should leverage existing asserts that ladder up to the message marketing computer development html roi feedback team website so exposing new ways to evolve our design language or we need a paradigm shift horsehead offer the closest elephant is the most dangerous 360 degree content marketing pool. Our competitors are jumping the shark. Quarterly sales are at an all-time low groom the backlog meeting assassin, or pushback, this proposal is a win-win situation which will cause a stellar paradigm shift"
];

const amount = document.getElementById("amount");
const paragraph = document.querySelector('.paragraph');
const form = document.querySelector(".lorem-form");
const btns = document.querySelectorAll(".btn")


form.addEventListener("submit",function(e){
    e.preventDefault()
    btns.forEach(function(btn){
        btn.addEventListener('click',function(e){
            let btnType = e.currentTarget.dataset.id;
            const value = parseInt(amount.value);

            switch(btnType) {
                case "hipsterIpsum":
                    btnType = hipsterIpsum;
                    break;
                case "godFatherIpsum":
                    btnType = godFatherIpsum;
                    break;
                case "litIpsum":
                    btnType = litIpsum;
                    break;
                case "officeIpsum":
                    btnType = officeIpsum;
                    break;
            }
            const random = Math.floor(Math.random() * btnType.length);
            
            if(isNaN(value) || value < 0 || value > 5){
                paragraph.innerHTML = `<p class="ipsum-text">${btnType[random]}</p>`;
         }else{
            let tempArray = btnType.slice(0,value).join('<br><br>');
            paragraph.innerHTML = `<p class="ipsum-text">${tempArray}</p>`;
        }
        
        })
        
    })
  
})