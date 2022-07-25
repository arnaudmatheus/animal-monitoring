import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://cirgcnpfxvxlzlmbubjk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpcmdjbnBmeHZ4bHpsbWJ1YmprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTg2ODM4NTgsImV4cCI6MTk3NDI1OTg1OH0.iWUNacpLTe9A17xFjNCXq_R3AOd4qt1Gc4Ft498654g',
);
export default supabase;
