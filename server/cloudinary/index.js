import { v2 as cloudinary } from "cloudinary"
import dotenv from "dotenv"

dotenv.config()
cloudinary.config({ 
  cloud_name: 'dv3gzfjw3', 
  api_key: '294427963423952', 
  api_secret: 'n-6_ASuh9PyAzq8w3NBoudDLZsY' 
});

export default cloudinary
