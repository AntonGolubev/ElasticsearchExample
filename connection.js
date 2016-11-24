var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts: [
    'http://localhost:32771/',
    //'https://[username]:[password]@[server]:[port]/'
  ]
});

module.exports = client;