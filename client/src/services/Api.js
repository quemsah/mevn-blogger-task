import axios from "axios";
export default () => {
  return axios.create({
    baseURL: "https://blogger-task-server.herokuapp.com/"
  });
};
