import fs from 'fs';
import path from 'path';

export const saveClickData = (data) => {
    const filePath = path.join(__dirname, 'clickData.json');
    fs.readFile(filePath, 'utf8', (err, fileData) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        const clickData = JSON.parse(fileData || '[]');
        clickData.push(data);
        fs.writeFile(filePath, JSON.stringify(clickData, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
            }
        });
    });
};
