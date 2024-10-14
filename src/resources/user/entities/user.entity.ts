import { faker } from '@faker-js/faker';
import { UserEntity, UserModel } from '../interface/User';

export class User implements UserEntity {
  private randomUser(): UserModel {
    return {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      address: `${faker.location.street()}, ${faker.location.city()} ${faker.location.country()}`,
      phone: faker.phone.number({ style: 'national' }),
    };
  }

  getFakeUsers(userQty: number): UserModel[] {
    return faker.helpers.multiple(this.randomUser, {
      count: userQty,
    });
  }
}
