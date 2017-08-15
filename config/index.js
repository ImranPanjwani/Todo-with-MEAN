var configData = require('./config');

module.exports = {
    
    getDbConnectionString :function (){
        return configData.connectionString;
    }
}