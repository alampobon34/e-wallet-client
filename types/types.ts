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

export interface Service {
  name: string;
  icon: string;
  bgColor: string;
}

export interface Route {
  id: number;
  routeName: string;
  path: string;
  userType: "COMMON" | "AGENT" | "USER" | "ADMIN" | "USER_AND_AGENT";
}

export interface User {
  _id: any;
  name: string;
  email: string;
  phone: string;
  pin: number;
  type: "USER" | "AGENT";
  active: "YES" | "NO";
  balance: number;
}
