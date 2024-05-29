import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yossejxyrwmnhxpigiar.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlvc3Nlanh5cndtbmh4cGlnaWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1OTQxMzUsImV4cCI6MjAzMTE3MDEzNX0.wl-qlHjmxHYtOF9nFEPbzXhmZzhh3IyYYr5bTgxUdnM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
