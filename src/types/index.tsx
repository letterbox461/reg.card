interface UserInfoInterface {
  name: string;
  surname: string;
  email: string;
  password: string;
  repeatPassword: string;
  [index: string]: string;
}

export default UserInfoInterface;
