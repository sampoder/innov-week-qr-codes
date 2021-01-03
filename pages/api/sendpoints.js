const AirtablePlus = require("airtable-plus");

export default async function handler(req, res) {
  const airtable = new AirtablePlus({
    baseID: "appCsa76vWjxslcuB",
    apiKey: process.env.AIRTABLE,
    tableName: "Table 2",
  });
  const change = await airtable.create({ House: req.query.house.toLocaleUpperCase(), Amount: parseInt(req.query.points) });
  res.send("Done!")
}
