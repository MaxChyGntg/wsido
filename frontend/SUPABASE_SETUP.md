# Supabase Setup & Connection Guide

## 📁 Project Structure Analysis

```
wsido/                          # Main React Native + Expo app
├── src/
│   ├── app/                    # Main app screens
│   │   ├── _layout.tsx         # App layout/routing setup
│   │   ├── index.tsx           # Home screen
│   │   └── global.css          # Global styling
│   ├── components/             # Reusable components
│   ├── utils/
│   │   └── supabase.ts         # Supabase client configuration ✅
│   └── uniwind-types.d.ts      # TypeScript types
├── supabase/
│   ├── config.toml             # Local Supabase configuration
│   └── tests/database/         # Database tests
├── .env                        # Environment variables (CONFIGURED) ✅
├── package.json                # Dependencies
└── tsconfig.json               # TypeScript config
```

## ✅ Current Setup Status

### Connected Services:

- ✅ **Supabase JS Client**: Installed (`@supabase/supabase-js@^2.106.2`)
- ✅ **Environment Variables**: Configured in `.env`
- ✅ **Client File**: `src/utils/supabase.ts` ready to use
- ✅ **Supabase CLI**: Local setup with `config.toml`
- ✅ **URL Polyfill**: Installed for React Native compatibility

### Configuration:

- **Remote URL**: `https://bqxhyykmoqsqgpftfpyz.supabase.co`
- **Project ID**: `wsido`
- **API Port** (local): `54321`
- **DB Port** (local): `54322`

## 🚀 How to Use Supabase in Your App

### 1. **Import the Supabase Client**

```typescript
import { supabase } from "../utils/supabase";
```

### 2. **Example: Fetch Data**

```typescript
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';

export default function DataScreen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from('your_table_name')
        .select('*');

      if (error) throw error;
      setData(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Your UI here
  );
}
```

### 3. **Example: Authentication**

```typescript
const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) console.error("Error:", error);
  return data;
};

const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) console.error("Error:", error);
  return data;
};

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.error("Error:", error);
};
```

### 4. **Example: Real-time Subscriptions**

```typescript
const subscribeToTable = (
  tableName: string,
  callback: (payload: any) => void,
) => {
  return supabase
    .channel(`public:${tableName}`)
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: tableName,
      },
      callback,
    )
    .subscribe();
};
```

## 🧪 Testing Your Database Schema

### Prerequisites:

```bash
# Install Supabase CLI globally (if not already)
npm install -g supabase

# Or use npx
npx supabase --version
```

### Local Development Setup:

#### 1. **Start Local Supabase**

```bash
cd wsido/
supabase start
```

This will:

- Start PostgreSQL database on port `54322`
- Start API server on port `54321`
- Start Supabase Studio on port `54323` (http://localhost:54323)
- Generate local credentials

#### 2. **View Supabase Studio**

Open browser to: `http://localhost:54323`

- Browse tables and data
- Run SQL queries
- Test API endpoints

### Database Testing Methods:

#### **Method 1: Using Supabase Studio (GUI)**

1. Start local Supabase: `supabase start`
2. Open: `http://localhost:54323`
3. Go to "SQL Editor"
4. Create and run test queries

#### **Method 2: Direct Database Tests (SQL)**

Create test file: `supabase/tests/database/my_table.test.sql`

```sql
begin;
  select plan(3); -- 3 assertions

  -- Test 1: Table exists
  select has_table(
    'public',
    'my_table',
    'Table my_table should exist'
  );

  -- Test 2: Column exists
  select has_column(
    'public',
    'my_table',
    'id',
    'Column id should exist'
  );

  -- Test 3: Insert data
  INSERT INTO public.my_table (name, email)
    VALUES ('Test User', 'test@example.com');

  select is(
    (SELECT COUNT(*) FROM public.my_table),
    1::bigint,
    'Should have 1 record'
  );

  select * from finish();
rollback;
```

Run tests:

```bash
supabase test db
```

#### **Method 3: TypeScript Client Testing**

Create file: `src/utils/__tests__/supabase.test.ts`

```typescript
import { supabase } from "../supabase";

export const testSupabaseConnection = async () => {
  console.log("🧪 Testing Supabase Connection...");

  try {
    // Test 1: Query auth users (public schema)
    const { data, error } = await supabase.auth.getUser();
    if (error)
      console.log("✓ Auth error expected (no session):", error.message);
    else console.log("✓ Connection successful");

    // Test 2: Query a table
    const { data: tableData, error: tableError } = await supabase
      .from("your_table")
      .select("*")
      .limit(1);

    if (tableError) {
      console.log("✗ Table query failed:", tableError);
    } else {
      console.log("✓ Table query successful:", tableData);
    }
  } catch (err) {
    console.error("✗ Test failed:", err);
  }
};
```

Call in your app:

```typescript
import { testSupabaseConnection } from "../utils/__tests__/supabase.test";

// In your component or app startup
useEffect(() => {
  testSupabaseConnection();
}, []);
```

### Quick Test Checklist:

```bash
# 1. Start local Supabase
cd wsido/
supabase start

# 2. Check if services are running
supabase status

# 3. Run database tests
supabase test db

# 4. (Optional) Push schema to Supabase
supabase db push

# 5. (Optional) Pull remote schema
supabase db pull

# 6. Stop when done
supabase stop
```

## 📊 Creating Your First Table

### Via Supabase Studio:

1. Start: `supabase start`
2. Open: `http://localhost:54323`
3. Go to "SQL Editor"
4. Run:

```sql
CREATE TABLE public.programming_paths (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  difficulty_level TEXT,
  estimated_hours INT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE public.programming_paths ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read" ON public.programming_paths
  FOR SELECT USING (true);
```

### Via Migration File:

Create: `supabase/migrations/[timestamp]_create_programming_paths.sql`

```sql
create table
  public.programming_paths (
    id bigserial primary key,
    title text not null,
    description text,
    difficulty_level text,
    estimated_hours integer,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now()
  ) tablespace pg_default;

alter table public.programming_paths enable row level security;

create policy "Allow public read" on public.programming_paths for
select
  using (true);
```

Then push:

```bash
supabase db push
```

## 🔐 Environment Variables

Your `.env` file is already configured:

```
EXPO_PUBLIC_SUPABASE_URL=https://bqxhyykmoqsqgpftfpyz.supabase.co
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_SBKr8qGIudGpi5EbAnzrUQ_3exYFDfC
```

These are automatically loaded by Expo. For additional environments:

**`.env.local`** (local testing - ignored by git):

```
EXPO_PUBLIC_SUPABASE_URL=http://localhost:54321
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 📚 Useful Commands

```bash
# Start development
npm start

# Build for iOS
npm run ios

# Build for Android
npm run android

# Build for web
npm run web

# Local Supabase
supabase start           # Start local instance
supabase stop            # Stop local instance
supabase status          # Check status
supabase db push         # Push migrations to remote
supabase db pull         # Pull remote schema locally
supabase test db         # Run database tests
supabase migration new   # Create new migration
```

## 🛠️ Troubleshooting

### Issue: `supabase` command not found

```bash
npm install -g supabase
# Or use npx
npx supabase --version
```

### Issue: Port already in use

```bash
supabase stop
# Or kill process on port 54321/54322/54323
lsof -i :54321
kill -9 <PID>
```

### Issue: Client initialization fails

- Check `.env` variables are correct
- Ensure `react-native-url-polyfill` is imported in `supabase.ts`
- Check network connectivity for remote Supabase

### Issue: Auth not persisting

- Ensure `expo-sqlite` is installed
- Check `localStorage` configuration in `supabase.ts`

## 🎯 Next Steps

1. **Create your database tables** based on app requirements
2. **Set up Row Level Security (RLS)** policies
3. **Implement authentication** screens
4. **Add real-time subscriptions** where needed
5. **Deploy migrations** to production
6. **Monitor with Supabase Dashboard**

## 📖 Documentation Links

- [Supabase JS Client](https://supabase.com/docs/reference/javascript/introduction)
- [Supabase CLI](https://supabase.com/docs/guides/cli)
- [Local Development](https://supabase.com/docs/guides/local-development)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Expo Integration](https://supabase.com/docs/guides/getting-started/quickstarts/react-native)
