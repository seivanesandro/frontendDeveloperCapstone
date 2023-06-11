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


@media only screen and (${devices. }) {}
*/

const breakpoints = {
    mobile: '330px',
    mobile1: '360px',
    mobile2: '375px',
    mobile3: '411px',
    mobile4: '475px',
    mobile5: '575px',
    mobile6: '675px',
    
    tablet1: '720px',
    tablet2: '880px',
    tablet3: '980px',

    laptop: '1080px',
    laptop1: '1266px',
    laptop2: '1500px',
    laptop3: '1550px',
    laptop4: '1600px',
    laptop5: '1720px',

    high1: '1704px',
    high2: '1874px',
    high3: '1954px',
    high4: '2157px'
};

const breakpointMDB={
    mb: '320px',
    sm: '540px',
    md: '720px',
    lg: '960px'
}

export const devices = {
    mb: `( max-width: ${breakpointMDB.mb} )`,
    sm: `( max-width: ${breakpointMDB.sm} )`,
    md: `( max-width: ${breakpointMDB.md} )`,
    lg: `( max-width: ${breakpointMDB.lg} )`,

    mobile: `( max-width: ${breakpoints.mobile} )`,
    mobile1: `( max-width: ${breakpoints.mobile1} )`,
    mobile2: `( max-width: ${breakpoints.mobile2} )`,
    mobile3: `( max-width: ${breakpoints.mobile3} )`,
    mobile4: `( max-width: ${breakpoints.mobile4} )`,
    mobile5: `( max-width: ${breakpoints.mobile5} )`,
    mobile6: `( max-width: ${breakpoints.mobile6} )`,

    tablet1: `( max-width: ${breakpoints.mobile6} )`,
    tablet2: `( max-width: ${breakpoints.mobile6} )`,
    tablet3: `( max-width: ${breakpoints.mobile6} )`,

    laptop: `( max-width: ${breakpoints.mobile6} )`,
    laptop1: `( max-width: ${breakpoints.mobile6} )`,
    laptop2: `( max-width: ${breakpoints.mobile6} )`,
    laptop3: `( max-width: ${breakpoints.mobile6} )`,
    laptop4: `( max-width: ${breakpoints.mobile6} )`,
    laptop5: `( max-width: ${breakpoints.mobile6} )`,

    high1: `( max-width: ${breakpoints.mobile6} )`,
    high2: `( max-width: ${breakpoints.mobile6} )`,
    high3: `( max-width: ${breakpoints.mobile6} )`,
    high4: `( max-width: ${breakpoints.mobile6} )`
};
