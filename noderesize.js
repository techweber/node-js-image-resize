const sharp = require('sharp');

// original image
let originalImage = 'original-image.jpg';

// file name of the resized image
let outputImage = 'resized-image.jpg';

sharp(originalImage).resize({height:100,width:100}).toFile(outputImage)
.then(function(newFileInfo){
	console.log("Image resized");
})
.catch(function(err){
	console.log("Got Error");
})