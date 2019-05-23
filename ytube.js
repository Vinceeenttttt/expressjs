const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

ytdl('https://www.youtube.com/watch?v=w-HYZv6HzAs', {quality: '250'})
  .pipe(fs.createWriteStream('video.mp4a'));
  
/*
 ytdl.getInfo('https://www.youtube.com/watch?v=w-HYZv6HzAs')
    .then(res => {
        //console.log(res)
    })
    .catch(err => console.log(err))
*/