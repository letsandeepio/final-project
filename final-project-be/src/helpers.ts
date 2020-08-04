import jwt from 'jsonwebtoken';

const APP_SECRET = 'quick brown fox jumps';

function getUserId(context: any) {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, APP_SECRET) as any;
    return userId;
  }
  throw new Error('Not authenticated');
}

export { APP_SECRET, getUserId };
