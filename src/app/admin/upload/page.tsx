'use client';

import { useState, useRef } from 'react';

export default function UploadPage() {
  const [uploading, setUploading] = useState(false);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleUpload() {
    const file = inputRef.current?.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    setProgress(`Uploading ${file.name} (${(file.size / 1024 / 1024).toFixed(1)} MB)...`);

    try {
      const response = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
        method: 'POST',
        body: file,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const blob = await response.json();
      setBlobUrl(blob.url);
      setProgress('Upload complete!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
      setProgress('');
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="min-h-screen bg-diablo-dark text-white flex items-center justify-center p-8">
      <div className="max-w-lg w-full space-y-6">
        <h1 className="text-2xl font-bold text-diablo-gold uppercase tracking-wider">
          Video Upload
        </h1>
        <p className="text-gray-400 text-sm">
          Upload video files to Vercel Blob storage. The returned URL can be used in the site.
        </p>

        <input
          ref={inputRef}
          type="file"
          accept="video/*"
          className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-diablo-red file:text-white file:font-semibold hover:file:bg-red-700 file:cursor-pointer"
        />

        <button
          onClick={handleUpload}
          disabled={uploading}
          className="w-full py-3 bg-diablo-red text-white font-bold uppercase tracking-wider rounded disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Upload to Blob'}
        </button>

        {progress && (
          <p className="text-diablo-gold text-sm">{progress}</p>
        )}

        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}

        {blobUrl && (
          <div className="bg-gray-800 p-4 rounded space-y-2">
            <p className="text-green-400 text-sm font-bold">Blob URL (use this in Hero.tsx):</p>
            <code className="block text-xs text-gray-300 break-all select-all bg-gray-900 p-2 rounded">
              {blobUrl}
            </code>
            <video
              src={blobUrl}
              controls
              className="w-full rounded mt-2"
            />
          </div>
        )}
      </div>
    </div>
  );
}
