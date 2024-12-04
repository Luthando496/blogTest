import React, { useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import axios from "axios";

const ImagePicker = ({setHandleImage,myData}) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null); // Store the uploaded image URL

  const cld = new Cloudinary({
    cloud: { cloudName: "dezmcxbye" }, // Replace with your Cloudinary cloud name
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);

      // Create a preview URL for the selected image
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleSubmit = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "my_preset"); // Replace with your Cloudinary unsigned upload preset
      formData.append("folder", "supabase_blog");

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/dezmcxbye/image/upload/`,
          formData
        );
        setUploadedImage(response.data.secure_url);
        setHandleImage(response.data.secure_url);
        console.log("Uploaded image:", response.data);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  // Create a transformed image object (if an uploaded image is available)
  const img = uploadedImage
    ? cld
        .image(uploadedImage.split("/").pop().split(".")[0]) // Extract public ID from uploaded URL
        .quality("auto")
        .resize(auto().gravity(autoGravity()).width(500).height(500))
    : null;

  return (
    <div className="flex flex-col gap-3">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && (
        <div>
          <h3>Preview:</h3>
          <img src={preview} alt="Selected" style={{ maxWidth: "300px" }} />
        </div>
      )}
      <button
        onClick={handleSubmit}
        className="text-2xl hover:translate-x-2 font-light tracking-[2px] p-3 my-5 text-white bg-lime-500 rounded-lg"
      >
        Submit Image
      </button>
      {img && (
        <div>
          <h3>Transformed Image:</h3>
          <AdvancedImage cldImg={img}  />
        </div>
      )}
    </div>
  );
};

export default ImagePicker;
