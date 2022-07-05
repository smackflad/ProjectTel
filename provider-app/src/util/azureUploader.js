import { BlobServiceClient, CorsRule } from "@azure/storage-blob";
import { v4 } from "uuid";
// import { Buffer } from "buffer";

export default async function uploadImage(image, clientId) {
  try {
    const blobServiceClient = new BlobServiceClient(
      "https://projecttel.blob.core.windows.net/?sv=2021-06-08&ss=bf&srt=sco&sp=rwdlacitfx&se=2022-07-09T02:01:17Z&st=2022-07-05T18:01:17Z&spr=https,http&sig=tSbl3an8aeS1gezwyk2hMncCeblkcFXjV7iu4qJcvuI%3D"
    );
    const containerName = "customers";
    console.log("ok1 " + containerName);

    const containerClient = blobServiceClient.getContainerClient(containerName);
    console.log("ok2");
    await containerClient.createIfNotExists({ access: "container" });

    const bl = await fetch(image.b64).then((res) => res.blob());

    const blobName = "item-" + v4() + "." + bl.type.split("/")[1];
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.uploadData(bl);
    console.log(
      "Blob was uploaded successfully. requestId: ",
      uploadBlobResponse.requestId
    );
    const imageUrl = blockBlobClient.url;
    // console.log(imageUrl);
    return imageUrl;
  } catch (error) {
    console.error("Uploading..." + error.message);
  }
}
