var config = {
   entry: './main.js',
	
   output: {
      path: __dirname,
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 5555
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react', 'stage-2']
            }
         }
      ]
   }
}

module.exports = config;