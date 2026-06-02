# 🚀 Quick Start Guide - Supabase Integration

## Summary

Your WSIDO app is **80% ready** for Supabase! Environment variables and packages are already configured.

## ✅ What's Already Done

- ✅ Supabase JS client installed
- ✅ `.env` with credentials configured
- ✅ Client file (`src/utils/supabase.ts`) ready
- ✅ React Native URL polyfill installed
- ✅ SQLite localStorage for auth persistence
- ✅ Test file created

## ⚡ What You Need To Do

### 1️⃣ **Create Your First Table** (5 mins)

**Option A: Using Supabase Studio (Easiest)**

```bash
# Start local Supabase
cd wsido/
supabase start

# Open browser
open http://localhost:54323

# Click "SQL Editor" → Run:
CREATE TABLE public.programming_paths (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  difficulty_level TEXT,
  estimated_hours INT,
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE public.programming_paths ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read" ON public.programming_paths FOR SELECT USING (true);
```

**Option B: Using Migrations**

```bash
# Create migration file
supabase migration new create_programming_paths

# Edit: supabase/migrations/[timestamp]_create_programming_paths.sql
# (Add the SQL above)

# Push to database
supabase db push
```

### 2️⃣ **Test Your Connection** (2 mins)

```bash
# In your app terminal
npm start

# Then in another terminal, run tests:
npx ts-node src/utils/__tests__/supabase.test.ts
```

Or add to your app component:

```typescript
import { runSupabaseTests } from '../utils/__tests__/supabase.test';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    runSupabaseTests(); // Runs in dev mode
  }, []);

  return (/* Your JSX */);
}
```

### 3️⃣ **Use Supabase in Your Components** (5 mins)

```typescript
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';

export default function PathsScreen() {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    const fetchPaths = async () => {
      const { data, error } = await supabase
        .from('programming_paths')
        .select('*');

      if (error) console.error('Error:', error);
      else setPaths(data || []);
    };

    fetchPaths();
  }, []);

  return (
    // Render your paths here
  );
}
```

## 📋 Commands Cheat Sheet

```bash
# Supabase Local Development
supabase start                # Start local instance
supabase stop                 # Stop local instance
supabase status              # Check services
supabase db reset            # Reset database
supabase db push             # Push local migrations to remote
supabase db pull             # Pull remote schema locally
supabase migration new <name> # Create new migration
supabase test db             # Run database tests

# Expo App
npm start                    # Start development server
npm run ios                 # Build for iOS
npm run android             # Build for Android
npm run web                 # Build for web
```

## 🧪 Testing Checklist

- [ ] `supabase start` works
- [ ] Can access http://localhost:54323
- [ ] Created at least one table
- [ ] `supabase test db` passes
- [ ] `runSupabaseTests()` shows "All tests passed"
- [ ] Can fetch data from your table
- [ ] App runs without errors: `npm start`

## 🔗 Useful Links

- **Supabase Studio** (local): http://localhost:54323
- **Remote Dashboard**: https://app.supabase.com
- **Documentation**: https://supabase.com/docs

## ❓ Issues?

1. **Port in use?**

   ```bash
   supabase stop
   # Or kill specific port
   lsof -i :54321 | grep LISTEN | awk '{print $2}' | xargs kill -9
   ```

2. **Missing `supabase` command?**

   ```bash
   npm install -g supabase
   # Or use npx
   npx supabase --version
   ```

3. **Connection fails?**
   - Check `.env` file has correct credentials
   - Ensure network connectivity
   - Check `supabase status` output

## 📚 Full Documentation

See **`SUPABASE_SETUP.md`** for detailed guide on:

- Complete API usage examples
- Authentication setup
- Real-time subscriptions
- Database testing methods
- Troubleshooting

---

**You're ready to build! 🎉**
