
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLUC_SUPABASE_API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)