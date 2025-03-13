"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImagePreviewProps {
  initialImageUrl?: string;
  imageInputId: string;
}

const ImagePreview = ({
  initialImageUrl = "",
  imageInputId,
}: ImagePreviewProps) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [isValidImage, setIsValidImage] = useState(!!initialImageUrl);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Listen for changes to the input field
    const imageInput = document.getElementById(
      imageInputId
    ) as HTMLInputElement;

    const handleInputChange = () => {
      const newUrl = imageInput.value;
      setImageUrl(newUrl);

      if (newUrl) {
        setIsLoading(true);
        // Create a test image to check if URL is valid
        const testImage = new globalThis.Image();
        testImage.onload = () => {
          setIsValidImage(true);
          setIsLoading(false);
        };
        testImage.onerror = () => {
          setIsValidImage(false);
          setIsLoading(false);
        };
        testImage.src = newUrl;
      } else {
        setIsValidImage(false);
        setIsLoading(false);
      }
    };

    // Add listener
    if (imageInput) {
      imageInput.addEventListener("input", handleInputChange);
      // Initialize for initial value
      handleInputChange();
    }

    // Cleanup
    return () => {
      if (imageInput) {
        imageInput.removeEventListener("input", handleInputChange);
      }
    };
  }, [imageInputId]);

  return (
    <div>
      <p className="block text-sm font-medium text-gray-700 mb-2">
        Resim Önizleme
      </p>
      <div className="relative h-48 w-full bg-gray-100 rounded-md overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            Resim yükleniyor...
          </div>
        ) : isValidImage && imageUrl ? (
          <Image
            src={imageUrl}
            alt="Resim Önizleme"
            fill
            className="object-contain"
            unoptimized={true}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            {imageUrl ? "Geçersiz resim URL'i" : "Resim yok"}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
