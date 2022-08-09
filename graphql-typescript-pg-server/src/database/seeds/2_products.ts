import * as Knex from "knex";

export const seed = async (knex: Knex) => {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        { name: "product1", description: "Some description", type: "hazardous" },
        { name: "product2", description: "Some description", type: "nonhazardous" },
        { name: "product3", description: "Some description", type: "hazardous" },
        { name: "product4", description: "Some description", type: "nonhazardous" },
        { name: "product5", description: "Some description", type: "hazardous" },
        { name: "product6", description: "Some description", type: "nonhazardous" },
        { name: "product7", description: "Some description", type: "hazardous" },
        { name: "product8", description: "Some description", type: "nonhazardous" },
        { name: "product9", description: "Some description", type: "hazardous" },
        { name: "product10", description: "Some description", type: "nonhazardous" },
      ]);
    });
};
