import sanityClient from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    // projectId: process.env.REACT__APP__SANITY_PROJECT_ID,
    projectId: 'g1ieg9dt',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skBwhNySqGM6lpnB3Y1JgQsNTLgu5dwgVY22Ru8Zd3wmWM4orXrqESjXLAbO7lnBmR5UsggWQFxaoNbBNLoFuI2xNgI6sgbKYQdsXlH87pWstHzGyqQV3uD3wLmt8Jw1daErKW1WZE4xEREVHkPzMeZKCmDBaVaapekhmeFLUUmmBHjKGbCe',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) =>  builder.image(source);