import { fileOperation } from "./fileOp.js"
const readInputFile = async (inputFileName) => {
    try {
        const inputFileData = await fileOperation('read', inputFileName);
        return inputFileData;
    } catch (error) {
        console.error(`Error reading input file: ${error}`);
    }
};

const writeOutputFile = async (outputFileName, dataToWrite) => {
    try {
        await fileOperation('write', outputFileName, dataToWrite);
    } catch (error) {
        console.error(`Error writing output file: ${error}`);
    }
};

const app = async () => {
    const inputFileName = "./input.txt";
    const outputFileName = "./output.txt";
    const dataToWrite = await readInputFile(inputFileName);
    await writeOutputFile(outputFileName, dataToWrite);
    console.log(`Data: ${dataToWrite} written to ${outputFileName}`);
};
app()