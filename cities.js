const hawaiiCities = [
  "Aiea", "Ewa Beach", "Fort Shafter", "Haiku", "Haleiwa",
  "Hanalei", "Hanapepe", "Hawi", "Hilo", "Honokaa",
  "Honolulu", "Kahuku", "Kahului", "Kailua", "Kailua Kona",
  "Kalaheo", "Kamuela", "Kaneohe", "Kapaa", "Kapolei",
  "Kaunakakai", "Keaau", "Kealakekua", "Keauhou", "Kihei",
  "Koloa", "Kula", "Lahaina", "Laie", "Lawai",
  "Lihue", "Makawao", "Maunaloa", "Mililani", "Naalehu",
  "Pahoa", "Paia", "Pearl City", "Princeville", "Puunene",
  "Wahiawa", "Waialua", "Waianae", "Waikoloa", "Wailuku",
  "Waipahu",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < hawaiiCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(hawaiiCities[i]);
}

module.exports = { batches };
