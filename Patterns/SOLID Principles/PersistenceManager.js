const fs = require('fs');

class PeristenceManager {
      saveToFile(journal, fileName) {
            fs.writeFileSync(fileName, journal.toString());
      }
}

module.exports =  PeristenceManager ;