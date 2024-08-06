// Global constants
export const CHATS = [785206267];

export const ENV_NAMES = {
  DB_URL: 'DB_URL',
  TELEGRAM_BOT_TOKEN: 'TELEGRAM_BOT_TOKEN',
  NODE_ENV: 'NODE_ENV',
  ENV_PATH: (mode?: 'development' | 'production' | 'test' | string) => {
    if (!mode) return '.env';
    return `.env.${mode}`;
  },
  PORT: 'PORT',
  SECRET_KEY: 'SECRET_KEY',
  JWT_EXPIRES: 'JWT_EXPIRES',
  JWT_ACCESS_KEY: 'JWT_ACCESS_KEY',
  JWT_REFRESH_KEY: 'JWT_REFRESH_KEY',
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASS: 'SMTP_PASS',
  ADMIN_ID: 'ADMIN_ID',
  SERVER_URL: 'SERVER_URL',
  CLIENT_URL: 'CLIENT_URL',
};
