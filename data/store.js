const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.json');

let data = { users: [], tasks: [] };

if (fs.existsSync(dataFile)) {
    data = JSON.parse(fs.readFileSync(dataFile));
}

function save() {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

module.exports = {
    data,
    save
};
