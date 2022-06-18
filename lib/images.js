import path from "path";
import fs from "fs"

const imagesDirectory = path.join(process.cwd(), 'images')

function Test() {
    const fileNames = fs.readdirSync(imagesDirectory);

    const allImages = fileNames.map(image => {

        const name = image.split('#')[0].split('_').join(' ');
        const title = image.split('#')[1].split('_').join(' ');
        const id = image.split('#')[2].split('.')[0];
        return {
            id,
            name,
            title,
            image,
        }
    })

    return allImages.sort((a, b) => {
        if(a.id < b.id) return -1;
        else if(a.id > b.id) return 1;
        else return 0;
    });
}

export default Test;