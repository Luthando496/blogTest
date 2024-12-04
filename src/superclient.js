import { createClient } from '@supabase/supabase-js';

// Replace these with your Supabase project details
// const SUPABASE_URL = 'https://your-project-url.supabase.co'; // Your Supabase project URL
// const SUPABASE_ANON_KEY = 'your-anon-key'; // Your Supabase API Key
const REACT_APP_SUPABASE_URL="https://gevtbgizoupcsugvmbcz.supabase.co";
const REACT_APP_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdldnRiZ2l6b3VwY3N1Z3ZtYmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3MDk3MTEsImV4cCI6MjA0ODI4NTcxMX0.LOolJknFI2lfqCMwVqq-iie4co9UssOBWs-bRWioFs0";

export const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY);