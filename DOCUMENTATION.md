# API Documentation

This documentation provides information on how to use the API for uploading and retrieving transcribed videos.

## Base URL

The base URL for accessing the API is: https://chrome-extension-n13j.onrender.com/api

## API Endpoints

These are the endpoints

### Upload a Video

To upload a video, make a POST request to the `/api/upload` endpoint. You must include the `enctype="multipart/form-data"` property in your form, and an input name of `video`.

```html
<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="video" />
</form>
```

- **Endpoint:** `/api/upload`
- **HTTP Method**: `POST`
- **Description:** Upload a video file to be transcribed.

**Response:**
Status: 200 OK

```json
{
  "success": true,
  "message": "Video uploaded successfully",
  "public_id": "public_id_of_uploaded_video",
  "video_url": "URL_of_uploaded_video"
}
```

## Get Transcribed Video

To retrieve a transcribed video, make a GET request to the `/api/:public_id` endpoint, replacing `:public_id` with the actual public ID of the video. You will receive the transcribed video in an HTML embed code.

- **Endpoint:** `/api/:public_id`
- **HTTP Method:** `GET`
- **Description:** Retrieve the transcribed video for a given public ID.

**Response:**
Status: 200 OK

```json
{
  "success": true,
  "message": "Video retrieved successfully",
  "data": "HTML_embed_code_for_transcribed_video"
}
```

## Error Handling

If there is an error during the upload or retrieval process, you will receive an error response with a 500 Internal Server Error status code and an error message.
