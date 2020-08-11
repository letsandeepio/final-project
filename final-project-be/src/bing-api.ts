import https from 'https';

const subscriptionKey = process.env.BING_API_KEY;

export default function getThreeImagesFromBing(term: any) {
  return new Promise((resolve, reject) => {
    const host = 'api.cognitive.microsoft.com';
    const path = '/bing/v7.0/images/search';

    const requestParams = {
      method: 'GET',
      hostname: host,
      path:
        path +
        '?q=' +
        encodeURIComponent(term) +
        '&license=' +
        encodeURIComponent('public'),
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey
      }
    };

    const responseHandler = (response: any) => {
      let body: any = '';
      response.on('data', (d: any) => {
        body += d;
      });
      response.on('end', () => {
        body = JSON.parse(body);
        if (body.value.length > 10) {
          body.value.splice(10);
        }
        const thumbnails: any = [];
        for (let i = 0; i < body.value.length; i++) {
          thumbnails.push(body.value[i].thumbnailUrl);
        }
        resolve(
          body
            ? (thumbnails.length > 0 ? thumbnails : null)
            : null
        );
      });
    };

    try {
      const req = https.request(requestParams, responseHandler);
      req.end();
    } catch (error) {
      reject(error);
    }
  });
}
