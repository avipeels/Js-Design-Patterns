const PeristenceManager =  require("./PersistenceManager");

class Journal {
    constructor() {
        this.entries = {};
    }

    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${c}:${text}`;
        this.entries[c] = entry;
        return c;
    }

    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }
}
Journal.count = 0;

const j =  new Journal();
j.addEntry('I played badminton today');
j.addEntry('I bought carrom board today');
const pm = new PeristenceManager();
pm.saveToFile(j, '/Users/apeeluk/Desktop/journal.txt');
console.log(j.toString());