import 'expo-sqlite/localStorage/install';
import { createClient } from '@supabase/supabase-js';
const DB_URL = '.env.process.DB_URL'
const KEY = '.env.process.KEY'
const supabaseUrl = DB_URL;
const supabasePublishableKey = KEY!;

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: localStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
