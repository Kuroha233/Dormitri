import axios from "axios";
const url = 'http://localhost:4000/photo';

class PhotoService {

    static async getPhotoById(id) {
      const res = await axios.get(`${url}/postid`, {params: {"id": id}});
      try {
        const data = res.data
        console.log(data)
        return data
      } catch (err) {
        return err
      }
    }

    static insertPhoto(formData) {
      console.log(`${url}/profile`);
      console.log(formData+ " is formData");
      return axios.post(`${url}/profile`, formData);
    }

}

export default PhotoService;