const { writeFile } = require("fs/promises");


const WriteFile = async (path, data) => {
    try {
        await writeFile(path, JSON.stringify(data, null, 2), "utf-8");
    } catch (err) {
        console.log("Error writing file:", err);
    }
};

module.exports = WriteFile;