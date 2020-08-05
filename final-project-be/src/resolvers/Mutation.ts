import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { Context } from '../index';

import { APP_SECRET, getUserId } from '../helpers';

const hashedPassword = (password: any) => {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
};

async function signup(parent: any, args: any, context: any) {
  console.log(args.name, args.password, args.email);
  console.log(context.request.get('Client'));
  const hashPw = hashedPassword(args.password);
  const user = await context.prisma.users.create({
    data: {
      name: args.name,
      password: hashPw,
      email: args.email
    }
  });

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user
  };
}

async function login(parent: any, args: any, context: Context) {
  console.log(args);
  const user = await context.prisma.users.findOne({
    where: { email: args.email }
  });
  if (!user) {
    throw new Error('No such user found');
  }
  const valid = await bcrypt.compare(args.password, user.password);

  if (!valid) {
    throw new Error('Invalid password');
  }
  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user
  };
}

async function addActivity(parent: any, args: any, context: Context) {
  console.log(args)

  const activity = await context.prisma.activity.create({
    data: {
      title: args.title,
      category: args.category,
      duration: args.duration
    }
  })

  return {
    title: args.title,
    category: args.category,
    duration: args.duration
  };
};

export default {
  login,
  signup,
  addActivity
};
