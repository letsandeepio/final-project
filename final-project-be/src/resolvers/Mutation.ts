import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const hashedPassword = (password: any) => {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
};

async function signup(parent: any, args: any) {
  console.log(args.name, args.password, args.email);

  const hashPw = hashedPassword(args.password);

  await prisma.users.create({
    data: {
      name: args.name,
      password: hashPw,
      email: args.email
    }
  });

  return {
    token: '32453'
  };
}

function login() {
  return 'hello you are logged in ';
}

export default {
  login,
  signup
};
