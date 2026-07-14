// POST /api/leads  -> stores a lead (contact form / property inquiry)
// body: { name, email, phone, message, propertyId? }
const { getSupabaseClient } = require("./_supabase");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const supabase = getSupabaseClient();
    const payload = JSON.parse(event.body || "{}");

    const { name, email, phone, message, propertyId } = payload;
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "name و email مطلوبان" }),
      };
    }

    const { data, error } = await supabase
      .from("leads")
      .insert([{ name, email, phone, message, property_id: propertyId }])
      .select();

    if (error) throw error;

    return {
      statusCode: 201,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
