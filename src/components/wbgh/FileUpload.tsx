'use client';

import { Upload, FileText, X, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  acceptedFormats?: string[];
  maxSizeMB?: number;
  label?: string;
  required?: boolean;
}

export default function FileUpload({
  onFileSelect,
  acceptedFormats = ['.pdf', '.doc', '.docx'],
  maxSizeMB = 10,
  label = 'Upload Document',
  required = false
}: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);

  const maxSizeBytes = maxSizeMB * 1024 * 1024;

  const validateFile = (file: File): boolean => {
    // Check file size
    if (file.size > maxSizeBytes) {
      setError(`File size must be less than ${maxSizeMB}MB`);
      return false;
    }

    // Check file type
    const fileExt = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!acceptedFormats.includes(fileExt)) {
      setError(`Only ${acceptedFormats.join(', ')} files are allowed`);
      return false;
    }

    setError('');
    return true;
  };

  const handleFileSelect = (file: File) => {
    if (validateFile(file)) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    onFileSelect(null);
    setError('');
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {!required && <span className="text-gray-400">(Optional)</span>}
      </label>

      <div
        className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : error
            ? 'border-red-300 bg-red-50'
            : selectedFile
            ? 'border-green-500 bg-green-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {selectedFile ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-green-600" />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
                <p className="text-xs text-gray-500">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="p-1 rounded-full hover:bg-red-100 transition-colors"
            >
              <X className="w-5 h-5 text-red-600" />
            </button>
          </div>
        ) : (
          <div>
            <Upload className={`mx-auto h-12 w-12 ${error ? 'text-red-400' : 'text-gray-400'}`} />
            <div className="mt-4">
              <label htmlFor="file-upload" className="cursor-pointer">
                <span className="text-blue-600 hover:text-blue-700 font-medium">
                  Choose a file
                </span>
                <input
                  id="file-upload"
                  type="file"
                  className="sr-only"
                  accept={acceptedFormats.join(',')}
                  onChange={handleInputChange}
                />
              </label>
              <p className="text-sm text-gray-500 mt-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {acceptedFormats.join(', ').toUpperCase()} up to {maxSizeMB}MB
            </p>
          </div>
        )}
      </div>

      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
