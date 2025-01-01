import axios from 'axios';
import fs from 'fs';

const downloadImage = async () => {
    try {
        const response = await axios.get('url', { responseType: 'stream' });
        const writer = fs.createWriteStream('img.jpg');

        response.data.pipe(writer);

        writer.on('finish', () => {
            console.log('Image downloaded successfully');
        })
        writer.on('error', (error) => {
            console.error(error);
        })
    } catch (error) {
        console.error(error)
    }
}

downloadImage()