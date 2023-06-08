//TODO:Devices Responsive
/*
Mobile: 360 x 640.
Mobile: 375 x 667.
Mobile: 360 x 720.
iPhone X: 375 x 812.
Pixel 2: 411 x 731.
Tablet: 768 x 1024.
Laptop: 1366 x 768.
High-res laptop or desktop: 1920 x 1080.


@media only screen and (${devices. }) {

    }
*/

const breakpoints = {
    m1: '360px',
    m2: '375px',
    m3: '475px',
    m4: '575px',
    m5: '675px',
    
    tablet1: '720px',
    tablet2: '880px',
    tablet3: '980px',

    laptop1: '1080px',
    laptop2: '1266px',
    laptop3: '1500px',
    laptop4: '1600px',
    laptop5: '1720px',


    high1: '1704px',
    high2: '1874px',
    high3: '1954px',
    high4: '2157px'
};

export const devices = {
    m1: `( max-width: ${breakpoints.m1} )`,
    m2: `( max-width: ${breakpoints.m2} )`,
    m3: `( max-width: ${breakpoints.m3} )`,
    m4: `( max-width: ${breakpoints.m4} )`,
    m5: `( max-width: ${breakpoints.m5} )`,

    pixel2: `( max-width: ${breakpoints.pixel2} )`,
    tablet3: `( max-width: ${breakpoints.tablet3} )`,
    tablet2: `( max-width: ${breakpoints.tablet2} )`,
    tablet1: `( max-width: ${breakpoints.tablet1} )`,

    laptop: `( max-width: ${breakpoints.laptop} )`,
    laptop1: `( max-width: ${breakpoints.laptop1} )`,
    laptop2: `( max-width: ${breakpoints.laptop2} )`,
    laptop3: `( max-width: ${breakpoints.laptop3} )`,
    high: `( max-width: ${breakpoints.high} )`,
    high1: `( max-width: ${breakpoints.high} )`,
    high2: `( max-width: ${breakpoints.high2} )`
};
