import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function submitLead(data: {
  zip_code: string;
  home_type?: string;
  estimated_bill?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}) {
  const { data: result, error } = await supabase
    .from('leads')
    .insert([data])
    .select();

  if (error) {
    console.error('Error submitting lead:', error);
    throw error;
  }

  return result;
}
