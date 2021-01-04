const AirtablePlus = require("airtable-plus");

export default async function handler(req, res) {
  const {
    query: { slug },
  } = req
  const airtable = new AirtablePlus({
    baseID: "appCsa76vWjxslcuB",
    apiKey: process.env.AIRTABLE,
    tableName: "Table 1",
  });

  const data = await airtable.read({
    filterByFormula: `Slug = "${slug}"`,
    maxRecords: 1,
  });
  res.redirect(data[0].fields["Meme Image"][0].url)
}
