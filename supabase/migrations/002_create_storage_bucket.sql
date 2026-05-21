-- Create storage bucket for WBGH documents
INSERT INTO storage.buckets (id, name, public)
VALUES ('wbgh-documents', 'wbgh-documents', true)
ON CONFLICT (id) DO NOTHING;

-- Allow anonymous users to upload files
CREATE POLICY "Allow anonymous uploads"
  ON storage.objects
  FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'wbgh-documents');

-- Allow public access to download files
CREATE POLICY "Allow public downloads"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'wbgh-documents');

-- Only authenticated users can delete files
CREATE POLICY "Authenticated users can delete"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'wbgh-documents');
