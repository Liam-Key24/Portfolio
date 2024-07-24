/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: 'jit',
  content: ['./public/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        Teachers: ['Teachers'],
        Ogg: ['Ogg-Roman'],
      },
      fontSize:{
        '10px':'10px',
      },
      spacing: {
        '25px': '25px',
        '30px': '30px',
        '35px': '35px',
        '40px': '40px',
        '45px': '45px',
        '50px': '50px',
        '400':'400px',
        '63/4':'6.65rem',
        '12':"12rem",
        '17':'17rem',
        '28rem':'28rem',
        '30':'30rem',
        '32':'32rem',
        '34':'34rem',
        '35':'35rem',
        '38':'38rem',
        '40rem':'40rem',
        '49':'49rem',
        '50':'50rem',
        '60':'60rem',
        '68':'68rem',
        '70':'70rem',
        '120':'120rem',
        '200':'200rem'
      },
      colors:{
        'linen':'#F7EBDF',
        'smoke':'#F6F5F3',
        'eerie':'#1B1F22',
        'cambridge':'#9AC1B1',
        'wolf':'#D4D2CF',
      }
    },
  },
  plugins: [],
}

