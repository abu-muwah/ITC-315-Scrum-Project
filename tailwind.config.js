/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: { 
      center: true,
      screens: {
        'xl': '1120px',
      },
    },
    extend: {
      borderRadius: {
        '45px': '45px',
      },
      height: {
        '0.5': '0.5px',
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '58px': '58px',
        '158px': '158px',
        '184px': '184px',
        '204px': '204px',
        '208px': '208px',
        '365px': '365px',
        '419px': '419px',
        '500px': '500px',
        '540px': '540px',
        '600px': '600px',    
      },
      width: {
        '0.5': '0.5px',
        '1px': '1px',
        '2px': '2px',
        '58px': '58px',
        '158px': '158px',
        '184px': '184px',
        '204px': '204px',
        '208px': '208px',
        '265px': '265px',
        '318px': '318px',
        '365px': '365px',
        '374px': '374px',
        '392px': '392px',
        '460px': '460px',
        '483px': '483px',
        '500px': '500px',
      },
      padding: {
        '13': '13px',
      },
      fontFamily: {
        'poppins': ['poppins']
      }
    },
  },
  plugins: [],
}
