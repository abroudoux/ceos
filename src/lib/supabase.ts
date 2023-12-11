import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://jdwmjhumkfwggoxiudxm.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impkd21qaHVta2Z3Z2dveGl1ZHhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyOTM5ODksImV4cCI6MjAxNzg2OTk4OX0.KpRrXO-ujcDQ_gmUXkfwvP6okqW5-MkstqeO-Jl64JM";

export const supabase = createClient(supabaseUrl, supabaseKey);
