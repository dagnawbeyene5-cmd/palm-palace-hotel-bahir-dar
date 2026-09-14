# Production launch checklist

1. Hotel owner confirms room names, prices, breakfast quantities, check-in/out policy and contact details.
2. Hotel obtains an approved online payment merchant integration and its API/webhook documentation.
3. Configure payment endpoint/key/webhook secret in environment variables.
4. Test exact-amount payment, duplicate webhook, failed payment, timeout and refund flows.
5. Decide CNET integration path with the hotel's CNET vendor. Do not scrape or write to CNET without authorization.
6. Move the persistent store to managed PostgreSQL/Supabase for multi-instance production; enforce database constraints for room overlap.
7. Put the app behind HTTPS and secure cookies/session storage.
8. Add automated backups and monitoring.
9. Replace any remaining photo with final hotel-approved photography.
10. Connect the hotel-owned domain and submit the final sitemap.
