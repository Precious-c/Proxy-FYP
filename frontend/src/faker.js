import { faker } from "@faker-js/faker";
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

export function createTopService() {
  return {
    id: faker.string.uuid(),
    serviceName: faker.company.name(),
    providerName: faker.person.fullName(),
    img: "",
    price: faker.finance.amount(),
    url: "",
    rating: Math.ceil(Math.random() * 5),
  };
}
