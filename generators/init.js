const createFile = require('../helpers/createFile');
const fs = require('fs');

const init_generator = async () => {
  await console.log('first')
  await fs.readFile(__dirname+'/../.env.sample', 'utf8', (err, data) => {
    console.log('second')
    console.log(err, data)
    if(err) return err;
    createFile(`/.marc.env`, data, () => {})
  })
}

module.exports = init_generator