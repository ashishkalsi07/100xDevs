const fs = require('fs');

function removeExtraSpaces(filePath) {
    // Read the content of the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        
        // Remove extra spaces using regular expressions
        const modifiedContent = data.replace(/\s+/g, ' ');

        // Write the modified content back to the file
        fs.writeFile(filePath, modifiedContent, 'utf8', err => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('Extra spaces removed and written back to the file.');
        });
    });
}

// Example usage
const filePath = 'd:/DSA+Mern+Devops_Course/Javascript/Week_2/Medium/temp.txt';
// Replace 'example.txt' with the path to your file
removeExtraSpaces(filePath);
