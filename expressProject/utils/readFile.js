const {readfile} = require("fs/promises");

const readFile = async (path) => {
    try {
        const data = await readfile(path, "utf-8");
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

module.export = readFile;