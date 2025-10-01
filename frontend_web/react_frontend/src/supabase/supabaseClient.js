import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ovqigziznbqcbouegafq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92cWlneml6bmJxY2JvdWVnYWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMjg1MzYsImV4cCI6MjA3MzkwNDUzNn0.OTKlFhbIkz8mW4NbKMzOKWmWNvE7gCVKQIdVD0e0F2g";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);