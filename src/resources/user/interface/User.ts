export interface UserModel {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
}

export interface UserResponse {
  users: UserModel[];
  count: number;
}

export interface UserEntity {
  getFakeUsers: (userQty: number) => UserModel[];
}
