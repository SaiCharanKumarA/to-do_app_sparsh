var client = require('./trial.js');

client.indices.delete({index: 'user',type:'zaid',id:''},function(err,resp,status) {  
  console.log("delete :\n",resp);
});