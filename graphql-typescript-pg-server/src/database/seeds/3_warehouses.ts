import * as Knex from "knex";

export const seed = async (knex: Knex) => {
  // Deletes ALL existing entries
  return knex("warehouses")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("warehouses").insert([
        { name: "Warehouse1", capacity: 500, type: "hazardous" },
        { name: "Warehouse2", capacity: 500, type: "nonhazardous" },
        { name: "Warehouse3", capacity: 500, type: "hazardous" },
        { name: "Warehouse4", capacity: 500, type: "nonhazardous" },
        { name: "Warehouse5", capacity: 500, type: "hazardous" },
      ]);
    });
};
