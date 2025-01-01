import fs from 'fs/promises';

export const fileOperation = async (operation, fileName, content = null) => {
  try {
    let data;
    switch (operation) {
      case 'read':
        data = await fs.readFile(fileName, 'utf-8');
        break;
      case 'write':
        data = await fs.writeFile(fileName, content);
        break;
      default:
        console.log('Please input a valid file operation or file name');
        console.log('Valid file operations: read, write');
        break;
    }
    return data;
  } catch (error) {
      console.error(error);
  }
}