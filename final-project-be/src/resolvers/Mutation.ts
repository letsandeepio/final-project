import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { APP_SECRET, getUserId } from '../helpers';
import { Context } from 'graphql-yoga/dist/types';

const hashedPassword = (password: any) => {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
};

async function signup(parent: any, args: any, context: any) {
  console.log(`Signup received from ${context.request.get('Client')}`);

  const hashPw = hashedPassword(args.password);
  let user;
  let token;
  let error = '';

  try {
    user = await context.prisma.users.create({
      data: {
        name: args.name,
        password: hashPw,
        email: args.email
      }
    });
    token = jwt.sign({ userId: user.id }, APP_SECRET);
  } catch (e) {
    error = e.message;
    console.log(error);
  }
  return {
    token,
    user,
    error
  };
}

async function login(parent: any, args: any, context: any) {
  console.log(`Login received from ${context.request.get('Client')}`);

  let error = '';
  let token = '';

  const user = await context.prisma.users.findOne({
    where: { email: args.email }
  });

  if (user) {
    const valid = await bcrypt.compare(args.password, user.password);
    if (valid) {
      token = jwt.sign({ userId: user.id }, APP_SECRET);
    } else {
      error = 'Invalid Credentials.';
    }
  } else {
    error = "User doesn't exist.";
  }

  return {
    token,
    user,
    error
  };
}

async function addActivity(parent: any, args: any, context: any) {
  console.log('An activity-add attempt has been made. Arguments:', args);
  const userID = getUserId(context);
  const activity = await context.prisma.activity.create({
    data: {
      title: args.title,
      category: args.category,
      duration: args.duration,
      image_url: args.image_url,
      users: { connect: { id: userID } }
    }
  });
  return activity;
}

async function changeStatus(parent: any, args: any, context: any) {
  const { id, status } = args;
  const activity = await context.prisma.activity.update({
    where: { id },
    data: { status }
  });
  return activity;
}

async function deleteActivity(parent: any, args: any, context: any) {
  const { id } = args;
  let activity = {
    id
  };

  try {
    activity = await context.prisma.activity.delete({
      where: { id }
    });
  } catch (error) {
    console.log(error);
  }
  return activity;
}

export default {
  login,
  signup,
  addActivity,
  changeStatus,
  deleteActivity
};
