/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    for (let i = 0; i < image.length; i++) {
        let line = image[i];
        for (let j = 0, k = line.length - 1; j <= k; j++, k--) {
            let t = line[j];
            line[j] = line[k];
            line[k] = t;

            if (line[j] === 0) {
                line[j] = 1;
            } else {
                line[j] = 0;
            }
            if(j!==k){
                if (line[k] === 0) {
                    line[k] = 1;
                } else {
                    line[k] = 0;
                }
            }
        }
    }

    return image;
};


image = flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]);

image.forEach(im => {
    im.forEach(i => {
        console.log(' ' + i);
    })
    console.log();
})