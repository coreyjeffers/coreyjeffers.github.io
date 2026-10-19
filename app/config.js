// Public configuration only. Never put service-role, database or Stripe secrets here.
export const config = {
  apiBase: ['localhost','127.0.0.1'].includes(location.hostname) ? '' : 'https://hvsnzavyufcgewltkxnd.supabase.co/functions/v1/tournament',
  supabaseUrl: 'https://hvsnzavyufcgewltkxnd.supabase.co',
  publishableKey: 'sb_publishable_73V2UHlQfiUEbSBytmSf4A_3r5mIDPr',
};
