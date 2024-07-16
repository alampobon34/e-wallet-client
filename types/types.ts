export type UserRegister = {
  name: string;
  email: string;
  phone: string;
  pin: number;
  confirmPin?: number;
  type: "USER" | "AGENT";
};

export type UserLogin = {
  email: string;
  phone: string;
  pin: number;
  loginType: "EMAIL" | "PHONE";
};
