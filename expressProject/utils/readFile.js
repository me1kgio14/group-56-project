const { readFile } = require("fs/promises");

const ReadFile = async (path) => {
    try {
        const data = await readFile(path, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        console.log("Error reading file:", err);
        return [];
    }
};

module.exports = ReadFile;