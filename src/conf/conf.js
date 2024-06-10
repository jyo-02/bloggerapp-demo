const conf = {
    appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appWriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appWriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    appWriteBucketId: String(import.meta.env.VITE_BUCKET_ID),


}  // We're doing this to ensure that the environment variables are always in string format, to prevent the app from crashing

export default conf