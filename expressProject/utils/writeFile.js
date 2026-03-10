const {writeFile} = require("fs/promises");

const writeFile = async (path, data) => {
    try {
        await writeFile(path, data, "utf-8");
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = writeFile
