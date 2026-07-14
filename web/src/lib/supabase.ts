import { createClient } from "@supabase/supabase-js";

// Public, read-only key — safe for the browser.
// Any privileged writes go through /api/* (Netlify Functions) instead.
const url = import.meta.env.VITE_SUPABASE_URL as string;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = url && anonKey ? createClient(url, anonKey) : null;
