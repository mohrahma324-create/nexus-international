// Shared Supabase client for Netlify Functions.
// Uses the SERVICE key (never exposed to the browser) so functions can
// safely read/write protected tables.
const { createClient } = require("@supabase/supabase-js");

function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) {
    throw new Error("Supabase env vars are not configured on Netlify.");
  }
  return createClient(url, key);
}

module.exports = { getSupabaseClient };
