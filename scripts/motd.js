motds = [
    '"We make robots ...and so should you!',
    'Join us for free snacks! (Sometimes)',
    'Robots are precise, and they are nice',
    'Pushing with git is awesome! Sumo is good too :P'
]
document.getElementById('motd').innerHTML = motds[Math.floor(Math.random() * motds.length)];