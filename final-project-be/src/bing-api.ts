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

        resolve([
          body.value[0].thumbnailUrl,
          body.value[1].thumbnailUrl,
          body.value[2].thumbnailUrl
        ]);
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