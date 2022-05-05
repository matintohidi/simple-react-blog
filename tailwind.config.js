module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" , "./public/index.html" , "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        openSansMd : ['OpenSansMd'],
        openSansSm : ['OpenSansSm'],
        TheBrown : ['TheBrown'],
      },
      colors: {
        mainColor: '#2084FF',
        customSuccessColor: '#40c391',
        customWarningColor: '#ffa866',
        customErrorColor: '#fa6767',
        customDarkColor: '#222433',
        customLightColor: '#e6e9f0',
      }
    },
    plugins: [
      require('flowbite/plugin')
    ]
  }
}
