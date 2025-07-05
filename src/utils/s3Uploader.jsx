// import React, { useState } from 'react';
// import AWS from 'aws-sdk';

// const S3UploadComponent = () => {
//   const [file, setFile] = useState(null);

//   // Configure AWS S3
//   AWS.config.update({
//     accessKeyId: import.meta.env.REACT_APP_AWS_ACCESS_KEY,
//     secretAccessKey: import.meta.env.REACT_APP_AWS_SECRET_KEY,
//     region: import.meta.env.REACT_APP_AWS_REGION,
//   });

//   const s3 = new AWS.S3();

//   const handleFileChange = async (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);

//     const fileName = selectedFile.name;
//     const fileType = selectedFile.type;

//     const params = {
//       Bucket: import.meta.env.REACT_APP_AWS_BUCKET_NAME,
//       Key: `profile-pictures/${fileName}`, // Define file path in S3
//       Body: selectedFile,
//       ContentType: fileType,
//       ACL: 'public-read', // Make the file publicly readable
//     };

//     // Upload file to S3
//     try {
//       const data = await s3.upload(params).promise();
//       console.log('File uploaded successfully:', data.Location); // S3 URL of the uploaded file
//       // Send the base64 string to your backend
//       const base64String = await getBase64(selectedFile);
//       // sendBase64ToBackend(base64String);
//       return base64String;
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   // Convert file to base64 string
//   const getBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result.split(',')[1]);
//       reader.onerror = (error) => reject(error);
//     });
//   };

//   // Send base64 string to your backend
//   const sendBase64ToBackend = async (base64String) => {
//     try {
//       const response = await fetch('https://your-backend-api-endpoint.com/upload', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           profilePicture: base64String,
//         }),
//       });
//       const data = await response.json();
//       console.log('Response from backend:', data);
//     } catch (error) {
//       console.error('Error sending base64 to backend:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       {file && <p>Selected file: {file.name}</p>}
//     </div>
//   );
// };

// export default S3UploadComponent;

// frontend/src/utils/uploadFileToS3.js
// import {
//   S3Client,
//   PutObjectCommand
// } from '@aws-sdk/client-s3';
// // import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity"; // Optional if using Cognito

// /**
//  * Convert file to base64
//  */
// const getBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result.split(',')[1]);
//     reader.onerror = (error) => reject(error);
//   });
// };

// /**
//  * Upload file to S3 using AWS SDK v3
//  */
// export const uploadFileToS3 = async (file, folder = '') => {
//   if (!file) return { location: null, base64String: null };

//   const region = import.meta.env.VITE_AWS_REGION;
//   const bucketName = import.meta.env.VITE_AWS_BUCKET_NAME;

  
//   if (!region) {
//     console.error("Missing AWS environment variables", region, bucketName);
//     return null;
//   }

//   const s3 = new S3Client({
//     region,
//     credentials: {
//       accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
//       secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
//     },
//   });

//   const fileName = `${folder}${Date.now()}_${file.name}`;
//   const uploadParams = {
//     Bucket: bucketName,
//     Key: fileName,
//     Body: file,
//     ContentType: file.type,
//     ACL: 'public-read', // Optional
//   };

//   try {
//     await s3.send(new PutObjectCommand(uploadParams));
//     const location = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
//     const base64String = await getBase64(file);
//     return { location, base64String };
//   } catch (err) {
//     console.error('S3 upload error:', err);
//     return { location: null, base64String: null };
//   }
// };

// import {
//   S3Client,
//   PutObjectCommand
// } from '@aws-sdk/client-s3';

// /**
//  * Convert file to base64 string
//  */
// const getBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       const base64String = reader.result.split(',')[1]; // Remove the data:image/...;base64, part
//       resolve(base64String);
//     };
//     reader.onerror = (error) => reject(error);
//   });
// };

// /**
//  * Upload file to S3 and return URL + base64 string
//  */
// export const uploadFileToS3 = async (file, folder = '') => {
//   if (!file) return { location: null, base64String: null };

//   const region = import.meta.env.VITE_AWS_REGION;
//   const bucketName = import.meta.env.VITE_AWS_BUCKET_NAME;
//   const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY;
//   const secretAccessKey = import.meta.env.VITE_AWS_SECRET_KEY;

//   if (!region || !bucketName || !accessKeyId || !secretAccessKey) {
//     console.error("Missing AWS environment variables", {
//       region,
//       bucketName,
//       accessKeyId,
//       secretAccessKey,
//     });
//     return { location: null, base64String: null };
//   }

//   const s3 = new S3Client({
//     region,
//     credentials: {
//       accessKeyId,
//       secretAccessKey,
//     },
//   });

//   const fileName = `${folder}${Date.now()}_${file.name}`;
//   const uploadParams = {
//     Bucket: bucketName,
//     Key: fileName,
//     Body: file,
//     ContentType: file.type,
//     ACL: 'public-read',
//   };

//   try {
//     await s3.send(new PutObjectCommand(uploadParams));
//     const location = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
//     const base64String = await getBase64(file);
//     return base64String ;
//   } catch (err) {
//     console.error('S3 upload error:', err);
//     return {base64String: null };
//   }
// };

//////////////////////////////////////////////////////////////////////////////////////////////
// import {
//   S3Client,
//   PutObjectCommand
// } from '@aws-sdk/client-s3';

// /**
//  * Convert file to base64 string
//  */
// const getBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       const base64String = reader.result.split(',')[1]; // Remove data:image/...;base64,
//       resolve(base64String);
//     };
//     reader.onerror = (error) => reject(error);
//   });
// };

// /**
//  * Upload file to S3 and return only base64 string
//  */
// export const uploadFileToS3 = async (file, folder = '') => {
//   if (!(file instanceof File)) {
//     console.error('Provided input is not a valid File object:', file);
//     return null;
//   }

//   const region = import.meta.env.VITE_AWS_REGION;
//   const bucketName = import.meta.env.VITE_AWS_BUCKET_NAME;
//   const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY;
//   const secretAccessKey = import.meta.env.VITE_AWS_SECRET_KEY;

//   if (!region || !bucketName || !accessKeyId || !secretAccessKey) {
//     console.error("Missing AWS environment variables", {
//       region,
//       bucketName,
//       accessKeyId,
//       secretAccessKey,
//     });
//     return null;
//   }

//   const s3 = new S3Client({
//     region,
//     credentials: {
//       accessKeyId,
//       secretAccessKey,
//     },
//   });

//   const fileName = `${folder}${Date.now()}_${file.name}`;

//   const uploadParams = {
//     Bucket: bucketName,
//     Key: fileName,
//     Body: file, // file is a proper File object
//     ContentType: file.type,
//   };

//   try {
//     await s3.send(new PutObjectCommand(uploadParams));
//     const base64String = await getBase64(file); // for DB storage
//     console.log(base64String);
//     console.log(typeof(base64String));
//     return {location,base64String};
//   } catch (err) {
//     console.error('S3 upload error:', err);
//     return {location:null,base64String:null};
//   }
// };

///////////////////////////////////////////////////////////////////////////////

import {
  S3Client,
  PutObjectCommand
} from '@aws-sdk/client-s3';

/**
 * Helper to read a File as a Uint8Array.
 * This is crucial for fixing the "readableStream.getReader is not a function" error,
 * as the AWS SDK's PutObjectCommand expects a compatible binary type in browser environments.
 */
const readFileAsUint8Array = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.result instanceof ArrayBuffer) {
                // Create a Uint8Array view over the ArrayBuffer
                resolve(new Uint8Array(reader.result));
            } else {
                reject(new Error("Failed to read file as ArrayBuffer or invalid result type"));
            }
        };
        reader.onerror = (error) => reject(error);
        reader.readAsArrayBuffer(file); // Read as ArrayBuffer first
    });
};

/**
 * Upload file to S3 and return its public URL (location).
 *
 * @param {File} file The File object to upload.
 * @param {string} folder Optional. The folder path within the S3 bucket (e.g., 'profile-images/').
 * If provided, ensure it ends with a '/' if you want a subfolder.
 * @returns {string | null} The S3 location URL, or null if the upload fails or prerequisites are missing.
 */
export const uploadFileToS3 = async (file, folder = '') => {
  // Input validation for the File object
  if (!(file instanceof File)) {
    console.error('Provided input is not a valid File object:', file);
    return null;
  }

  // Ensure folder path ends with '/' if it's not empty
  const folderPath = folder ? (folder.endsWith('/') ? folder : `${folder}/`) : '';

  // Retrieve AWS environment variables using process.env.REACT_APP_ prefix
  const region = process.env.REACT_APP_AWS_REGION;
  const bucketName = process.env.REACT_APP_AWS_BUCKET_NAME;
  const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY;
  const secretAccessKey = process.env.REACT_APP_AWS_SECRET_KEY;

  // Check for missing environment variables and provide specific error messages
  if (!region || !bucketName || !accessKeyId || !secretAccessKey) {
    console.error("Missing AWS environment variables for S3 upload. Please check your .env file.", {
      region,
      bucketName,
      accessKeyId: accessKeyId ? 'Set' : 'Not Set', // Don't log actual key for security
      secretAccessKey: secretAccessKey ? 'Set' : 'Not Set', // Don't log actual key for security
    });
    return null;
  }

  // Initialize S3 Client
  const s3 = new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  // Generate a unique file name to avoid collisions
  const fileName = `${folderPath}${Date.now()}_${file.name}`;

  try {
    // Read the file content into a Uint8Array, suitable for AWS SDK
    const fileContent = await readFileAsUint8Array(file);

    // Prepare the S3 PutObject command parameters
    const uploadParams = {
      Bucket: bucketName,
      Key: fileName,
      Body: fileContent, // Use the Uint8Array here
      ContentType: file.type, // Set the content type for S3
      // ACL: 'public-read', // Add this to ensure objects are publicly readable
    };

    // Send the upload command to S3
    await s3.send(new PutObjectCommand(uploadParams));

    // Construct the public URL of the uploaded object
    // Using a more robust way to construct the URL that generally works for S3 public objects
    const location = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;

    // Return only the location URL
    return location; // Return just the URL string
  } catch (err) {
    console.error('S3 upload error:', err);
    // Provide a more user-friendly error message if possible
    return null; // Return null on error
  }
};