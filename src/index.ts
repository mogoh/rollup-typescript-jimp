import Jimp from 'jimp/es';

// open a file called "lenna.png"
Jimp.read('lenna.png')
    .then((lenna) => {
        return lenna
            .resize(256, 256) // resize
            .quality(60) // set JPEG quality
            .greyscale() // set greyscale
            .write('lena-small-bw.jpg'); // save
    })
    .catch(console.error);
