var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts: [
    'http://localhost:32769/',
    //'https://[username]:[password]@[server]:[port]/'
  ]
});

module.exports = client;