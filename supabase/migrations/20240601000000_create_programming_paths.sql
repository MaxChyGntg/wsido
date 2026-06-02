-- Create programming_paths table for WSIDO app
-- This table stores different programming learning paths

BEGIN;

-- Create the main table
CREATE TABLE IF NOT EXISTS public.programming_paths (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  difficulty_level TEXT CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  estimated_hours INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Enable Row Level Security
ALTER TABLE public.programming_paths ENABLE ROW LEVEL SECURITY;

-- Create indexes for performance
CREATE INDEX idx_programming_paths_difficulty ON public.programming_paths(difficulty_level);
CREATE INDEX idx_programming_paths_created_at ON public.programming_paths(created_at DESC);
CREATE INDEX idx_programming_paths_created_by ON public.programming_paths(created_by);

-- RLS Policies
-- Allow public to read all paths
CREATE POLICY "Allow public read" ON public.programming_paths
  FOR SELECT
  USING (true);

-- Allow authenticated users to create paths
CREATE POLICY "Allow authenticated users to create" ON public.programming_paths
  FOR INSERT
  WITH CHECK (auth.uid() = created_by);

-- Allow users to update their own paths
CREATE POLICY "Allow users to update own paths" ON public.programming_paths
  FOR UPDATE
  USING (auth.uid() = created_by)
  WITH CHECK (auth.uid() = created_by);

-- Allow users to delete their own paths
CREATE POLICY "Allow users to delete own paths" ON public.programming_paths
  FOR DELETE
  USING (auth.uid() = created_by);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_programming_paths_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER programming_paths_timestamp
BEFORE UPDATE ON public.programming_paths
FOR EACH ROW
EXECUTE FUNCTION public.update_programming_paths_timestamp();

-- Insert sample data for testing
INSERT INTO public.programming_paths (title, description, difficulty_level, estimated_hours)
VALUES
  (
    'Web Development with Kontol',
    'Learn modern web development using React, a popular JavaScript library for building user interfaces.',
    'intermediate',
    80
  ),
  (
    'Mobile Development with React Native',
    'Build cross-platform mobile applications using React Native and JavaScript.',
    'intermediate',
    60
  ),
  (
    'Backend Development with Node.js',
    'Learn server-side development with Node.js and Express.js framework.',
    'intermediate',
    70
  ),
  (
    'Python Fundamentals',
    'Start your programming journey with Python, the most beginner-friendly language.',
    'beginner',
    40
  ),
  (
    'Advanced TypeScript',
    'Master TypeScript for building large-scale, type-safe applications.',
    'advanced',
    50
  )
ON CONFLICT DO NOTHING;

COMMIT;
