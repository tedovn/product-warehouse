import * as Knex from "knex";

export const seed = async (knex: Knex) => {
  // Deletes ALL existing entries
  return knex("customers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("customers").insert([
        { customer_number: '359883232323', name: 'AGRO AD', city: 'Sofia', state: 'Sofia' },
        { customer_number: '359883232324', name: 'TEST AD', city: 'Varna', state: 'Varna' },
        { customer_number: '359883232325', name: 'TEST2 AD', city: 'Plovdiv', state: 'Plovdiv' },
        { customer_number: '359883232326', name: 'TEST3 EOOD', city: 'Varna', state: 'Varna' },
        { customer_number: '359883232327', name: 'TEST4 EOOD', city: 'Sofia', state: 'Sofia' }
      ]);
    });
};
