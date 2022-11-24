motds = [
    '"We make robots ...and so should you!',
    'Join us for free snacks! (Sometimes)',
    'Robots are precise, but are they nice?'
]
document.getElementById('motd').innerHTML = motds[Math.floor(Math.random() * motds.length)];