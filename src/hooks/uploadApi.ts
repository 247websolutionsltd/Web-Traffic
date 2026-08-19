const BASE_URL = "http://192.168.1.6:500";
export const uploadProfileImage = async (
  asset: any,
  token: string
) => {
  try {
    console.log("ASSET:", asset);

    const formData = new FormData();

    formData.append("profileImage", {
      uri: asset.uri,
      name: asset.fileName || `profile-${Date.now()}.jpg`,
      type: asset.mimeType || "image/jpeg",
    } as any);

    console.log("ABOUT TO SEND REQUEST");
    console.log(
      "URL:",
      `${BASE_URL}/api/users/profile-image`
    );

    const response = await fetch(
      `${BASE_URL}/api/users/profile-image`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    console.log(
      "SERVER STATUS:",
      response.status
    );

    const data = await response.json();

    console.log("SERVER DATA:", data);

    if (!response.ok) {
      throw new Error(
        data.message || "Upload failed"
      );
    }

    return data;

  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    throw error;
  }
};