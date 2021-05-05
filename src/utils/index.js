import { format } from 'date-fns';

// eslint-disable-next-line import/prefer-default-export
export const dateToString = (date) => {
  if (!date) { return ''; }
  return format(date, 'yyyy年M月d日 HH時mm分');
};

export const translateErrorMessages = (code) => {
  const error = { title: 'エラー', description: '少し時間が経ってからお試しください' };
  switch (code) {
    case 'auth/invalid-email':
      error.description = 'メールアドレスが不正です。';
      break;
    case 'auth/user-disabled':
      error.description = 'アカウントが無効です。';
      break;
    case 'auth/user-not-found':
      error.description = 'ユーザーが見つかりませんでした。';
      break;
    case 'auth/wrong-passowrd':
      error.description = 'パスワードが間違っています。';
      break;
    case 'auth/email-already-in-use':
      error.description = 'メールアドレスが既に使用されています。';
      break;
    case 'auth/operation-not-allowed':
      error.description = 'ユーザーが見つかりませんでした。';
      break;
    case 'auth/weak-passowrd':
      error.description = 'パスワードが簡単すぎます。';
      break;
    default:
  }
  return error;
};
