
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: 'If you do not take risks, you cannot create a future!',
    person: "Monkey D. Luffy (One Piece)"
},

{
    quote: ' A dropout will beat a genius through hard work.',
    person: " Rock Lee(Naruto)"
},

{
    quote: 'Forgetting is like a wound. The wound may heal, but it has already left a scar.',
    person: " Monkey D. Luffy (One Piece)"

},
{
    quote: ' People lives do not end when they die, it ends when they lose faith.',
    person: " Itachi Uchiha(Naruto)"

},
{
    quote: ' Those Who Do Not Understand True Pain Can Never Understand True Peace.',
    person: " Pain(Naruto)"

},
{
    quote: 'When people are protecting something truly special to them, they truly can become as strong as they can be.',
    person: " Naruto Uzumaki(Naruto)"

},
]

btn.addEventListener('click', function(){

    if(quotes.length == 0)
    {
        quote.innerText = 'No quotes available';
        person.innerText = '';
    }
    

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;



})