module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" , "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        TheBrown : ['TheBrown'],
        PlusJakarta : ['PlusJakarta'],
        Mont : ['Mont'],
        MontBold : ['MontBold'],
      },
      colors: {
        mainColor: '#2084FF',
        customSuccessColor: '#40c391',
        customWarningColor: '#ffa866',
        customErrorColor: '#fa6767',
        customDarkColor: '#222433',
        customLightColor: '#e6e9f0',
      },
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 #fff",
        myShadow2: "-4.1px -5px 0 0 #fff",
      }
    }
  }
}
