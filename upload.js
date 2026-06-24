async function uploadImage() {

    const file = document.getElementById("image").files[0];
    const folder = document.getElementById("folder").value;

    if (!file) {
        alert("Please select an image");
        return;
    }

    document.getElementById("status").innerText = "Uploading...";

    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "furniture_upload");
    data.append("folder", folder);

    try {

        const response = await fetch(
            "https://api.cloudinary.com/v1_1/dpjjdrjh2/image/upload",
            {
                method: "POST",
                body: data
            }
        );

        const result = await response.json();

        if (result.secure_url) {
            document.getElementById("status").innerHTML =
                "✅ Upload Successful";
        } else {
            document.getElementById("status").innerHTML =
                "❌ Upload Failed";
        }

    } catch (error) {

        document.getElementById("status").innerHTML =
            "❌ Error uploading image";

        console.log(error);

    }

}