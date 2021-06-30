const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('What\'s your name? (Nicknames are also acceptable) :)', (answer) => {
  let a = `Hi! Nice to meet you. My name's ${answer},`;
  let paragraph = [];
  rl.question('What\'s an activity you like to do?', (answer) => {
    let b = `and I love ${answer}!`;
    rl.question('What do you listen to while doing that?', (answer) => {
      let c = `While I'm doing it, I usually listen to ${answer}.`;
      rl.question('Which meal is your favourite?', (answer) => {
        let d = `My favourite meal is ${answer},`;
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          let e = `and ${answer} will always win me over!`;
          rl.question('Which sport is your absolute favourite?', (answer) => {
            let f = `When I'm not eating, I'm usually playing ${answer}.`;
            rl.question('What is your superpower? In a few words, tell us what you\'re amazing at.', (answer) => {
              let g = `I'm pretty good at it, but my real superpower is: ${answer}. Thanks for stopping by my profile!`;
              rl.close();
              paragraph.push(a, b, c, d, e, f, g);
              paragraph = paragraph.join(" ");
              console.log(paragraph);
            });
          });
        });
      });
    });
  });
});


