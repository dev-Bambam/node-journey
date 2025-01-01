import fs from 'fs.promises';

const readFile = async (fileName) => {
    try {
        const data = await fs.readFile(fileName, 'utf-8');
        return data
    } catch (error) {
        console.error(error)
    }
};

const writeFile = async (fileName) => {
    try {
        const data = await fs.writeFile(fileName, 'utf-8');
        return data;
    } catch (error) {
        console.error(error)
    }
}