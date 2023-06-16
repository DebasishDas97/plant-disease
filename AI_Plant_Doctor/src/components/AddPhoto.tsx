import { ChangeEvent, useState } from "react";

export default function AddPhoto() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        setImage(imageDataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="plant-container">
      {image && <img src={image} alt="Uploaded" />}
      <div>
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {image && <button type="submit">Analyze</button>}
        </form>
      </div>
    </div>
  );
}
