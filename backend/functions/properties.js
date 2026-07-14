// GET /api/properties            -> list properties (supports ?city= & ?type=)
// GET /api/properties?id=xyz     -> single property
const { getSupabaseClient } = require("./_supabase");

exports.handler = async (event) => {
  try {
    const supabase = getSupabaseClient();
    const { id, city, type } = event.queryStringParameters || {};

    let query = supabase.from("properties").select("*");
    if (id) query = query.eq("id", id).single();
    if (city) query = query.eq("city", city);
    if (type) query = query.eq("type", type);

    const { data, error } = await query;
    if (error) throw error;

    return {
      statusCode: 200,
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
