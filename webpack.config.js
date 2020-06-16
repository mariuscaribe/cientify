//👇🏼Accesemos donde estemos en el proyecto sea local o en la nube
const path = require('path'); 
//👇🏼 Permite trabajar con HTML
const HtmlWebpackPluing = require('html-webpack-plugin');

//👇🏼 Creamos modulo para configurar todo lo que va a suceder
module.exports = {
  // Ruta de punto de entrada
  entry: './src/index.js',
  // Ponemos el proyecto estructurado y listo para producción 
  output: {
    path: path.resolve(__dirname, 'dist'),
    // Nombre del archivo que se generará para producción
    filename: 'main.js'
  },
  // Extenciones del proyecto
  resolve: {
    extensions: ['.js'],
  },
  // Modulo con reglas necesarias -Reglas de Babel-
  module: {
    rules:[
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  
  // Pluins que utilizaremos
  plugins: [
    new HtmlWebpackPluing([
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html'
      }
    ])
  ]
}

