if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://dipaksingbhukwal:Sadguru@24@ds157853.mlab.com:57853/vidjot-csuf-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
