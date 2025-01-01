import fs from 'fs.promises';

export const fileOperation = async (operation, fileName) => {
  try {
    switch (operation) {
      case 'read':
        var data = await fs.readFile(fileName, 'utf-8');
        break;
      case 'write':
        var data = await fs.writeFile(fileName, 'utf-8')
      default:
        console.log('please input valid file operation or file name')
        console.log(`valid file operation\nread\nwrite`)
        break;
    }
  } catch (error) {
    return error
  }
  return data
}

